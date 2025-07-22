import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => setIsLoaded(true)
    const handleEnded = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoadStart = () => {
      // Sincronizar el estado con el autoplay
      if (audio.autoplay) {
        setIsPlaying(true)
      }
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("loadstart", handleLoadStart)

    // Verificar si el audio ya está reproduciéndose después del montaje
    setTimeout(() => {
      if (audio && !audio.paused && !audio.ended) {
        setIsPlaying(true)
      }
    }, 100)

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("loadstart", handleLoadStart)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
    }
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
      } else {
        await audio.play()
      }
    } catch (error) {
      console.error("Error al reproducir audio:", error)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="flex items-center gap-3"
        onMouseEnter={() => setShowVolumeControl(true)}
        onMouseLeave={() => setShowVolumeControl(false)}
      >
        {/* Volume Control - Desktop only */}
        <div
          className={`hidden md:flex items-center transition-all duration-300 ${showVolumeControl ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
            }`}
        >
          <div className="bg-slate-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
            <Volume2 className="w-4 h-4 text-white" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-slate-500 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Play/Pause Button */}
        <Button
          onClick={togglePlay}
          disabled={!isLoaded}
          size="lg"
          className="w-16 h-16 rounded-full bg-slate-700 hover:bg-slate-800 transition-colors shadow-lg"
        >
          {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
          <span className="sr-only">Control del reproductor de música</span>
        </Button>
      </div>
      <audio ref={audioRef} loop preload="auto" autoPlay>
        <source src="/img/nosotros/jodel.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}