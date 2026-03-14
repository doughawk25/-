"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ProgressDemo } from "./demo"

export default function ProgressPage() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
      />
      <ProgressDemo />
    </>
  )
}
