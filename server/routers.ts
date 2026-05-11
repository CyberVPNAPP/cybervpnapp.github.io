import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Download proxy for Windows executable
  download: router({
    windows: publicProcedure
      .input(z.object({ fileName: z.string().optional() }).optional())
      .query(async ({ input }) => {
        // Proxy the file from CDN and return download URL
        const cdnUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663646168487/PfEpDyMMhKNdBphm.exe";
        const fileName = input?.fileName || "Cyber VPN.exe";
        
        return {
          url: cdnUrl,
          fileName,
          size: "61 KB"
        };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
