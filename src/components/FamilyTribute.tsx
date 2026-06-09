import { motion } from "motion/react";
import { Heart, Users, Star, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function FamilyTribute() {
  const { t, lang } = useLanguage();
  return (
    <section id="cortejo-familia" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden text-center">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Users className="w-5 h-5 text-[#dfb559] mb-4" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("family.blessing")}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("family.title")}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-6 max-w-lg leading-relaxed">
              {t("family.quote")}
            </p>
          </motion.div>
        </div>

        {/* Family Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {/* Parents of the Bride */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="bg-[#faf9f6]/40 border border-[#dfb559]/30 rounded-lg p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative flex flex-col justify-between hover:border-[#dfb559]/60 transition-all duration-300 group overflow-hidden"
          >
            {/* Elegant double gold fine-line frame */}
            <div className="absolute inset-2 border border-[#dfb559]/20 rounded-md pointer-events-none" />
            <div className="absolute inset-3 border border-dashed border-[#dfb559]/10 rounded-md pointer-events-none" />
            
            <div className="flex flex-col items-center relative z-10 w-full">
              <div className="p-3 bg-white rounded-full text-[#c5a059] mb-5 border border-[#dfb559]/25 shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:bg-[#dfb559]/5 transition-colors duration-300">
                <Heart className="w-5 h-5 fill-[#c5a059]/5" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold mb-4 block">
                {t("family.bride_parents")}
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#dfb559]/40 to-transparent mb-6" />
              
              <div className="w-full text-center">
                <p className="font-serif text-[19px] sm:text-[21px] text-[#3a4b3d] font-semibold leading-snug tracking-wide">
                  Víctor Raúl Aydee Tapia
                </p>
                <div className="flex items-center justify-center gap-3 my-2.5 py-0.5 select-none">
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/30" />
                  <span className="font-wedding text-3xl text-[#dfb559]/90 italic leading-none">y</span>
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/30" />
                </div>
                <p className="font-serif text-[19px] sm:text-[21px] text-[#3a4b3d] font-semibold leading-snug tracking-wide">
                  Ana María Quispe de Aydee
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-[#8a9a5b]/80 mt-8 justify-center select-none z-10">
              <Sparkles className="w-3 h-3 text-[#dfb559] animate-pulse" />
              <span>{lang === "es" ? "Agradecimiento Profundo" : "Deep Gratitude"}</span>
            </div>
          </motion.div>

          {/* Godparents (Padrinos) - Dark Focal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-[#1f2620] border-2 border-[#dfb559] rounded-lg p-8 sm:p-10 shadow-[0_15px_35px_rgba(31,38,32,0.15)] relative flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 group overflow-hidden"
          >
            {/* Elegant double gold fine-line frame */}
            <div className="absolute inset-2 border border-[#dfb559]/30 rounded-md pointer-events-none" />
            <div className="absolute inset-3 border border-dashed border-[#dfb559]/15 rounded-md pointer-events-none" />
            
            <div className="flex flex-col items-center relative z-10 w-full">
              <div className="p-3 bg-[#2a352c] rounded-full text-[#dfb559] mb-5 border border-[#dfb559]/40 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                <Star className="w-5 h-5 fill-[#dfb559]/10 animate-[pulse_2s_infinite]" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#dfb559] font-bold mb-4 block">
                {t("family.godparents")}
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#dfb559]/50 to-transparent mb-6" />
              
              <div className="w-full text-center">
                <p className="font-serif text-[19px] sm:text-[21px] text-white font-semibold leading-snug tracking-wide">
                  Jorge Luis Alarcón Valdivia
                </p>
                <div className="flex items-center justify-center gap-3 my-2.5 py-0.5 select-none">
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/40" />
                  <span className="font-wedding text-3xl text-[#dfb559] italic leading-none">y</span>
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/40" />
                </div>
                <p className="font-serif text-[19px] sm:text-[21px] text-white font-semibold leading-snug tracking-wide">
                  Martha Cecilia de Alarcón
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-[#dfb559] mt-8 justify-center select-none z-10">
              <Sparkles className="w-3 h-3 text-[#dfb559] animate-pulse" />
              <span>{lang === "es" ? "Guías de Honor" : "Guides of Honor"}</span>
            </div>
          </motion.div>

          {/* Parents of the Groom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="bg-[#faf9f6]/40 border border-[#dfb559]/30 rounded-lg p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative flex flex-col justify-between hover:border-[#dfb559]/60 transition-all duration-300 group overflow-hidden"
          >
            {/* Elegant double gold fine-line frame */}
            <div className="absolute inset-2 border border-[#dfb559]/20 rounded-md pointer-events-none" />
            <div className="absolute inset-3 border border-dashed border-[#dfb559]/10 rounded-md pointer-events-none" />
            
            <div className="flex flex-col items-center relative z-10 w-full">
              <div className="p-3 bg-white rounded-full text-[#c5a059] mb-5 border border-[#dfb559]/25 shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:bg-[#dfb559]/5 transition-colors duration-300">
                <Heart className="w-5 h-5 fill-[#c5a059]/5" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8a9a5b] font-bold mb-4 block">
                {t("family.groom_parents")}
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#dfb559]/40 to-transparent mb-6" />
              
              <div className="w-full text-center">
                <p className="font-serif text-[19px] sm:text-[21px] text-[#3a4b3d] font-semibold leading-snug tracking-wide">
                  Carlos Manuel Prado Medina
                </p>
                <div className="flex items-center justify-center gap-3 my-2.5 py-0.5 select-none">
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/30" />
                  <span className="font-wedding text-3xl text-[#dfb559]/90 italic leading-none">y</span>
                  <div className="w-6 h-[0.5px] bg-[#dfb559]/30" />
                </div>
                <p className="font-serif text-[19px] sm:text-[21px] text-[#3a4b3d] font-semibold leading-snug tracking-wide">
                  Elena Sofía Torres de Prado
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-[#8a9a5b]/80 mt-8 justify-center select-none z-10">
              <Sparkles className="w-3 h-3 text-[#dfb559] animate-pulse" />
              <span>{lang === "es" ? "Amor Incondicional" : "Unconditional Love"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
