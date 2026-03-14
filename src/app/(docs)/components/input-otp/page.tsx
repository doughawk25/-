"use client"

import { PageHeader } from "@/components/docs/page-header"
import { InputOtpDemo } from "./demo"

export default function InputOtpPage() {
  return (
    <>
      <PageHeader
        title="Input Otp"
        description="One-time password input with auto-advance."
      />
      <InputOtpDemo />
    </>
  )
}
