"use client"

import { PageHeader } from "@/components/docs/page-header"
import { BadgeDemo } from "./demo"

export default function BadgePage() {
  return (
    <>
      <PageHeader
        title="Badge"
        description="Compact label for status, categories, or counts."
      />
      <BadgeDemo />
    </>
  )
}
