import type { inferProcedureOutput } from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"

import { createContext } from "@backend/context"
import { appRouter, AppRouter } from "@backend/router"
// ℹ️ Type-only import:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */

// export const transformer = superjson;
/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
export type inferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["queries"]
> = inferProcedureOutput<AppRouter["_def"]["queries"][TRouteKey]>

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
})
