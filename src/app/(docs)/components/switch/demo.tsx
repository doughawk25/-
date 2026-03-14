"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import { ComponentPreview } from "@/components/docs/component-preview"

export function SwitchDemo() {
  
  return (
    <ComponentPreview
      name="Switch"
      description="Toggle control that is either on or off."
      code={`<div className="flex items-center space-x-2">
  <Switch id="mode" />
  <Label htmlFor="mode">Dark Mode</Label>
</div>`}
    >
      <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="notifications" defaultChecked />
        <Label htmlFor="notifications">Notifications</Label>
      </div>
    </div>
    </ComponentPreview>
  )
}
