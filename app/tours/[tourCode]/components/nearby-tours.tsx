import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export function NearbyTours() {
  const tours = [
    {
      image: "/placeholder.svg?height=200&width=400",
      title:
        "ทัวร์จีน บินตรงวางเจียง เมืองโบราณฝูหู รงเจิ้น ภูเขาเจียวจาว ICE AND SNOW",
      days: "5วัน 4คืน",
      airline: "Thai Lion Air",
      price: "8,888",
      code: "MUSH251036",
    },
    {
      image: "/placeholder.svg?height=200&width=400",
      title:
        "ทัวร์จีน เซี่ยงไฮ้ ดิสนีย์แลนด์(เต็มวัน) หอไข่มุก หาดไว่ทาน ตึกตึ้นไม้ 1,000 ต้น ไม่เข้า",
      days: "5วัน 4คืน",
      airline: "China Eastern",
      price: "25,990",
      code: "MUSH244615",
    },
    {
      image: "/placeholder.svg?height=200&width=400",
      title:
        "ทัวร์จีน ฉงชิ่ง อู่หลง ตึกหยุ่งชิ่ง หมู่บ้านโบราณฉือชี่โข่ว อุทยานหลุมฟ้าสะพานสวรรค์",
      days: "6วัน 5คืน",
      airline: "Air China",
      price: "28,999",
      code: "MUSH244968",
    },
  ]

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
        <h2 className="text-2xl font-bold">
          คนที่ดูทัวร์นี้ยังดูทัวร์เหล่านี้อีกด้วย
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          วันจักรี
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          วันแรงงาน
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          วันวิสาขบูชา
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          วันสงกรานต์
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          วันอัฎฐมีบูชา
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          ทัวร์วันเฉลิมพระราชนี
        </button>
        <button className="bg-muted text-foreground rounded-full px-4 py-2 text-xs">
          ทัวร์วันตามงบประมาณ
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tours.map((tour, index) => (
          <div key={index} className="overflow-hidden rounded-lg border">
            <Image
              src={tour.image || "/placeholder.svg"}
              width={400}
              height={200}
              alt={tour.title}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-4 p-4">
              <h3 className="line-clamp-2 font-bold">{tour.title}</h3>

              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">จำนวนวัน</div>
                  <div className="font-bold">{tour.days}</div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">สายการบิน</div>
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    width={30}
                    height={30}
                    alt={tour.airline}
                    className="mx-auto"
                  />
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">โรงแรม</div>
                  <div className="flex justify-center">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">รหัสทัวร์</div>
                  <div className="text-xs">{tour.code}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="inline-block rounded-md bg-teal-100 px-2 py-1 text-sm text-teal-600">
                    เม.ย.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <div className="text-sm text-gray-600">
                          2-6 / 9-13 / 16-20 / 23-27 / 30-4 พ.ค.
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="text-sm text-gray-600">
                          3-7 / 11-15 / 13-17 / 14-18
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="text-sm text-gray-600">
                          1-6 / 8-13 / 10-15 / 12-17 / 13-18 / 14-19
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <div className="inline-block rounded-md bg-teal-100 px-2 py-1 text-sm text-teal-600">
                    พ.ค.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {index === 0 && (
                      <>
                        <div className="text-sm text-gray-600">
                          7-11 / 14-18 / 21-25
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="text-sm text-gray-600">
                          8-12 / 22-26
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="text-sm text-gray-600">20-25</div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="text-muted-foreground text-sm">เริ่มต้น</div>
                  <div className="text-2xl font-bold text-[#e67e43]">
                    {tour.price}
                  </div>
                </div>
                <Button className="bg-[#e67e43] text-white hover:bg-[#d06a33]">
                  ดูรายละเอียด →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
