"use client"

import { useState } from "react"
import { ChevronDown, Search, Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([8000, 93000])
  const [showAllHolidays, setShowAllHolidays] = useState(false)
  const [showAllDurations, setShowAllDurations] = useState(false)
  const [showAllAirlines, setShowAllAirlines] = useState(false)

  return (
    <div className="bg-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">กรองการค้นหา</h2>
        <div
          className={cn(
            buttonVariants({ variant: "link" }),
            "h-auto cursor-pointer p-0 text-red-500"
          )}
        >
          ล้างค่า
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-2 bg-gray-50 p-4">
        <h3 className="mb-6 font-medium">ช่วงราคา</h3>
        <div className="px-2">
          <Slider
            defaultValue={[8000, 93000]}
            min={0}
            max={100000}
            step={1000}
            onValueChange={(value) => setPriceRange(value as number[])}
            className="mb-2"
          />
          <div className="flex justify-between text-sm">
            <span>{priceRange[0].toLocaleString()} บาท</span>
            <span>{priceRange[1].toLocaleString()} บาท</span>
          </div>
        </div>
      </div>

      {/* Thai Holidays */}
      <div className="mb-2 bg-gray-50 p-4">
        <h3 className="mb-4 font-medium">ทัวร์วันหยุดตามเทศกาล</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="holiday1" />
              <label htmlFor="holiday1" className="text-sm">
                วันจักรี
              </label>
            </div>
            <span className="text-sm text-gray-500">(235)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="holiday2" />
              <label htmlFor="holiday2" className="text-sm">
                วันสงกรานต์
              </label>
            </div>
            <span className="text-sm text-gray-500">(351)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="holiday3" />
              <label htmlFor="holiday3" className="text-sm">
                วันแรงงาน
              </label>
            </div>
            <span className="text-sm text-gray-500">(122)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="holiday4" />
              <label htmlFor="holiday4" className="text-sm">
                วันวิสาขบูชา
              </label>
            </div>
            <span className="text-sm text-gray-500">(64)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="holiday5" />
              <label htmlFor="holiday5" className="text-sm">
                วันอาสาฬหบูชา
              </label>
            </div>
            <span className="text-sm text-gray-500">(230)</span>
          </div>

          {showAllHolidays && (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="holiday6" />
                  <label htmlFor="holiday6" className="text-sm">
                    วันเข้าพรรษา
                  </label>
                </div>
                <span className="text-sm text-gray-500">(180)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="holiday7" />
                  <label htmlFor="holiday7" className="text-sm">
                    วันแม่แห่งชาติ
                  </label>
                </div>
                <span className="text-sm text-gray-500">(210)</span>
              </div>
            </>
          )}

          <Button
            variant="link"
            className="flex h-auto items-center p-0 text-orange-500"
            onClick={() => setShowAllHolidays(!showAllHolidays)}
          >
            ดูทั้งหมด
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                showAllHolidays ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-2 bg-gray-50 p-4">
        <h3 className="mb-4 font-medium">เลือกจำนวนวัน</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration1" />
              <label htmlFor="duration1" className="text-sm">
                -115 วัน
              </label>
            </div>
            <span className="text-sm text-gray-500">(1)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration2" />
              <label htmlFor="duration2" className="text-sm">
                -1 วัน
              </label>
            </div>
            <span className="text-sm text-gray-500">(1)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration3" />
              <label htmlFor="duration3" className="text-sm">
                1 วัน
              </label>
            </div>
            <span className="text-sm text-gray-500">(1)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration4" />
              <label htmlFor="duration4" className="text-sm">
                2 วัน
              </label>
            </div>
            <span className="text-sm text-gray-500">(1)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration5" />
              <label htmlFor="duration5" className="text-sm">
                3 วัน
              </label>
            </div>
            <span className="text-sm text-gray-500">(4)</span>
          </div>

          {showAllDurations && (
            <>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration6" />
                  <label htmlFor="duration6" className="text-sm">
                    4 วัน
                  </label>
                </div>
                <span className="text-sm text-gray-500">(8)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="duration7" />
                  <label htmlFor="duration7" className="text-sm">
                    5 วัน
                  </label>
                </div>
                <span className="text-sm text-gray-500">(12)</span>
              </div>
            </>
          )}

          <Button
            variant="link"
            className="flex h-auto items-center p-0 text-orange-500"
            onClick={() => setShowAllDurations(!showAllDurations)}
          >
            ดูทั้งหมด
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                showAllDurations ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Airlines */}
      <div className="mb-2 bg-gray-50 p-4">
        <h3 className="mb-4 font-medium">สายการบิน</h3>
        <div className="relative mb-4">
          <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input placeholder="ใส่ชื่อสายการบิน..." className="bg-white pl-8" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="airline0" />
              <label htmlFor="airline0" className="text-sm"></label>
            </div>
            <span className="text-sm text-gray-500">(4)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="airline1" />
              <label htmlFor="airline1" className="flex items-center text-sm">
                <div className="mr-2 h-5 w-5 text-red-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                Sichuan Airlines
              </label>
            </div>
            <span className="text-sm text-gray-500">(11)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="airline2" />
              <label htmlFor="airline2" className="flex items-center text-sm">
                <div className="mr-2 h-5 w-5 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" />
                  </svg>
                </div>
                Lucky air
              </label>
            </div>
            <span className="text-sm text-gray-500">(13)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="airline3" />
              <label htmlFor="airline3" className="flex items-center text-sm">
                <div className="mr-2 h-5 w-5 text-green-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                Spring Airlines
              </label>
            </div>
            <span className="text-sm text-gray-500">(12)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="airline4" />
              <label htmlFor="airline4" className="flex items-center text-sm">
                <div className="mr-2 h-5 w-5 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                9 Air
              </label>
            </div>
            <span className="text-sm text-gray-500">(2)</span>
          </div>

          <Button
            variant="link"
            className="flex h-auto items-center p-0 text-orange-500"
            onClick={() => setShowAllAirlines(!showAllAirlines)}
          >
            แสดงสายการบินทั้งหมด
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                showAllAirlines ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Hotel Rating */}
      <div className="mb-2 bg-gray-50 p-4">
        <h3 className="mb-4 font-medium">ระดับดาวที่พัก</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="rating5" />
              <label htmlFor="rating5" className="flex text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </label>
            </div>
            <span className="text-sm text-gray-500">(88)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="rating4" />
              <label htmlFor="rating4" className="flex text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </label>
            </div>
            <span className="text-sm text-gray-500">(444)</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="rating3" />
              <label htmlFor="rating3" className="flex text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </label>
            </div>
            <span className="text-sm text-gray-500">(7)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
