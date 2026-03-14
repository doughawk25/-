"use client"

import { PageHeader } from "@/components/docs/page-header"
import { AlertDemo } from "./demo"

export default function AlertPage() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="Displays a callout for important information."
      />
      <AlertDemo />
    </>
  )
}
