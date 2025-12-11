import { useState } from 'react';
import { Shuffle, Gamepad, ExternalLink, Zap, X, Loader, ShoppingBag } from 'lucide-react';
import { games, externalSites, products } from './data.jsx';


function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ouvre le jeu et active le spinner
  const openGame = (game) => {
    setIsLoading(true);
    setActiveGame(game);
  };

  // Redirection aléatoire
  const killBoredom = () => {
    const randomSite = externalSites[Math.floor(Math.random() * externalSites.length)];
    window.open(randomSite, '_blank');
  };

  return (
    <div className="container">
      {/* 1. HEADER */}
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '20px' }}>
          <Gamepad size={40} color="#8b5cf6" />
          <h1>Anti-Ennui</h1>
        </div>
        <p style={{ color: '#94a3b8' }}>La zone de décompression ultime du web</p>
        
        <button onClick={killBoredom} className="bored-btn">
          <Shuffle size={24} style={{ marginRight: '10px' }} />
          Je m'ennuie (Surprends-moi)
        </button>
      </header>

      {/* 2. GRILLE DES JEUX */}
      <h2 style={{ textAlign: 'left', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Zap color="#f59e0b" /> Jeux Gratuits
      </h2>
      
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="card" onClick={() => openGame(game)}>
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

        
      </div>

      {/* 2.5 SECTION SHOPPING AMAZON */}
      <h2 style={{ 
        textAlign: 'left', 
        marginBottom: '20px', 
        marginTop: '60px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px',
        color: '#f472b6' // Rose sympa
      }}>
        <ShoppingBag color="#f472b6" /> Gadgets de Survie au Bureau
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Un peu plus petit que les jeux
        gap: '20px'
      }}>
        {products.map((product) => (
          <a 
            key={product.id} 
            href={product.url}
            target="_blank"
            rel="noopener noreferrer" // Sécurité pour les liens externes
            className="card" // On réutilise le style "card" existant
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Image Produit */}
            <div style={{ 
              height: '180px', 
              background: 'white', 
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {product.badge && (
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#ef4444',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  padding: '2px 8px',
                  borderRadius: '10px'
                }}>
                  {product.badge}
                </span>
              )}
              {/* On affiche une image si dispo, sinon une icône sac */}
              {product.image ? (
                <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              ) : (
                <ShoppingBag size={40} color="#cbd5e1" />
              )}
            </div>

            {/* Info Produit */}
            <div className="card-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '5px' }}>{product.title}</h3>
                <p style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.1rem' }}>{product.price}</p>
              </div>
              <div style={{ 
                marginTop: '10px', 
                background: '#f59e0b', 
                color: 'black', 
                textAlign: 'center', 
                padding: '8px', 
                borderRadius: '6px', 
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                Voir sur Amazon
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* 3. MODAL DE JEU (Plein écran) */}
      {activeGame && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(5px)' // Petit effet flou derrière
        }}>
          {/* Bouton Fermer */}
          <button 
            onClick={() => setActiveGame(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'white', border: 'none', borderRadius: '50%',
              width: '45px', height: '45px', cursor: 'pointer', zIndex: 1002,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            <X size={28} color="black" />
          </button>

          <div style={{ 
            width: '90%', height: '80%', 
            background: '#0f172a', borderRadius: '12px', 
            overflow: 'hidden', position: 'relative',
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.2)' 
          }}>
            
            {/* SPINNER DE CHARGEMENT */}
            {isLoading && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                color: '#94a3b8', zIndex: 1
              }}>
                <Loader size={48} className="spin-animation" color="#8b5cf6" />
                <p style={{ marginTop: '1rem', fontWeight: '500' }}>Chargement du jeu en cours...</p>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Ça peut prendre quelques secondes</p>
              </div>
            )}

            {/* IFRAME DU JEU */}
            <iframe 
              src={activeGame.url}
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allow="autoplay; fullscreen; gamepad; accelerometer; gyroscope"
              onLoad={() => setIsLoading(false)}
              style={{ 
                opacity: isLoading ? 0 : 1, 
                transition: 'opacity 0.5s ease-in-out',
                background: 'black' // Fond noir pour éviter les flashs blancs
              }}
            ></iframe>
          </div>
          
          <h3 style={{ color: 'white', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {activeGame.icon} {activeGame.title}
          </h3>
        </div>
      )}

      {/* 4. FOOTER */}
      <footer style={{ marginTop: '60px', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
        <p>© 2025 Anti-Ennui.com - Fait pour ceux qui s'ennuient.</p>
      </footer>

      {/* BOUTON DONATION */}
<a 
  href="https://ko-fi.com/antiennui" 
  target="_blank"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#FF5E5B',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    zIndex: 999
  }}
>
  ☕ M'offrir un café
</a>

    </div>
  );
}

export default App;
