import { motion } from "motion/react";
import { MapPin, CalendarPlus, Church, Compass, GlassWater, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function EventsAndMaps() {
  const { t, lang } = useLanguage();

  // Google Calendar links
  const calendarChurchUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Ceremonia%20Religiosa&dates=20260905T170000Z/20260905T190000Z&details=Acomp%C3%A1%C3%B1anos%20a%20celebrar%20nuestro%20matrimonio%20religioso%20en%20la%20Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta.&location=Parroquia%20Sant%C3%ADsima%20Cruz%20de%20Acequia%20Alta,%20Cayma,%20Arequipa";
  const calendarReceptionUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Jes%C3%BAs%20y%20Nuri%20-%20Recepci%C3%B3n&dates=20260905T190000Z/20260906T040000Z&details=Celebremos%20juntos%20nuestra%20boda%20en%20Casa%20Babilonia.&location=Casa%20Babilonia,%20Cayma,%20Arequipa";

  const churchNavUrl = "https://maps.app.goo.gl/CajU7Uoy52AyyZxH6";
  const receptionNavUrl = "https://maps.app.goo.gl/mXmJju4NoMeNeCMo6";

  return (
    <section id="ceremonia-recepcion" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6]/95 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Compass className="w-5 h-5 text-[#dfb559] mb-4 animate-spin" style={{ animationDuration: "16s" }} />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {lang === "es" ? "Detalles del Evento" : "Event details"}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {lang === "es" ? "Ceremonia & Celebración" : "Ceremony & Reception"}
            </h2>
            <div className="w-16 h-[1px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-5 max-w-sm">
              {lang === "es" 
                ? "Acompáñanos en este maravilloso rito espiritual y posterior celebración." 
                : "Join us on this wonderful spiritual process and subsequent celebration."}
            </p>
          </motion.div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Sacred Ceremony */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="bg-white border-2 border-[#dfb559]/35 rounded-xs shadow-[0_15px_35px_rgba(0,0,0,0.06)] relative overflow-hidden group hover:border-[#dfb559]/80 transition-all duration-500"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#dfb559] z-20" />

            {/* Photo Representative */}
            <div className="relative h-64 w-full overflow-hidden border-b border-[#dfb559]/20 bg-[#F1EFE9]">
              <img
                src="https://res.cloudinary.com/dcnynnstm/image/upload/v1780970824/iglesia_moawnc.jpg"
                alt="Parroquia Santísima Cruz"
                className="w-full h-full object-cover transform transition-transform duration-[12000ms] group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-cream-100 font-semibold font-sans">
                  {lang === "es" ? "Ceremonia Religiosa" : "Religious Ceremony"}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 relative">
              {/* Decorative interior frame */}
              <div className="absolute inset-2 border border-[#dfb559]/10 pointer-events-none" />

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#faf9f6] text-[#dfb559] mb-5 border border-[#dfb559]/20 shadow-sm group-hover:bg-[#dfb559]/5 transition-colors">
                  <Church className="w-8 h-8 font-light" />
                </div>

                <h3 className="font-serif text-2xl text-[#3a4b3d] font-normal tracking-wide mb-1">
                  {lang === "es" ? "El Voto Sagrado" : "The Sacred Vows"}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-bold mb-6 block">
                  {lang === "es" ? "Encuentro Espiritual" : "Spiritual Union"}
                </span>

                <div className="space-y-4 mb-8 w-full border-t border-b border-[#E5E1D8]/70 py-6 text-[#555]">
                  <p className="text-xs font-light">
                    <strong className="block text-[#3a4b3d] text-[10px] uppercase tracking-[0.1em] font-bold mb-1">{lang === "es" ? "Hora" : "Time"}</strong>
                    12:00 PM (Hora de Perú)
                  </p>
                  <p className="text-xs font-light">
                    <strong className="block text-[#3a4b3d] text-[10px] uppercase tracking-[0.1em] font-bold mb-1">{lang === "es" ? "Dirección" : "Address"}</strong>
                    Parroquia Santísima Cruz de Acequia Alta
                  </p>
                  <p className="text-[10px] font-semibold text-[#8A9A5B] uppercase tracking-wider">
                    {t("countdown.cayma")}
                  </p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-3 justify-center w-full relative z-10">
                  <a
                    href={churchNavUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#dfb559]/40 text-[#555] bg-transparent hover:bg-[#FAF9F6] transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-102"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#dfb559]" />
                    <span>{lang === "es" ? "Cómo llegar" : "How to get there"}</span>
                  </a>

                  <a
                    href={calendarChurchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#b57c24] text-white transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:scale-102"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>{lang === "es" ? "Calendario" : "Calendar"}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Wedding Reception */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
            className="bg-white border-2 border-[#dfb559]/35 rounded-xs shadow-[0_15px_35px_rgba(0,0,0,0.06)] relative overflow-hidden group hover:border-[#dfb559]/80 transition-all duration-500"
          >
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#dfb559] z-20" />

            {/* Photo Representative */}
            <div className="relative h-64 w-full overflow-hidden border-b border-[#dfb559]/20 bg-[#F1EFE9]">
              <img
                src="https://res.cloudinary.com/dcnynnstm/image/upload/v1780970947/local_erxbym.jpg"
                alt="Casa Babilonia Recepción"
                className="w-full h-full object-cover transform transition-transform duration-[12000ms] group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-cream-100 font-semibold font-sans">
                  {lang === "es" ? "Recepción de Gala" : "Reception Gala"}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 relative">
              {/* Decorative interior frame */}
              <div className="absolute inset-2 border border-[#dfb559]/10 pointer-events-none" />

              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-[#faf9f6] text-[#dfb559] mb-5 border border-[#dfb559]/20 shadow-sm group-hover:bg-[#dfb559]/5 transition-colors">
                  <GlassWater className="w-8 h-8 font-light" />
                </div>

                <h3 className="font-serif text-2xl text-[#3a4b3d] font-normal tracking-wide mb-1">
                  {lang === "es" ? "La Gran Celebración" : "The Celebration"}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-bold mb-6 block">
                  {lang === "es" ? "Banquete & Fiesta" : "Banquet & Party"}
                </span>

                <div className="space-y-4 mb-8 w-full border-t border-b border-[#E5E1D8]/70 py-6 text-[#555]">
                  <p className="text-xs font-light">
                    <strong className="block text-[#3a4b3d] text-[10px] uppercase tracking-[0.1em] font-bold mb-1">{lang === "es" ? "Hora" : "Time"}</strong>
                    {lang === "es" ? "02:00 PM (Inmediatamente después del oficio)" : "02:00 PM (Right after the wedding service)"}
                  </p>
                  <p className="text-xs font-light">
                    <strong className="block text-[#3a4b3d] text-[10px] uppercase tracking-[0.1em] font-bold mb-1">{lang === "es" ? "Dirección" : "Place"}</strong>
                    Salón & Jardines Casa Babilonia
                  </p>
                  <p className="text-[10px] font-semibold text-[#8A9A5B] uppercase tracking-wider">
                    {t("countdown.cayma")}
                  </p>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap gap-3 justify-center w-full relative z-10">
                  <a
                    href={receptionNavUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-[#dfb559]/40 text-[#555] bg-transparent hover:bg-[#FAF9F6] transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-102"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#dfb559]" />
                    <span>{lang === "es" ? "Cómo llegar" : "How to get there"}</span>
                  </a>

                  <a
                    href={calendarReceptionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#c5a059] hover:bg-[#b57c24] text-white transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:scale-102"
                  >
                    <CalendarPlus className="w-3.5 h-3.5" />
                    <span>{lang === "es" ? "Calendario" : "Calendar"}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
