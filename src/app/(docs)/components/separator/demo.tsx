"use client"

import { Separator } from "@/components/ui/separator"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SeparatorDemo() {
  
  return (
    <ComponentPreview
      name="Separator"
      description="Visual divider between content sections."
      code={`<Separator />
<Separator orientation="vertical" />`}
    >
      <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Monad Design System</h4>
        <p className="text-sm text-muted-foreground">An open design system.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Tokens</div>
      </div>
    </div>
    </ComponentPreview>
  )
}
