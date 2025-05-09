"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home, Menu } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function BookingBreadcrumb() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-5xl px-4 py-3">
        {/* Mobile and Tablet Navigation */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] pt-10 sm:w-[350px]">
                <nav className="mt-4 flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    <span>หน้าแรก</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <ChevronRight className="mr-2 h-4 w-4" />
                    <span>ทัวร์ต่างประเทศ</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <ChevronRight className="mr-2 h-4 w-4" />
                    <span>ทัวร์จีน</span>
                  </Link>
                  <div className="my-2 border-t pt-2">
                    <div className="px-3 py-2 text-sm text-gray-500">
                      ทัวร์ปัจจุบัน:
                    </div>
                    <div className="px-3 py-2 text-sm font-medium">
                      ทัวร์จีน เฉิงตู จิ่วจ้ายโกว อุทยานหวงหลง
                      ภูเขาหิมะการ์เซียต๋ากู่ปิงชวน แพนด้าเซนเตอร์
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center">
              <Home className="mr-1 h-4 w-4" />
              <span className="text-sm">หน้าแรก</span>
            </Link>
          </div>
          <div className="text-sm font-bold text-red-500">จองทัวร์</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between md:flex md:flex-row">
          <div className="mb-0">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <span>หน้าแรก</span>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">ทัวร์จีน</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="max-w-[300px] truncate lg:max-w-none">
                    ทัวร์จีน เฉิงตู จิ่วจ้ายโกว อุทยานหวงหลง
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="font-bold text-red-500">จองทัวร์</div>
        </div>

        {/* Tour Information - Responsive for all devices */}
        <div className="mt-4 flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="flex w-full items-start sm:w-auto">
            <div className="relative mr-3 h-16 w-20 shrink-0 sm:mr-4 sm:h-20 sm:w-24">
              <Image
                src="/images/tours/ADWINTER2024.png"
                alt="Tour Image"
                width={96}
                height={80}
                className="rounded object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center sm:mb-2">
                <Image
                  src="/thai-airline-thumbnail.png"
                  alt="VietJetAir.com"
                  width={100}
                  height={20}
                  className="h-5 object-contain sm:h-auto"
                />
              </div>
              <h1 className="line-clamp-2 text-base font-bold sm:line-clamp-none sm:text-lg md:text-xl">
                ทัวร์จีน เฉิงตู จิ่วจ้ายโกว อุทยานหวงหลง
                ภูเขาหิมะการ์เซียต๋ากู่ปิงชวน แพนด้าเซนเตอร์
              </h1>
            </div>
          </div>
          <div className="mt-3 flex w-full items-center justify-between text-right sm:mt-0 sm:block sm:w-auto">
            <div className="text-xs text-gray-600 sm:text-sm">รหัสทัวร์</div>
            <div className="text-lg font-bold text-red-500 sm:text-xl md:text-2xl">
              MUSH242777
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { BookingBreadcrumb }
