"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ChevronDown,
  Heart,
  Hotel,
  MapPin,
  ShoppingBag,
  Star,
  Utensils,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export type PackageCardProps = {
  id: string
  title: string
  image: string
  code: string
  duration: string
  airline: {
    name: string
    logo: string
    color: string
  }
  hotelRating: number
  specialFeatures: string
  attractions: string
  shopping: string
  dining: string
  accommodation: string
  dates: Array<{
    month: string
    monthAbbr: string
    ranges: Array<{
      range: string
      availability: number // 0-4 dots
      isHighSeason?: boolean
    }>
  }>
  price: number
}

const defaultPackage: PackageCardProps = {
  id: "1",
  title:
    "ทัวร์จีน เฉิงตู ภูเขาสี่ดรุณี อุทยานหวงหลง อุทยานจิ่วจ้ายโกว หุบเขาซวงเฉียวโกว แพนด้ายักษ์ปิ่นศึก ไม่เข้าร้านรัฐบาล",
  image: "/placeholder.svg?height=200&width=300",
  code: "MUSH245087",
  duration: "6วัน 5คืน",
  airline: {
    name: "Spring Airlines",
    logo: "/placeholder.svg?height=24&width=24",
    color: "green",
  },
  hotelRating: 4,
  specialFeatures: "ไม่เข้าร้านรัฐบาล-นั่งรถไฟความเร็วสูง",
  attractions:
    "ภูเขาสี่ดรุณี-หุบเขาซวงเฉียวโกว-น้ำเสี่ยน-พระเลสาบเตี๋อซี-อุทยานหวงหลง-อุทยานแห่งชาติจิ่วจ้ายโกว-หมู่บ้านชูเจียว-วัดต้าเฉือ-หมีแพนด้ายักษ์ปิ่นศึก IFS",
  shopping: "ถนนไท่ผู่ซี-ถนนชุนซีลู่",
  dining: "บุฟเฟต์สุกี้หม่าล่า",
  accommodation: "พัก 4 ดาวทุกคืน",
  dates: [
    {
      month: "เมษายน",
      monthAbbr: "เม.ย.",
      ranges: [
        { range: "2-6", availability: 2 },
        { range: "9-13", availability: 2 },
        { range: "16-20", availability: 3, isHighSeason: true },
        { range: "23-27", availability: 2 },
        { range: "30-4พ.ค.", availability: 3, isHighSeason: true },
      ],
    },
    {
      month: "พฤษภาคม",
      monthAbbr: "พ.ค.",
      ranges: [{ range: "7-11", availability: 2 }],
    },
    {
      month: "มิถุนายน",
      monthAbbr: "มิ.ย.",
      ranges: [
        { range: "10-14", availability: 2 },
        { range: "17-21", availability: 2 },
        { range: "24-28", availability: 2 },
      ],
    },
    {
      month: "กรกฎาคม",
      monthAbbr: "ก.ค.",
      ranges: [
        { range: "1-5", availability: 2 },
        { range: "8-12", availability: 2 },
        { range: "15-19", availability: 2 },
        { range: "22-26", availability: 3, isHighSeason: true },
        { range: "29-2พ.ย.", availability: 2 },
      ],
    },
    {
      month: "พฤศจิกายน",
      monthAbbr: "พ.ย.",
      ranges: [
        { range: "5-9", availability: 2 },
        { range: "12-16", availability: 2 },
        { range: "19-23", availability: 2 },
        { range: "26-30", availability: 2 },
      ],
    },
    {
      month: "ธันวาคม",
      monthAbbr: "ธ.ค.",
      ranges: [
        { range: "3-7", availability: 3, isHighSeason: true },
        { range: "10-14", availability: 3, isHighSeason: true },
        { range: "17-21", availability: 2 },
        { range: "24-28", availability: 2 },
        { range: "31-4ม.ค.", availability: 4, isHighSeason: true },
      ],
    },
  ],
  price: 24899,
}

