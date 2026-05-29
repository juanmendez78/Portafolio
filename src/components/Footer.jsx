import "../styles/footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Juan Méndez</p>
        <p className="footer-role">
          Game Developer · Multimedia Engineer
        </p>

        <div className="footer-links">
          <a href="https://github.com/juanmendez78" target="_blank">
            GitHub
          </a>
          <a href="mailto:juan.esteban.mendez.t@gmail.com" target="_blank">
            Email
          </a>
          <a href="https://www.linkedin.com/in/juan-esteban-m%C3%A9ndez-tobar-b94828279/" target="_blank">
            LinkedIn
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} — Todos los derechos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer