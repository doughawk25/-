"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ResizableDemo } from "./demo"

export default function ResizablePage() {
  return (
    <>
      <PageHeader
        title="Resizable"
        description="Resizable panel groups and handles."
      />
      <ResizableDemo />
    </>
  )
}
