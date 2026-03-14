"use client"

import { PageHeader } from "@/components/docs/page-header"
import { AspectRatioDemo } from "./demo"

export default function AspectRatioPage() {
  return (
    <>
      <PageHeader
        title="Aspect Ratio"
        description="Displays content within a desired ratio."
      />
      <AspectRatioDemo />
    </>
  )
}
