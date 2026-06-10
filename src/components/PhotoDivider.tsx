import { motion } from "motion/react";

interface PhotoDividerProps {
  imageUrl: string;
  alt?: string;
}

export default function PhotoDivider({ imageUrl, alt = "Jesús y Nuri" }: PhotoDividerProps) {
  return (
    <div className="relative py-8 sm:py-12 bg-[#faf9f6]/30 flex justify-center items-center overflow-hidden px-4 sm:px-6 select-none">
      {/* Decorative top/bottom gold line separators */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      {/* Luxury Framed Wedding Photo */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-[21/9] rounded-lg overflow-hidden border border-[#dfb559]/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-[#233025] group"
      >
        {/* Soft Double Accent Frame */}
        <div className="absolute inset-2 sm:inset-3 border border-[#dfb559]/25 rounded-md pointer-events-none z-10" />
        <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#dfb559]/10 rounded-md pointer-events-none z-10" />
        
        {/* Smooth hover micro-zoom on image */}
        <img
          src={imageUrl}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover select-none pointer-events-none scale-101 transform duration-[8000ms] group-hover:scale-104 transition-transform ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Warm Vignette Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none z-0" />
      </motion.div>
    </div>
  );
}
