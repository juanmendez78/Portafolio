import { useNavigate } from "react-router-dom"
import "../styles/hero.css"
import AnimatedSection from "../components/AnimatedSection"
import edward1 from "../assets/images/edward1.png";

function Home() {
  const navigate = useNavigate()

  return (
    <AnimatedSection>
    <section className="hero">
      <div className="hero-content">
        <h2>
          Game Developer <span>& Multimedia Engineer</span>
        </h2>

        <p>
          Soy Juan Esteban Méndez Tobar, egresado de Ingeniería Multimedia con un fuerte enfoque en el desarrollo de videojuegos en Unity 2D y 3D. Tengo experiencia en AR y VR, así como en la producción de contenido audiovisual utilizando Adobe Premiere Pro, After Effects y Photoshop.
</p>
<p>
        Me apasiona el diseño de mecánicas de juego, la creación de experiencias interactivas y el desarrollo de proyectos que integren programación, arte y narrativa.
        </p>

        <div className="hero-buttons">
          <button
            className="btn primary"
            onClick={() => navigate("/videojuegos")}
          >
            Ver videojuegos
          </button>

          <button
            className="btn secondary"
            onClick={() => navigate("/audiovisual")}
          >
            Ver audiovisual
          </button>
        </div>
      </div>
    <div className="hero-image">
    <img src={edward1} alt="personaje" />
  </div>
    </section>
    </AnimatedSection>
  )
}

export default Home