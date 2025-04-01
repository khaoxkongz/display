"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftScroll, setShowLeftScroll] = useState(false)
  const [showRightScroll, setShowRightScroll] = useState(false)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftScroll(scrollLeft > 0)
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <header className="w-full">
      <div className="relative h-[300px] w-full">
        <div className="text-background absolute bottom-4 left-4 z-10 bg-red-500 px-3 py-1.5 text-sm font-medium">
          ทัวร์จีน
        </div>
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="ทัวร์จีน"
          width={1200}
          height={300}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="flex flex-col items-start justify-between py-4 md:flex-row md:items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  หน้าแรก
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/international" className="text-muted-foreground">
                  ทัวร์ต่างประเทศ
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/china" className="text-red-500">
                  ทัวร์จีน
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-2 pt-4 md:pt-0">
          <div className="text-muted-foreground text-sm">
            <span className="block text-center">0</span>
            <span className="block text-center text-xs">SHARES</span>
          </div>
          <Button
            variant="outline"
            className="h-10 w-10 rounded-none border-none bg-[#00b900] p-0 text-white hover:bg-[#00a000]"
          >
            <span className="sr-only">Line</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M19.365 9.89c.50 0 .866.37.866.812a.804.804 0 0 1-.866.812H17.14v1.139h2.225c.5 0 .866.37.866.813a.804.804 0 0 1-.866.812H16.37a.813.813 0 0 1-.817-.812V8.003c0-.442.367-.812.817-.812h3.225c.5 0 .866.37.866.812a.804.804 0 0 1-.866.812H17.14v1.075h2.225zm-7.955 2.04c.5 0 .866.368.866.81 0 .424-.387.774-.866.774H8.185a.812.812 0 0 1-.817-.811V8.003c0-.442.367-.812.817-.812.45 0 .817.37.817.812v3.926h3.225zM6.474 13.8a.804.804 0 0 1-.866.813.804.804 0 0 1-.867-.812V8.003c0-.442.367-.812.817-.812.45 0 .816.37.816.812V13.8h.1zm9.34 0c.449 0 .816.37.816.813 0 .424-.367.774-.817.774a.812.812 0 0 1-.817-.811V8.003c0-.442.367-.812.817-.812.45 0 .817.37.817.812V13.8h-.1l.1.001zm-4.998-9.788c5.514 0 10 3.592 10 8.017s-4.486 8.017-10 8.017c-5.514 0-10-3.592-10-8.017s4.486-8.017 10-8.017z" />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="h-10 w-10 rounded-none border-none bg-[#3b5998] p-0 text-white hover:bg-[#2d4373]"
          >
            <span className="sr-only">Facebook</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="h-10 w-10 rounded-none border-none bg-[#1da1f2] p-0 text-white hover:bg-[#0c85d0]"
          >
            <span className="sr-only">Twitter</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="relative mb-4 border-y">
        <div className="relative flex items-center">
          {showLeftScroll && (
            <Button
              variant="outline"
              size="icon"
              className="bg-background border-muted absolute left-0 z-10 rounded-full shadow-md"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-2 overflow-x-auto scroll-smooth py-4"
            onScroll={checkScrollButtons}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์จีน ไม่เข้าร้านรัฐบาล
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์ ปักกิ่ง เซี่ยงไฮ้ ดิสนีย์แลนด์
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์จีน ซีอาน
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์ฮ่องกง
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์สี่เซียง
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์จีน จิ่วจ้ายโกว
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์อาบัน
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์จีน คุนหมิง
            </Button>
            <Button
              variant="ghost"
              className="bg-muted hover:bg-muted/80 text-muted-foreground h-auto rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors"
            >
              ทัวร์จีน ฉงชิ่ง
            </Button>
          </div>

          {showRightScroll && (
            <Button
              variant="outline"
              size="icon"
              className="bg-background border-muted absolute right-0 z-10 rounded-full shadow-md"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
