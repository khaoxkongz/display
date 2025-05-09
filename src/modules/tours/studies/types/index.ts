import { AppRouter } from "@/trpc/routers/_app"
import { inferRouterOutputs } from "@trpc/server"

export type ListTourStudies =
  inferRouterOutputs<AppRouter>["tourStudies"]["list"]
export type TourStudies = ListTourStudies["docs"][number]
export type TourStudy = inferRouterOutputs<AppRouter>["tourStudies"]["get"]
