import { motion } from "motion/react";
import { Sparkles, Shirt, PartyPopper } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function DressCode() {
  const { t, lang } = useLanguage();

  return (
    <section id="codigo-vestimenta" className="relative py-32 px-4 sm:px-6 bg-[#233025] overflow-hidden text-center text-white">
      {/* Background soft ambient radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-20">
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
              className="w-16 h-16 object-contain mb-4 select-none"
              referrerPolicy="no-referrer"
            />
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#dfb559] uppercase font-bold">
              {lang === "es" ? "Requisito Importante" : "Important Requirement"}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-white mt-2 mb-2 select-none font-normal">
              {t("dress_code.title")}
            </h2>
            <div className="w-20 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#a5bda8] text-sm font-serif italic mt-5 max-w-sm">
              {lang === "es" 
                ? "Queremos que luzcas espectacular y disfrutes con comodidad." 
                : "We want you to look spectacular and celebrate in comfort."}
            </p>
          </motion.div>
        </div>

        {/* Editorial Layout: Dual high-contrast panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left justify-items-center max-w-4xl mx-auto">
          {/* Panel 1: Ladies (Damas) - Ivory Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#faf9f6]/95 text-[#333] border-2 border-[#dfb559]/70 rounded-xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group overflow-hidden"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-2 border border-[#dfb559]/20 rounded-lg pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8 border-b border-[#E5E1D8] pb-4">
                <span className="font-serif text-3xl font-normal tracking-wide text-[#3a4b3d]">
                  {lang === "es" ? "Damas" : "Ladies"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d49c30] font-bold bg-[#faf9f6] px-2.5 py-1 rounded border border-[#dfb559]/30">
                  {lang === "es" ? "Vestido Largo" : "Formal Long Dress"}
                </span>
              </div>

              <div className="space-y-4 text-[13px] font-sans text-[#444] leading-relaxed mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#dfb559] text-base mt-0.5">•</span>
                  <p>
                    <strong className="text-[#3a4b3d] font-semibold">{lang === "es" ? "Estilo:" : "Style:"}</strong>{" "}
                    {lang === "es" ? "Obligatorio vestido largo de gala." : "Formal long gown is required."}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#dfb559] text-base mt-0.5">•</span>
                  <p>
                    <strong className="text-[#3a4b3d] font-semibold">{lang === "es" ? "Paleta:" : "Palette:"}</strong>{" "}
                    {lang === "es" ? "Colores festivos y alegres de su preferencia." : "Festive and joyful colors of your choosing."}
                  </p>
                </div>

                {/* Important Color Note */}
                <div className="border border-red-200/40 bg-red-50/50 rounded-lg p-4 mt-6 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0 animate-ping" />
                  <div>
                    <span className="text-[9px] font-bold text-red-700 uppercase tracking-widest block mb-0.5">
                      {lang === "es" ? "Importante" : "Important"}
                    </span>
                    <p className="text-[11px] text-red-700/95 leading-normal font-medium">
                      {lang === "es"
                        ? "Evitar vestimentas de color blanco, marfil o crema."
                        : "Strictly avoid white, ivory, or cream color dress."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#8A9A5B] text-[10px] font-bold uppercase tracking-widest mt-4">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
              <span>{lang === "es" ? "Alta Costura" : "Haute Couture"}</span>
            </div>
          </motion.div>

          {/* Panel 2: Gentlemen (Caballeros) - Dark Green Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#1b251e] text-white border-2 border-[#dfb559] rounded-xl p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group overflow-hidden"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-2 border border-[#dfb559]/20 rounded-lg pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8 border-b border-white/15 pb-4">
                <span className="font-serif text-3xl font-normal tracking-wide text-[#dfb559]">
                  {lang === "es" ? "Caballeros" : "Gentlemen"}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#dfb559] font-bold bg-[#233025] px-2.5 py-1 rounded border border-[#dfb559]/30">
                  {lang === "es" ? "Traje Oscuro" : "Dark Tie / Suit"}
                </span>
              </div>

              <div className="space-y-4 text-[13px] font-sans text-gray-200 leading-relaxed mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#dfb559] text-base mt-0.5">•</span>
                  <p>
                    <strong className="text-[#dfb559] font-semibold">{lang === "es" ? "Estilo:" : "Style:"}</strong>{" "}
                    {lang === "es" ? "Traje formal oscuro, terna o esmoquin." : "Dark formal suit, tuxedo or suit."}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#dfb559] text-base mt-0.5">•</span>
                  <p>
                    <strong className="text-[#dfb559] font-semibold">{lang === "es" ? "Accesorios:" : "Accessories:"}</strong>{" "}
                    {lang === "es" ? "El uso de corbata o corbatín es obligatorio." : "The use of a necktie or bowtie is required."}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#dfb559] text-base mt-0.5">•</span>
                  <p>
                    <strong className="text-[#dfb559] font-semibold">{lang === "es" ? "Calzado:" : "Footwear:"}</strong>{" "}
                    {lang === "es" ? "Zapatos de vestir formales bien lustrados." : "Polished, elegant formal dress shoes."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[#dfb559] text-[10px] font-bold uppercase tracking-widest mt-4">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
              <span>{lang === "es" ? "Gala & Distinción" : "Gala & Distinction"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
