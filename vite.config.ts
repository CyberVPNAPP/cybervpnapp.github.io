import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    // Keep newest lines (from end) that fit within 60% of maxSize
    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore trim errors */
  }
}

function getLogPath(source: LogSource): string {
  return path.join(LOG_DIR, `${source}.log`);
}

function appendLog(source: LogSource, message: string) {
  ensureLogDir();
  const logPath = getLogPath(source);
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${message}\n`;

  try {
    fs.appendFileSync(logPath, logLine, "utf-8");
    trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
  } catch {
    /* ignore write errors */
  }
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",
    apply: "serve",
    transformIndexHtml: {
      order: "post",
      handler(html: string) {
        const debugScript = `
<script>
  window.__MANUS_DEBUG__ = {
    logs: [],
    requests: [],
    events: [],
  };
  
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  
  function formatLog(...args) {
    return args.map(arg => {
      if (typeof arg === 'object') {
        try { return JSON.stringify(arg); } catch { return String(arg); }
      }
      return String(arg);
    }).join(' ');
  }
  
  console.log = function(...args) {
    originalLog.apply(console, args);
    const msg = formatLog(...args);
    window.__MANUS_DEBUG__.logs.push({ level: 'log', msg, time: new Date().toISOString() });
    navigator.sendBeacon('/api/debug/log', JSON.stringify({ level: 'log', msg }));
  };
  
  console.warn = function(...args) {
    originalWarn.apply(console, args);
    const msg = formatLog(...args);
    window.__MANUS_DEBUG__.logs.push({ level: 'warn', msg, time: new Date().toISOString() });
    navigator.sendBeacon('/api/debug/log', JSON.stringify({ level: 'warn', msg }));
  };
  
  console.error = function(...args) {
    originalError.apply(console, args);
    const msg = formatLog(...args);
    window.__MANUS_DEBUG__.logs.push({ level: 'error', msg, time: new Date().toISOString() });
    navigator.sendBeacon('/api/debug/log', JSON.stringify({ level: 'error', msg }));
  };
  
  window.addEventListener('error', (event) => {
    const msg = \`\${event.message} at \${event.filename}:\${event.lineno}:\${event.colno}\`;
    window.__MANUS_DEBUG__.logs.push({ level: 'error', msg, time: new Date().toISOString() });
  });
  
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;
    const startTime = performance.now();
    return originalFetch.apply(this, args).then(response => {
      const duration = performance.now() - startTime;
      const status = response.status;
      window.__MANUS_DEBUG__.requests.push({ url, status, duration, time: new Date().toISOString() });
      return response;
    }).catch(error => {
      const duration = performance.now() - startTime;
      window.__MANUS_DEBUG__.requests.push({ url, error: error.message, duration, time: new Date().toISOString() });
      throw error;
    });
  };
</script>
        `;
        return html.replace("</head>", `${debugScript}</head>`);
      },
    },
  };
}

function jsxLocPlugin(): Plugin {
  return {
    name: "jsx-loc",
    transform(code: string, id: string) {
      if (!id.includes("node_modules") && (id.endsWith(".jsx") || id.endsWith(".tsx"))) {
        return code;
      }
    },
  };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  base: "/",
  build: {
    outDir: path.resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
