"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/motion"

export function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <motion.div
      className="mb-8"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </motion.div>
  )
}
