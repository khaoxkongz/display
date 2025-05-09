import Image from "next/image"

import { Button } from "@/components/ui/button"

const tours = [
  {
    image: "/placeholder.svg?height=200&width=400",
    title: "ทัวร์ญี่ปุ่น มาเก๊า ญูฟุจิกันออส ซากุระอิวาตะ เดอะเวเนเซี่ยน นั่ง",
    days: "7วัน 5คืน",
    airline: "AIR MACAU",
    dates: [{ month: "พ.ค.", dates: ["14-20", "21-27", "28-3 มิ.ย."] }],
    price: "43,999",
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title:
      "ทัวร์ฮ่องกง มาเก๊า ให้พระ ขึ้นกระเช้านองปิง พระใหญ่เทียนถาน วัดแชกงหมิว วิหารเซนต์",
    days: "4วัน 3คืน",
    airline: "Emirates",
    dates: [
      { month: "เม.ย.", dates: ["5-8", "10-13", "24-27", "26-29"] },
      { month: "พ.ค.", dates: ["1-4", "2-5", "3-6"] },
    ],
    price: "22,900",
  },
  {
    image: "/placeholder.svg?height=200&width=400",
    title:
      "ทัวร์จีน บินตรงวางเจียง เมืองโบราณฝูหู รงเจิ้น ภูเขาเจียวจาว ICE AND SNOW",
    days: "5วัน 4คืน",
    airline: "Thai Lion Air",
    dates: [
      {
        month: "เม.ย.",
        dates: ["2-6", "9-13", "16-20", "23-27", "30-4 พ.ค."],
      },
      { month: "พ.ค.", dates: ["7-11", "14-18", "21-25"] },
    ],
    price: "8,888",
  },
]

function NearbyTours() {
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="flex flex-col justify-between overflow-hidden rounded-lg border"
          >
            <div>
              <Image
                src={tour.image || "/placeholder.svg"}
                width={400}
                height={200}
                alt={tour.title}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="space-y-3 p-2">
              <h3 className="line-clamp-2 font-bold">{tour.title}</h3>

              <div className="divide-border grid grid-cols-4 divide-x">
                <div className="px-px text-center">
                  <div className="text-muted-foreground text-xs">จำนวนวัน</div>
                  <div className="text-xs font-bold">{tour.days}</div>
                </div>
                <div className="px-px text-center">
                  <div className="text-muted-foreground text-xs">สายการบิน</div>
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    width={30}
                    height={30}
                    alt={tour.airline}
                    className="mx-auto"
                  />
                </div>
                <div className="px-px text-center">
                  <div className="text-muted-foreground text-xs">รหัสทัวร์</div>
                  <div className="text-xs">MUSH{240000 + index}</div>
                </div>
              </div>

              <div className="space-y-1">
                {tour.dates.map((dateGroup, idx) => (
                  <div key={idx} className="flex items-start gap-1">
                    <div className="text-background inline-block rounded-md bg-[#1877f2] px-1.5 py-px text-xs">
                      {dateGroup.month}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {dateGroup.dates.map((date, dateIdx) => (
                        <div
                          key={dateIdx}
                          className="text-muted-foreground text-xs"
                        >
                          {date}{" "}
                          {dateIdx < dateGroup.dates.length - 1 ? " / " : ""}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted mt-auto flex items-center justify-between px-2 py-2.5">
              <div>
                <div className="text-muted-foreground text-sm">เริ่มต้น</div>
                <div className="text-2xl font-bold text-red-500">
                  {tour.price}
                </div>
              </div>
              <Button className="text-background bg-linear-to-b from-red-500 to-red-700 bg-[length:100%_100%] bg-[bottom] inset-shadow-[0_1px_rgb(255_255_255/0.15)] transition-all hover:bg-[length:100%_150%]">
                ดูรายละเอียด →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { NearbyTours }
