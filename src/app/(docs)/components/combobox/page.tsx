"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComboboxDemo } from "./demo"

export default function ComboboxPage() {
  return (
    <>
      <PageHeader
        title="Combobox"
        description="Autocomplete input with a filterable dropdown list."
      />
      <ComboboxDemo />
    </>
  )
}
