import { Gamepad2, Ghost, Zap, Citrus, ArrowBigUpDash, Candy, ShoppingBag } from 'lucide-react';

// Liste des sites inutiles pour le bouton "Je m'ennuie"
export const externalSites = [
  "https://theuselessweb.com/",           // Le classique
  "https://quickdraw.withgoogle.com/",     // Dessine et l'IA devine (Addictif)
  "https://neal.fun/deep-sea/",            // Scrolle jusqu'au fond de l'océan
  "https://pointerpointer.com/",           // Pointe ton curseur, une photo le montre
  "https://hacker-typer.com/",             // Tape au hasard et ressemble à un hacker
  "https://findtheinvisiblecow.com/",      // Trouve la vache au son (Mets le son bas !)
  "https://papertoilet.com/",              // Déroule le papier toilette
  "https://zoomquilt.org/",                // Zoom infini hypnotisant
  "https://thisissand.com/",               // Crée du sable coloré
  "https://jacksonpollock.org/",           // Peins comme Pollock en bougeant la souris
  "https://smashthewalls.com/",            // Casse des murs en cliquant
  "https://checkbox.toys/scale/",          // Joue avec des cases à cocher (Satisfaisant)
  "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", // Simulation de fluide incroyable
  "https://experiments.withgoogle.com/collection/chrome",   // Expériences Google dingues
  "https://lines.chromeexperiments.com/",  // Suis des lignes sur la terre
  "https://littlealchemy2.com/"            // Mélange des éléments pour créer la vie
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

// Liste des produits Amazon (Gadgets de bureau)
export const products = [
  {
    id: 1,
    title: "Mini Golf de Toilettes",
    price: "12,62 €",
    image: "https://m.media-amazon.com/images/I/81SSFkIIxhL._AC_SL1500_.jpg",
    url: "https://amzn.to/3XDu9Zl",
    badge: "Drôle"
  },
  {
    id: 2,
    title: "Mug 'No Ticket No Support'",
    price: "16,00 €",
    image: "https://m.media-amazon.com/images/I/61rQtwJEyiL._AC_SL1500_.jpg",
    url: "https://amzn.to/4oGIfUU",
    badge: "Drôle"
  },
  {
    id: 3,
    title: "Punching Ball de Bureau",
    price: "35,99 €",
    image: "https://m.media-amazon.com/images/I/812B5mNNjrL._AC_SL1500_.jpg",
    url: "https://amzn.to/4oCvwST",
    badge: "Must-Have"
  }
];