"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

import { ComponentPreview } from "@/components/docs/component-preview"


export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <ComponentPreview
      name="Calendar"
      description="A date picker calendar component."
      code={`const [date, setDate] = useState<Date | undefined>(new Date())
<Calendar mode="single" selected={date} onSelect={setDate} />`}
    >
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
    </ComponentPreview>
  )
}
