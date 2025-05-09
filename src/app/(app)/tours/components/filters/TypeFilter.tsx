"use client"

import { useTourStudiesFilters } from "@/modules/tours/studies/hooks/use-tour-studies-filters"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

import { FilterCheckboxItem } from "./FilterCheckboxItem"
import { FilterSection } from "./FilterSection"

function TypeFilter({
  value,
  onChange,
}: {
  value?: string
  onChange?: (value: string) => void
}) {
  const trpc = useTRPC()
  const { data: countShort } = useQuery(
    trpc.tourStudies.countByType.queryOptions({ type: "short" })
  )

  const { data: countLong } = useQuery(
    trpc.tourStudies.countByType.queryOptions({ type: "long" })
  )

  // Only use URL state if not in form mode (onChange not provided)
  const [filters, setFilters] = useTourStudiesFilters()

  const setFilter = (newValue: string) => {
    setFilters({
      ...filters,
      type: newValue,
    })
  }

  // Use provided value/onChange if in form mode, otherwise use URL state
  const currentValue = value !== undefined ? value : filters.type || ""
  const selectedTypes = currentValue.split(",").filter(Boolean)
  const handleChange = onChange || setFilter

  // Toggle a type selection
  const toggleType = (typeValue: string) => {
    // If already selected, remove it; otherwise add it
    const newSelection = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((t) => t !== typeValue)
      : [...selectedTypes, typeValue]

    // Join back into comma-separated string
    const newValue = newSelection.join(",")
    handleChange(newValue)
  }

  return (
    <FilterSection title="ประเภททัวร์">
      <FilterCheckboxItem
        id="short"
        label="ทัวร์ระยะสั้น"
        count={countShort?.count || 0}
        checked={selectedTypes.includes("short")}
        onCheckedChange={() => toggleType("short")}
      />
      <FilterCheckboxItem
        id="long"
        label="ทัวร์ระยะยาว"
        count={countLong?.count || 0}
        checked={selectedTypes.includes("long")}
        onCheckedChange={() => toggleType("long")}
      />
    </FilterSection>
  )
}

export { TypeFilter }
