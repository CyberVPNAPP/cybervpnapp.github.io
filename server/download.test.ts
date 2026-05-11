import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("download.windows", () => {
  it("returns download URL and file info with default filename", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.download.windows({});

    expect(result).toBeDefined();
    expect(result.url).toBe("https://files.manuscdn.com/user_upload_by_module/session_file/310519663646168487/PfEpDyMMhKNdBphm.exe");
    expect(result.fileName).toBe("Cyber VPN.exe");
    expect(result.size).toBe("61 KB");
  });

  it("returns download URL with custom filename", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.download.windows({ fileName: "CustomName.exe" });

    expect(result).toBeDefined();
    expect(result.url).toBe("https://files.manuscdn.com/user_upload_by_module/session_file/310519663646168487/PfEpDyMMhKNdBphm.exe");
    expect(result.fileName).toBe("CustomName.exe");
    expect(result.size).toBe("61 KB");
  });

  it("returns correct file size", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.download.windows({ fileName: "Cyber VPN.exe" });

    expect(result.size).toBe("61 KB");
  });
});
