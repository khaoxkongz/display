import Image from "next/image"
import { ShoppingBag, Star, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"

export function TourDetails() {
  return (
    <div className="space-y-6 py-4">
      <div className="text-3xl font-bold">โฮโลกโปรแกรมทัวร์</div>

      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 fill-current" />
        <span className="font-bold">พิเศษ:</span>
        <span>พัก 5 ดาว</span>
      </div>

      <div className="flex items-start gap-2">
        <div className="mt-1 flex-shrink-0">
          <Image
            src="/placeholder.svg?height=24&width=24"
            width={24}
            height={24}
            alt="Camera icon"
          />
        </div>
        <div>
          <span className="font-bold">เที่ยว:</span>
          <span className="text-sm">
            จูไห่-อนุสรณ์สถาน ดร.ซุนยัดเซ็น-จูไห่ ฟิชเชอร์
            เกิร์ล-โรงละครทอยไข่มุก-วัดอาม่า-วิหารเซนต์ปอล-วัดกวนไท
            เซนาโด้สแควร์-ปารีเซียน-เวเนเซี่ยน
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div className="mt-1 flex-shrink-0">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div>
          <span className="font-bold">ช้อป:</span>
          <span className="text-sm">
            ตลาดกงเป่ย-ถนนคนเดินฟู่หวังลี่-ร้าน POP MART-PONTO SQUARE
          </span>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div className="mt-1 flex-shrink-0">
          <Utensils className="h-5 w-5" />
        </div>
        <div>
          <span className="font-bold">กิน:</span>
          <span className="text-sm">เป่าฮื้อ+ไวน์แดง</span>
        </div>
      </div>

      <Button className="text-background bg-linear-to-b from-red-500 to-red-700 bg-[length:100%_100%] bg-[bottom] inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]">
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
          className="mr-2 h-5 w-5"
        >
          <path d="m21 15-9-9-9 9"></path>
          <path d="M21 21H3"></path>
        </svg>
        ดาวน์โหลดโปรแกรมทัวร์
      </Button>
    </div>
  )
}
