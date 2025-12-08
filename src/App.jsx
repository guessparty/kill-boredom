import { useState } from 'react';
import { Shuffle, Gamepad, ExternalLink, Zap } from 'lucide-react';
import { games, externalSites } from './data';

function App() {
  
  // Fonction qui choisit un site au hasard
  const killBoredom = () => {
    const randomSite = externalSites[Math.floor(Math.random() * externalSites.length)];
    window.open(randomSite, '_blank');
  };

  return (
    <div className="container">
      {/* 1. L'EN-TÊTE */}
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '20px' }}>
          <Gamepad size={40} color="#8b5cf6" />
          <h1>Anti-Ennui.com</h1>
        </div>
        <p style={{ color: '#94a3b8' }}>La zone de décompression ultime du web</p>
        
        {/* Le Bouton Magique */}
        <button onClick={killBoredom} className="bored-btn">
          <Shuffle size={24} style={{ marginRight: '10px' }} />
          Je m'ennuie (Surprends-moi)
        </button>
      </header>

           {/* 2. BANNIÈRE PROMO (Masquée temporairement)
      <div style={{ 
        background: 'linear-gradient(90deg, #2563eb, #1e40af)', 
        padding: '2rem', 
        borderRadius: '15px', 
        marginBottom: '3rem',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>🎉 Soirée entre amis ?</h2>
          <p style={{ margin: '5px 0 0 0', color: '#bfdbfe' }}>
            Découvre <strong>GuessParty</strong>, le jeu qui révèle les secrets de tes potes.
          </p>
        </div>
        <a 
          href="https://guessparty.fr" 
          target="_blank" 
          style={{ 
            backgroundColor: 'white', 
            color: '#1e40af', 
            padding: '12px 25px', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          Jouer Gratuitement <ExternalLink size={16} />
        </a>
      </div>
      */}


      {/* 3. GRILLE DES JEUX */}
      <h2 style={{ textAlign: 'left', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Zap color="#f59e0b" /> Jeux Instantanés
      </h2>
      
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="card" onClick={() => alert("Bientôt disponible : " + game.title)}>
            <div className="card-img">
              {game.icon}
            </div>
            <div className="card-content" style={{ textAlign: 'left' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                color: '#10b981', 
                fontWeight: 'bold' 
              }}>
                {game.category}
              </span>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}

        {/* Placeholder PUB (Pour plus tard) */}
        <div className="card" style={{ borderStyle: 'dashed', borderColor: '#475569', background: 'transparent' }}>
          <div className="card-img" style={{ background: 'transparent', color: '#475569' }}>
            PUB
          </div>
          <div className="card-content">
            <h3>Espace Pub</h3>
            <p>Emplacement réservé</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: '50px', color: '#64748b', fontSize: '0.9rem' }}>
        <p>© 2025 Anti-Ennui - Fait avec ❤️</p>
      </footer>
    </div>
  );
}

export default App;
