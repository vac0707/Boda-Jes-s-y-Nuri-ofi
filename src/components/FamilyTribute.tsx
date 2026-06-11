import { motion } from "motion/react";
import { Users } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function FamilyTribute() {
  const { t, lang } = useLanguage();
  return (
    <section id="cortejo-familia" className="relative py-28 px-4 sm:px-6 bg-[#faf9f6]/95 overflow-hidden text-center text-[#3a4b3d]">
      {/* Delicate upper linear gold border */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Users className="w-5 h-5 text-[#dfb559] mb-4" />
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#8A9A5B] uppercase font-bold">
              {t("family.blessing")}
            </span>
            <h2 className="font-great-vibes text-5.5xl sm:text-7xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("family.title")}
            </h2>
            <div className="w-16 h-[0.5px] bg-[#dfb559]/40 mt-4" />
            <p className="text-[#666]/90 text-sm font-serif italic mt-6 max-w-lg leading-relaxed">
              {t("family.quote")}
            </p>
          </motion.div>
        </div>

        {/* Minimalist, Highly Fashionable Editorial Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start text-center relative max-w-4xl mx-auto"
        >
          {/* Column 1: Parents of the Bride */}
          <div className="flex flex-col items-center px-6 md:pb-6 relative h-full">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold mb-4 block">
              {t("family.bride_parents")}
            </span>
            <div className="w-8 h-[0.5px] bg-[#dfb559]/35 mb-6" />
            <div className="space-y-4">
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                Reyna Huchamaco de Cuevas
              </p>
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                Enrique Cuevas Halanoca
              </p>
            </div>
          </div>

          {/* Column 2: Parents of the Groom with vertical borders */}
          <div className="flex flex-col items-center px-6 md:pb-6 relative h-full md:border-x border-[#dfb559]/25">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold mb-4 block">
              {t("family.groom_parents")}
            </span>
            <div className="w-8 h-[0.5px] bg-[#dfb559]/35 mb-6" />
            <div className="space-y-4">
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                José Pompeyo Ramírez Gil
              </p>
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                Graciela Bravo Portal
              </p>
            </div>
          </div>

          {/* Column 3: Godparents (Padrinos) */}
          <div className="flex flex-col items-center px-6 md:pb-6 relative h-full">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold mb-4 block">
              {t("family.godparents")}
            </span>
            <div className="w-8 h-[0.5px] bg-[#dfb559]/35 mb-6" />
            <div className="space-y-4">
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                Carlos Alberto Nina Apaza
              </p>
              <p className="font-serif text-[17px] sm:text-[19px] text-[#3a4b3d] font-medium leading-relaxed tracking-wide">
                Yen y Virginia Velasquez Velasquez
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
