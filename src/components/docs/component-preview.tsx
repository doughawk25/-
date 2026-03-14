"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { CheckIcon, CopyIcon } from "lucide-react"

export function ComponentPreview({
  name,
  description,
  code,
  children,
}: {
  name: string
  description: string
  code: string
  children: React.ReactNode
}) {
  const { copied, copy } = useCopyToClipboard()
  const [activeTab, setActiveTab] = useState("preview")

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Card className="flex items-center justify-center p-8 min-h-[120px]">
            {children}
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative">
            <button
              onClick={() => copy(code)}
              className="absolute top-3 right-3 p-2 rounded-md hover:bg-muted transition-colors"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-600" />
              ) : (
                <CopyIcon className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            <pre className="rounded-lg border border-border bg-muted/50 p-4 overflow-x-auto">
              <code className="text-sm font-mono">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
