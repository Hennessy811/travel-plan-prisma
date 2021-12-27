import React from "react"

import Head from "next/head"

import { trpc } from "@utils/trpc"

export default function Home() {
  const { data: users } = trpc.useQuery(["usersGetAll"])

  console.log(users)

  return (
    <div>
      <Head>
        <title>Next.js advanced start template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            tRPC, Prisma, PlanetScale"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl m-auto mt-12">
        <h1 className="text-2xl font-bold">Hello Next.js!</h1>
      </div>
    </div>
  )
}
