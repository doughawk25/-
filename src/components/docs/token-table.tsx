"use client"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { CheckIcon, CopyIcon } from "lucide-react"

export function TokenTable({
  tokens,
  columns,
}: {
  tokens: { name: string; values: Record<string, string> }[]
  columns: { key: string; label: string }[]
}) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-medium">Token</th>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-medium">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr
              key={token.name}
              className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
            >
              <td className="px-4 py-3 font-mono text-xs font-medium">
                {token.name}
              </td>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3">
                  <button
                    onClick={() => copy(token.values[col.key] || "")}
                    className="group inline-flex items-center gap-2 font-mono text-xs"
                  >
                    {token.values[col.key]}
                    {copied ? (
                      <CheckIcon className="h-3 w-3 text-green-600" />
                    ) : (
                      <CopyIcon className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
