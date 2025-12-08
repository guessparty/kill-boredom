import { Gamepad2, Ghost, Zap } from 'lucide-react';

// Liste des sites inutiles pour le bouton "Je m'ennuie"
export const externalSites = [
  "https://theuselessweb.com/",
  "https://quickdraw.withgoogle.com/",
  "https://neal.fun/deep-sea/",
  "https://pointerpointer.com/"
];

// Liste des mini-jeux (Fake pour l'instant)
export const games = [
  {
    id: 1,
    title: "Bubble Shooter Pro",
    category: "Arcade",
    description: "Le classique indémodable.",
    icon: <Zap size={40} color="#fbbf24" />,
    url: "#"
  },
  {
    id: 2,
    title: "Tower Defense 2025",
    category: "Stratégie",
    description: "Protégez la base !",
    icon: <Ghost size={40} color="#a78bfa" />,
    url: "#"
  },
  {
    id: 3,
    title: "Solitaire Master",
    category: "Cartes",
    description: "Détente absolue.",
    icon: <Gamepad2 size={40} color="#34d399" />,
    url: "#"
  }
];
