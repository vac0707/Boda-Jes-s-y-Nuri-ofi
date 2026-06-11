import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import WelcomeScreen from "./components/WelcomeScreen";
import AudioPlayer from "./components/AudioPlayer";
import Hero from "./components/Hero";
import FamilyTribute from "./components/FamilyTribute";
import PhotoDivider from "./components/PhotoDivider";
import EventsAndMaps from "./components/EventsAndMaps";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import PhotoGallery from "./components/PhotoGallery";
import Gifts from "./components/Gifts";
import Countdown from "./components/Countdown";
import RSVPForm from "./components/RSVPForm";
import FloatingLeaves from "./components/FloatingLeaves";
import FooterRefined from "./components/FooterRefined";
import { useLanguage } from "./hooks/useLanguage";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const { lang } = useLanguage();

  // Scroll restore on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
    // Add brief smooth scroll trigger
    setTimeout(() => {
      const heroSec = document.getElementById("inicio");
      if (heroSec) {
        heroSec.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-cream-100 overflow-x-hidden select-none">
      {/* Cinematic Curtain Transition */}
      <AnimatePresence mode="wait">
        {!unlocked && (
          <motion.div
            key="welcome-curtain"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <WelcomeScreen onOpen={handleUnlock} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Page */}
      {unlocked && (
        <motion.main
          key="wedding-invitation-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Subtle Ambient Falling Leaves & Sparkles */}
          <FloatingLeaves />

          {/* Persistent Background Music Controller */}
          <AudioPlayer systemUnlocked={unlocked} />

          {/* Fullscreen Parallax Header */}
          <Hero />

          {/* Elegant Wedding Portrait above families */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968212/22_wynwmc.jpg" alt="Jesús y Nuri - Elegancia" />

          {/* Parents & Godparents Family Presentation */}
          <FamilyTribute />

          {/* Interleaved Image 1: Romantic Walk */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/04_jafhgb.jpg" alt="Jesús y Nuri juntos" />

          {/* Countdown Clock & Monthly Calendar Reference */}
          <Countdown />

          {/* Church and Banquet cards + Maps interactive Tab */}
          <EventsAndMaps />

          {/* Interleaved Image 2: Sunset Portrait */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968214/05_nxuzj3.jpg" alt="Sesión de fotos al atardecer" />

          {/* Timeline Process of the Day */}
          <Schedule />

          {/* Interleaved Image 3: Vintage Portrait */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/06_po8nhb.jpg" alt="Momentos del amor" />

          {/* Attire Etiquette specifications */}
          <DressCode />

          {/* Interleaved Image 4: Garden Embrace */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968205/08_tritav.jpg" alt="Abrazo romántico" />

          {/* Non-overlapping visual grid / touch slider */}
          <PhotoGallery />

          {/* Gift table / Cash Contributions options (Without Envelope rain) */}
          <Gifts />

          {/* Interleaved Image 5: Sunset Sparkle */}
          <PhotoDivider imageUrl="https://res.cloudinary.com/dcnynnstm/image/upload/v1780968206/10_cuonxy.jpg" alt="La magia del amor" />

          {/* Interactive registration book connected to WhatsApp */}
          <RSVPForm />

          {/* Cinematic End Banner */}
          <FooterRefined />
        </motion.main>
      )}
    </div>
  );
}
