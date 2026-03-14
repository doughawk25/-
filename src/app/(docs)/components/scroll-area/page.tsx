"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ScrollAreaDemo } from "./demo"

export default function ScrollAreaPage() {
  return (
    <>
      <PageHeader
        title="Scroll Area"
        description="Augments native scroll functionality with custom, cross-browser styling."
      />
      <ScrollAreaDemo />
    </>
  )
}
