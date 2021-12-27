import * as trpc from "@trpc/server"
import { z } from "zod"

import { prisma } from "@backend/utils"

const usersRouter = trpc
  .router()
  .query("GetAll", {
    input: () => {},
    resolve: async (req) => {
      console.log("req ", req.ctx)

      return await prisma.user.findMany()
    },
  })
  .mutation("Create", {
    input: z.object({ name: z.string().min(3), email: z.string().email() }),
    async resolve(req) {
      return await prisma.user.create({
        data: {
          name: req.input.name,
          email: req.input.email,
        },
      })
    },
  })

export default usersRouter
