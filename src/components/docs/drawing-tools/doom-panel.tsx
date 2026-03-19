'use client'

import { useDrawingContext } from '@/context/drawing-context'
import { GripHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { transitions } from '@/lib/motion'
import { useRef, useState, useCallback, useEffect } from 'react'

const GAME_W = 640
const GAME_H = 480
const TITLE_H = 32

export function DoomPanel() {
  const { mode, setMode } = useDrawingContext()
  const panelRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  // Center on mount
  useEffect(() => {
    if (mode === 'doom' && pos === null) {
      setPos({
        x: Math.round((window.innerWidth - GAME_W) / 2),
        y: Math.round((window.innerHeight - GAME_H - TITLE_H) / 2),
      })
    }
    if (mode !== 'doom') setPos(null)
  }, [mode])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    offset.current = {
      x: e.clientX - (pos?.x ?? 0),
      y: e.clientY - (pos?.y ?? 0),
    }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [pos])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    })
  }, [])

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  if (mode !== 'doom' || pos === null) return null

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1, transition: transitions.normal }}
      exit={{ opacity: 0, scale: 0.97, transition: transitions.fast }}
      className="fixed z-30 rounded-lg overflow-hidden shadow-[0_0_80px_20px_rgba(255,100,50,0.15)] border border-foreground/10"
      style={{ left: pos.x, top: pos.y, width: GAME_W }}
    >
      {/* Title bar — drag handle on right */}
      <div
        className="flex h-8 items-center justify-end bg-background/95 backdrop-blur-md border-b border-foreground/10"
      >
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="flex h-full items-center px-2 cursor-grab active:cursor-grabbing select-none"
        >
          <GripHorizontal className="size-3.5 text-foreground/40" />
        </div>
      </div>
      <iframe
        src="https://silentspacemarine.com"
        className="border-0 bg-black"
        style={{ width: GAME_W, height: GAME_H }}
        title="Doom"
        allow="autoplay; pointer-lock"
        sandbox="allow-scripts allow-same-origin allow-pointer-lock"
        scrolling="no"
      />
    </motion.div>
  )
}
