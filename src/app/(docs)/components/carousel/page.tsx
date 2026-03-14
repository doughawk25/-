"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CarouselDemo } from "./demo"

export default function CarouselPage() {
  return (
    <>
      <PageHeader
        title="Carousel"
        description="A slideshow component for cycling through elements."
      />
      <CarouselDemo />
    </>
  )
}
