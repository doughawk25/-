"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ChartDemo } from "./demo"

export default function ChartPage() {
  return (
    <>
      <PageHeader
        title="Chart"
        description="Chart components built on top of Recharts."
      />
      <ChartDemo />
    </>
  )
}
