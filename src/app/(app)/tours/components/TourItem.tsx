"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TourStudies } from "@/modules/tours/studies/types"
import {
  ArrowRightIcon,
  ChevronDownIcon,
  HeartIcon,
  SparkleIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function FavoriteButton({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean
  toggleFavorite: () => void
}) {
  return (
    <Button
      variant="ghost"
      className="bg-background absolute top-2 right-2 z-10 h-8 w-8 rounded-full p-0"
      aria-label="Add to favorites"
      onClick={toggleFavorite}
    >
      <HeartIcon
        className={cn(
          "h-5 w-5",
          isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
        )}
      />
    </Button>
  )
}

function TourImage({
  name,
  code,
  url,
  alt,
}: {
  name: string
  code: string
  url: string
  alt: string
}) {
  return (
    <Link title={name} href={`/tours/${code}`}>
      <Image
        src={url}
        alt={alt}
        width={300}
        height={200}
        className="h-auto w-full rounded-md object-contain"
      />
    </Link>
  )
}

function TourInfo({
  name,
  code,
  duration,
  university,
}: {
  name: TourStudies["name"]
  code: TourStudies["code"]
  duration: TourStudies["duration"]
  university: TourStudies["university"]
}) {
  return (
    <>
      <Link title={name} href={`/tours/${code}`} className="text-xl font-bold">
        <h2>{name}</h2>
      </Link>

      <div className="divide-border grid grid-cols-3 gap-px divide-x py-4">
        <div className="text-center">
          <div className="text-muted-foreground text-xs">รหัสทัวร์</div>
          <div className="font-medium text-red-500">{code}</div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground text-xs">มหาลัย</div>
          <div className="font-medium text-red-500 uppercase">
            {university?.code}
          </div>
        </div>

        <div className="text-center">
          <div className="text-muted-foreground text-xs">จำนวนวัน</div>
          <div>{duration}</div>
        </div>
      </div>
    </>
  )
}

function DetailItem({
  icon,
  label,
  content,
}: {
  icon: React.ReactNode
  label: string
  content: string | undefined
}) {
  return (
    <div className="flex items-start gap-2">
      <div>{icon}</div>
      <div className="space-x-px text-sm">
        <span className="font-medium">{label}</span>
        <span>:</span>
        <span className="text-muted-foreground">{content}</span>
      </div>
    </div>
  )
}

function TourDetails({ content }: { content: string | undefined }) {
  return (
    <div className="space-y-3">
      <DetailItem
        icon={<SparkleIcon className="mt-0.5 size-4" />}
        label="ไฮไลท์"
        content={content}
      />
    </div>
  )
}

function TourDates({
  departureDates,
  showAllDates,
  toggleShowAllDates,
}: {
  departureDates: TourStudies["departureDates"]
  showAllDates: boolean
  toggleShowAllDates: () => void
}) {
  const sortedDates = [...(departureDates || [])].sort(
    (a, b) =>
      new Date(a.startDate || 0).getTime() -
      new Date(b.startDate || 0).getTime()
  )

  return (
    <div className="pt-4">
      <div className="relative">
        <div
          className={cn(
            "overflow-hidden transition-all duration-150",
            !showAllDates ? "max-h-16" : "max-h-screen"
          )}
        >
          {sortedDates.map((data, monthIndex) => (
            <div key={monthIndex} className="border-b last:border-b-0">
              <div className="flex items-center">
                <div className="text-background flex h-5 w-10 items-center justify-center rounded-sm bg-[#1877f2] p-3 text-xs">
                  <span>
                    {new Intl.DateTimeFormat("th-TH", {
                      month: "short",
                      timeZone: "Asia/Bangkok",
                    }).format(new Date(data.startDate || 0))}
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-0 divide-x">
                  <div className="flex-1 p-3 text-center">
                    <div className="text-xs">
                      {new Intl.DateTimeFormat("th-TH", {
                        day: "2-digit",
                      }).format(new Date(data.startDate || 0))}{" "}
                      -{" "}
                      {new Intl.DateTimeFormat("th-TH", {
                        day: "2-digit",
                      }).format(new Date(data.endDate || 0))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <DatesToggleButton
          showAllDates={showAllDates}
          toggleShowAllDates={toggleShowAllDates}
        />

        {!showAllDates && (
          <div className="to-background pointer-events-none absolute inset-0 z-10 h-16 bg-gradient-to-b from-transparent via-transparent" />
        )}
      </div>
    </div>
  )
}

function DatesToggleButton({
  showAllDates,
  toggleShowAllDates,
}: {
  showAllDates: boolean
  toggleShowAllDates: () => void
}) {
  return (
    <div className="flex justify-end pt-4">
      <div
        className={cn(
          buttonVariants({ variant: "link" }),
          "flex h-auto cursor-pointer items-center p-0 text-red-500"
        )}
        onClick={toggleShowAllDates}
      >
        <span>{showAllDates ? "ย้อนดูช่วงเวลา" : "แสดงช่วงเวลาทั้งหมด"}</span>
        <ChevronDownIcon
          className={cn(
            "ml-1 size-4 transition-transform",
            showAllDates ? "rotate-180" : ""
          )}
        />
      </div>
    </div>
  )
}

function TourFooter({
  price,
  code,
  name,
}: {
  price: TourStudies["basePrice"]
  code: string
  name: string
}) {
  return (
    <div className="bg-muted flex flex-col items-end justify-end px-2 py-4 md:flex-row">
      <div className="flex items-center gap-4 pt-4 md:pt-0">
        <div className="inline-flex items-end gap-x-2 text-right">
          <div className="text-muted-foreground text-sm">เริ่ม</div>
          <div className="bg-linear-to-b from-red-500 via-red-600 to-red-700 bg-clip-text text-3xl font-bold text-transparent">
            {price?.toLocaleString()}
          </div>
        </div>

        <Button
          asChild
          className="text-background bg-linear-to-b from-red-500 via-red-600 to-red-700 bg-[length:100%_100%] bg-[bottom] inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]"
        >
          <Link title={name} href={`/tours/${code}`}>
            <span>ดูรายละเอียด</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function TourItem({ tour }: { tour: TourStudies }) {
  const [showAllDates, setShowAllDates] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-background overflow-hidden rounded-md max-sm:border">
      <div className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative w-full md:w-1/3">
            <FavoriteButton
              isFavorite={isFavorite}
              toggleFavorite={() => setIsFavorite(!isFavorite)}
            />
            <TourImage
              name={tour.name}
              code={tour.code}
              url={tour.image?.url || "/images/placeholder.png"}
              alt={tour.image?.alt || "Tour Image"}
            />
          </div>

          <div className="w-full md:w-2/3">
            <TourInfo
              name={tour.name}
              code={tour.code}
              duration={tour.duration}
              university={tour.university}
            />

            <TourDetails
              content={tour.highlights?.reduce(
                (acc, prev) => acc + "-" + prev.highlight,
                ""
              )}
            />
          </div>
        </div>

        <TourDates
          departureDates={tour.departureDates}
          showAllDates={showAllDates}
          toggleShowAllDates={() => setShowAllDates(!showAllDates)}
        />
      </div>

      <TourFooter price={tour.basePrice} code={tour.code} name={tour.name} />
    </div>
  )
}

export { TourItem }
