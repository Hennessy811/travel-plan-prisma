import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { getSession } from "next-auth/react"

import { prisma } from "./utils"

export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  const session = await getSession({ req })

  return {
    req,
    res,
    prisma,
    user: session?.user,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
