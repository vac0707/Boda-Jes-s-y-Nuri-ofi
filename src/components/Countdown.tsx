import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CountdownTime } from "../types";
import { Sparkles, CalendarDays } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Countdown() {
  const { t, lang } = useLanguage();
  const targetDate = new Date("2026-09-05T12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section 
      id="cuenta-regresiva" 
      className="relative py-28 px-4 sm:px-6 bg-[#233025] flex flex-col items-center overflow-hidden"
    >
      {/* Background radial gold glow vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-12"
        >
          <CalendarDays className="w-6 h-6 text-[#dfb559] mb-4 animate-pulse" />
          <h3 className="font-serif text-3xl sm:text-4.5xl text-white tracking-wide font-light mb-3">
            {t("countdown.title")}
          </h3>
          <p className="text-xs font-light text-[#93aa96] tracking-[0.25em] max-w-md uppercase">
            {t("countdown.subtitle")}
          </p>
          <div className="w-16 h-[1.5px] bg-[#dfb559] mt-4" />
        </motion.div>

        {timeLeft.isCompleted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-dark border-2 border-[#dfb559]/30 rounded-sm py-12 px-10 max-w-xl mx-auto shadow-2xl relative"
          >
            <div className="absolute inset-1 border border-[#dfb559]/10" />
            <p className="font-serif text-3xl text-[#dfb559] tracking-wider font-light">
              {t("countdown.completed_title")}
            </p>
            <p className="text-[#93aa96] text-xs font-light mt-3 uppercase tracking-widest">
              {t("countdown.completed_subtitle")}
            </p>
          </motion.div>
        ) : (
          /* Glassmorphic grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mx-auto mb-16">
            {[
              { val: timeLeft.days, label: t("countdown.days") },
              { val: timeLeft.hours, label: t("countdown.hours") },
              { val: timeLeft.minutes, label: t("countdown.minutes") },
              { val: timeLeft.seconds, label: t("countdown.seconds"), accent: true },
            ].map((slot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="glass-dark border border-[#dfb559]/25 hover:border-[#dfb559]/50 rounded-sm py-8 px-4 flex flex-col items-center relative overflow-hidden group shadow-2xl transition-all duration-300"
              >
                {/* Internal fine line accents */}
                <div className="absolute inset-1.5 border border-white/5 pointer-events-none" />
                
                {/* Translucent background pulse */}
                <div className="absolute -inset-4 bg-[#dfb559]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                <span className={`font-serif text-5xl sm:text-6xl font-light leading-none mb-3 drop-shadow-md select-none tracking-widest ${
                  slot.accent ? "text-[#dfb559]" : "text-white"
                }`}>
                  {padZero(slot.val)}
                </span>
                
                <span className="text-[10px] tracking-[0.2em] font-bold text-[#93aa96] uppercase mt-1">
                  {slot.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Visual Monthly Calendar Block (Redesigned Editorial Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full max-w-sm mx-auto bg-[#faf9f6] rounded-xs border-2 border-[#dfb559] p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden text-[#3a4b3d]"
        >
          {/* Calendar fine borders */}
          <div className="absolute inset-1.5 border border-[#dfb559]/20 pointer-events-none" />

          {/* Month Header */}
          <div className="text-center mb-6">
            <span className="font-sans text-[9px] tracking-[0.3em] text-sage-600 font-bold uppercase block mb-1">
              {t("countdown.save_the_date")}
            </span>
            <h4 className="font-serif text-2xl text-[#333] tracking-[0.1em] font-light uppercase">
              {t("countdown.month_year")}
            </h4>
            <div className="w-12 h-[1px] bg-[#dfb559] mx-auto mt-2" />
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Weekdays Header */}
            {(lang === "es" ? ["D", "L", "M", "M", "J", "V", "S"] : ["S", "M", "T", "W", "T", "F", "S"]).map((day, idx) => (
              <span
                key={idx}
                className="text-[9px] uppercase tracking-wider font-bold text-sage-500 pb-2 font-mono"
              >
                {day}
              </span>
            ))}

            {/* Days list (September 2026 starts on Tuesday, has 30 days) */}
            {[
              { day: "", isPlaceholder: true }, // Sun placeholder
              { day: "", isPlaceholder: true }, // Mon placeholder
              { day: "1", isWeddingDay: false },
              { day: "2", isWeddingDay: false },
              { day: "3", isWeddingDay: false },
              { day: "4", isWeddingDay: false },
              { day: "5", isWeddingDay: true }, // September 5th
              { day: "6", isWeddingDay: false },
              { day: "7", isWeddingDay: false },
              { day: "8", isWeddingDay: false },
              { day: "9", isWeddingDay: false },
              { day: "10", isWeddingDay: false },
              { day: "11", isWeddingDay: false },
              { day: "12", isWeddingDay: false },
              { day: "13", isWeddingDay: false },
              { day: "14", isWeddingDay: false },
              { day: "15", isWeddingDay: false },
              { day: "16", isWeddingDay: false },
              { day: "17", isWeddingDay: false },
              { day: "18", isWeddingDay: false },
              { day: "19", isWeddingDay: false },
              { day: "20", isWeddingDay: false },
              { day: "21", isWeddingDay: false },
              { day: "22", isWeddingDay: false },
              { day: "23", isWeddingDay: false },
              { day: "24", isWeddingDay: false },
              { day: "25", isWeddingDay: false },
              { day: "26", isWeddingDay: false },
              { day: "27", isWeddingDay: false },
              { day: "28", isWeddingDay: false },
              { day: "29", isWeddingDay: false },
              { day: "30", isWeddingDay: false },
            ].map((item, idx) => {
              if (item.isPlaceholder) {
                return <div key={idx} className="aspect-square" />;
              }

              if (item.isWeddingDay) {
                return (
                  <div
                    key={idx}
                    className="aspect-square flex items-center justify-center relative select-none"
                  >
                    {/* Pulsing ring */}
                    <div className="absolute inset-0.5 rounded-full border-2 border-[#dfb559] scale-105 pointer-events-none animate-ping opacity-70" />
                    <div className="absolute inset-0.5 rounded-full bg-[#c5a059] shadow-md z-0" />

                    <div className="relative z-10 flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-bold leading-none select-none">5</span>
                      <span className="text-[6.5px] font-bold tracking-tighter uppercase leading-none select-none mt-0.5">
                        {t("countdown.wedding_day_label")}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="aspect-square flex items-center justify-center rounded-full text-xs font-light text-[#555] hover:bg-[#F1EFE9] transition-all cursor-default select-none relative"
                >
                  <span>{item.day}</span>
                </div>
              );
            })}
          </div>

          {/* Calendar Footer Info */}
          <div className="mt-6 pt-4 border-t border-[#E5E1D8]/50 text-center">
            <p className="text-xs font-light tracking-wide text-[#333]">
              {lang === "es" ? "Sábado, 5 de Septiembre • 12:00 PM" : "Saturday, September 5 • 12:00 PM"}
            </p>
            <p className="text-[10px] text-[#8A9A5B] uppercase tracking-[0.2em] font-bold mt-1 inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#dfb559]" />
              <span>{t("countdown.cayma")}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
