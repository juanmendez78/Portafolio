import "../styles/audiovisualCard.css"

function AudiovisualCard({ title, type, cover, onClick }) {
  return (
    <div className="audiovisual-card" onClick={onClick}>
      <img src={cover} alt={title} />

      <div className="audiovisual-info">
        <h3>{title}</h3>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default AudiovisualCard