"use client"

import { Spinner } from "@/components/ui/spinner"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SpinnerDemo() {
  
  return (
    <ComponentPreview
      name="Spinner"
      description="Loading spinner indicator."
      code={`<Spinner />`}
    >
      <div className="flex items-center gap-4">
      <Spinner />
    </div>
    </ComponentPreview>
  )
}
