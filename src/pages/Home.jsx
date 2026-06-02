import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import "../styles/hero.css"
import edward1 from "../assets/images/edward1.png"
import Skills from "../components/Skills"
import Education from "../components/Education"

function Home() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero-eyebrow">{t.hero.eyebrow}</p>

          <h2>
            {t.hero.title} <span>{t.hero.titleSpan}</span>
          </h2>

          <p className="hero-bio">{t.hero.bio}</p>
          <p className="hero-cta-text">{t.hero.cta}</p>

          <div className="hero-buttons">
            <button className="btn primary" onClick={() => navigate("/videojuegos")}>
              {t.hero.btnGames}
            </button>
            <button className="btn secondary" onClick={() => navigate("/audiovisual")}>
              {t.hero.btnAudio}
            </button>
            <a className="btn cv" href="/cv.pdf" download="CV-Juan-Mendez.pdf">
              {t.hero.btnCV}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img src={edward1} alt="personaje" />
        </motion.div>
      </section>

      <Skills />
      <Education />
    </>
  )
}

export default Home
