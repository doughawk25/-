"use client"

import { PageHeader } from "@/components/docs/page-header"
import { AccordionDemo } from "./demo"

export default function AccordionPage() {
  return (
    <>
      <PageHeader
        title="Accordion"
        description="Vertically stacked set of interactive headings that reveal content."
      />
      <AccordionDemo />
    </>
  )
}
