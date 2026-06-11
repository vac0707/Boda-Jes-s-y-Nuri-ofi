import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import EmbeddedPlayer from "./EmbeddedPlayer";


export default function Hero() {
  const { t, lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 bg-[#1f2620] overflow-hidden select-none"
    >
      {/* Radial luxurious soft light centered on background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_75%)] pointer-events-none z-0" />

      {/* Persistent floating particles on main body top */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-[30%] left-[10%] w-1.5 h-1.5 bg-[#dfb559]/50 rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[12%] w-2 h-2 bg-[#dfb559]/30 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute top-[60%] right-[20%] w-1 h-1 bg-[#dfb559]/40 rounded-full animate-pulse" style={{ animationDuration: "5s" }} />
      </div>

      {/* CARTA PRINCIPAL (Highly physical layered paper layout) */}
      <motion.div
        style={{
          y: scrollY * -0.15,
          scale: Math.max(0.95, 1 - scrollY * 0.0001),
        }}
        className="relative w-full max-w-xl min-h-[85vh] sm:min-h-[80vh] bg-[#faf9f6] rounded-xs border-4 border-[#dfb559] p-6 sm:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between items-center z-10 transition-transform duration-75 ease-out pb-20 pt-16 sm:pb-24 sm:pt-20"
      >
        {/* Paper texture overlay helper */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_100%)] opacity-70 z-0" />
        
        {/* Double-line fine-art golden border */}
        <div className="absolute inset-2 sm:inset-3 border border-[#dfb559]/40 rounded-xs pointer-events-none" />
        <div className="absolute inset-3.5 sm:inset-5 border border-dashed border-[#dfb559]/15 rounded-xs pointer-events-none" />

        {/* Traditional Elegant Corners */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#dfb559]" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#dfb559]" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#dfb559]" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#dfb559]" />

        {/* Floral Top Ornament */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[220px] sm:w-[310px] pointer-events-none z-10 select-none">
          <img
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781019313/decoracion_ff5mrl.png"
            alt="Decoración floral superior"
            className="w-full h-auto opacity-95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floral Bottom Ornament */}
        <div className="absolute bottom-2 right-2 w-[180px] sm:w-[260px] pointer-events-none z-10 select-none">
          <img
            src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781019737/decoracion_parte_abajo_rg1qhy.png"
            alt="Decoración floral inferior"
            className="w-full h-auto opacity-95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Top Flourish */}
        <div className="mt-6 flex flex-col items-center z-10">
          <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dfb559]/50 to-transparent mt-2" />
        </div>

        {/* Core Bridal Content in Editorial Format */}
        <div className="text-center my-auto flex flex-col items-center z-10 px-2 w-full mt-4">
          {/* Couple Romantic Portrait Portada Cover */}
          <div className="relative w-[310px] sm:w-[420px] mb-6 select-none flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781135147/SOBRE_FOTO_PRINCIPAL_xmzrtw.png"
              alt="Jesús y Nuri"
              className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.07)]"
              referrerPolicy="no-referrer"
            />
          </div>


          {/* Groom Names */}
          <h1 className="font-great-vibes text-5xl sm:text-7xl text-[#3a4b3d] leading-none mb-1 select-none font-normal">
            Jesús Manuel
          </h1>
          <span className="font-serif text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-[#d49c30] block mt-1 font-light">
            Ramírez Bravo
          </span>

          {/* Golden Elegant & Connector */}
          <div className="flex items-center justify-center gap-5 my-3">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#dfb559]/60" />
            <span className="font-wedding text-4xl sm:text-5xl text-[#c5a059] italic font-light">&</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#dfb559]/60" />
          </div>

          {/* Bride Names */}
          <h1 className="font-great-vibes text-5xl sm:text-7xl text-[#3a4b3d] leading-none mb-1 select-none font-normal">
            Nuri Aydee
          </h1>
          <span className="font-serif text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-[#d49c30] block mt-1 font-light mb-4">
            Cuevas Huchamaco
          </span>

          {/* Embedded Mobile Style Media Player */}
          <EmbeddedPlayer />

          {/* Sacred Ceremony Date */}
          <div className="mt-10 border-t border-b border-[#dfb559]/25 py-3.5 px-8 font-sans font-bold tracking-[0.25em] text-[#d49c30] text-[11px] sm:text-xs uppercase bg-[#faf9f6]/80 backdrop-blur-[1px] relative">
            SÁBADO • 05 SEPTIEMBRE • 2026
          </div>

          {/* Romantice Scripture */}
          <p className="font-serif text-sm sm:text-base italic text-[#58715c] leading-relaxed max-w-sm mt-8 px-4 font-light text-center">
            {lang === "es"
              ? '"Dos almas con un solo pensamiento, dos corazones que laten como uno solo."'
              : '"Two souls with but a single thought, two hearts that beat as one."'}
          </p>
        </div>

        {/* Footer Brand Credential */}
        <div className="text-center mb-6 z-10 flex flex-col items-center">
          <div className="w-8 h-[1px] bg-[#dfb559]/40 mb-2" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#d49c30]/90 font-bold block">
            AREQUIPA • PERÚ
          </span>
          
          {/* Scroll instruction indicator */}
          <div className="mt-6 flex flex-col items-center animate-bounce duration-1000">
            <span className="text-[7.5px] uppercase tracking-[0.2em] text-[#93aa96] font-bold">
              {lang === "es" ? "Desliza para leer" : "Scroll to open"}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#dfb559] mt-1" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
