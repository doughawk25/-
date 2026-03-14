"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

import { ComponentPreview } from "@/components/docs/component-preview"

export function TooltipDemo() {
  
  return (
    <ComponentPreview
      name="Tooltip"
      description="Popup that displays information on hover or focus."
      code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
    >
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
        <TooltipContent><p>Add to library</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
    </ComponentPreview>
  )
}
