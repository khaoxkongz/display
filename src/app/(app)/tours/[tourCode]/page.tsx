import { createTRPCContext } from "@/trpc/init"
import { appRouter } from "@/trpc/routers/_app"

import { NearbyTours } from "./components/NearbyTours"
import { RecommendedTours } from "./components/RecommendedTours"
import { TourBookingWidget } from "./components/TourBookingWidget"
import { TourBreadcrumb } from "./components/TourBreadcrumb"
import { TourDates } from "./components/TourDates"
import { TourDetails } from "./components/TourDetails"
import { TourHeader } from "./components/TourHeader"
import { TourImageGallery } from "./components/TourImageGallery"
import { TourTabs } from "./components/TourTabs"

const tourImages = [
  { src: "/placeholder.svg", alt: "Senado Square in Macau" },
  { src: "/placeholder.svg", alt: "Ruins of St. Paul's" },
  { src: "/placeholder.svg", alt: "Venetian Macau" },
  { src: "/placeholder.svg", alt: "A-Ma Temple" },
  { src: "/placeholder.svg", alt: "Fisherman's Wharf" },
  { src: "/placeholder.svg", alt: "Macau Tower" },
  { src: "/placeholder.svg", alt: "Grand Lisboa" },
  { src: "/placeholder.svg", alt: "Taipa Village" },
  { src: "/placeholder.svg", alt: "Cotai Strip" },
  { src: "/placeholder.svg", alt: "Hac Sa Beach" },
  { src: "/placeholder.svg", alt: "Macau Museum" },
  { src: "/placeholder.svg", alt: "Guia Fortress" },
]

export default async function TourCode(props: {
  params: Promise<{ tourCode: string }>
}) {
  const { tourCode } = await props.params

  const caller = appRouter.createCaller(createTRPCContext)

  const tour = await caller.tourStudies.get({
    code: tourCode,
  })

  return (
    <>
      <TourBreadcrumb name={tour.name} />

      <div className="space-y-6">
        <TourHeader name={tour.name} code={tour.code} />
        <TourImageGallery images={tourImages} />
        <TourDates departureDates={tour.departureDates} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <TourDetails highlights={tour.highlights} />
            <TourTabs brochure={tour.brochure} />
          </div>

          <div className="hidden lg:col-span-1 lg:block">
            <TourBookingWidget departureDates={tour.departureDates} />
          </div>
        </div>

        <NearbyTours />
        <RecommendedTours />
      </div>
    </>
  )
}
