import { Suspense } from "react"
import { loadTourStudiesFilters } from "@/modules/tours/studies/hooks/search-params"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import type { SearchParams } from "nuqs/server"

import { FilterPanel } from "./components/filters/FilterPanel"
import { TourSectionSkeleton } from "./components/skeletons/TourSectionSkeleton"
import { TourHeader } from "./components/TourHeader"
import { TourList } from "./components/TourList"
import { TourPageHeader } from "./components/TourPageHeader"

export default async function TourPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const filters = await loadTourStudiesFilters(searchParams)

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    trpc.tourStudies.list.queryOptions({
      ...filters,
    })
  )

  return (
    <>
      <TourPageHeader />

      <div className="relative flex flex-col gap-6 md:flex-row">
        <FilterPanel />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<TourSectionSkeleton />}>
            <div className="w-full space-y-4 md:w-3/4">
              <TourHeader />
              <TourList />
            </div>
          </Suspense>
        </HydrationBoundary>
      </div>
    </>
  )
}
