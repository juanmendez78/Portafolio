import { useState } from "react"
import { games } from "../data/games"
import GameCard from "../components/GameCard"
import GameModal from "../components/GameModal"
import "../styles/games.css"
import AnimatedSection from "../components/AnimatedSection"

function Games() {
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <AnimatedSection>
    <section className="games-section">
      <h2>Videojuegos</h2>

      <div className="games-grid">
        {games.map(game => (
          <GameCard
            key={game.id}
            {...game}
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>

      <GameModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </section>
    </AnimatedSection>
  )
}

export default Games