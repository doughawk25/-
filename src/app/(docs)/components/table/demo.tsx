"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { ComponentPreview } from "@/components/docs/component-preview"

export function TableDemo() {
  
  return (
    <ComponentPreview
      name="Table"
      description="Responsive data table."
      code={`<Table>
  <TableHeader>
    <TableRow><TableHead>Name</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Value</TableCell></TableRow>
  </TableBody>
</Table>`}
    >
      <Table>
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell>Paid</TableCell><TableCell>Credit Card</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
        <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell>Pending</TableCell><TableCell>PayPal</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
        <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell>Paid</TableCell><TableCell>Bank Transfer</TableCell><TableCell className="text-right">$350.00</TableCell></TableRow>
      </TableBody>
    </Table>
    </ComponentPreview>
  )
}
