import { useState } from "react"
import { audiovisualProjects } from "../data/audiovisual"
import AudiovisualCard from "../components/AudiovisualCard"
import AudiovisualModal from "../components/AudiovisualModal"
import "../styles/games.css"
import AnimatedSection from "../components/AnimatedSection"

function Audiovisual() {
  const [selected, setSelected] = useState(null)

  // 🎬 Premiere / After Effects (tienen video)
  const videoProjects = audiovisualProjects.filter(
    project => project.video
  )

  // 🎨 Photoshop (no tienen video)
  const photoshopProjects = audiovisualProjects.filter(
    project => !project.video
  )

  return (
    <AnimatedSection>

      {/* 🎬 Premiere / After Effects */}
      <section className="games-section">
        <h2>Premiere / After Effects</h2>

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

      {/* 🎨 Photoshop */}
      <section className="games-section">
        <h2>Photoshop</h2>

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

      <AudiovisualModal
        project={selected}
        onClose={() => setSelected(null)}
      />

    </AnimatedSection>
  )
}

export default Audiovisual
