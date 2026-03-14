"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ComponentPreview } from "@/components/docs/component-preview"

export function ChartDemo() {
  
  return (
    <ComponentPreview
      name="Chart"
      description="Chart components built on top of Recharts."
      code={`// See shadcn/ui chart documentation for full examples
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"`}
    >
      <Card className="w-full max-w-md">
      <CardHeader><CardTitle>Chart</CardTitle></CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Charts use Recharts under the hood. See the shadcn/ui chart docs for bar, line, area, pie, and radar chart examples.</p>
      </CardContent>
    </Card>
    </ComponentPreview>
  )
}
