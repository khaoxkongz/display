function PriceSummary() {
  return (
    <div className="w-full overflow-hidden rounded-md border border-gray-100 shadow-sm">
      <div className="bg-orange-500 p-3 text-white sm:p-4">
        <h3 className="text-sm font-bold sm:text-base">กำหนดการเดินทาง:</h3>
        <p className="text-sm sm:text-base">18 เม.ย. 68 - 23 เม.ย. 68</p>
      </div>

      <div className="bg-teal-500 p-3 text-white sm:p-4">
        <h3 className="mb-2 text-sm font-bold sm:text-base">
          ราคาสุทธิที่ต้องชำระ:
        </h3>
        <div className="grid grid-cols-3 gap-2 text-xs sm:gap-4 sm:text-sm">
          <div>2 ผู้ใหญ่ (พักคู่)</div>
          <div className="text-right">24,990 บาท</div>
          <div className="text-right">49,980 บาท</div>
        </div>
        <div className="mt-3 text-right text-base font-bold sm:mt-4 sm:text-xl md:text-2xl">
          49,980 บาท
        </div>
      </div>
    </div>
  )
}

export { PriceSummary }
