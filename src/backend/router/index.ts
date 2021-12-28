import createRouter from "@backend/createRouter"

import usersRouter from "./users"

export const appRouter = createRouter().merge("users.", usersRouter)

export type AppRouter = typeof appRouter
