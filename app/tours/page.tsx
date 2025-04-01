import { FilterSidebar } from "./components/filter-sidebar";
import { Header } from "./components/header";
import { PackageCard } from "./components/package-card";
import { TourHeader } from "./components/tour-header";

// Sample data for multiple packages
const packageData = [
  {
    id: "1",
    title:
      "ทัวร์จีน เฉิงตู ภูเขาสี่ดรุณี อุทยานหวงหลง อุทยานจิ่วจ้ายโกว หุบเขาซวงเฉียวโกว แพนด้ายักษ์ปิ่นศึก ไม่เข้าร้านรัฐบาล",
    image: "/placeholder.svg?height=200&width=300",
    code: "MUSH245087",
    duration: "6วัน 5คืน",
    airline: {
      name: "Spring Airlines",
      logo: "/placeholder.svg?height=24&width=24",
      color: "green",
    },
    hotelRating: 4,
    specialFeatures: "ไม่เข้าร้านรัฐบาล-นั่งรถไฟความเร็วสูง",
    attractions:
      "ภูเขาสี่ดรุณี-หุบเขาซวงเฉียวโกว-น้ำเสี่ยน-พระเลสาบเตี๋อซี-อุทยานหวงหลง-อุทยานแห่งชาติจิ่วจ้ายโกว-หมู่บ้านชูเจียว-วัดต้าเฉือ-หมีแพนด้ายักษ์ปิ่นศึก IFS",
    shopping: "ถนนไท่ผู่ซี-ถนนชุนซีลู่",
    dining: "บุฟเฟต์สุกี้หม่าล่า",
    accommodation: "พัก 4 ดาวทุกคืน",
    dates: [
      {
        month: "เมษายน",
        monthAbbr: "เม.ย.",
        ranges: [
          { range: "2-6", availability: 2 },
          { range: "9-13", availability: 2 },
          { range: "16-20", availability: 3, isHighSeason: true },
          { range: "23-27", availability: 2 },
          { range: "30-4พ.ค.", availability: 3, isHighSeason: true },
        ],
      },
      {
        month: "พฤษภาคม",
        monthAbbr: "พ.ค.",
        ranges: [{ range: "7-11", availability: 2 }],
      },
      {
        month: "มิถุนายน",
        monthAbbr: "มิ.ย.",
        ranges: [
          { range: "10-14", availability: 2 },
          { range: "17-21", availability: 2 },
          { range: "24-28", availability: 2 },
        ],
      },
    ],
    price: 24899,
  },
  {
    id: "2",
    title:
      "ทัวร์จีน ปักกิ่ง กำแพงเมืองจีน พระราชวังต้องห้าม จัตุรัสเทียนอันเหมิน ไม่ลงร้าน",
    image: "/placeholder.svg?height=200&width=300",
    code: "BJTG112233",
    duration: "5วัน 4คืน",
    airline: {
      name: "Sichuan Airlines",
      logo: "/placeholder.svg?height=24&width=24",
      color: "red",
    },
    hotelRating: 5,
    specialFeatures: "ไม่ลงร้านรัฐบาล-ชมโชว์กายกรรมปักกิ่ง",
    attractions:
      "กำแพงเมืองจีน-พระราชวังต้องห้าม-จัตุรัสเทียนอันเหมิน-หอฟ้าเทียนถาน-พระราชวังฤดูร้อน",
    shopping: "ถนนหวังฝูจิ่ง-ตลาดรัสเซีย",
    dining: "เป็ดปักกิ่ง-สุกี้หม้อไฟ",
    accommodation: "พัก 5 ดาวทุกคืน",
    dates: [
      {
        month: "เมษายน",
        monthAbbr: "เม.ย.",
        ranges: [
          { range: "12-16", availability: 3 },
          { range: "20-24", availability: 2, isHighSeason: true },
        ],
      },
      {
        month: "พฤษภาคม",
        monthAbbr: "พ.ค.",
        ranges: [
          { range: "1-5", availability: 4 },
          { range: "10-14", availability: 2 },
          { range: "20-24", availability: 1 },
        ],
      },
    ],
    price: 29990,
  },
];

export default function Tours() {
  return (
    <div className="bg-background min-h-screen font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-5xl py-6">
        <Header />
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-1/4">
            <FilterSidebar />
          </div>
          <div className="w-full md:w-3/4">
            <TourHeader />
            {packageData.map((pkg) => (
              <PackageCard key={pkg.id} packageData={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
