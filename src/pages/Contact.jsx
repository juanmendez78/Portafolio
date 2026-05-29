import "../styles/contact.css"
import AnimatedSection from "../components/AnimatedSection"
import chief from '../assets/images/chief.png';

function Contact() {
  return (
     <AnimatedSection>
    <section className="contact-section">
      <h2>Contacto</h2>

        <img
    className="contact-image"
    src={chief}
    alt="Contacto"
  />

      <p className="contact-text">
        ¿Te interesa trabajar conmigo o conocer más sobre mis proyectos?
      </p>

      <div className="contact-links">
        <a href="mailto:juan.esteban.mendez.t@gmail.com">Email</a>
        <a href="https://github.com/juanmendez78" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/juan-esteban-m%C3%A9ndez-tobar-b94828279/" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
    </AnimatedSection>
  )
}

export default Contact