"use client"

import { useTourStudiesFilters } from "@/modules/tours/studies/hooks/use-tour-studies-filters"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

import { FilterCheckboxItem } from "./FilterCheckboxItem"
import { FilterSection } from "./FilterSection"

function UniversityFilter({
  value,
  onChange,
}: {
  value?: string
  onChange?: (value: string) => void
}) {
  const trpc = useTRPC()
  const { data: countHit } = useQuery(
    trpc.tourStudies.countByUniversity.queryOptions({ universityCode: "hit" })
  )

  const { data: countHrbnu } = useQuery(
    trpc.tourStudies.countByUniversity.queryOptions({ universityCode: "hrbnu" })
  )

  // Only use URL state if not in form mode (onChange not provided)
  const [filters, setFilters] = useTourStudiesFilters()

  const setFilter = (newValue: string) => {
    setFilters({
      ...filters,
      university: newValue,
    })
  }

  // Use provided value/onChange if in form mode, otherwise use URL state
  const currentValue = value !== undefined ? value : filters.university || ""
  const selectedUniversities = currentValue.split(",").filter(Boolean)
  const handleChange = onChange || setFilter

  // Toggle a university selection
  const toggleUniversity = (uniValue: string) => {
    // If already selected, remove it; otherwise add it
    const newSelection = selectedUniversities.includes(uniValue)
      ? selectedUniversities.filter((u) => u !== uniValue)
      : [...selectedUniversities, uniValue]

    // Join back into comma-separated string
    const newValue = newSelection.join(",")
    handleChange(newValue)
  }

  return (
    <FilterSection title="มหาวิทยาลัย">
      <FilterCheckboxItem
        id="hit"
        label="Harbin Institute of Technology"
        count={countHit?.count || 0}
        checked={selectedUniversities.includes("hit")}
        onCheckedChange={() => toggleUniversity("hit")}
      />
      <FilterCheckboxItem
        id="hrbnu"
        label="Harbin Normal University"
        count={countHrbnu?.count || 0}
        checked={selectedUniversities.includes("hrbnu")}
        onCheckedChange={() => toggleUniversity("hrbnu")}
      />
    </FilterSection>
  )
}

export { UniversityFilter }
