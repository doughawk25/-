"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

import { ComponentPreview } from "@/components/docs/component-preview"

export function AspectRatioDemo() {
  
  return (
    <ComponentPreview
      name="Aspect Ratio"
      description="Displays content within a desired ratio."
      code={`<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Photo" />
</AspectRatio>`}
    >
      <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg flex items-center justify-center">
        <span className="text-sm text-muted-foreground">16:9</span>
      </AspectRatio>
    </div>
    </ComponentPreview>
  )
}
