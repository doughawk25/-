import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center bg-background">
      <Button variant="ghost" size="lg" render={<Link href="/foundation/logo" />}>
        Design System
      </Button>
    </main>
  )
}
