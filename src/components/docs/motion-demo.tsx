"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayIcon, RotateCcwIcon } from "lucide-react"

export function MotionDemo({
  name,
  description,
  variants,
}: {
  name: string
  description: string
  variants: Variants
}) {
  const [key, setKey] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const replay = () => {
    setIsPlaying(false)
    setTimeout(() => {
      setKey((k) => k + 1)
      setIsPlaying(true)
    }, 50)
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button variant="outline" size="sm" onClick={replay}>
          <RotateCcwIcon className="h-3.5 w-3.5 mr-1.5" />
          Replay
        </Button>
      </div>
      <div className="flex items-center justify-center h-32 rounded-md bg-muted/50">
        <AnimatePresence mode="wait">
          {isPlaying && (
            <motion.div
              key={key}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-16 w-16 rounded-lg bg-primary"
            />
          )}
        </AnimatePresence>
      </div>
    </Card>
  )
}
