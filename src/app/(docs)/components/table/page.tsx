"use client"

import { PageHeader } from "@/components/docs/page-header"
import { TableDemo } from "./demo"

export default function TablePage() {
  return (
    <>
      <PageHeader
        title="Table"
        description="Responsive data table."
      />
      <TableDemo />
    </>
  )
}
