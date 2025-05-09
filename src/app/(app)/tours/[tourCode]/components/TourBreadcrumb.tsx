import Link from "next/link"
import { TourStudy } from "@/modules/tours/studies/types"
import { HomeIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function TourBreadcrumb({ name }: { name: TourStudy["name"] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground flex items-center"
            >
              <HomeIcon className="mr-1 h-4 w-4" />
              <span>หน้าแรก</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-muted-foreground" />

        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href="/tours"
              className="text-muted-foreground hover:text-foreground"
            >
              ทัวร์เรียน
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-muted-foreground" />

        <BreadcrumbItem>
          <BreadcrumbLink className="text-primary inline-block max-w-[300px] truncate md:max-w-[500px]">
            {name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export { TourBreadcrumb }
