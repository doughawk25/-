"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ToggleGroupDemo } from "./demo"

export default function ToggleGroupPage() {
  return (
    <>
      <PageHeader
        title="Toggle Group"
        description="A group of toggle buttons where one or multiple can be active."
      />
      <ToggleGroupDemo />
    </>
  )
}
