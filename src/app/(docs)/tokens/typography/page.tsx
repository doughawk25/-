"use client"

import { PageHeader } from "@/components/docs/page-header"
import { TokenTable } from "@/components/docs/token-table"
import { typographyTokens } from "@/lib/tokens"

export default function TokensTypographyPage() {
  const sizeTokens = Object.entries(typographyTokens.fontSize).map(
    ([name, token]) => ({
      name,
      values: {
        rem: token.value,
        px: token.px,
        lineHeight: token.lineHeight,
      },
    })
  )

  const weightTokens = Object.entries(typographyTokens.fontWeight).map(
    ([name, token]) => ({
      name,
      values: { value: token.value, label: token.label },
    })
  )

  const spacingTokensData = Object.entries(typographyTokens.letterSpacing).map(
    ([name, token]) => ({
      name,
      values: { value: token.value },
    })
  )

  return (
    <>
      <PageHeader
        title="Typography Tokens"
        description="Font size, weight, and letter-spacing tokens."
      />

      <section className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Font Size</h2>
          <TokenTable
            tokens={sizeTokens}
            columns={[
              { key: "rem", label: "Value" },
              { key: "px", label: "Pixels" },
              { key: "lineHeight", label: "Line Height" },
            ]}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Font Weight</h2>
          <TokenTable
            tokens={weightTokens}
            columns={[
              { key: "value", label: "Value" },
              { key: "label", label: "Name" },
            ]}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Letter Spacing</h2>
          <TokenTable
            tokens={spacingTokensData}
            columns={[{ key: "value", label: "Value" }]}
          />
        </div>
      </section>
    </>
  )
}
