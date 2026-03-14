"use client"

import { PageHeader } from "@/components/docs/page-header"
import { CheckboxDemo } from "./demo"

export default function CheckboxPage() {
  return (
    <>
      <PageHeader
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
      />
      <CheckboxDemo />
    </>
  )
}
