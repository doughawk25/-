"use client"

import { PageHeader } from "@/components/docs/page-header"
import { DrawerDemo } from "./demo"

export default function DrawerPage() {
  return (
    <>
      <PageHeader
        title="Drawer"
        description="A panel that slides in from the edge of the screen."
      />
      <DrawerDemo />
    </>
  )
}
