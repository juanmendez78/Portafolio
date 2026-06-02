import Badge from "./Badge"
import "../styles/audiovisualCard.css"

function AudiovisualCard({ title, type, cover, onClick }) {
  return (
    <div className="audiovisual-card" onClick={onClick}>
      <img src={cover} alt={title} />

      <div className="audiovisual-info">
        <h3>{title}</h3>
        <Badge value={type} />
      </div>
    </div>
  )
}

export default AudiovisualCard