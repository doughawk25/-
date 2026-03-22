export default function DoomPage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="overflow-hidden">
        <iframe
          src="https://silentspacemarine.com"
          className="border-0 block"
          style={{ width: 960, height: 720 }}
          title="Doom"
          allow="autoplay; pointer-lock"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock"
          scrolling="no"
        />
      </div>
    </div>
  )
}
