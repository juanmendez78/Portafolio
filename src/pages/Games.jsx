import { useState } from "react"
import { motion } from "framer-motion"
import { games } from "../data/games"
import GameCard from "../components/GameCard"
import GameModal from "../components/GameModal"
import { useLanguage } from "../context/LanguageContext"
import "../styles/games.css"
import AnimatedSection from "../components/AnimatedSection"

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
}

function Games() {
  const [selectedGame, setSelectedGame] = useState(null)
  const { t } = useLanguage()

  return (
    <AnimatedSection>
      <section className="games-section">
        <h2>{t.games.title}</h2>

        <motion.div
          className="games-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {games.map(game => (
            <motion.div key={game.id} variants={cardVariants}>
              <GameCard
                {...game}
                onClick={() => setSelectedGame(game)}
              />
            </motion.div>
          ))}
        </motion.div>

        <GameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      </section>
    </AnimatedSection>
  )
}

export default Games
