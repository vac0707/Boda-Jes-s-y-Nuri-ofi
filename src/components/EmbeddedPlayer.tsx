import { useEffect, useState, ChangeEvent } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { audioManager } from "../lib/audioManager";


export default function EmbeddedPlayer() {
  const [isPlaying, setIsPlaying] = useState(audioManager.isPlaying());
  const [currentTrack, setCurrentTrack] = useState(audioManager.getTrack());
  const [volume, setVolume] = useState(audioManager.getVolume());
  const [isMuted, setIsMuted] = useState(audioManager.isMuted());

  // Listen to audioManager changes
  useEffect(() => {
    const handleSync = () => {
      setIsPlaying(audioManager.isPlaying());
      setCurrentTrack(audioManager.getTrack());
      setVolume(audioManager.getVolume());
      isMuted !== audioManager.isMuted() && setIsMuted(audioManager.isMuted());
    };

    // Initial load sync
    handleSync();

    // Subscribe to updates
    return audioManager.subscribe(handleSync);
  }, [isMuted]);

  const handlePlayPause = () => {
    audioManager.togglePlay();
  };

  const handleNext = () => {
    audioManager.next();
  };

  const handlePrev = () => {
    audioManager.prev();
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextVolume = parseFloat(e.target.value);
    setVolume(nextVolume);
    audioManager.setVolume(nextVolume);
  };

  const handleToggleMute = () => {
    audioManager.setMuted(!isMuted);
  };

  return (
    <div className="w-full relative max-w-xs sm:max-w-sm bg-[#faf9f6] border border-[#dfb559]/30 rounded-lg p-3.5 my-5 shadow-[0_4px_12px_rgba(0,0,0,0.04)] select-none">
      {/* Decorative double-line gold trim border inside player */}
      <div className="absolute inset-1 border border-[#dfb559]/10 rounded-md pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Track Metadata */}
        <div className="text-center mb-2.5 w-full">
          <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold">
            Música de Fondo
          </p>
          <p className="font-serif text-sm font-semibold text-[#3a4b3d] tracking-wide mt-1 truncate max-w-[240px] mx-auto">
            {currentTrack.title}
          </p>
          <p className="font-serif text-[10px] italic text-[#c5a059]  truncate max-w-[200px] mx-auto leading-none mt-0.5">
            {currentTrack.artist}
          </p>
        </div>

        {/* Dynamic Equalizer Waves when playing */}
        <div className="h-4 flex items-center justify-center gap-0.5 mb-3.5">
          {isPlaying && !isMuted ? (
            <>
              <span className="w-[1.5px] h-2 bg-[#dfb559] animate-wave-sm rounded-sm" />
              <span className="w-[1.5px] h-3 bg-[#dfb559] animate-wave-md rounded-sm" style={{ animationDelay: "0.15s" }} />
              <span className="w-[1.5px] h-4 bg-[#dfb559] animate-wave-lg rounded-sm" style={{ animationDelay: "0.3s" }} />
              <span className="w-[1.5px] h-2.5 bg-[#dfb559] animate-wave-md rounded-sm" style={{ animationDelay: "0.45s" }} />
              <span className="w-[1.5px] h-1.5 bg-[#dfb559] animate-wave-sm rounded-sm" style={{ animationDelay: "0.6s" }} />
            </>
          ) : (
            <>
              <span className="w-[1.5px] h-1 bg-[#dfb559]/40 rounded-sm" />
              <span className="w-[1.5px] h-1 bg-[#dfb559]/40 rounded-sm" />
              <span className="w-[1.5px] h-1 bg-[#dfb559]/40 rounded-sm" />
              <span className="w-[1.5px] h-1 bg-[#dfb559]/40 rounded-sm" />
              <span className="w-[1.5px] h-1 bg-[#dfb559]/40 rounded-sm" />
            </>
          )}
        </div>

        {/* Mobile-Style Buttons deck: SkipBack, Play/Pause, SkipForward */}
        <div className="flex items-center justify-center gap-6 mb-3">
          {/* Skip Back */}
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full hover:bg-neutral-100 border border-neutral-200/50 text-[#555] hover:text-[#3a4b3d] transition-all cursor-pointer hover:scale-105 active:scale-95"
            title="Anterior"
          >
            <SkipBack className="w-4 h-4 fill-current text-stone-500 hover:text-stone-700" />
          </button>

          {/* Core Central Play/Pause */}
          <button
            onClick={handlePlayPause}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a4b3d] hover:bg-[#2e3b30] text-white transition-all duration-300 shadow-md cursor-pointer hover:scale-105 active:scale-95 relative group"
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying && (
              <span className="absolute -inset-1 rounded-full border border-[#3a4b3d]/20 animate-ping pointer-events-none" />
            )}

            {isPlaying ? (
              <Pause className="w-5 h-5 text-white fill-current" />
            ) : (
              <Play className="w-5 h-5 text-white fill-current translate-x-0.5" />
            )}
          </button>

          {/* Skip Forward */}
          <button
            onClick={handleNext}
            className="p-1.5 rounded-full hover:bg-neutral-100 border border-neutral-200/50 text-[#555] hover:text-[#3a4b3d] transition-all cursor-pointer hover:scale-105 active:scale-95"
            title="Siguiente"
          >
            <SkipForward className="w-4 h-4 fill-current text-stone-500 hover:text-stone-700" />
          </button>
        </div>

        {/* Volume deck (Elegant Slider) */}
        <div className="flex items-center gap-2.5 w-full max-w-[200px] px-2 mt-1">
          <button
            onClick={handleToggleMute}
            className="text-[#666] hover:text-[#c5a059] transition-colors cursor-pointer"
            title={isMuted ? "Quitar Silencio" : "Silenciar"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1 bg-[#dfb559]/20 rounded-lg appearance-none cursor-pointer accent-[#dfb559]"
          />
        </div>
      </div>

      <style>{`
        @keyframes wave-sm {
          0%, 100% { height: 4px; }
          50% { height: 10px; }
        }
        @keyframes wave-md {
          0%, 100% { height: 6px; }
          50% { height: 14px; }
        }
        @keyframes wave-lg {
          0%, 100% { height: 8px; }
          50% { height: 18px; }
        }
        .animate-wave-sm {
          animation: wave-sm 0.8s ease-in-out infinite alternate;
        }
        .animate-wave-md {
          animation: wave-md 1s ease-in-out infinite alternate;
        }
        .animate-wave-lg {
          animation: wave-lg 1.2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
