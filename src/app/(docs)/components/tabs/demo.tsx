"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ComponentPreview } from "@/components/docs/component-preview"

export function TabsDemo() {
  
  return (
    <ComponentPreview
      name="Tabs"
      description="Organize content into switchable panels."
      code={`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
</Tabs>`}
    >
      <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account"><p className="text-sm p-4">Account settings content.</p></TabsContent>
      <TabsContent value="password"><p className="text-sm p-4">Password settings content.</p></TabsContent>
    </Tabs>
    </ComponentPreview>
  )
}
