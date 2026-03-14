"use client"

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"

import { ComponentPreview } from "@/components/docs/component-preview"

export function InputGroupDemo() {
  return (
    <ComponentPreview
      name="Input Group"
      description="Group inputs with addons like icons or text."
      code={`<InputGroup>
  <InputGroupAddon>
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="0.00" />
</InputGroup>`}
    >
      <div className="w-full max-w-sm space-y-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
      </InputGroup>
    </div>
    </ComponentPreview>
  )
}
