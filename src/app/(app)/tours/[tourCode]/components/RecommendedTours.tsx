"use client"

import Image from "next/image"
import { TourStudy } from "@/modules/tours/studies/types"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

function TourCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <Image
        src={src}
        width={400}
        height={200}
        alt={alt}
        className="h-auto w-full object-contain"
      />
    </div>
  )
}

function TourCardDetailsGrid({
  code,
  duration,
  university,
}: {
  code: TourStudy["code"]
  duration: TourStudy["duration"]
  university: TourStudy["university"]
}) {
  return (
    <div className="divide-border grid grid-cols-3 divide-x">
      <div className="px-px text-center">
        <div className="text-muted-foreground text-xs">จำนวนวัน</div>
        <div className="text-xs font-bold">{duration}</div>
      </div>
      <div className="px-px text-center">
        <div className="text-muted-foreground text-xs">มหาลัย</div>
        <div className="text-xs uppercase">{university?.code}</div>
      </div>
      <div className="px-px text-center">
        <div className="text-muted-foreground text-xs">รหัสทัวร์</div>
        <div className="text-xs">{code}</div>
      </div>
    </div>
  )
}

function TourCardDates({
  departureDates,
}: {
  departureDates: TourStudy["departureDates"]
}) {
  const datesByMonth = (departureDates || []).reduce(
    (acc, departure) => {
      const start = new Date(departure.startDate || "")
      const end = new Date(departure.endDate || "")

      const startMonth = start.toLocaleDateString("th-TH", { month: "short" })
      const startDay = start.toLocaleDateString("th-TH", { day: "numeric" })
      const endDay = end.toLocaleDateString("th-TH", { day: "numeric" })

      // Format the date string: show range if start/end dates differ
      let dateString = startDay
      // Check if dates are different (ignoring time part)
      if (start.toDateString() !== end.toDateString()) {
        // Optionally add end month if it differs? For simplicity, just days for now.
        // const endMonth = end.toLocaleDateString("th-TH", { month: "short" });
        // if (startMonth !== endMonth) { ... }
        dateString += `-${endDay}`
      }

      if (!acc[startMonth]) {
        acc[startMonth] = []
      }
      acc[startMonth].push({ rawStartDate: start, display: dateString })

      // Sort ranges within the month based on their start date
      acc[startMonth].sort(
        (a, b) => a.rawStartDate.getTime() - b.rawStartDate.getTime()
      )

      return acc
    },
    {} as Record<string, { rawStartDate: Date; display: string }[]>
  )

  const sortedMonths = Object.keys(datesByMonth)
    // Optional: Sort months chronologically if needed
    .sort((a, b) => {
      // A simple sort based on typical Thai month order might be needed
      // Or convert back to a date object based on the first entry to sort
      const monthAFirstDate = datesByMonth[a][0]?.rawStartDate
      const monthBFirstDate = datesByMonth[b][0]?.rawStartDate
      if (!monthAFirstDate || !monthBFirstDate) return 0 // Should not happen if arrays aren't empty
      return monthAFirstDate.getMonth() - monthBFirstDate.getMonth()
    })

  return (
    <div className="space-y-1">
      {sortedMonths.length > 0 ? (
        sortedMonths.map((month) => (
          <div key={month} className="flex items-start gap-1">
            <div className="text-background inline-block flex-shrink-0 bg-[#1877f2] px-1.5 py-px text-xs">
              {month}
            </div>
            <div className="flex flex-wrap gap-x-1">
              {datesByMonth[month].map((dateInfo, dayIdx) => (
                <div key={dayIdx} className="text-muted-foreground text-xs">
                  {dateInfo.display}
                  {dayIdx < datesByMonth[month].length - 1 ? (
                    <span className="ml-1">/</span>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-muted-foreground text-xs">No dates available</div>
      )}
    </div>
  )
}

function TourCardContent({
  name,
  duration,
  university,
  code,
  departureDates,
}: {
  name: TourStudy["name"]
  duration: TourStudy["duration"]
  university: TourStudy["university"]
  code: TourStudy["code"]
  departureDates: TourStudy["departureDates"]
}) {
  return (
    <div className="space-y-3 p-2">
      <h3 className="line-clamp-2 h-12 font-bold">{name}</h3>
      <TourCardDetailsGrid
        duration={duration}
        university={university}
        code={code}
      />
      <TourCardDates departureDates={departureDates} />
    </div>
  )
}

function TourCardFooter({ basePrice }: { basePrice: TourStudy["basePrice"] }) {
  return (
    <div className="bg-muted mt-auto flex items-center justify-between px-2 py-2.5">
      <div className="flex items-end gap-x-2">
        <div className="text-muted-foreground pb-1 text-sm">เริ่มต้น</div>
        <div className="text-2xl font-bold text-red-500">{basePrice}</div>
      </div>
      <Button className="text-background bg-linear-to-b from-red-500 to-red-700 bg-[length:100%_100%] bg-[bottom] inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]">
        <span>ดูรายละเอียด</span>
        <ArrowRightIcon />
      </Button>
    </div>
  )
}

function TourCard({ tour }: { tour: TourStudy }) {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-lg border">
      <TourCardImage
        src={tour.image.url || "/placeholder.svg"}
        alt={tour.image.alt || "Tour Image"}
      />
      <TourCardContent
        name={tour.name}
        code={tour.code}
        duration={tour.duration}
        university={tour.university}
        departureDates={tour.departureDates}
      />
      <TourCardFooter basePrice={tour.basePrice} />
    </div>
  )
}

function RecommendedTours() {
  const trpc = useTRPC()
  const { data } = useQuery(trpc.tourStudies.listReccommended.queryOptions())

  return (
    <div className="space-y-6 py-6">
      <div className="flex items-center gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold">โปรแกรมทัวร์ใกล้เคียง</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data?.docs.map((tour) => (
          <TourCard key={tour.id} tour={JSON.parse(JSON.stringify(tour))} />
        ))}
      </div>
    </div>
  )
}

export { RecommendedTours }
