'use client'

import { useState, useEffect } from 'react'
import { loadGallery, deleteFromGallery, isOwnEntry, type GalleryEntry } from '@/lib/gallery-storage'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function GalleryPage() {
  const [entries, setEntries] = useState<GalleryEntry[]>([])

  useEffect(() => {
    setEntries(loadGallery())
  }, [])

  const handleDelete = (id: string) => {
    if (deleteFromGallery(id)) {
      setEntries((prev) => prev.filter((e) => e.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-lg font-medium tracking-tight">Gallery</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {entries.length} {entries.length === 1 ? 'drawing' : 'drawings'} saved
        </p>
      </div>

      {entries.length === 0 ? (
        <div className="flex items-center justify-center py-32 text-sm text-muted-foreground">
          No drawings saved yet
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {entries.map((entry) => (
            <div key={entry.id} className="group">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-foreground/10">
                <img
                  src={entry.dataUrl}
                  alt={`Drawing from ${new Date(entry.createdAt).toLocaleDateString()}`}
                  className="h-full w-full object-cover"
                />
                {isOwnEntry(entry) && (
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => handleDelete(entry.id)}
                    aria-label="Delete drawing"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive bg-background/80 backdrop-blur-sm"
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span>
                  {new Date(entry.createdAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                  {' '}
                  {new Date(entry.createdAt).toLocaleTimeString(undefined, {
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </span>
                <span>{entry.width} x {entry.height}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
