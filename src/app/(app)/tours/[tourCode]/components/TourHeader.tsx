import Image from "next/image"
import { TourStudy } from "@/modules/tours/studies/types"

function TourHeader({
  name,
  code,
}: {
  name: TourStudy["name"]
  code: TourStudy["code"]
}) {
  return (
    <div className="space-y-4 py-2">
      <div className="flex items-end justify-between border-b pb-2">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=60&width=120"
            width={30}
            height={30}
            alt="Air Macau"
          />
        </div>
        <div className="flex items-end gap-2">
          <span className="text-muted-foreground">รหัสทัวร์</span>
          <span className="text-2xl font-bold text-red-500">{code}</span>
        </div>
      </div>

      <h1 className="text-4xl font-bold">{name}</h1>
    </div>
  )
}

export { TourHeader }
