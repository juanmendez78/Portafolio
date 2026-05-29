import "../styles/gameModal.css"

function GameModal({ game, onClose }) {
  if (!game) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{game.title}</h2>
        <p className="platform">{game.platform}</p>

        <p className="description">{game.description}</p>

        <h4>Mi aporte</h4>
        <p>{game.contribution}</p>

        <div className="video-container">
          <iframe
            src={game.youtube}
            title={game.title}
            allowFullScreen
          />
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