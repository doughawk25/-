"use client"

import { Slider } from "@/components/ui/slider"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SliderDemo() {
  
  return (
    <ComponentPreview
      name="Slider"
      description="Input for selecting a value from a range."
      code={`<Slider defaultValue={[50]} max={100} step={1} />`}
    >
      <div className="w-full max-w-sm space-y-6">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
    </ComponentPreview>
  )
}
