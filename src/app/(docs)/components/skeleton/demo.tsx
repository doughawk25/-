"use client"

import { Skeleton } from "@/components/ui/skeleton"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SkeletonDemo() {
  
  return (
    <ComponentPreview
      name="Skeleton"
      description="Placeholder loading animation for content."
      code={`<Skeleton className="h-4 w-[250px]" />`}
    >
      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    </ComponentPreview>
  )
}
