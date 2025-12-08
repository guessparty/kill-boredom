import { Gamepad2, Ghost, Zap, Citrus, ArrowBigUpDash, Candy } from 'lucide-react';

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
    url: "https://html5.gamemonetize.co/y3roy6krania1gm0lezahh36rm51wk1u/"
  },
  {
    id: 2,
    title: "Tower Defense 2025",
    category: "Stratégie",
    description: "Protégez la base !",
    icon: <Ghost size={40} color="#a78bfa" />,
    url: "https://html5.gamemonetize.co/72sb39iym3ldmid69aivqfi1jmookexr/"
  },
  {
    id: 3,
    title: "Solitaire Master",
    category: "Cartes",
    description: "Détente absolue.",
    icon: <Gamepad2 size={40} color="#34d399" />,
    url: "https://html5.gamemonetize.co/yhgdcw5brwugmqftpt96krmliugwgcxe/"
  },
  {
    id: 4,
    title: "Ninja Fruit",
    category: "Fun",
    description: "Des fruits et encore des fruits",
    icon: <Citrus size={40} color="#eab308" />,
    url: "https://html5.gamemonetize.co/4kci7og3klgj0ivy2wz3gdvd9dth5e7n/"
  },
{
    id: 5,
    title: "Mario Run",
    category: "Vitesse",
    description: "Cours Mario ! Cours !",
    icon: <ArrowBigUpDash size={40} color="#3b82f6" />,
    url: "https://html5.gamemonetize.co/pooszvaulpq40v81v8z3cfdpzau4hro6/"
  },
{
    id: 6,
    title: "Candy Shuffle",
    category: "Puzzle",
    description: "Fais exploser les bonbons !",
    icon: <Candy size={40} color="#a78bfa" />,
    url: "https://html5.gamemonetize.co/b7j6efxqew47djofhkag395vb1ijn3ny/"
  },
  
];
