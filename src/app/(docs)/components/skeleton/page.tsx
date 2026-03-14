"use client"

import { PageHeader } from "@/components/docs/page-header"
import { SkeletonDemo } from "./demo"

export default function SkeletonPage() {
  return (
    <>
      <PageHeader
        title="Skeleton"
        description="Placeholder loading animation for content."
      />
      <SkeletonDemo />
    </>
  )
}
