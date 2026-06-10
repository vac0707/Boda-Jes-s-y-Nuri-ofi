import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Sparkles, Check, Clock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function EventsAndMaps() {
  const { lang, t } = useLanguage();
  const [showNotify, setShowNotify] = useState<string | null>(null);

  // External URLs
  const calendarChurchUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Ceremonia%20Religiosa&dates=20260905T170000Z/20260905T190000Z&details=Acomp%C3%A1%C3%B1anos%20a%20celebrar%20nuestro%20matrimonio%20religioso%20en%20la%20Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta.&location=Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta,%20Cayma,%20Arequipa";
  const calendarReceptionUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Recepci%C3%B3n&dates=20260905T190000Z/20260906T040000Z&details=Celebremos%20juntos%20nuestra%20boda%20en%20Casa%20Babilonia.&location=Casa%20Babilonia,%20Cayma,%20Arequipa";

  const churchNavUrl = "https://maps.app.goo.gl/CajU7Uoy52AyyZxH6";
  const receptionNavUrl = "https://maps.app.goo.gl/mXmJju4NoMeNeCMo6";

  const triggerCalendarNotify = (label: string) => {
    setShowNotify(label);
    setTimeout(() => setShowNotify(null), 3000);
  };

  return (
    <section id="ceremonia-recepcion" className="relative py-28 px-4 sm:px-6 bg-[#faf9f6]/95 overflow-hidden">
      {/* Delicate horizontal divider lines */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      {/* Floating Notification for Calendar */}
      <AnimatePresence>
        {showNotify && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#233025] text-[#dfb559] text-xs font-serif tracking-wider px-5 py-3 rounded-full shadow-2xl border border-[#dfb559]/30 flex items-center gap-2.5"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{showNotify}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* ========================================== */}
        {/* SECTION 1: CEREMONIA RELIGIOSA */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center mb-24 flex flex-col items-center"
        >
          {/* Custom sketch-style line art of Church */}
          <div className="relative mb-5 text-[#8A9A5B] hover:scale-103 transition-transform duration-500 ease-out select-none">
            <svg
              viewBox="0 0 120 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-36 h-28 opacity-90 filter drop-shadow-sm"
            >
              {/* Ground level reference */}
              <line x1="8" y1="92" x2="112" y2="92" strokeWidth="1" />
              
              {/* Left annex vestry */}
              <path d="M12 92 V68 Q12 64, 16 64 H32 V92" />
              <path d="M22 74 H26" strokeWidth="0.8" />
              <path d="M24 74 V82" strokeWidth="0.8" />

              {/* Right annex chapel */}
              <path d="M88 92 V68 Q88 64, 92 64 H108 V92" />
              <path d="M98 74 H102" strokeWidth="0.8" />
              <path d="M100 74 V82" strokeWidth="0.8" />

              {/* Main church body */}
              <path d="M32 92 V48 L60 22 L88 48 V92" />
              <path d="M32 48 H88" strokeWidth="0.8" />

              {/* Front Gothic door */}
              <path d="M50 92 V76 C50 70, 70 70, 70 76 V92" />
              <line x1="60" y1="70" x2="60" y2="92" strokeWidth="0.8" />

              {/* Steeple tower rising middle */}
              <path d="M52 28 V10 C52 8, 68 8, 68 10 V28" />
              {/* Steeple roof */}
              <path d="M52 10 L60 2 L68 10" />

              {/* High Cross */}
              <line x1="60" y1="2" x2="60" y2="-10" strokeWidth="1.25" />
              <line x1="55" y1="-6" x2="65" y2="-6" strokeWidth="1.25" />

              {/* Central rose circular window */}
              <circle cx="60" cy="40" r="7" />
              <circle cx="60" cy="40" r="4" strokeWidth="0.7" />

              {/* Little windows for main block */}
              <path d="M42 56 V64" strokeWidth="1" />
              <path d="M78 56 V64" strokeWidth="1" />
            </svg>
          </div>

          {/* Elegant title font like reference */}
          <h3 className="font-great-vibes text-6xl sm:text-7xl text-[#849685] tracking-wide mb-3 select-none leading-none">
            Ceremonia religiosa
          </h3>

          {/* Information blocks */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-[15px] sm:text-[17px] text-[#4a5f4e]/90 font-bold uppercase tracking-[0.12em] text-center max-w-sm px-4 leading-snug">
              PARROQUIA SANTÍSIMA CRUZ DE ACEQUIA ALTA
            </span>
            <span className="font-serif text-[13.5px] sm:text-[14.5px] text-[#718c75] font-light tracking-wide mt-2">
              12:00 PM (Perú)
            </span>
            <span className="font-serif text-[11px] uppercase tracking-widest text-[#a6916c] font-medium mt-1">
              Cayma, Arequipa
            </span>
          </div>

          {/* Primary Action Button ("VER UBICACIÓN") */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={churchNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-3 bg-[#8A9A5B] hover:bg-[#718c75] text-white font-serif text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-md transition-all active:scale-97 cursor-pointer hover:shadow-lg rounded-none"
            >
              Ver Ubicación
            </a>
            
            {/* Soft Calendar Helper text-link */}
            <a
              href={calendarChurchUrl}
              onClick={() => triggerCalendarNotify(lang === "es" ? "Ceremonia agendada" : "Ceremony added")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A9A5B] hover:text-[#3a4b3d] text-[10.5px] uppercase tracking-widest font-bold underline decoration-dotted underline-offset-4 flex items-center gap-1.5 transition-colors mt-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === "es" ? "Agendar Calendario" : "Add to Calendar"}</span>
            </a>
          </div>
        </motion.div>


        {/* ========================================== */}
        {/* SECTION 2: RECEPCIÓN */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center flex flex-col items-center"
        >
          {/* Custom sketch-style line art of 3-Tier Wedding Cake with wild florals */}
          <div className="relative mb-6 text-[#8A9A5B] hover:scale-103 transition-transform duration-500 ease-out select-none">
            <svg
              viewBox="0 0 120 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-36 h-36 opacity-90 filter drop-shadow-sm"
            >
              {/* Stand / Plate base */}
              <path d="M22 110 C22 107, 98 107, 98 110" />
              <path d="M22 110 V113 C22 115, 98 115, 98 113 V110" />
              <path d="M42 113 L45 117 H75 L78 113" />

              {/* Bottom tier */}
              <path d="M28 88 C28 80, 92 80, 92 88" />
              <path d="M28 88 V106 C28 110, 92 110, 92 106 V88" />
              
              {/* Middle tier */}
              <path d="M37 63 C37 56, 83 56, 83 63" />
              <path d="M37 63 V82 C37 86, 83 86, 83 82 V63" />

              {/* Top tier */}
              <path d="M46 38 C46 33, 74 33, 74 38" />
              <path d="M46 38 V57 C46 61, 74 61, 74 57 V38" />

              {/* Flowers topper */}
              <circle cx="60" cy="33" r="2.5" />
              <path d="M57 33 C56 31, 59 29, 60 31 C61 29, 64 31, 63 33" strokeWidth="0.8" />
              <path d="M54 34 Q50 28, 54 25" strokeWidth="0.7" />
              <path d="M66 34 Q70 28, 66 25" strokeWidth="0.7" />

              {/* Floral branch wraps climb around middle and bottom */}
              {/* Vine 1 */}
              <path d="M36 78 Q30 79, 39 84" strokeWidth="0.7" />
              {/* Leaves middle */}
              <path d="M80 75 Q85 71, 78 79" strokeWidth="0.7" />
              {/* Mini blossom left middle */}
              <circle cx="41" cy="74" r="2" />
              <circle cx="77" cy="77" r="2.5" />

              {/* Large artistic roses at the bottom cluster left */}
              <circle cx="34" cy="100" r="4.5" />
              <path d="M34 100 Q36 94, 30 96 Q26 100, 31 104 Q37 104, 34 100 Z" strokeWidth="0.7" />
              <path d="M26 103 C23 105, 26 109, 30 107" strokeWidth="0.6" />
              
              {/* Trailing petals / leaves right base */}
              <path d="M84 102 Q88 100, 93 106" strokeWidth="0.7" />
              <path d="M80 105 Q85 106, 82 109" strokeWidth="0.7" />
              <circle cx="86" cy="105" r="2" />
            </svg>
          </div>

           {/* Elegant title font like reference */}
          <h3 className="font-great-vibes text-6xl sm:text-7xl text-[#849685] tracking-wide mb-3 select-none leading-none">
            Recepción
          </h3>

          {/* Information blocks */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-[15px] sm:text-[17px] text-[#4a5f4e]/90 font-bold uppercase tracking-[0.12em] text-center max-w-sm px-4 leading-snug">
              SALÓN & JARDINES CASA BABILONIA
            </span>
            <span className="font-serif text-[12.5px] sm:text-[13.5px] text-[#718c75] font-light tracking-wide mt-2 text-center max-w-xs leading-normal">
              02:00 PM <br className="sm:hidden" /> (Inmediatamente después del oficio)
            </span>
            <span className="font-serif text-[11px] uppercase tracking-widest text-[#a6916c] font-medium mt-1">
              Cayma, Arequipa
            </span>
          </div>

          {/* Primary Action Button ("VER UBICACIÓN") */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={receptionNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-3 bg-[#8A9A5B] hover:bg-[#718c75] text-white font-serif text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-md transition-all active:scale-97 cursor-pointer hover:shadow-lg rounded-none"
            >
              Ver Ubicación
            </a>

            {/* Soft Calendar Helper text-link */}
            <a
              href={calendarReceptionUrl}
              onClick={() => triggerCalendarNotify(lang === "es" ? "Reclusión agendada" : "Reception added")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A9A5B] hover:text-[#3a4b3d] text-[10.5px] uppercase tracking-widest font-bold underline decoration-dotted underline-offset-4 flex items-center gap-1.5 transition-colors mt-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === "es" ? "Agendar Calendario" : "Add to Calendar"}</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
