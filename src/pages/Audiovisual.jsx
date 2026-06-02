import { useState } from "react"
import { audiovisualProjects } from "../data/audiovisual"
import AudiovisualCard from "../components/AudiovisualCard"
import AudiovisualModal from "../components/AudiovisualModal"
import { useLanguage } from "../context/LanguageContext"
import "../styles/games.css"
import AnimatedSection from "../components/AnimatedSection"

function Audiovisual() {
  const [selected, setSelected] = useState(null)
  const { t } = useLanguage()

  const videoProjects = audiovisualProjects.filter(p => p.video)
  const photoshopProjects = audiovisualProjects.filter(p => !p.video)

  return (
    <AnimatedSection>
      <section className="games-section">
        <h2>{t.audiovisual.premiere}</h2>
        <div className="games-grid">
          {videoProjects.map(project => (
            <AudiovisualCard
              key={project.id}
              {...project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </section>

      <section className="games-section" style={{ paddingTop: "2rem" }}>
        <h2>{t.audiovisual.photoshop}</h2>
        <div className="games-grid">
          {photoshopProjects.map(project => (
            <AudiovisualCard
              key={project.id}
              {...project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </section>

      <AudiovisualModal project={selected} onClose={() => setSelected(null)} />
    </AnimatedSection>
  )
}

export default Audiovisual
