"use client"

import { PageHeader } from "@/components/docs/page-header"
import { TooltipDemo } from "./demo"

export default function TooltipPage() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="Popup that displays information on hover or focus."
      />
      <TooltipDemo />
    </>
  )
}
