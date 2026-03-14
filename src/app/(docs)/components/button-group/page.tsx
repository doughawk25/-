"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ButtonGroupDemo } from "./demo"

export default function ButtonGroupPage() {
  return (
    <>
      <PageHeader
        title="Button Group"
        description="Groups multiple buttons together visually."
      />
      <ButtonGroupDemo />
    </>
  )
}