export function PackageCard({
  packageData = defaultPackage,
}: {
  packageData?: PackageCardProps
}) {
  const [showAllDates, setShowAllDates] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-background mb-6 overflow-hidden rounded-md">
      <div className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative w-full md:w-1/3">
            <Button
              variant="ghost"
              className="bg-background absolute top-2 right-2 z-10 h-8 w-8 rounded-full p-0"
              aria-label="Add to favorites"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  isFavorite
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground"
                )}
              />
            </Button>
            <Image
              src={packageData.image || "/placeholder.svg"}
              alt={packageData.title}
              width={300}
              height={200}
              className="h-auto w-full rounded-md object-contain"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold">{packageData.title}</h2>

            <div className="grid grid-cols-2 gap-4 py-4 md:grid-cols-4">
              <div className="text-center">
                <div className="text-muted-foreground text-xs">รหัสทัวร์</div>
                <div className="font-medium text-red-500">
                  {packageData.code}
                </div>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground text-xs">จำนวนวัน</div>
                <div>{packageData.duration}</div>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground text-xs">สายการบิน</div>
                <div className="flex justify-center">
                  <div
                    className={`h-6 w-6 text-${packageData.airline.color}-500`}
                  >
                    <Image
                      src={packageData.airline.logo || "/placeholder.svg"}
                      alt={packageData.airline.name}
                      width={24}
                      height={24}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-muted-foreground text-xs">โรงแรม</div>
                <div className="flex justify-center">
                  {Array.from({ length: packageData.hotelRating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">พิเศษ:</span>{" "}
                  <span className="text-muted-foreground">
                    {packageData.specialFeatures}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">เที่ยว:</span>{" "}
                  <span className="text-muted-foreground">
                    {packageData.attractions}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShoppingBag className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">ช้อป:</span>{" "}
                  <span className="text-muted-foreground">
                    {packageData.shopping}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Utensils className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">กิน:</span>{" "}
                  <span className="text-muted-foreground">
                    {packageData.dining}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Hotel className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">พัก:</span>{" "}
                  <span className="text-muted-foreground">
                    {packageData.accommodation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <div className="relative">
            <div
              className={cn(
                "overflow-hidden transition-all duration-150",
                !showAllDates ? "max-h-16" : "max-h-screen"
              )}
            >
              {packageData.dates.map((monthData, monthIndex) => (
                <div key={monthIndex} className="border-b last:border-b-0">
                  <div className="flex items-center">
                    <div className="text-background flex h-5 w-10 items-center justify-center rounded-sm bg-[#1877f2] p-3 text-xs">
                      <span>{monthData.monthAbbr}</span>
                    </div>

                    <div className="grid flex-1 grid-cols-5 gap-0 divide-x">
                      {monthData.ranges.map((dateRange, rangeIndex) => (
                        <div
                          key={rangeIndex}
                          className="flex-1 p-3 text-center"
                        >
                          <div className="text-xs">{dateRange.range}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <div
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "flex h-auto cursor-pointer items-center p-0 text-red-500"
                )}
                onClick={() => setShowAllDates(!showAllDates)}
              >
                <span>
                  {showAllDates ? "ย้อนดูช่วงเวลา" : "แสดงช่วงเวลาทั้งหมด"}
                </span>
                <ChevronDown
                  className={cn(
                    "ml-1 size-4 transition-transform",
                    showAllDates ? "rotate-180" : ""
                  )}
                />
              </div>
            </div>

            {!showAllDates && (
              <div className="to-background pointer-events-none absolute inset-0 z-10 h-16 bg-gradient-to-b from-transparent via-transparent" />
            )}
          </div>
        </div>
      </div>

      <div className="bg-muted flex flex-col items-end justify-end px-2 py-4 md:flex-row">
        <div className="flex items-center gap-4 pt-4 md:pt-0">
          <div className="inline-flex items-end gap-x-2 text-right">
            <div className="text-muted-foreground text-sm">เริ่ม</div>
            <div className="bg-linear-to-b from-red-500 via-red-600 to-red-700 bg-clip-text text-3xl font-bold text-transparent">
              {packageData.price.toLocaleString()}
            </div>
          </div>
          <Button className="text-background bg-linear-to-b from-red-500 via-red-600 to-red-700 bg-[length:100%_100%] bg-[bottom] inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]">
            ดูรายละเอียด →
          </Button>
        </div>
      </div>
    </div>
  )
}
