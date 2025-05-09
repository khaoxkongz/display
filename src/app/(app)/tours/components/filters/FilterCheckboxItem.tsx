import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface FilterCheckboxItemProps {
  id: string
  label: string
  count: number
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  value?: string
  ref?: React.Ref<HTMLButtonElement>
}

function FilterCheckboxItem({
  id,
  label,
  count,
  checked,
  onCheckedChange,
  value,
  ref,
}: FilterCheckboxItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={id}
          value={value}
          checked={checked}
          onCheckedChange={onCheckedChange}
          ref={ref}
        />
        <Label htmlFor={id} className="text-muted-foreground text-sm">
          {label}
        </Label>
      </div>
      <span className="text-muted-foreground text-sm">({count})</span>
    </div>
  )
}

export { FilterCheckboxItem }
