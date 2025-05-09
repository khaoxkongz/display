import type React from "react"
import { BookingBreadcrumb } from "@/modules/booking/components/ui/BookingBreadcrumb"
import { BookingProvider } from "@/modules/booking/hooks/BookingContext"

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BookingProvider>
      <div className="flex min-h-screen flex-col">
        <BookingBreadcrumb />
        <main className="flex-1">{children}</main>
      </div>
    </BookingProvider>
  )
}
