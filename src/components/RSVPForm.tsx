import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, HelpCircle, MailCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function RSVPForm() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    asistentes: "1",
    mensaje: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const phoneNum = "51926263277";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) return;

    // Luxurious message format suited for direct delivery on WhatsApp
    const msgTemplate = lang === "es"
      ? `¡Hola Jesús y Nuri! ✨💍\n\nConfirmo con mucha alegría mi asistencia a su hermosa boda este 05 de septiembre.\n\n*Detalles de Confirmación:*\n👤 *Nombre:* ${formData.nombre.trim()}\n👥 *Asistentes:* ${formData.asistentes}\n✉️ *Mensaje Especial:* "${formData.mensaje.trim() || '¡Muchas felicidades y bendiciones!'}"\n\n¡Nos vemos pronto para celebrar juntos! 🎉`
      : `Hello Jesús and Nuri! ✨💍\n\nI am very happy to confirm my assistance to your beautiful wedding this September 5th.\n\n*Confirmation Details:*\n👤 *Name:* ${formData.nombre.trim()}\n👥 *Guests:* ${formData.asistentes}\n✉️ *Special Message:* "${formData.mensaje.trim() || 'Congratulations and best wishes!'}"\n\nSee you soon to celebrate together! 🎉`;

    const encodedText = encodeURIComponent(msgTemplate);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodedText}`;

    setIsSuccess(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="confirmacion" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header Title Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <HelpCircle className="w-5 h-5 text-[#dfb559] mb-4 animate-pulse" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("rsvp.tag")}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("rsvp.title")}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-5 max-w-sm leading-relaxed">
              {t("rsvp.desc")}
            </p>
          </motion.div>
        </div>

        {/* RSVP Form Card with double gold framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white border-2 border-[#dfb559]/30 rounded-xs p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          {/* Internal Geometric Outline */}
          <div className="absolute inset-1.5 border border-[#dfb559]/10 pointer-events-none" />

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-[#233025] rounded-full flex items-center justify-center mb-6 border-2 border-[#dfb559] shadow-xl">
                <CheckCircle2 className="w-7 h-7 text-[#dfb559]" />
              </div>
              <h3 className="font-serif text-2xl text-[#3a4b3d] font-normal mb-3">
                {t("rsvp.success_title")}
              </h3>
              <p className="text-[#555] text-xs sm:text-sm font-light max-w-sm leading-relaxed mb-8">
                {t("rsvp.success_desc")}
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-xs uppercase tracking-widest font-bold border-b border-[#dfb559] hover:text-[#c5a059] pb-1 transition-all cursor-pointer text-sage-700 bg-transparent"
              >
                {t("rsvp.resend")}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
              {/* Field 1: Name */}
              <div>
                <label htmlFor="nombre" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.name_label")}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder={t("rsvp.name_placeholder")}
                  className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-xs sm:text-sm font-light select-text outline-none transition-all focus:border-[#dfb559] focus:ring-0"
                />
              </div>

              {/* Field 2: Comps count */}
              <div>
                <label htmlFor="asistentes" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.guests_label")}
                </label>
                <div className="relative">
                  <select
                    id="asistentes"
                    name="asistentes"
                    value={formData.asistentes}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-xs sm:text-sm font-light outline-none transition-all cursor-pointer focus:border-[#dfb559] focus:ring-0 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23dfb559%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.4c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%25.4%2012.8%25.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_1.25rem_center] bg-no-repeat"
                  >
                    <option value="1">{t("rsvp.guest_1")}</option>
                    <option value="2">{t("guest.guest_2") || t("rsvp.guest_2") || "2 Personas (Pase de Pareja)"}</option>
                    <option value="3">{t("guest.guest_3") || t("rsvp.guest_3") || "3 Personas (Familiar)"}</option>
                    <option value="4">{t("guest.guest_4") || t("rsvp.guest_4") || "4 Personas (Familiar)"}</option>
                    <option value="5">{t("guest.guest_5") || t("rsvp.guest_5") || "5 Personas (Mesa Reservada)"}</option>
                  </select>
                </div>
              </div>

              {/* Field 3: Custom message */}
              <div>
                <label htmlFor="mensaje" className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A9A5B] mb-2">
                  {t("rsvp.msg_label")}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder={t("rsvp.msg_placeholder")}
                  className="w-full px-5 py-3.5 rounded-sm border border-[#E5E1D8] bg-[#FAF9F6] focus:bg-white text-[#333] text-xs sm:text-sm font-light select-text outline-none transition-all focus:border-[#dfb559] focus:ring-0 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-sm font-sans text-xs tracking-[0.25em] uppercase font-bold text-white bg-[#c5a059] hover:bg-[#b57c24] border-b-2 border-gold-600 shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 hover:scale-[1.01]"
              >
                <Send className="w-4 h-4 text-white" />
                <span>{t("rsvp.submit_btn")}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
