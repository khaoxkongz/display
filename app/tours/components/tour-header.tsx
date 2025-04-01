"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TourHeader() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
        <h1 className="text-2xl font-bold">
          ทัวร์จีน{" "}
          <span className="text-muted-foreground font-normal">(539)</span>
        </h1>

        <div className="flex items-center pt-2 md:pt-0">
          <span className="text-muted-foreground mr-2">เรียงตาม:</span>
          <Tabs defaultValue="recommended">
            <TabsList className="h-auto bg-transparent p-0">
              <TabsTrigger
                value="recommended"
                className="h-auto rounded-none px-2 py-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
              >
                ทัวร์แนะนำ
              </TabsTrigger>
              <TabsTrigger
                value="price"
                className="h-auto rounded-none px-2 py-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
              >
                ราคา
              </TabsTrigger>
              <TabsTrigger
                value="time"
                className="h-auto rounded-none px-2 py-1 data-[state=active]:border-b-2 data-[state=active]:border-orange-500 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none"
              >
                ช่วงเวลา
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="border-t border-b py-8">
        <div className="relative">
          <div className="absolute -bottom-10 h-36 w-36">
            <Image
              src="/ember-walking-left.png"
              alt="Mascot"
              width={1536}
              height={1024}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="ml-16 flex items-center rounded-lg bg-red-100 p-3 pl-10">
            <h2 className="text-lg font-medium">ตะลุยดินแดนมังกร</h2>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "space-y-4 overflow-hidden transition-all duration-150",
            expanded ? "max-h-screen" : "max-h-20"
          )}
        >
          <div>
            <p>{`ทัวร์จีนราคาประหยัด > ลงร้านช้อป, ไม่รวมทัวร์เสริม , มีวันเที่ยวอิสระ`}</p>
            <div>
              <p>{`ทัวร์จีนคุ้มค่า > ไม่ลงร้าน, ราคารวมทุกอย่าง , จัดเที่ยวทุกวัน`}</p>
            </div>
          </div>

          <div className="text-muted-foreground text-sm">
            เลือกตามสไตล์ที่ชอบได้เลยนะคะ หรือสอบถามเพิ่มเติมทาง Line ได้ค่ะ
          </div>
        </div>

        <div className="py-4 text-center">
          <button
            className="relative flex w-full items-center justify-center text-sm font-medium"
            onClick={() => setExpanded(!expanded)}
          >
            <span className="bg-background relative z-10 px-4">
              {expanded ? "ซ่อน" : "อ่านต่อ"}
            </span>
            <div className="bg-border absolute top-1/2 h-px w-full -translate-y-1/2" />
          </button>
        </div>

        {!expanded && (
          <div className="to-background pointer-events-none absolute inset-0 z-10 h-24 bg-gradient-to-b from-transparent via-transparent" />
        )}
      </div>
    </div>
  )
}
