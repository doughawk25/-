"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SliderDemo } from "./demo"

export default function SliderPage() {
  return (
    <>
      <PageHeader
        title="Slider"
        description="Input for selecting a value from a range."
      />
      <SliderDemo />
    </>
  )
}
