import Badge from "./Badge"
import { useLanguage } from "../context/LanguageContext"
import "../styles/gameModal.css"

function GameModal({ game, onClose }) {
  const { t } = useLanguage()
  if (!game) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{game.title}</h2>
        <div style={{ marginBottom: "16px" }}>
          <Badge value={game.platform} />
        </div>

        <p className="description">{game.description}</p>

        {game.tech && (
          <div className="tools">
            {game.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        )}

        <h4>{t.games.contribution}</h4>
        <p>{game.contribution}</p>

        <div className="video-container">
          <iframe src={game.youtube} title={game.title} allowFullScreen />
        </div>

        <div className="gallery">
          {game.gallery.map((img, index) => (
            <img key={index} src={img} alt="Gameplay" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameModal
