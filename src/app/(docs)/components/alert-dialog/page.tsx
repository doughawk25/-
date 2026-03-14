"use client"

import { PageHeader } from "@/components/docs/page-header"
import { AlertDialogDemo } from "./demo"

export default function AlertDialogPage() {
  return (
    <>
      <PageHeader
        title="Alert Dialog"
        description="Modal dialog that interrupts the user with important content and expects a response."
      />
      <AlertDialogDemo />
    </>
  )
}
