"use client"

import { PageHeader } from "@/components/docs/page-header"
import { HoverCardDemo } from "./demo"

export default function HoverCardPage() {
  return (
    <>
      <PageHeader
        title="Hover Card"
        description="Card that appears on hover for previewing content."
      />
      <HoverCardDemo />
    </>
  )
}
