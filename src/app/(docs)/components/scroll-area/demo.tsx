"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ScrollAreaDemo() {
  
  return (
    <ComponentPreview
      name="Scroll Area"
      description="Augments native scroll functionality with custom, cross-browser styling."
      code={`<ScrollArea className="h-48 w-48 rounded-md border">
  <div className="p-4">Scrollable content</div>
</ScrollArea>`}
    >
      <ScrollArea className="h-48 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {["Design", "Tokens", "Color", "Type", "Spacing", "Radii", "Motion", "Components", "Layout", "Grid"].map((tag) => (
          <div key={tag}><div className="text-sm">{tag}</div><Separator className="my-2" /></div>
        ))}
      </div>
    </ScrollArea>
    </ComponentPreview>
  )
}
