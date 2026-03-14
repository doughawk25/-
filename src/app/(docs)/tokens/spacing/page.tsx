"use client"

import { PageHeader } from "@/components/docs/page-header"
import { spacingTokens } from "@/lib/tokens"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export default function TokensSpacingPage() {
  return (
    <>
      <PageHeader
        title="Spacing Tokens"
        description="Consistent spacing scale based on a 4px grid. Click any value to copy."
      />

      <div className="space-y-3">
        {Object.entries(spacingTokens).map(([key, token]) => (
          <SpacingRow key={key} name={key} token={token} />
        ))}
      </div>
    </>
  )
}

function SpacingRow({
  name,
  token,
}: {
  name: string
  token: { value: string; rem: string; label: string }
}) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <button
      onClick={() => copy(token.rem)}
      className="flex w-full items-center gap-4 rounded-lg border border-border p-3 text-left hover:bg-muted/30 transition-colors"
    >
      <span className="w-12 text-sm font-mono font-medium shrink-0">
        {name}
      </span>
      <div
        className="h-6 rounded-sm bg-primary transition-all"
        style={{ width: token.value }}
      />
      <span className="text-xs text-muted-foreground font-mono ml-auto shrink-0">
        {token.value} / {token.rem}
      </span>
      {copied && (
        <span className="text-xs text-green-600 shrink-0">Copied!</span>
      )}
    </button>
  )
}
