"use client"

import { useTourStudiesFilters } from "@/modules/tours/studies/hooks/use-tour-studies-filters"
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

import { buttonVariants } from "@/components/ui/button"

function TourHeader() {
  const [filters, setFilters] = useTourStudiesFilters()

  const trpc = useTRPC()
  const { data } = useSuspenseQuery(
    trpc.tourStudies.count.queryOptions({
      ...filters,
    })
  )

  return (
    <div className="flex flex-col items-start justify-between max-sm:items-center sm:items-center md:flex-row">
      <h1 className="text-2xl font-bold">
        ทัวร์จีน{" "}
        <span className="text-muted-foreground font-normal">
          ({data.count} รายการ)
        </span>
      </h1>

      <div className="hidden items-center gap-2 md:flex">
        <div className="font-semibold">เรียงตาม:</div>
        <div
          data-active={filters.sort === "popular"}
          onClick={() => setFilters({ ...filters, sort: "popular" })}
          className={buttonVariants({
            size: "sm",
            variant: "link",
            className:
              "cursor-pointer px-px! data-[active=true]:text-red-500 data-[active=true]:underline",
          })}
        >
          ทัวร์แนะนำ
        </div>
        <div
          data-active={filters.sort === "time"}
          onClick={() => setFilters({ ...filters, sort: "time" })}
          className={buttonVariants({
            size: "sm",
            variant: "link",
            className:
              "cursor-pointer px-px! data-[active=true]:text-red-500 data-[active=true]:underline",
          })}
        >
          ช่วงเวลา
        </div>
        <div
          data-active={filters.sort === "price"}
          onClick={() => setFilters({ ...filters, sort: "price" })}
          className={buttonVariants({
            size: "sm",
            variant: "link",
            className:
              "cursor-pointer px-px! data-[active=true]:text-red-500 data-[active=true]:underline",
          })}
        >
          ราคา
        </div>
      </div>
    </div>
  )
}

export { TourHeader }
