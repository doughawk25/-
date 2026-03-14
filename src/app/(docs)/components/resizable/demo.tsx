"use client"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ResizableDemo() {
  return (
    <ComponentPreview
      name="Resizable"
      description="Resizable panel groups and handles."
      code={`<ResizablePanelGroup>
  <ResizablePanel>A</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>B</ResizablePanel>
</ResizablePanelGroup>`}
    >
      <ResizablePanelGroup className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-32 items-center justify-center p-6"><span className="font-semibold">Panel A</span></div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-32 items-center justify-center p-6"><span className="font-semibold">Panel B</span></div>
      </ResizablePanel>
    </ResizablePanelGroup>
    </ComponentPreview>
  )
}
