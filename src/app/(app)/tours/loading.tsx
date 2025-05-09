import { FilterPanelSkeleton } from "./components/skeletons/FilterPanelSkeleton"
import { TourSectionSkeleton } from "./components/skeletons/TourSectionSkeleton"
import { TourPageHeader } from "./components/TourPageHeader"

export default function Loading() {
  return (
    <>
      <TourPageHeader />

      <div className="relative flex flex-col gap-6 md:flex-row">
        <FilterPanelSkeleton />
        <TourSectionSkeleton />
      </div>
    </>
  )
}
