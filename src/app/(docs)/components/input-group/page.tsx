"use client"

import { PageHeader } from "@/components/docs/page-header"
import { InputGroupDemo } from "./demo"

export default function InputGroupPage() {
  return (
    <>
      <PageHeader
        title="Input Group"
        description="Group inputs with addons like icons or text."
      />
      <InputGroupDemo />
    </>
  )
}
