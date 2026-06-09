import { motion } from "motion/react";
import { ScheduleEvent } from "../types";
import { Church, GlassWater, Utensils, Award, Music4, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Schedule() {
  const { t, lang } = useLanguage();

  const scheduleEvents: ScheduleEvent[] = [
    {
      id: "1",
      time: "12:00 PM",
      title: t("schedule.event_1_title"),
      description: t("schedule.event_1_desc"),
      icon: "church",
    },
    {
      id: "2",
      time: "02:00 PM",
      title: t("schedule.event_2_title"),
      description: t("schedule.event_2_desc"),
      icon: "reception",
    },
    {
      id: "3",
      time: "03:00 PM",
      title: t("schedule.event_3_title"),
      description: t("schedule.event_3_desc"),
      icon: "lunch",
    },
    {
      id: "4",
      time: "05:00 PM",
      title: t("schedule.event_4_title"),
      description: t("schedule.event_4_desc"),
      icon: "toast",
    },
    {
      id: "5",
      time: "08:00 PM",
      title: t("schedule.event_5_title"),
      description: t("schedule.event_5_desc"),
      icon: "party",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "church":
        return <Church className="w-5 h-5 text-[#dfb559]" />;
      case "reception":
        return <GlassWater className="w-5 h-5 text-[#dfb559]" />;
      case "lunch":
        return <Utensils className="w-5 h-5 text-[#dfb559]" />;
      case "toast":
        return <Award className="w-5 h-5 text-[#dfb559]" />;
      case "party":
        return <Music4 className="w-5 h-5 text-[#dfb559]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#dfb559]" />;
    }
  };

  return (
    <section id="cronograma" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title Block */}
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Clock className="w-5 h-5 text-[#dfb559] mb-4 animate-pulse" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("schedule.label")}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("schedule.title")}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-6 max-w-sm leading-relaxed">
              {t("schedule.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Vertical LUXURY Timeline structure */}
        <div className="relative">
          {/* Centered delicate gold vertical filament line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#dfb559]/20 via-[#c5a059] to-[#dfb559]/20 pointer-events-none" />

          {scheduleEvents.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row mb-16 last:mb-0 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Circle Milestone custom-crafted gold Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 top-1 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-[#233025] border-2 border-[#dfb559] shadow-xl"
                >
                  <div className="absolute inset-0.5 rounded-full border border-white/10" />
                  {getIcon(item.icon)}
                </motion.div>

                {/* Sub-card box with custom margins */}
                <div className="w-full sm:w-[44%] pl-16 sm:pl-0">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -45 : 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-[#dfb559]/30 rounded-xs p-6 sm:p-8 shadow-[0_12px_24px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:border-[#dfb559] hover:shadow-[0_18px_35px_rgba(212,175,55,0.08)] transition-all duration-500"
                  >
                    {/* Decorative interior fine frame */}
                    <div className="absolute inset-1.5 border border-[#dfb559]/10 pointer-events-none" />

                    {/* Time indicator styled as an luxury script detail */}
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-3.5 h-3.5 text-[#dfb559]" />
                      <span className="font-serif italic font-bold text-[#8A9A5B] text-sm tracking-wide leading-none">
                        {item.time}
                      </span>
                      <div className="h-px bg-[#dfb559]/30 flex-grow" />
                    </div>

                    <h4 className="font-serif text-xl text-[#3a4b3d] font-normal tracking-wide mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#555] text-xs font-light leading-relaxed text-justify">
                      {item.description}
                    </p>

                    {/* Gold corner hover accent decoration */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-[#dfb559] rounded-bl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Placeholders spaces for centering */}
                <div className="hidden sm:block sm:w-[12%]" />
                <div className="hidden sm:block sm:w-[44%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
