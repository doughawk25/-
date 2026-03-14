"use client"

import { PageHeader } from "@/components/docs/page-header"
import { Card } from "@/components/ui/card"

export default function LogoPage() {
  return (
    <>
      <PageHeader
        title="Logo"
        description="The Monad logo and usage guidelines."
      />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Primary Logo</h2>
        <Card className="flex items-center justify-center p-12 bg-muted/30">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-4xl font-bold">
            M
          </div>
        </Card>
        <p className="text-sm text-muted-foreground">
          Replace this placeholder with your logo file. Add your SVG or PNG
          assets to the <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">/public</code> directory.
        </p>

        <h2 className="text-xl font-semibold mt-8">Usage Guidelines</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-medium mb-2">Clear Space</h3>
            <p className="text-sm text-muted-foreground">
              Maintain a minimum clear space around the logo equal to the height
              of the &ldquo;M&rdquo; mark on all sides.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-2">Minimum Size</h3>
            <p className="text-sm text-muted-foreground">
              The logo should never be displayed smaller than 24px in height to
              ensure legibility.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-2">On Dark Backgrounds</h3>
            <div className="mt-3 flex h-16 items-center justify-center rounded-lg bg-foreground">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-background text-foreground text-sm font-bold">
                M
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium mb-2">On Light Backgrounds</h3>
            <div className="mt-3 flex h-16 items-center justify-center rounded-lg bg-background border border-border">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
                M
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
