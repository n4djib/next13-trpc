import { z } from "zod";
import { procedure, router } from "../trpc";

export const helloRouter = router({
  greet: procedure
    .input(z.object({ text: z.string() }).nullish())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.text ?? "World..."}`,
      };
    }),
});
