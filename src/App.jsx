import { useState } from 'react';
import { Shuffle, Gamepad, ExternalLink, Zap, X } from 'lucide-react';
import { games, externalSites } from './data.jsx';

function App() {
  const [activeGame, setActiveGame] = useState(null); // Pour savoir quel jeu est ouvert

  const killBoredom = () => {
    const randomSite = externalSites[Math.floor(Math.random() * externalSites.length)];
    window.open(randomSite, '_blank');
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '20px' }}>
          <Gamepad size={40} color="#8b5cf6" />
          <h1>Anti-Ennui.com</h1>
        </div>
        <p style={{ color: '#94a3b8' }}>La zone de décompression ultime du web</p>
        
        <button onClick={killBoredom} className="bored-btn">
          <Shuffle size={24} style={{ marginRight: '10px' }} />
          Je m'ennuie
        </button>
      </header>

      {/* GRILLE DES JEUX */}
      <h2 style={{ textAlign: 'left', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Zap color="#f59e0b" /> Jeux Gratuits
      </h2>
      
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="card" onClick={() => setActiveGame(game)}>
            <div className="card-img">
              {game.icon}
            </div>
            <div className="card-content" style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10b981', fontWeight: 'bold' }}>
                {game.category}
              </span>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL JEU (S'affiche seulement si un jeu est actif) */}
      {activeGame && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Bouton Fermer */}
          <button 
            onClick={() => setActiveGame(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'white', border: 'none', borderRadius: '50%',
              width: '40px', height: '40px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <X size={24} color="black" />
          </button>

          {/* Le Jeu (Iframe) */}
          <div style={{ width: '90%', height: '80%', background: 'black', borderRadius: '10px', overflow: 'hidden' }}>
            <iframe 
              src={activeGame.url}
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="autoplay; fullscreen"
            ></iframe>
          </div>
          
          <h3 style={{ color: 'white', marginTop: '1rem' }}>{activeGame.title}</h3>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ marginTop: '50px', color: '#64748b', fontSize: '0.9rem' }}>
        <p>© 2025 Anti-Ennui - Fait avec ❤️</p>
      </footer>
    </div>
  );
}

export default App;
