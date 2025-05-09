"use client"

import { useTourStudiesFilters } from "@/modules/tours/studies/hooks/use-tour-studies-filters"
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

import { TourItem } from "./TourItem"

function TourList() {
  const [filters] = useTourStudiesFilters()

  const trpc = useTRPC()
  const { data } = useSuspenseQuery(
    trpc.tourStudies.list.queryOptions({
      ...filters,
    })
  )

  if (data.docs.length === 0) {
    return <div>ไม่พบรายการทัวร์ที่คุณค้นหา!</div>
  }

  return (
    <div className="space-y-4">
      {data.docs.map((tour) => {
        return <TourItem key={tour.id} tour={tour} />
      })}
    </div>
  )
}

export { TourList }
