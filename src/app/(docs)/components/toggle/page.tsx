"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ToggleDemo } from "./demo"

export default function TogglePage() {
  return (
    <>
      <PageHeader
        title="Toggle"
        description="Two-state button that can be on or off."
      />
      <ToggleDemo />
    </>
  )
}
