"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type BookingData = {
  adults?: string
  childrenWithBed?: string
  childrenUnder3?: string
  childrenWithoutBed?: string
  infantsWithoutBed?: string
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  additionalInfo?: string
  acceptTerms?: boolean
}

type BookingContextType = {
  bookingData: BookingData
  updateBookingData: (data: BookingData) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>({
    adults: "2",
    childrenWithBed: "0",
    childrenUnder3: "0",
    childrenWithoutBed: "0",
    infantsWithoutBed: "0",
  })

  const updateBookingData = (data: BookingData) => {
    setBookingData((prev) => ({
      ...prev,
      ...data,
    }))
  }

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)

  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider")
  }

  return context
}
