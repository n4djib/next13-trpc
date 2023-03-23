import { createTRPCReact } from "@trpc/react-query";
// import superjson from "superjson";
import type { AppRouter } from "../../trpc-server/routers";

export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn();
        await opts.queryClient.invalidateQueries();
      },
    },
  },
});
