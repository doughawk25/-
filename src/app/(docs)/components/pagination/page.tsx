"use client"

import { PageHeader } from "@/components/docs/page-header"
import { PaginationDemo } from "./demo"

export default function PaginationPage() {
  return (
    <>
      <PageHeader
        title="Pagination"
        description="Navigation for paged content."
      />
      <PaginationDemo />
    </>
  )
}
