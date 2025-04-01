"use client"

import { useState } from "react"
import { MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TourBookingWidget() {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)

  return (
    <div className="sticky top-4 rounded-lg bg-[#1877f2] p-4">
      <div className="bg-background rounded-lg p-4">
        <h3 className="text-xl font-bold">เลือกวันที่:</h3>
        <div className="rounded-md border p-3">
          <div className="flex items-center">
            <span>18 เม.ย. 68 - 20 เม.ย. 68</span>
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
              className="ml-auto h-4 w-4"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>

        <div>
          <div className="rounded-md border p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span>ผู้ใหญ่ 0 คน</span>
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
                  className="ml-2 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>

          <div className="rounded-md border p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span>เด็ก 0 คน</span>
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
                  className="ml-2 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">รวม</span>
          <span className="text-xl font-bold">0</span>
        </div>

        <Button className="text-background w-full bg-linear-to-b from-red-500 to-red-700 bg-[length:100%_100%] bg-[bottom] py-6 text-xl inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]">
          จองเดี๋ยวนี้
        </Button>

        <div className="border-t">
          <div className="flex items-center">
            <div className="mr-3 rounded-full bg-red-500 p-2">
              <Phone className="text-background h-5 w-5" />
            </div>
            <div>
              <div className="text-muted-foreground">โทรจองทัวร์นี้</div>
              <div className="text-xl font-bold text-red-500">02 105 6234</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-3 rounded-full bg-[#06c755] p-2">
              <MessageCircle className="text-background h-5 w-5" />
            </div>
            <div>
              <div className="text-muted-foreground">จองผ่านไลน์</div>
              <div className="text-xl font-bold">@mushroomtravel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
