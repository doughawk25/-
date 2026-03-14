"use client"

import { PageHeader } from "@/components/docs/page-header"
import { Card } from "@/components/ui/card"
import { typographyTokens } from "@/lib/tokens"

export default function FoundationTypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        description="Type specimens and font families used across the Monad system."
      />

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Font Families</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(typographyTokens.fontFamily).map(([key, font]) => (
              <Card key={key} className="p-6">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {font.label}
                </p>
                <p
                  className="text-3xl mb-3"
                  style={{ fontFamily: key === "mono" ? "var(--font-ibm-plex-mono)" : "var(--font-ibm-plex-sans)" }}
                >
                  Aa Bb Cc Dd Ee
                </p>
                <p className="text-sm text-muted-foreground">
                  {font.description}
                </p>
                <code className="mt-2 block text-xs font-mono text-muted-foreground">
                  {font.value}
                </code>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Type Scale</h2>
          <Card className="divide-y divide-border">
            {Object.entries(typographyTokens.fontSize).map(([key, size]) => (
              <div key={key} className="flex items-baseline gap-4 px-6 py-4">
                <span className="w-12 text-xs font-mono text-muted-foreground shrink-0">
                  {key}
                </span>
                <span className="w-16 text-xs text-muted-foreground shrink-0">
                  {size.px}
                </span>
                <span style={{ fontSize: size.value, lineHeight: size.lineHeight }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            ))}
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Font Weights</h2>
          <Card className="divide-y divide-border">
            {Object.entries(typographyTokens.fontWeight).map(([key, weight]) => (
              <div key={key} className="flex items-baseline gap-4 px-6 py-4">
                <span className="w-24 text-xs font-mono text-muted-foreground shrink-0">
                  {weight.label} ({weight.value})
                </span>
                <span className="text-xl" style={{ fontWeight: weight.value }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            ))}
          </Card>
        </div>
      </section>
    </>
  )
}
