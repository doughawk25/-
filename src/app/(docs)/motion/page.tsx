"use client"

import { motion } from "framer-motion"
import { PageHeader } from "@/components/docs/page-header"
import { MotionDemo } from "@/components/docs/motion-demo"
import { Card } from "@/components/ui/card"
import { allVariants, staggerContainer, staggerItem } from "@/lib/motion"

export default function MotionPage() {
  return (
    <>
      <PageHeader
        title="Motion"
        description="Reusable Framer Motion animation variants. Click Replay to see each animation."
      />

      <section className="space-y-6 mb-12">
        <h2 className="text-lg font-semibold">Animation Variants</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(allVariants).map(([key, variant]) => (
            <MotionDemo
              key={key}
              name={variant.label}
              description={variant.description}
              variants={variant.variants}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Stagger Container</h2>
        <p className="text-sm text-muted-foreground">
          Wrap child elements with <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">staggerContainer</code> and
          apply <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">staggerItem</code> to each child for
          sequenced entrance animations.
        </p>
        <Card className="p-6">
          <motion.div
            className="grid grid-cols-4 gap-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="h-16 rounded-lg bg-primary/80"
              />
            ))}
          </motion.div>
        </Card>
      </section>
    </>
  )
}
