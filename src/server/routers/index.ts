// import { z } from 'zod';
import { procedure, router } from "../trpc";
import { helloRouter } from "./hello";

export const appRouter = router({
  greeting: procedure.query(({ input }) => {
    return {
      greeting: `Greetings from tRPC...`,
    };
  }),

  hello: helloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
