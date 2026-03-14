"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SpinnerDemo } from "./demo"

export default function SpinnerPage() {
  return (
    <>
      <PageHeader
        title="Spinner"
        description="Loading spinner indicator."
      />
      <SpinnerDemo />
    </>
  )
}
