import Image from "next/image"

import { Button } from "@/components/ui/button"

export function TourHeader() {
  return (
    <div className="space-y-4 py-4">
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
          <span className="text-2xl font-bold text-red-500">MUSH245250</span>
        </div>
      </div>

      <h1 className="text-4xl font-bold">
        ทัวร์มาเก๊า จูไห่ ฟิชเชอร์ เกิร์ล เวเนเซียน วัดอาม่า วิหารเซนต์ปอล
        วัดกวนไท เซนาโด้สแควร์ ปารีเซียน
      </h1>

      <div className="flex items-center gap-4">
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

        <div className="flex items-center gap-2">
          <div className="text-muted-foreground flex gap-2">
            <span>0</span>
            <span>SHARES</span>
          </div>
          <div className="flex gap-x-2">
            <button className="text-background h-10 w-auto rounded-xs border-none bg-[#06c755] px-4">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"></path>
              </svg>
            </button>
            <button className="text-background h-10 w-auto rounded-xs border-none bg-[#1877f2] px-4">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </button>
            <button className="text-background h-10 w-auto rounded-xs border-none bg-[#1da1f2] px-4">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 py-2">
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน เดือนพฤษภาคม
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน เดือนมิถุนายน
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน เดือนเมษายน
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์วันจักรี
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์วันอัฎฐมีบูชา
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์วันวิสาขบูชา
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์วันสงกรานต์
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน วันจักรี
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน วันอัฎฐมีบูชา
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน วันวิสาขบูชา
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน วันสงกรานต์
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ทัวร์จีน สายการบินไทย TG
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-muted-foreground px-1.5 py-px text-xs"
        >
          ดูทั้งหมด...
        </Button>
      </div>
    </div>
  )
}
