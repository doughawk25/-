"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

import { ComponentPreview } from "@/components/docs/component-preview"

export function HoverCardDemo() {
  
  return (
    <ComponentPreview
      name="Hover Card"
      description="Card that appears on hover for previewing content."
      code={`<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Content</HoverCardContent>
</HoverCard>`}
    >
      <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>@monad</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">Monad Design System</h4>
          <p className="text-sm text-muted-foreground">Foundation, tokens, components, and motion.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
    </ComponentPreview>
  )
}
