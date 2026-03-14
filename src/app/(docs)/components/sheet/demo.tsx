"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SheetDemo() {
  
  return (
    <ComponentPreview
      name="Sheet"
      description="Extends the Dialog component to display content that slides in from the edge."
      code={`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader><SheetTitle>Title</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`}
    >
      <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a sheet panel.</SheetDescription>
        </SheetHeader>
        <div className="p-4"><p className="text-sm text-muted-foreground">Sheet content goes here.</p></div>
      </SheetContent>
    </Sheet>
    </ComponentPreview>
  )
}
