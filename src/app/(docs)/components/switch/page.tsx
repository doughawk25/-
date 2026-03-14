"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SwitchDemo } from "./demo"

export default function SwitchPage() {
  return (
    <>
      <PageHeader
        title="Switch"
        description="Toggle control that is either on or off."
      />
      <SwitchDemo />
    </>
  )
}
