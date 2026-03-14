"use client"

import { PageHeader } from "@/components/docs/page-header"
import { RadioGroupDemo } from "./demo"

export default function RadioGroupPage() {
  return (
    <>
      <PageHeader
        title="Radio Group"
        description="A set of checkable buttons where only one can be checked at a time."
      />
      <RadioGroupDemo />
    </>
  )
}
