import Image from "next/image"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TourDates() {
  const dates = [
    {
      date: "5 เม.ย. 68 - 7 เม.ย. 68",
      prices: ["14,900 บาท", "18,800 บาท", "14,900 บาท"],
      status: "SOLD OUT",
    },
    {
      date: "6 เม.ย. 68 - 8 เม.ย. 68",
      prices: ["11,888 บาท", "15,788 บาท", "11,888 บาท"],
      status: "SOLD OUT",
    },
    {
      date: "10 เม.ย. 68 - 12 เม.ย. 68",
      prices: ["11,888 บาท", "15,788 บาท", "11,888 บาท"],
      status: "SOLD OUT",
    },
    {
      date: "12 เม.ย. 68 - 14 เม.ย. 68",
      prices: ["16,900 บาท", "20,800 บาท", "16,900 บาท"],
      status: "SOLD OUT",
    },
    {
      date: "13 เม.ย. 68 - 15 เม.ย. 68",
      prices: ["16,900 บาท", "20,800 บาท", "16,900 บาท"],
      status: "SOLD OUT",
    },
    {
      date: "18 เม.ย. 68 - 20 เม.ย. 68",
      prices: ["12,888 บาท", "16,788 บาท", "12,888 บาท"],
      status: "available",
    },
  ]

  return (
    <div className="border border-r-0 border-l-0 py-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b">
            <TableHead className="py-4 text-left font-medium">
              เลือกวันที่เดินทางและกดจอง:
            </TableHead>
            <TableHead className="py-4 text-center font-medium">
              <div>ผู้ใหญ่</div>
              <div className="text-muted-foreground text-sm">(พักคู่)</div>
            </TableHead>
            <TableHead className="py-4 text-center font-medium">
              <div>ผู้ใหญ่</div>
              <div className="text-muted-foreground text-sm">(พักเดี่ยว)</div>
            </TableHead>
            <TableHead className="py-4 text-center font-medium">
              <div>ผู้ใหญ่</div>
              <div className="text-muted-foreground text-sm">(พัก 3 คน)</div>
            </TableHead>
            <TableHead className="py-4 text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dates.map((item, index) => (
            <TableRow key={index} className="border-b">
              <TableCell className="py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border">
                    <Clock className="text-muted-foreground h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=24&width=24"
                      width={24}
                      height={24}
                      alt="Flag"
                    />
                    {item.date}
                  </div>
                </div>
              </TableCell>
              <TableCell className="py-4 text-center">
                {item.prices[0]}
              </TableCell>
              <TableCell className="py-4 text-center">
                {item.prices[1]}
              </TableCell>
              <TableCell className="py-4 text-center">
                {item.prices[2]}
              </TableCell>
              <TableCell className="py-4 text-right">
                {item.status === "SOLD OUT" ? (
                  <span className="text-primary">SOLD OUT</span>
                ) : (
                  <Button variant="outline">จอง</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
