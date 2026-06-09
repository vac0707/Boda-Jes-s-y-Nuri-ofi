import { motion } from "motion/react";
import { Milestone } from "../types";
import { Heart, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function OurStory() {
  const { t, lang } = useLanguage();

  const milestones: Milestone[] = [
    {
      id: "1",
      date: lang === "es" ? "Desde el 14 de Febrero de 2021" : "Since February 14, 2021",
      title: t("our_story.milestone_1_title"),
      text: t("our_story.milestone_1_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/01_ymkvet.jpg",
    },
    {
      id: "2",
      date: lang === "es" ? "22 de Julio de 2022" : "July 22, 2022",
      title: t("our_story.milestone_2_title"),
      text: t("our_story.milestone_2_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/04_jafhgb.jpg",
    },
    {
      id: "3",
      date: lang === "es" ? "11 de Noviembre de 2023" : "November 11, 2023",
      title: t("our_story.milestone_3_title"),
      text: t("our_story.milestone_3_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/05_nxuzj3.jpg",
    },
    {
      id: "4",
      date: lang === "es" ? "25 de Diciembre de 2024" : "December 25, 2024",
      title: t("our_story.milestone_4_title"),
      text: t("our_story.milestone_4_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/06_po8nhb.jpg",
    },
    {
      id: "5",
      date: lang === "es" ? "30 de Junio de 2025" : "June 30, 2025",
      title: t("our_story.milestone_5_title"),
      text: t("our_story.milestone_5_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/08_tritav.jpg",
    },
    {
      id: "6",
      date: lang === "es" ? "05 de Septiembre de 2026" : "September 05, 2026",
      title: t("our_story.milestone_6_title"),
      text: t("our_story.milestone_6_text"),
      imageUrl: "https://res.cloudinary.com/dcnynnstm/image/upload/v1780968206/10_cuonxy.jpg",
    },
  ];

  return (
    <section id="nuestra-historia" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden">
      {/* Structural luxury line dividers rather than dotted web grid */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Editorial Heading */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Heart className="w-5 h-5 text-[#C5A059] mb-4 animate-pulse" />
            <span className="font-sans text-xs tracking-[0.35em] text-[#8A9A5B] uppercase font-bold">
              {t("our_story.label")}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("our_story.title")}
            </h2>
            <div className="w-20 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-6 max-w-lg leading-relaxed">
              {t("our_story.quote")}
            </p>
          </motion.div>
        </div>

        {/* CINEMATIC LAYOUT CYCLER */}
        <div className="space-y-36">
          {milestones.map((item, index) => {
            // Cycle 3 distinct layouts for maximum high-end editorial rhythm
            const layoutType = index % 3;

            return (
              <div key={item.id} className="relative">
                {layoutType === 0 && (
                  /* LAYOUT 0: Photo Left, Text Right */
                  <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Widescreen image viewport */}
                    <div className="w-full lg:w-3/5 overflow-hidden rounded-xs border-2 border-[#dfb559]/30 shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
                      <div className="w-full h-full overflow-hidden relative group">
                        {/* Slow Ken Burns Zoom Effect */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover select-none pointer-events-none scale-102 transform animate-[scale-slow_30s_ease-in-out_infinite]"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shading overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65 group-hover:opacity-50 transition-all duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Description Text */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full lg:w-2/5 flex flex-col justify-center"
                    >
                      <span className="font-serif text-xs italic text-[#8A9A5B] tracking-wider mb-2 font-bold uppercase block">
                        {item.date}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#333] font-light tracking-wide mb-4">
                        {item.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-[#dfb559]/50 mb-4" />
                      <p className="text-[#555] text-sm font-light leading-relaxed text-justify relative z-10">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>
                )}

                {layoutType === 1 && (
                  /* LAYOUT 1: Text Left, Photo Right */
                  <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                    {/* Widescreen image viewport */}
                    <div className="w-full lg:w-3/5 overflow-hidden rounded-xs border-2 border-[#dfb559]/30 shadow-2xl aspect-[4/3] sm:aspect-[16/10]">
                      <div className="w-full h-full overflow-hidden relative group">
                        {/* Slow Ken Burns Panning Zoom */}
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover select-none pointer-events-none scale-102 transform animate-[pan-slow_32s_ease-in-out_infinite]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-65 group-hover:opacity-50 transition-all duration-300 pointer-events-none" />
                      </div>
                    </div>

                    {/* Description Text */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full lg:w-2/5 flex flex-col justify-center"
                    >
                      <span className="font-serif text-xs italic text-[#8A9A5B] tracking-wider mb-2 font-bold uppercase block">
                        {item.date}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#333] font-light tracking-wide mb-4">
                        {item.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-[#dfb559]/50 mb-4" />
                      <p className="text-[#555] text-sm font-light leading-relaxed text-justify relative z-10">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>
                )}

                {layoutType === 2 && (
                  /* LAYOUT 2: Immersive Fullscreen Background Overlay */
                  <div className="relative w-full rounded-xs border-2 border-[#dfb559]/30 shadow-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/7] flex items-center p-6 sm:p-12 lg:p-16">
                    {/* Immersive background wrapper */}
                    <div className="absolute inset-0 select-none overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover scale-102 transform animate-[scale-slow_35s_reverse_infinite]"
                        referrerPolicy="no-referrer"
                      />
                      {/* Glass gradient cover shielding the photo */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:from-white/90 sm:via-white/70 sm:to-white/20 pointer-events-none" />
                    </div>

                    {/* Text block sitting inside the beautiful ambient shield */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="relative z-10 max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-md sm:bg-transparent border border-white/15 sm:border-0 rounded-sm sm:rounded-none"
                    >
                      <span className="font-serif text-xs italic text-[#8A9A5B] sm:text-[#8A9A5B] tracking-wider mb-2 font-bold uppercase block">
                        {item.date}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white sm:text-[#333] font-light tracking-wide mb-4">
                        {item.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-[#dfb559] mb-4" />
                      <p className="text-gray-100 sm:text-[#555] text-sm font-light leading-relaxed text-justify">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scale-slow {
          0%, 100% { transform: scale(1.02) rotate(0deg); }
          50% { transform: scale(1.09) rotate(0.5deg); }
        }
        @keyframes pan-slow {
          0%, 100% { transform: scale(1.02) translate(0, 0); }
          50% { transform: scale(1.09) translate(15px, -5px); }
        }
      `}</style>
    </section>
  );
}
