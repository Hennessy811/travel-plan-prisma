import * as trpc from "@trpc/server"
import { inferAsyncReturnType } from "@trpc/server"
import { getSession } from "next-auth/react"

import usersRouter from "./users"

// The app's context - is generated for each incoming request
export async function createContext(opts) {
  const user = await getSession()

  return {
    user,
  }
}
type Context = inferAsyncReturnType<typeof createContext>

export const appRouter = trpc.router<Context>().merge("users", usersRouter)

export type AppRouter = typeof appRouter
