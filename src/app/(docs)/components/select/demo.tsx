"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SelectDemo() {
  
  return (
    <ComponentPreview
      name="Select"
      description="Dropdown select control for picking from a list of options."
      code={`<Select>
  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`}
    >
      <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
    </ComponentPreview>
  )
}
