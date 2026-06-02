import { useLanguage } from "../context/LanguageContext"
import "../styles/footer.css"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Juan Méndez</p>
        <p className="footer-role">{t.footer.role}</p>

        <div className="footer-links">
          <a href="https://github.com/juanmendez78" target="_blank">GitHub</a>
          <a href="mailto:juan.esteban.mendez.t@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/juan-esteban-m%C3%A9ndez-tobar-b94828279/" target="_blank">LinkedIn</a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} — {t.footer.copy}
        </span>
      </div>
    </footer>
  )
}

export default Footer
