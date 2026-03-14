"use client"

import { PageHeader } from "@/components/docs/page-header"
import { TextareaDemo } from "./demo"

export default function TextareaPage() {
  return (
    <>
      <PageHeader
        title="Textarea"
        description="Multi-line text input."
      />
      <TextareaDemo />
    </>
  )
}
