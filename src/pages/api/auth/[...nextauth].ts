import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials"

import { prisma } from "@backend/utils"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // EmailProvider({
    //   from: "mitia2022@gmail.com",
    // }),

    // ...add more providers here
  ],
})
