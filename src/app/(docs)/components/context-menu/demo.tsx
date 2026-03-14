"use client"

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator } from "@/components/ui/context-menu"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ContextMenuDemo() {
  
  return (
    <ComponentPreview
      name="Context Menu"
      description="Displays a menu on right-click."
      code={`<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Item</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
    >
      <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-full max-w-xs items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>View Source</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    </ComponentPreview>
  )
}
