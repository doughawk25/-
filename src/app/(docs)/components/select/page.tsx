"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SelectDemo } from "./demo"

export default function SelectPage() {
  return (
    <>
      <PageHeader
        title="Select"
        description="Dropdown select control for picking from a list of options."
      />
      <SelectDemo />
    </>
  )
}
