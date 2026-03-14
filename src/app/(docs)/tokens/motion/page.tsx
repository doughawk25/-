"use client"

import { PageHeader } from "@/components/docs/page-header"
import { Card } from "@/components/ui/card"
import { TokenTable } from "@/components/docs/token-table"
import { motionTokens } from "@/lib/tokens"

export default function TokensMotionPage() {
  const durationRows = Object.entries(motionTokens.duration).map(
    ([name, token]) => ({
      name,
      values: { value: token.value, description: token.description },
    })
  )

  const easingRows = Object.entries(motionTokens.easing).map(
    ([name, token]) => ({
      name,
      values: { value: token.value, description: token.description },
    })
  )

  return (
    <>
      <PageHeader
        title="Motion Tokens"
        description="Duration and easing values for consistent animation timing."
      />

      <section className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Duration</h2>
          <TokenTable
            tokens={durationRows}
            columns={[
              { key: "value", label: "Value" },
              { key: "description", label: "Usage" },
            ]}
          />
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Object.entries(motionTokens.duration).map(([key, token]) => (
              <Card key={key} className="p-4 group cursor-pointer">
                <p className="text-sm font-medium mb-2">{token.label}</p>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary w-0 group-hover:w-full"
                    style={{
                      transition: `width ${token.value} ease-out`,
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  {token.value}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Easing</h2>
          <TokenTable
            tokens={easingRows}
            columns={[
              { key: "value", label: "Value" },
              { key: "description", label: "Usage" },
            ]}
          />
        </div>
      </section>
    </>
  )
}
