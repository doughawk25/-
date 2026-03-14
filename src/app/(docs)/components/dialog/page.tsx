"use client"

import { PageHeader } from "@/components/docs/page-header"
import { DialogDemo } from "./demo"

export default function DialogPage() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="A window overlaid on the primary content, rendering content on top."
      />
      <DialogDemo />
    </>
  )
}
