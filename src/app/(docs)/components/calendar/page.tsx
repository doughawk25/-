"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CalendarDemo } from "./demo"

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        description="A date picker calendar component."
      />
      <CalendarDemo />
    </>
  )
}
