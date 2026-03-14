"use client"

import { Badge } from "@/components/ui/badge"

import { ComponentPreview } from "@/components/docs/component-preview"

export function BadgeDemo() {
  
  return (
    <ComponentPreview
      name="Badge"
      description="Compact label for status, categories, or counts."
      code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`}
    >
      <div className="flex flex-wrap gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
    </ComponentPreview>
  )
}
