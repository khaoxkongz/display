import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon, HomeIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function TourPageHeader() {
  return (
    <header className="hidden w-full space-y-4 md:block">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center">
                <HomeIcon className="mr-1 h-4 w-4" />
                หน้าแรก
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/international" className="text-muted-foreground">
                ทัวร์ต่างประเทศ
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRightIcon className="h-4 w-4" />
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
    </header>
  )
}

export { TourPageHeader }
