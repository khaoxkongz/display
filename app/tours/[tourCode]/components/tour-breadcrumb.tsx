import Link from "next/link"
import { Home } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function TourBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center"
            >
              <Home className="mr-1 h-4 w-4" />
              <span>หน้าแรก</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/international-tours"
              className="text-muted-foreground hover:text-foreground"
            >
              ทัวร์ต่างประเทศ
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/china-tours"
              className="text-muted-foreground hover:text-foreground"
            >
              ทัวร์จีน
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-muted-foreground" />
        <BreadcrumbItem>
          <BreadcrumbLink className="text-primary inline-block max-w-[300px] truncate md:max-w-[500px]">
            ทัวร์มาเก๊า จูไห่ ฟิชเชอร์ เกิร์ล เวเนเซียน วัดอาม่า วิหารเซนต์ปอล
            วัดกวนไท เซนาโด้สแควร์ ปารีเซียน
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
