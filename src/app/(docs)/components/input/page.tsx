"use client"

import { PageHeader } from "@/components/docs/page-header"
import { InputDemo } from "./demo"

export default function InputPage() {
  return (
    <>
      <PageHeader
        title="Input"
        description="Text input field for forms."
      />
      <InputDemo />
    </>
  )
}
