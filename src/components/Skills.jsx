import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import {
  MdViewInAr, MdSportsEsports, MdDashboard,
  MdCode, MdVideocam, MdMovieFilter, MdBrush, MdGamepad, MdAutoAwesome
} from "react-icons/md"
import { BsUnity } from "react-icons/bs"
import "../styles/skills.css"

const gameIcons = [
  <BsUnity />, <MdViewInAr />, <MdCode />,
  <MdGamepad />, <MdDashboard />, <MdSportsEsports />
]
const mediaIcons = [
  <MdVideocam />, <MdMovieFilter />, <MdBrush />, <MdAutoAwesome />
]

const gameKeys = ["unity3d", "unityAR", "csharp", "inputSystem", "uiHud", "gameLogic"]
const mediaKeys = ["premiere", "afterEffects", "photoshop", "motionGraphics"]

function SkillCard({ icon, label, index }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <span className="skill-icon">{icon}</span>
      <span className="skill-label">{label}</span>
    </motion.div>
  )
}

function Skills() {
  const { t } = useLanguage()
  const labels = t.skills.labels

  return (
    <section className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.skills.title}
      </motion.h2>

      <div className="skills-wrapper">
        <div className="skills-group">
          <h3>{t.skills.gameDev}</h3>
          <div className="skills-grid">
            {gameKeys.map((key, i) => (
              <SkillCard key={key} icon={gameIcons[i]} label={labels[key]} index={i} />
            ))}
          </div>
        </div>

        <div className="skills-divider" />

        <div className="skills-group">
          <h3>{t.skills.multimedia}</h3>
          <div className="skills-grid">
            {mediaKeys.map((key, i) => (
              <SkillCard key={key} icon={mediaIcons[i]} label={labels[key]} index={i + gameKeys.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
