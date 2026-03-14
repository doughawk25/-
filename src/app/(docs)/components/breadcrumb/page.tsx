"use client"

import { PageHeader } from "@/components/docs/page-header"
import { BreadcrumbDemo } from "./demo"

export default function BreadcrumbPage() {
  return (
    <>
      <PageHeader
        title="Breadcrumb"
        description="Navigation breadcrumbs showing the current page hierarchy."
      />
      <BreadcrumbDemo />
    </>
  )
}
