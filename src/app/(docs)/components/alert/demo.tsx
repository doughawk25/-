"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

import { ComponentPreview } from "@/components/docs/component-preview"

export function AlertDemo() {
  
  return (
    <ComponentPreview
      name="Alert"
      description="Displays a callout for important information."
      code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components.</AlertDescription>
</Alert>`}
    >
      <div className="w-full max-w-md space-y-4">
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
    </ComponentPreview>
  )
}
