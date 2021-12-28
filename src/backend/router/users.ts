import { TRPCError } from "@trpc/server"

import createRouter from "@backend/createRouter"

const usersRouter = createRouter().query("me", {
  resolve: async ({ ctx }) => {
    const { user, prisma } = ctx
    if (!user) throw new TRPCError({ code: "UNAUTHORIZED" })

    try {
      const dbuser = await prisma.user.findUnique({
        where: { email: user.email },
      })
      return dbuser
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" })
    }
  },
})
// .mutation("Create", {
//   input: z.object({ name: z.string().min(3), email: z.string().email() }),
//   async resolve(req) {
//     return await prisma.user.create({
//       data: {
//         name: req.input.name,
//         email: req.input.email,
//       },
//     })
//   },
// })

export default usersRouter
