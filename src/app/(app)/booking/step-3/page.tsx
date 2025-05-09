"use client"

import { useRouter } from "next/navigation"
import { PriceSummary } from "@/modules/booking/components/ui/PriceSummary"
import { StepIndicator } from "@/modules/booking/components/ui/StepIndicator"
import { Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Step3() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/booking/step-2")
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={3} />

      <div className="mt-6 sm:mt-8">
        <h1 className="mb-6 text-xl font-bold sm:mb-8 sm:text-2xl">
          ขั้นตอนที่ 3: ส่งคำสั่งจองทัวร์
        </h1>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <PriceSummary />
          </div>

          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl md:text-3xl">
                ขอบคุณที่ไว้วางใจ ใช้บริการทัวร์กับมัชรูมทราเวล
              </h2>
              <p className="mb-3 text-sm sm:mb-4 sm:text-base md:text-lg">
                เจ้าหน้าที่กำลังตรวจเช็คที่ว่าง จะรีบแจ้งให้ท่านทราบนะคะ
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                ขอบคุณที่ใช้บริการของทัวร์กับ MushroomTravel.com
              </p>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                บอกให้เพื่อนคุณรู้ว่าคุณได้จองทัวร์กับมัชรูมทราเวล
              </p>
            </div>

            <Button className="mx-auto flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 sm:px-6">
              <Facebook className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> แชร์บน
              <span>FACEBOOK</span>
            </Button>

            <div className="mt-8 sm:mt-12">
              <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
                เงื่อนไขการจองทัวร์ใน MushroomTravel.com
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-left text-xs sm:space-y-4 sm:pl-6 sm:text-sm">
                <li>
                  การจองผ่านหน้าเว็บไซต์ เป็นการส่งคำสั่งจองที่ยังไม่ยืนยัน
                  ทางบริษัท ฯ ที่ยังจะต้องไม่ได้รับการยืนยันการจอง และบริษัท ฯ
                  ได้รับชำระเงินค่ามัดจำทัวร์เรียบร้อยแล้ว
                </li>
                <li>ราคาและจำนวนที่นั่งอาจมีการเปลี่ยนแปลง</li>
              </ul>
            </div>

            <div className="mt-6 sm:mt-8">
              <Button
                onClick={handleBack}
                variant="outline"
                className="rounded-md px-4 py-2 sm:px-6"
              >
                ย้อนกลับไป
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
