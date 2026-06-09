import { Track } from "../types";

export const PLAYLIST: Track[] = [
  {
    title: "Amor Infinito",
    artist: "Pablo Heredia & Flavia Laos",
    url: "https://res.cloudinary.com/dcnynnstm/video/upload/v1780968603/Pablo_Heredia_feat_Flavia_Laos_-_AMOR_INFINITO_jlhgfp.mp3",
  },
  {
    title: "Hasta Mi Final",
    artist: "Il Divo (Instrumental)",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri (Acoustic)",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

let globalAudio: HTMLAudioElement | null = null;
let currentTrackIndex = 0;
let isPlaying = false;
let volume = 0.55;
let isMuted = false;

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export const audioManager = {
  getTrackIndex() {
    return currentTrackIndex;
  },
  getTrack() {
    return PLAYLIST[currentTrackIndex];
  },
  isPlaying() {
    return isPlaying;
  },
  getVolume() {
    return volume;
  },
  isMuted() {
    return isMuted;
  },
  init(systemUnlocked: boolean) {
    if (typeof window === "undefined") return;
    if (!globalAudio) {
      globalAudio = new Audio(PLAYLIST[currentTrackIndex].url);
      globalAudio.loop = false;
      globalAudio.volume = isMuted ? 0 : volume;

      globalAudio.addEventListener("ended", () => {
        this.next();
      });

      globalAudio.addEventListener("play", () => {
        isPlaying = true;
        notify();
      });

      globalAudio.addEventListener("pause", () => {
        isPlaying = false;
        notify();
      });
    }

    if (systemUnlocked && globalAudio && !isPlaying) {
      this.play();
    }
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  play() {
    if (!globalAudio) return;
    globalAudio.play().then(() => {
      isPlaying = true;
      notify();
    }).catch(err => {
      console.log("Audio play gesture pending user interaction:", err);
    });
  },
  pause() {
    if (!globalAudio) return;
    globalAudio.pause();
    isPlaying = false;
    notify();
  },
  togglePlay() {
    if (isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  setVolume(newVol: number) {
    volume = newVol;
    if (globalAudio) {
      globalAudio.volume = isMuted ? 0 : volume;
    }
    notify();
  },
  setMuted(muted: boolean) {
    isMuted = muted;
    if (globalAudio) {
      globalAudio.volume = isMuted ? 0 : volume;
    }
    notify();
  },
  changeTrack(index: number) {
    if (!globalAudio) return;
    const wasPlaying = isPlaying;
    globalAudio.pause();
    currentTrackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
    globalAudio.src = PLAYLIST[currentTrackIndex].url;
    globalAudio.load();
    if (wasPlaying) {
      this.play();
    } else {
      notify();
    }
  },
  next() {
    this.changeTrack(currentTrackIndex + 1);
  },
  prev() {
    this.changeTrack(currentTrackIndex - 1);
  }
};
