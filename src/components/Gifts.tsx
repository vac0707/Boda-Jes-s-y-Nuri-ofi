import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy } from "lucide-react";

export default function Gifts() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      // Remove spaces for copying numbers cleanly
      const cleanText = text.replace(/[^0-9]/g, "");
      await navigator.clipboard.writeText(cleanText);
      setCopiedValue(label);
      setTimeout(() => setCopiedValue(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const giftAccounts = [
    {
      owner: "Nuri (A nombre de la Novia)",
      items: [
        { label: "BCP Soles", value: "21500909284063" },
        { label: "CCI", value: "00221510090928406326" },
        { label: "Yape", value: "926263277" }
      ]
    },
    {
      owner: "Jesús (A nombre del Novio)",
      items: [
        { label: "BCP Soles", value: "21571660380017" },
        { label: "CCI", value: "00221517166038001728" },
        { label: "Yape", value: "910783099" }
      ]
    }
  ];

  return (
    <section id="regalos" className="relative py-24 px-4 sm:px-6 bg-[#faf9f6]/30 overflow-hidden">
      {/* Soft divider lines top/bottom */}
      <div className="absolute top-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

      <div className="max-w-xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Title "Regalos" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-6"
        >
          {/* Cursive Pinyon Script / Great Vibes title in soft sage green */}
          <h2 className="font-great-vibes text-7xl sm:text-8.5xl text-[#849685] select-none leading-none mb-4 transform -rotate-1">
            Regalos
          </h2>
        </motion.div>

        {/* Message Intro */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-center mb-8 px-2"
        >
          <p className="font-serif text-[17px] sm:text-xl text-[#4a5f4e] leading-relaxed mb-3">
            ¡Si quieres hacernos un regalo,
            <br className="sm:hidden" /> estaremos muy agradecidos!
          </p>
          <p className="font-serif text-[12.5px] sm:text-[14px] text-[#718c75]/85 leading-relaxed font-light italic max-w-sm mx-auto">
            Recuerda que lo importante es que vengas con ilusión, alegría y ganas de pasarla bien
          </p>
        </motion.div>

        {/* Dynamic Clipboard Notify Popup */}
        <AnimatePresence>
          {copiedValue && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#233025] text-[#dfb559] text-xs font-serif tracking-wider px-4 py-2.5 rounded-full shadow-xl border border-[#dfb559]/30 flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Copiado: {copiedValue}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Two Detailed Gift Boxes */}
        <div className="w-full space-y-6 px-2">
          {giftAccounts.map((account, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[440px] mx-auto border border-[#8A9A5B]/30 bg-white/40 p-6 sm:p-7 rounded-none text-center relative"
            >
              {/* Decorative Subtle Corner Accents */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#8A9A5B]/40" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#8A9A5B]/40" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#8A9A5B]/40" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#8A9A5B]/40" />

              {/* Owner Header Cover */}
              <h4 className="font-serif text-[14px] sm:text-[15.5px] font-bold text-[#3a4b3d] tracking-wide mb-4">
                {account.owner}
              </h4>

              {/* Bank Details Rows */}
              <div className="space-y-2.5 font-serif text-[12.5px] sm:text-[13.5px] text-[#4a5f4e]">
                {account.items.map((item, itemIdx) => {
                  const uniqueLabel = `${account.owner}-${item.label}-${itemIdx}`;
                  return (
                    <div
                      key={itemIdx}
                      onClick={() => copyToClipboard(item.value, `${item.label} (${item.value})`)}
                      className="group cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 hover:bg-[#8A9A5B]/10 py-1 px-2 rounded-sm transition-all text-center"
                      title="Haz clic para copiar"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#3a4b3d] tracking-normal">
                          {item.label}:
                        </span>
                        <span className="font-medium text-[#556b57] tracking-wider select-all">
                          {item.value}
                        </span>
                      </div>
                      
                      {/* Interactive Copy Assistant Indicator */}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-[#c5a059] flex items-center gap-1 sm:ml-1">
                        <Copy className="w-3 h-3" />
                        <span>Copiar</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
