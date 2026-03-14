"use client"

import { PageHeader } from "@/components/docs/page-header"
import { LabelDemo } from "./demo"

export default function LabelPage() {
  return (
    <>
      <PageHeader
        title="Label"
        description="Accessible label associated with form controls."
      />
      <LabelDemo />
    </>
  )
}
