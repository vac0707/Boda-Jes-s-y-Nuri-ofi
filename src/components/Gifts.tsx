import { useState } from "react";
import { motion } from "motion/react";
import { Gift, CreditCard, Clipboard, Check, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Gifts() {
  const { t, lang } = useLanguage();
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"banks" | "wallets">("banks");

  const bcpAccount = "193-98654320-0-14";
  const bcpCci = "002-19398654320014022";
  const interbankAccount = "200-3124567892";
  const interbankCci = "003-200312456789298";
  const yapeNumber = "987 654 321";
  const plinNumber = "955 123 456";

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text.replace(/\s+/g, ""));
      setCopiedAccount(type);
      setTimeout(() => setCopiedAccount(null), 2500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="regalos" className="relative py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#dfb559]/30 to-transparent" />

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
            <Gift className="w-5 h-5 text-[#dfb559] mb-4 animate-bounce" />
            <span className="font-sans text-xs tracking-[0.3em] text-[#8A9A5B] uppercase font-bold">
              {t("gifts.tag")}
            </span>
            <h2 className="font-great-vibes text-5xl sm:text-6.5xl text-[#3a4b3d] mt-2 mb-2 select-none font-normal">
              {t("gifts.title")}
            </h2>
            <div className="w-16 h-[1.5px] bg-[#dfb559]" />
            <p className="text-[#666] text-sm font-serif italic mt-5 max-w-sm leading-relaxed">
              {t("gifts.desc")}
            </p>
          </motion.div>
        </div>

        {/* Gift Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Card 1: Envelope gift */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white border-2 border-[#dfb559]/30 rounded-xs p-8 sm:p-12 shadow-[0_15px_35px_rgba(0,0,0,0.04)] relative flex flex-col justify-between items-center text-center hover:border-[#dfb559] hover:shadow-[0_20px_45px_rgba(212,175,55,0.06)] transition-all duration-500"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-1.5 border border-[#dfb559]/10 pointer-events-none" />

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#233025] rounded-full flex items-center justify-center mb-6 border border-[#dfb559]/30 shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  className="w-7 h-7 text-[#dfb559]"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2M22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6M22 6l-10 7L2 6" />
                </svg>
              </div>

              <h3 className="font-serif text-2xl text-[#3a4b3d] font-normal tracking-wide mb-1">
                {t("gifts.envelope")}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a059] font-bold mb-6">
                {t("gifts.envelope_sub")}
              </span>
              
              <div className="w-12 h-[1px] bg-[#E5E1D8] mb-6" />

              <p className="text-[#555] text-xs sm:text-sm font-light leading-relaxed max-w-xs mt-2 text-justify sm:text-center">
                {t("gifts.envelope_desc")}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#8A9A5B] text-[10px] font-bold uppercase tracking-widest mt-8">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
              <span>{lang === "es" ? "Lluvia de Sobres" : "Envelopes of love"}</span>
            </div>
          </motion.div>

          {/* Card 2: Bank Transfers & Wallets */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="bg-white border-2 border-[#dfb559]/30 rounded-xs p-8 sm:p-12 shadow-[0_15px_35px_rgba(0,0,0,0.04)] relative flex flex-col justify-between hover:border-[#dfb559] hover:shadow-[0_20px_45px_rgba(212,175,55,0.06)] transition-all duration-500"
          >
            {/* Fine border inside card */}
            <div className="absolute inset-1.5 border border-[#dfb559]/10 pointer-events-none" />

            <div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#233025] rounded-full flex items-center justify-center mb-6 border border-[#dfb559]/30 shadow-md">
                  <CreditCard className="w-7 h-7 text-[#dfb559]" strokeWidth={1.25} />
                </div>

                <h3 className="font-serif text-2xl text-[#3a4b3d] font-normal tracking-wide mb-1">
                  {t("gifts.bank")}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A9A5B] font-bold mb-6">
                  {t("gifts.bank_sub")}
                </span>
              </div>

              {/* Premium Sub-selector Tabs */}
              <div className="flex p-0.5 bg-[#FAF9F6] rounded-xs border border-[#dfb559]/25 shadow-inner mb-6 max-w-xs mx-auto">
                <button
                  onClick={() => setActiveTab("banks")}
                  className={`flex-1 py-2 rounded-xs text-[9px] uppercase tracking-[0.16em] font-bold transition-all cursor-pointer ${
                    activeTab === "banks"
                      ? "bg-[#233025] text-white shadow-md"
                      : "text-sage-700 hover:text-sage-950"
                  }`}
                >
                  {lang === "es" ? "Cuentas" : "Accounts"}
                </button>
                <button
                  onClick={() => setActiveTab("wallets")}
                  className={`flex-1 py-2 rounded-xs text-[9px] uppercase tracking-[0.16em] font-bold transition-all cursor-pointer ${
                    activeTab === "wallets"
                      ? "bg-[#233025] text-white shadow-md"
                      : "text-sage-700 hover:text-sage-950"
                  }`}
                >
                  Yape / Plin
                </button>
              </div>

              {/* List of banking accounts or wallets */}
              {activeTab === "banks" ? (
                <div className="w-full space-y-4 text-left relative z-10">
                  {/* BCP Account */}
                  <div className="border border-[#dfb559]/25 rounded-xs p-4 bg-[#faf9f6] hover:bg-[#FAF9F6] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                        {lang === "es" ? "Banco BCP Soles" : "BCP Bank (Soles)"}
                      </span>
                      <span className="text-[9px] text-[#8A9A5B] uppercase font-bold">Jesús M. Ramírez</span>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center justify-between border-b border-gray-200/40 pb-1">
                        <span className="font-light text-gray-500">{lang === "es" ? "Nº Cuenta:" : "Account No:"}</span>
                        <button
                          onClick={() => copyToClipboard(bcpAccount, "bcpAcct")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[11px] cursor-pointer"
                        >
                          {bcpAccount}
                          {copiedAccount === "bcpAcct" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-light text-gray-500">Nº CCI:</span>
                        <button
                          onClick={() => copyToClipboard(bcpCci, "bcpCci")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[10px] cursor-pointer"
                        >
                          {bcpCci}
                          {copiedAccount === "bcpCci" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Interbank Account */}
                  <div className="border border-[#dfb559]/25 rounded-xs p-4 bg-[#faf9f6]/95 hover:bg-[#FAF9F6] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                        {lang === "es" ? "Interbank Soles" : "Interbank (Soles)"}
                      </span>
                      <span className="text-[9px] text-[#8A9A5B] uppercase font-bold">Nuri A. Cuevas</span>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center justify-between border-b border-gray-200/40 pb-1">
                        <span className="font-light text-gray-500">{lang === "es" ? "Nº Cuenta:" : "Account No:"}</span>
                        <button
                          onClick={() => copyToClipboard(interbankAccount, "intAcct")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[11px] cursor-pointer"
                        >
                          {interbankAccount}
                          {copiedAccount === "intAcct" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-light text-gray-500">Nº CCI:</span>
                        <button
                          onClick={() => copyToClipboard(interbankCci, "intCci")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[10px] cursor-pointer"
                        >
                          {interbankCci}
                          {copiedAccount === "intCci" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full space-y-4 text-left relative z-10">
                  {/* Yape Account */}
                  <div className="border border-[#dfb559]/25 rounded-xs p-4 bg-[#faf9f6]/95 hover:bg-[#FAF9F6] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#800080]" />
                        <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                          Yape
                        </span>
                      </div>
                      <span className="text-[9px] text-[#8a9a5b] uppercase font-bold">Jesús M. Ramírez</span>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-light text-gray-400">{lang === "es" ? "Nº Celular:" : "Phone No:"}</span>
                        <button
                          onClick={() => copyToClipboard(yapeNumber, "yapeAcct")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[12px] cursor-pointer"
                        >
                          {yapeNumber}
                          {copiedAccount === "yapeAcct" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Plin Account */}
                  <div className="border border-[#dfb559]/25 rounded-xs p-4 bg-[#faf9f6]/95 hover:bg-[#FAF9F6] transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00b0ff]" />
                        <span className="text-[10px] font-bold uppercase text-[#333] tracking-widest">
                          Plin
                        </span>
                      </div>
                      <span className="text-[9px] text-[#8a9a5b] uppercase font-bold">Nuri A. Cuevas</span>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-light text-gray-400">{lang === "es" ? "Nº Celular:" : "Phone No:"}</span>
                        <button
                          onClick={() => copyToClipboard(plinNumber, "plinAcct")}
                          className="flex items-center gap-1.5 font-mono text-[#333] hover:text-[#c5a059] font-bold transition-all text-[12px] cursor-pointer"
                        >
                          {plinNumber}
                          {copiedAccount === "plinAcct" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                          ) : (
                            <Clipboard className="w-3.5 h-3.5 text-[#dfb559]" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-[#c5a059] text-[10px] font-bold uppercase tracking-widest mt-8 justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb559]" />
              <span>{lang === "es" ? "Transferencia Digital" : "Digital Transfer"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
