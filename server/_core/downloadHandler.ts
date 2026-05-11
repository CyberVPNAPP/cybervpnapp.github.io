import type { Express } from "express";

export function registerDownloadRoutes(app: Express) {
  // Windows executable download proxy
  app.get("/api/download/windows", async (req, res) => {
    try {
      const cdnUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663646168487/PfEpDyMMhKNdBphm.exe";
      
      // Fetch the file from CDN
      const response = await fetch(cdnUrl);
      
      if (!response.ok) {
        return res.status(response.status).json({ 
          error: `Failed to fetch from CDN: ${response.statusText}` 
        });
      }

      // Get content type and size
      const contentType = response.headers.get("content-type") || "application/octet-stream";
      const contentLength = response.headers.get("content-length");

      // Set response headers for file download
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", 'attachment; filename="Cyber VPN.exe"');
      if (contentLength) {
        res.setHeader("Content-Length", contentLength);
      }

      // Stream the file to the client
      if (response.body) {
        const reader = response.body.getReader();
        
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
          }
          res.end();
        } catch (error) {
          console.error("Error streaming download:", error);
          if (!res.headersSent) {
            res.status(500).json({ error: "Stream error" });
          } else {
            res.end();
          }
        }
      } else {
        res.status(500).json({ error: "No response body" });
      }
    } catch (error) {
      console.error("Download error:", error);
      if (!res.headersSent) {
        res.status(500).json({ 
          error: error instanceof Error ? error.message : "Download failed" 
        });
      }
    }
  });
}
