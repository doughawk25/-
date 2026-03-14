"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ComponentPreview } from "@/components/docs/component-preview"

export function InputDemo() {
  
  return (
    <ComponentPreview
      name="Input"
      description="Text input field for forms."
      code={`<Input type="email" placeholder="Email" />`}
    >
      <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Input disabled id="disabled" placeholder="Disabled" />
      </div>
    </div>
    </ComponentPreview>
  )
}
