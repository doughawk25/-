"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { ComponentPreview } from "@/components/docs/component-preview"

export function TextareaDemo() {
  
  return (
    <ComponentPreview
      name="Textarea"
      description="Multi-line text input."
      code={`<Textarea placeholder="Type your message here." />`}
    >
      <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
    </ComponentPreview>
  )
}
