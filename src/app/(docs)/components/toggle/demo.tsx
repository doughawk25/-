"use client"

import { Toggle } from "@/components/ui/toggle"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ToggleDemo() {
  
  return (
    <ComponentPreview
      name="Toggle"
      description="Two-state button that can be on or off."
      code={`<Toggle aria-label="Toggle bold">
  <BoldIcon className="h-4 w-4" />
</Toggle>`}
    >
      <div className="flex gap-2">
      <Toggle aria-label="Toggle bold"><BoldIcon className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Toggle italic"><ItalicIcon className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Toggle underline"><UnderlineIcon className="h-4 w-4" /></Toggle>
    </div>
    </ComponentPreview>
  )
}
