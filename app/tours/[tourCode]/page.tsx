import { NearbyTours } from "./components/nearby-tours";
import { RecommendedTours } from "./components/recommended-tours";
import { TourBookingWidget } from "./components/tour-booking-widget";
import { TourBreadcrumb } from "./components/tour-breadcrumb";
import { TourDates } from "./components/tour-dates";
import { TourDetails } from "./components/tour-details";
import { TourHeader } from "./components/tour-header";
import { TourImageGallery } from "./components/tour-image-gallery";
import { TourTabs } from "./components/tour-tabs";

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
];

export default function TourCode() {
  return (
    <div className="bg-background min-h-svh font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-5xl py-4">
        <TourBreadcrumb />

        <div className="space-y-6">
          <TourHeader />
          <TourImageGallery images={tourImages} />
          <TourDates />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <TourDetails />
              <TourTabs />
            </div>

            <div className="lg:col-span-1">
              <TourBookingWidget />
            </div>
          </div>

          <NearbyTours />
          <RecommendedTours />
        </div>
      </div>
    </div>
  );
}
