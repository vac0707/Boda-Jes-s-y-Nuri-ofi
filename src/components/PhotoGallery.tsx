import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryImage } from "../types";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Grid, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function PhotoGallery() {
  const { t, lang } = useLanguage();
  const images: GalleryImage[] = [
    { id: "g1", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/22_wynwmc.jpg" },
    { id: "g2", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/21_jt3htx.jpg" },
    { id: "g3", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968211/20_b1j6c3.jpg" },
    { id: "g4", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1781037647/18_tdejrr.jpg" },
    { id: "g5", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968210/19_iish3a.jpg" },
    { id: "g6", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968209/17_haxco8.jpg" },
    { id: "g7", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968208/15_t6ytut.jpg" },
    { id: "g8", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968208/14_e9ahwa.jpg" },
    { id: "g9", url: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968207/13_kxohl4.jpg" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layoutMode, setLayoutMode] = useState<"grid" | "carousel">("grid");
  const carouselRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="galeria" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Box */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Sparkles className="w-5 h-5 text-[#dfb559] mb-4 animate-spin" style={{ animationDuration: "12s" }} />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {lang === "es" ? "Nuestros Recuerdos" : "Our Memories"}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {lang === "es" ? "Galería de Fotos" : "Photo Gallery"}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-5 max-w-sm leading-relaxed">
              {lang === "es"
                ? "Un recorrido independiente por instantes y sonrisas de complicidad eterna."
                : "A separate journey highlighting beautiful moments of static timeless romance."}
            </p>
          </motion.div>

          {/* Layout Mode Control */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#8A9A5B] font-bold">
              {lang === "es" ? "Estilo:" : "Layout:"}
            </span>
            <div className="p-1 bg-[#F1EFE9] border border-[#dfb559]/25 rounded-sm flex shadow-inner">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`p-2 rounded-sm transition-all cursor-pointer ${
                  layoutMode === "grid"
                    ? "bg-[#c5a059] text-white shadow-md"
                    : "text-sage-600 hover:text-sage-950"
                }`}
                title={lang === "es" ? "Mosaico Editorial" : "Editorial Masonry"}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode("carousel")}
                className={`p-2 rounded-sm transition-all cursor-pointer ${
                  layoutMode === "carousel"
                    ? "bg-[#c5a059] text-white shadow-md"
                    : "text-sage-600 hover:text-[#333]"
                }`}
                title={lang === "es" ? "Carrusel Deslizable" : "Cinematic Slider"}
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display Render */}
        <AnimatePresence mode="wait">
          {layoutMode === "grid" ? (
            <motion.div
              key="grid-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {images.map((img, idx) => (
                <motion.div
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: (idx % 3) * 0.08 }}
                  className="break-inside-avoid relative overflow-hidden rounded-xs group border-2 border-[#dfb559]/20 hover:border-[#dfb559]/70 shadow-md cursor-pointer bg-cream-50"
                >
                  <img
                    src={img.url}
                    alt="Colección de amor Jesús y Nuri"
                    loading="lazy"
                    className="w-full object-cover select-none pointer-events-none transform transition-all duration-[1000ms] group-hover:scale-103 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Golden Frame Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <div className="absolute inset-3 border-2 border-[#dfb559]/60 rounded-xs transform scale-90 group-hover:scale-100 transition-transform duration-500" />
                    <motion.div className="p-3 bg-[#faf9f6] rounded-xs text-[#333] shadow-2xl relative z-10 border border-[#dfb559]/30">
                      <Maximize2 className="w-4 h-4 text-[#c5a059]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="carousel-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="relative w-full"
            >
              {/* Carousel container with touch overflow scrolling */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-none px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {images.map((img, idx) => (
                  <div
                    key={img.id}
                    onClick={() => openLightbox(idx)}
                    className="flex-none w-[290px] sm:w-[350px] aspect-[4/5] snap-center rounded-xs overflow-hidden bg-white border-2 border-[#dfb559]/20 hover:border-[#dfb559]/75 shadow-lg cursor-pointer group relative"
                  >
                    <img
                      src={img.url}
                      alt="Colección de amor Jesús y Nuri"
                      loading="lazy"
                      className="w-full h-full object-cover select-none pointer-events-none transform transition-transform duration-[10000ms] group-hover:scale-104"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient base on list cards */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Maximize zoom floating button */}
                    <div className="absolute bottom-4 right-4 p-3 rounded-full bg-[#faf9f6]/95 text-[#dfb559] border border-[#dfb559]/30 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Arrow Controls */}
              <div className="flex justify-center gap-4 mt-2">
                <button
                  onClick={scrollLeft}
                  className="p-3 rounded-full border border-[#dfb559]/40 bg-[#faf9f6] text-sage-600 hover:text-white hover:bg-[#c5a059] shadow-md transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 font-bold" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3 rounded-full border border-[#dfb559]/40 bg-[#faf9f6] text-sage-600 hover:text-white hover:bg-[#c5a059] shadow-md transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 font-bold" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Lightbox Popup with Gold corner detailing & slide paths */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 select-none"
              onClick={closeLightbox}
            >
              {/* Decorative corner framing in full screen */}
              <div className="absolute inset-8 border border-white/5 pointer-events-none" />

              {/* Quick exit hook */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all border border-white/10 cursor-pointer"
                title={lang === "es" ? "Cerrar" : "Close"}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Previous Image trigger */}
              <button
                onClick={showPrev}
                className="absolute left-4 p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all border border-white/10 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Expanded Image Card */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl max-h-[85vh] px-4 overflow-hidden relative flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[lightboxIndex].url}
                  alt="Expanded love memories"
                  className="max-w-full max-h-[75vh] object-contain rounded-xs border-2 border-[#dfb559] shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                  referrerPolicy="no-referrer"
                />

                <span className="text-[#dfb559] text-[10px] tracking-[0.25em] font-bold uppercase mt-6 select-none font-sans block text-center">
                  {lang === "es"
                    ? `Fotografía ${lightboxIndex + 1} de ${images.length}`
                    : `Photograph ${lightboxIndex + 1} of ${images.length}`}
                </span>
              </motion.div>

              {/* Next Image trigger */}
              <button
                onClick={showNext}
                className="absolute right-4 p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all border border-white/10 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
