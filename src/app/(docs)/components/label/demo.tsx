"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import { ComponentPreview } from "@/components/docs/component-preview"

export function LabelDemo() {
  
  return (
    <ComponentPreview
      name="Label"
      description="Accessible label associated with form controls."
      code={`<Label htmlFor="email">Email</Label>`}
    >
      <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
    </ComponentPreview>
  )
}
