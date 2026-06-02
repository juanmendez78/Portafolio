import Badge from "./Badge"
import "../styles/gameCard.css"

function GameCard({ title, platform, cover, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <img src={cover} alt={title} />

      <div className="game-card-info">
        <h3>{title}</h3>
        <Badge value={platform} />
      </div>
    </div>
  )
}

export default GameCard