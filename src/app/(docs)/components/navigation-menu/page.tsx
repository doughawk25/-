"use client"

import { PageHeader } from "@/components/docs/page-header"
import { NavigationMenuDemo } from "./demo"

export default function NavigationMenuPage() {
  return (
    <>
      <PageHeader
        title="Navigation Menu"
        description="A collection of links for navigating websites."
      />
      <NavigationMenuDemo />
    </>
  )
}
