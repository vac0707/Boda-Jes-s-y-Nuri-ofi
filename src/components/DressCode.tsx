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
            className="w-full bg-[#faf9f6] text-[#333] border-2 border-[#dfb559] rounded-xs p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group overflow-hidden"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-1.5 border border-[#dfb559]/20 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-[#E5E1D8] pb-4">
                <span className="font-serif text-2xl font-light tracking-wide text-[#3a4b3d]">
                  {lang === "es" ? "Damas" : "Ladies"}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d49c30] font-bold">
                  {lang === "es" ? "Vestido Largo" : "Formal Long Dress"}
                </span>
              </div>

              <div className="space-y-4 text-xs font-light text-[#555] leading-relaxed mb-8">
                <p>
                  {lang === "es"
                    ? "Para este gran día, invitamos a nuestras distinguidas damas a lucir un "
                    : "For this special day, we invite our ladies to wear a beautiful "}
                  <strong className="text-[#3a4b3d] font-semibold">{lang === "es" ? "vestido largo de gala" : "formal long dress"}</strong>.
                </p>
                <p>
                  {lang === "es"
                    ? "Siéntete libre de elegir colores festivos que resalten tu elegancia y alegría."
                    : "Feel free to choose festive colors that reflect your elegance and joy."}
                </p>

                {/* Important Color Note */}
                <div className="border border-red-200/50 bg-[#fff5f5] rounded-sm p-4 mt-4 flex items-start gap-3">
                  <div className="p-1.5 bg-red-100 rounded-full text-red-600 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-0.5">
                      {lang === "es" ? "Nota de Protocolo" : "Protocol Note"}
                    </span>
                    <p className="text-[11px] text-red-600/95 leading-normal">
                      {lang === "es"
                        ? "Por favor, evitar vestimentas de color blanco, marfil o crema para respetar el atuendo de la novia."
                        : "Please avoid wearing white, ivory, or cream color dress to respect the bride's attire."}
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
            className="w-full bg-[#1b251e] text-white border-2 border-[#dfb559]/40 rounded-xs p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between group overflow-hidden"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-1.5 border border-[#dfb559]/10 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <span className="font-serif text-2xl font-light tracking-wide text-[#dfb559]">
                  {lang === "es" ? "Caballeros" : "Gentlemen"}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#dfb559] font-bold">
                  {lang === "es" ? "Traje Oscuro" : "Dark Tie / Suit"}
                </span>
              </div>

              <div className="space-y-4 text-xs font-light text-gray-300 leading-relaxed mb-8">
                <p>
                  {lang === "es"
                    ? "Para coordinar de manera exquisita, solicitamos a los caballeros asistir de "
                    : "To coordinate exquisitely, we request our gentlemen to wear a "}
                  <strong className="text-white font-semibold">{lang === "es" ? "traje formal oscuro o terna" : "dark formal suit or tuxedo"}</strong>.
                </p>
                <p>
                  {lang === "es"
                    ? "El uso de corbata o corbatín es obligatorio para mantener la sofisticación de la ceremonia."
                    : "The use of a necktie or bowtie is required to maintain the sophistication of the ceremony."}
                </p>
                
                {/* Style tip container */}
                <div className="border border-white/5 bg-white/5 rounded-sm p-4 mt-4 flex items-start gap-3">
                  <div className="p-1.5 bg-[#dfb559]/10 rounded-full text-[#dfb559] mt-0.5">
                    <PartyPopper className="w-3 h-3 text-[#dfb559]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#dfb559] uppercase tracking-wider block mb-0.5">
                      {lang === "es" ? "Consejo de Estilo" : "Style Tip"}
                    </span>
                    <p className="text-[11px] text-gray-350 leading-normal">
                      {lang === "es"
                        ? "Un calzado negro pulido y accesorios clásicos complementarán tu terna a la perfección."
                        : "Black polished dress shoes and classic silver accessories will round up your attire perfectly."}
                    </p>
                  </div>
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
