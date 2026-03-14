"use client"

import { PageHeader } from "@/components/docs/page-header"
import { TabsDemo } from "./demo"

export default function TabsPage() {
  return (
    <>
      <PageHeader
        title="Tabs"
        description="Organize content into switchable panels."
      />
      <TabsDemo />
    </>
  )
}
