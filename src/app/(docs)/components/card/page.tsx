"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CardDemo } from "./demo"

export default function CardPage() {
  return (
    <>
      <PageHeader
        title="Card"
        description="Contained surface for grouping related content."
      />
      <CardDemo />
    </>
  )
}
