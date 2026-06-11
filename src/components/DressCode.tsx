import { motion } from "motion/react";
import { useLanguage } from "../hooks/useLanguage";

export default function DressCode() {
  const { lang } = useLanguage();

  return (
    <section id="codigo-vestimenta" className="relative py-28 px-4 sm:px-6 bg-[#faf9f6]/95 overflow-hidden text-center text-[#3a4b3d]">
      {/* Background soft ambient radial gold light for a luxurious glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_75%)] pointer-events-none" />

      {/* Decorative upper linear thin border */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/25 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Vector line art Dress and Tie side-by-side using thin stroke lines, same level/class as other sections */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-5 text-[#8a9a5b] hover:scale-103 transition-transform duration-500 ease-out select-none"
        >
          <svg
            viewBox="0 0 120 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-36 h-28 opacity-95 filter drop-shadow-sm"
          >
            {/* Elegant Dress on the left (centered around X=40) */}
            {/* Bust, straps and waist outline */}
            <path d="M 30 25 L 34 40 L 18 85 H 62 L 46 40 L 50 25" />
            {/* Neckline curve */}
            <path d="M 30 25 Q 40 28, 50 25" />
            {/* Waistband line */}
            <path d="M 34 40 Q 40 41, 46 40" />
            {/* Skirt flows / vertical folds */}
            <path d="M 34 40 C 32 55, 26 75, 25 85" />
            <path d="M 40 41 V 85" />
            <path d="M 46 40 C 48 55, 54 75, 55 85" />

            {/* Elegant Tie on the right (centered around X=84) */}
            {/* Knot */}
            <path d="M 78 25 H 90 L 87 33 H 81 Z" />
            {/* Body of the tie */}
            <path d="M 81 33 L 80 72 L 84 78 L 88 72 L 87 33" />
            {/* Small tie helper crease line */}
            <line x1="84" y1="36" x2="84" y2="72" strokeWidth="0.8" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Informative Text Block in luxurious layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="w-full text-center flex flex-col items-center"
        >
          {/* Header Title echoing the Ceremonia Religiosa styling perfectly */}
          <h3 className="font-great-vibes text-6xl sm:text-7xl text-[#849685] tracking-wide mb-3 select-none leading-none">
            Código de vestimenta
          </h3>

          {/* Subheading echoing the same block styling */}
          <span className="font-serif text-[15px] sm:text-[17px] text-[#4a5f4e]/90 font-bold uppercase tracking-[0.12em] text-center max-w-sm px-4 leading-snug">
            Etiqueta
          </span>

          <div className="w-12 h-[0.5px] bg-[#dfb559]/35 mx-auto mt-6 mb-6" />

          {/* Body description exactly matching the image specification */}
          <p className="font-serif text-[15px] sm:text-[16.5px] text-[#718c75] font-light tracking-wide max-w-lg mx-auto leading-relaxed uppercase">
            Mujeres: Vestidos largos, evitar el color blanco y rojo.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
