import { createReactQueryHooks } from "@trpc/react"

import type { AppRouter } from "@backend/router"

const trpc = createReactQueryHooks<AppRouter>()
export default trpc
