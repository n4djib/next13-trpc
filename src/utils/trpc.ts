// tRPC hooks

import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "../server/routers";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           **/
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/trpc`,
          // url: `http://localhost:3000/api/trpc`,
        }),
      ],
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  ssr: false,
});
