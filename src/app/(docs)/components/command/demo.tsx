"use client"

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"

import { ComponentPreview } from "@/components/docs/component-preview"

export function CommandDemo() {
  
  return (
    <ComponentPreview
      name="Command"
      description="Fast, composable command menu with search and keyboard navigation."
      code={`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Items">
      <CommandItem>Item 1</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
    >
      <Command className="rounded-lg border shadow-md w-full max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    </ComponentPreview>
  )
}
