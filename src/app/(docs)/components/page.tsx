import { PageHeader } from "@/components/docs/page-header"
import { componentList } from "@/lib/tokens"
import Link from "next/link"

function formatName(slug: string) {
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

export default function ComponentsIndexPage() {
  return (
    <>
      <PageHeader
        title="Components"
        description="All shadcn/ui components installed in the system. Each is owned in your repo and fully customizable."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {componentList.map((c) => (
          <Link
            key={c}
            href={`/components/${c}`}
            className="rounded-lg border border-border p-4 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            {formatName(c)}
          </Link>
        ))}
      </div>
    </>
  )
}
