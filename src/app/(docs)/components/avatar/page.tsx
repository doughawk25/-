"use client"

import { PageHeader } from "@/components/docs/page-header"
import { AvatarDemo } from "./demo"

export default function AvatarPage() {
  return (
    <>
      <PageHeader
        title="Avatar"
        description="An image element with a fallback for representing the user."
      />
      <AvatarDemo />
    </>
  )
}
