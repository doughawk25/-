"use client"

import { PageHeader } from "@/components/docs/page-header"
import { PopoverDemo } from "./demo"

export default function PopoverPage() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="Floating panel triggered by a button."
      />
      <PopoverDemo />
    </>
  )
}
