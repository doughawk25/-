"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ButtonDemo } from "./demo"

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        title="Button"
        description="Primary action element with multiple variants and sizes."
      />
      <ButtonDemo />
    </>
  )
}
