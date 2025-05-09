"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PriceSummary } from "@/modules/booking/components/ui/PriceSummary"
import { StepIndicator } from "@/modules/booking/components/ui/StepIndicator"
import { useBooking } from "@/modules/booking/hooks/BookingContext"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Step2() {
  const router = useRouter()
  const { bookingData, updateBookingData } = useBooking()
  const [firstName, setFirstName] = useState(bookingData.firstName || "")
  const [lastName, setLastName] = useState(bookingData.lastName || "")
  const [phone, setPhone] = useState(bookingData.phone || "")
  const [email, setEmail] = useState(bookingData.email || "")
  const [additionalInfo, setAdditionalInfo] = useState(
    bookingData.additionalInfo || ""
  )
  const [acceptTerms, setAcceptTerms] = useState(
    bookingData.acceptTerms || false
  )

  const handleContinue = () => {
    updateBookingData({
      firstName,
      lastName,
      phone,
      email,
      additionalInfo,
      acceptTerms,
    })
    router.push("/booking/step-3")
  }

  const handleBack = () => {
    router.push("/booking/step-1")
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={2} />

      <div className="mt-6 sm:mt-8">
        <h1 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">
          ขั้นตอนที่ 2: ตรวจสอบรายละเอียดทัวร์และกรอกข้อมูลผู้จอง
        </h1>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <PriceSummary />

            <div className="mt-6 rounded-md border bg-gray-50 p-4 sm:mt-8 sm:p-6">
              <div className="flex items-start sm:items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:h-10 sm:w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="text-base font-semibold sm:text-lg">
                    ให้เราช่วยคุณนะ
                  </h3>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    ยินดีตอบทุกคำถาม จันทร์-ศุกร์ 9.00น.-19.00น. และ
                    เสาร์-อาทิตย์ 9.00น.-18.00น. โทรหาเลย
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid gap-4 sm:gap-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm">ชื่อ:</label>
                  <Input
                    type="text"
                    placeholder="ชื่อ"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="h-10"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    กรุณากรอกชื่อจริง
                  </p>
                </div>
                <div>
                  <label className="mb-1 block text-sm">นามสกุล:</label>
                  <Input
                    type="text"
                    placeholder="นามสกุล"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="h-10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm">หมายเลขโทรศัพท์:</label>
                <Input
                  type="tel"
                  placeholder="หมายเลขโทรศัพท์"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-10"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm">อีเมล์:</label>
                <Input
                  type="email"
                  placeholder="อีเมล์"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm">
                  ข้อมูลอื่นๆ: (ถ้ามี)
                </label>
                <Textarea
                  placeholder="ข้อมูลอื่นๆ (ถ้ามี)"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="h-24 sm:h-32"
                />
              </div>

              <div className="mt-2 flex items-start space-x-2 sm:mt-4">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-xs sm:text-sm">
                  ฉันยอมรับเงื่อนไขการจองเรียบร้อยแล้วและยอมรับในเงื่อนไขนี้{" "}
                  <a href="#" className="text-teal-500 hover:underline">
                    Terms & Agreements
                  </a>
                </Label>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-3 sm:mt-8 sm:flex-row sm:gap-0">
              <Button
                onClick={handleBack}
                variant="outline"
                className="order-2 rounded-md px-4 py-2 sm:order-1 sm:px-6"
              >
                ย้อนกลับไป
              </Button>

              <Button
                onClick={handleContinue}
                className="order-1 rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 sm:order-2 sm:px-6"
                disabled={
                  !firstName || !lastName || !phone || !email || !acceptTerms
                }
              >
                ส่งคำสั่งจอง
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
