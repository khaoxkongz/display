"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { StepIndicator } from "@/modules/booking/components/ui/StepIndicator"
import { useBooking } from "@/modules/booking/hooks/BookingContext"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Step1() {
  const router = useRouter()
  const { bookingData, updateBookingData } = useBooking()
  const [adults, setAdults] = useState(bookingData.adults || "2")
  const [childrenWithBed, setChildrenWithBed] = useState(
    bookingData.childrenWithBed || "0"
  )
  const [childrenUnder3, setChildrenUnder3] = useState(
    bookingData.childrenUnder3 || "0"
  )
  const [childrenWithoutBed, setChildrenWithoutBed] = useState(
    bookingData.childrenWithoutBed || "0"
  )
  const [infantsWithoutBed, setInfantsWithoutBed] = useState(
    bookingData.infantsWithoutBed || "0"
  )

  const handleContinue = () => {
    updateBookingData({
      adults,
      childrenWithBed,
      childrenUnder3,
      childrenWithoutBed,
      infantsWithoutBed,
    })
    router.push("/booking/step-2")
  }

  // Calculate total price
  const adultPrice = 24990
  const totalPrice = Number.parseInt(adults) * adultPrice

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={1} />

      <div className="mt-6 sm:mt-8">
        <h1 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">
          ขั้นตอนที่ 1: ระบุวันที่และจำนวนผู้เดินทาง
        </h1>

        <div className="mb-6 sm:mb-8">
          <label className="mb-2 block text-sm sm:text-base">
            เลือกวันที่:
          </label>
          <div className="relative">
            <Select defaultValue="18 เม.ย. 68 - 23 เม.ย. 68">
              <SelectTrigger className="w-full sm:w-80">
                <SelectValue placeholder="เลือกวันที่" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18 เม.ย. 68 - 23 เม.ย. 68">
                  18 เม.ย. 68 - 23 เม.ย. 68
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <Table className="min-w-[640px]">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-[100px] py-3 text-left text-xs sm:text-sm">
                  จำนวน
                </TableHead>
                <TableHead className="py-3 text-left text-xs sm:text-sm">
                  ประเภทห้องพัก
                </TableHead>
                <TableHead className="py-3 text-right text-xs sm:text-sm">
                  ราคาต่อคน
                </TableHead>
                <TableHead className="py-3 text-right text-xs sm:text-sm">
                  รวมราคา
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="py-2 sm:py-3">
                  <Select value={adults} onValueChange={setAdults}>
                    <SelectTrigger className="w-16 sm:w-20">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-2 text-xs sm:py-3 sm:text-sm">
                  ผู้ใหญ่ [พักคู่]
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  24,990 บาท
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  {Number.parseInt(adults) > 0
                    ? `${Number.parseInt(adults) * adultPrice} บาท`
                    : "0 บาท"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2 sm:py-3">
                  <Select
                    value={childrenWithBed}
                    onValueChange={setChildrenWithBed}
                  >
                    <SelectTrigger className="w-16 sm:w-20">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-2 text-xs sm:py-3 sm:text-sm">
                  ผู้ใหญ่ [พักเดี่ยว]
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  29,990 บาท
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  0 บาท
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2 sm:py-3">
                  <Select
                    value={childrenUnder3}
                    onValueChange={setChildrenUnder3}
                  >
                    <SelectTrigger className="w-16 sm:w-20">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-2 text-xs sm:py-3 sm:text-sm">
                  ผู้ใหญ่ [พัก 3 คน]
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  24,990 บาท
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  0 บาท
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2 sm:py-3">
                  <Select
                    value={childrenWithoutBed}
                    onValueChange={setChildrenWithoutBed}
                  >
                    <SelectTrigger className="w-16 sm:w-20">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-2 text-xs sm:py-3 sm:text-sm">
                  เด็ก [มีเตียง]
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  26,990 บาท
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  0 บาท
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="py-2 sm:py-3">
                  <Select
                    value={infantsWithoutBed}
                    onValueChange={setInfantsWithoutBed}
                  >
                    <SelectTrigger className="w-16 sm:w-20">
                      <SelectValue placeholder="0" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="py-2 text-xs sm:py-3 sm:text-sm">
                  เด็ก [ไม่มีเตียง]
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  26,990 บาท
                </TableCell>
                <TableCell className="py-2 text-right text-xs sm:py-3 sm:text-sm">
                  0 บาท
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between border-t py-3 sm:mt-6 sm:flex-row sm:items-center sm:py-4">
          <div className="mb-2 text-sm sm:mb-0 sm:text-lg">
            {adults} ผู้ใหญ่, 0 เด็ก
          </div>
          <div className="text-lg font-bold sm:text-xl">
            {totalPrice.toLocaleString()} บาท
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-600 sm:mt-6 sm:text-sm">
          สอบถามเกี่ยวกับการจองทัวร์ โทร.{" "}
          <span className="text-teal-500">02 105 6234</span> ต่อ 1
        </div>

        <div className="mt-6 flex justify-end sm:mt-8">
          <Button
            onClick={handleContinue}
            className="flex w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 sm:w-auto sm:px-6"
          >
            ส่งคำสั่งจองทัวร์ <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
