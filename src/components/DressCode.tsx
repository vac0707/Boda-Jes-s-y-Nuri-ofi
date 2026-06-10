import { motion } from "motion/react";
import { useLanguage } from "../hooks/useLanguage";

export default function DressCode() {
  const { t, lang } = useLanguage();

  return (
    <section id="codigo-vestimenta" className="relative py-28 px-4 sm:px-6 bg-[#1e2a21] overflow-hidden text-center text-white">
      {/* Background soft ambient radial gold light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <img
              src="https://res.cloudinary.com/dcnynnstm/image/upload/v1781029996/Sin_t%C3%ADtulo-1_ykahik.png"
              alt="Código de vestimenta"
              className="w-14 h-14 object-contain mb-4 select-none"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#dfb559] uppercase font-bold">
              {lang === "es" ? "REQUISITO DE ETIQUETA" : "DRESS CODE"}
            </span>
            <h2 className="font-great-vibes text-5.5xl sm:text-7xl text-white mt-2 mb-2 select-none font-normal leading-none">
              {t("dress_code.title")}
            </h2>
            <div className="w-16 h-[0.5px] bg-[#dfb559]/40 mt-4" />
          </motion.div>
        </div>

        {/* Simplified Icons Grid in the same elegant style of the Itinerary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto mt-4">
          {/* Ladies */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col items-center p-4 rounded-xl"
          >
            {/* Elegant Vector Gown Silhouette Icon inside a delicate circle border */}
            <div className="w-20 h-20 rounded-full border border-[#dfb559]/30 flex items-center justify-center bg-white/2 mb-6 shadow-md shadow-[#151d17]">
              <svg viewBox="0 0 100 100" fill="none" stroke="#dfb559" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[44px] h-[44px] select-none pointer-events-none filter drop-shadow-[0_1px_2px_rgba(223,181,89,0.15)]">
                {/* Gown silhouette */}
                <path d="M47 26 C47 22, 53 22, 53 26" strokeWidth="1.2" />
                <path d="M38 34 L43 29 H57 L62 34" />
                <path d="M43 29 L45 48 L50 46 L55 48 L57 29" fill="#dfb559" fillOpacity="0.05" />
                <path d="M45 48 L32 84 H68 L55 48" fill="#dfb559" fillOpacity="0.1" />
                <line x1="50" y1="46" x2="50" y2="84" strokeWidth="0.8" opacity="0.6" />
                <line x1="47" y1="47" x2="41" y2="84" strokeWidth="0.8" opacity="0.4" />
                <line x1="53" y1="47" x2="59" y2="84" strokeWidth="0.8" opacity="0.4" />
              </svg>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#dfb559] tracking-wide font-normal mb-1">
              {lang === "es" ? "Damas" : "Ladies"}
            </h3>
            <p className="text-xs font-sans tracking-[0.2em] text-[#8a9a5b] uppercase font-bold mb-3">
              {lang === "es" ? "Vestido Largo" : "Formal Long Dress"}
            </p>
            <p className="text-xs font-serif italic text-gray-300 max-w-xs leading-relaxed opacity-90">
              {lang === "es" 
                ? "Evitar el color blanco, marfil o crema." 
                : "Kindly avoid wearing white, ivory, or cream."}
            </p>
          </motion.div>

          {/* Gentlemen */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col items-center p-4 rounded-xl"
          >
            {/* Elegant Vector Tuxedo and Bowtie Silhouette Icon */}
            <div className="w-20 h-20 rounded-full border border-[#dfb559]/30 flex items-center justify-center bg-white/2 mb-6 shadow-md shadow-[#151d17]">
              <svg viewBox="0 0 100 100" fill="none" stroke="#dfb559" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-[44px] h-[44px] select-none pointer-events-none filter drop-shadow-[0_1px_2px_rgba(223,181,89,0.15)]">
                {/* Gentleman suit jacket outline */}
                <path d="M26 28 L40 48 L26 54" />
                <path d="M74 28 L60 48 L74 54" />
                <path d="M40 28 L50 46 L60 28" />
                <path d="M32 28 L44 52 H56 L68 28" fill="#dfb559" fillOpacity="0.05" />
                <path d="M44 52 L40 82 H60 L56 52" fill="#dfb559" fillOpacity="0.1" />
                {/* Bowtie */}
                <path d="M44 41 L56 45 L44 45 L56 41 Z" fill="#dfb559" />
                <circle cx="50" cy="43" r="2" fill="#dfb559" />
                {/* Buttons */}
                <circle cx="50" cy="59" r="1.5" fill="#dfb559" />
                <circle cx="50" cy="69" r="1.5" fill="#dfb559" />
              </svg>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#dfb559] tracking-wide font-normal mb-1">
              {lang === "es" ? "Caballeros" : "Gentlemen"}
            </h3>
            <p className="text-xs font-sans tracking-[0.2em] text-[#8a9a5b] uppercase font-bold mb-3">
              {lang === "es" ? "Traje Oscuro" : "Formal Suit"}
            </p>
            <p className="text-xs font-serif italic text-gray-300 max-w-xs leading-relaxed opacity-90">
              {lang === "es" 
                ? "Uso de traje formal oscuro obligatorio." 
                : "Dark formal suit or tuxedo is required."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
