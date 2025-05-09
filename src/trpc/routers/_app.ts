import { tourStudiesRouter } from "@/modules/tours/studies/server/procedures"

import { createTRPCRouter } from "../init"

export const appRouter = createTRPCRouter({
  tourStudies: tourStudiesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
