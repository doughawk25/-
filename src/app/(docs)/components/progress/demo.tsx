"use client"

import { Progress } from "@/components/ui/progress"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ProgressDemo() {
  
  return (
    <ComponentPreview
      name="Progress"
      description="Displays an indicator showing the completion progress of a task."
      code={`<Progress value={55} />`}
    >
      <div className="w-full max-w-md space-y-4">
      <Progress value={20} />
      <Progress value={55} />
      <Progress value={80} />
    </div>
    </ComponentPreview>
  )
}
