"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ToggleGroupDemo() {
  
  return (
    <ComponentPreview
      name="Toggle Group"
      description="A group of toggle buttons where one or multiple can be active."
      code={`<ToggleGroup>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
</ToggleGroup>`}
    >
      <ToggleGroup>
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><BoldIcon className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><ItalicIcon className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><UnderlineIcon className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
    </ComponentPreview>
  )
}
