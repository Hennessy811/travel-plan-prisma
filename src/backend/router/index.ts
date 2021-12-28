import createRouter from "@backend/createRouter"

import tripsRouter from "./trips"
import usersRouter from "./users"

export const appRouter = createRouter()
  .merge("users.", usersRouter)
  .merge("trips.", tripsRouter)

export type AppRouter = typeof appRouter
