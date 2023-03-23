"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { useState } from "react";

import { trpc } from "../utils/trpc/trpcAppDir";

// imported in useRQGlobalState
export const client = new QueryClient();

export function TrpcProvider({ children }: { children: React.ReactNode }) {
  // const [queryClient] = useState(() => new QueryClient());
  // const [queryClient] = useState(client);
  const [queryClient] = useState(() => client);

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        // loggerLink({
        //   enabled: () => true,
        // }),
        httpBatchLink({
          url: `http://localhost:3000/api/trpc`,
        }),
      ],
      // transformer: superjson,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
