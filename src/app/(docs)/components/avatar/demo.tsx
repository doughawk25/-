"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ComponentPreview } from "@/components/docs/component-preview"

export function AvatarDemo() {
  
  return (
    <ComponentPreview
      name="Avatar"
      description="An image element with a fallback for representing the user."
      code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
    >
      <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>DH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
    </ComponentPreview>
  )
}
