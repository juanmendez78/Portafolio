import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import "../styles/navbar.css"
import unityIcon from "../assets/images/unity.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <span className="logo-white">Juan</span>
          <span className="logo-purple"> Méndez</span>
          <img src={unityIcon} alt="" className="logo-icon" />
        </Link>

        <ul className="nav-links">
          <li><Link to="/">{t.nav.home}</Link></li>
          <li><Link to="/videojuegos">{t.nav.games}</Link></li>
          <li><Link to="/audiovisual">{t.nav.audiovisual}</Link></li>
          <li><Link to="/contacto">{t.nav.contact}</Link></li>
          <li>
            <button className="lang-toggle" onClick={toggleLang} title={lang === "es" ? "Switch to English" : "Cambiar a Español"}>
              <img
                className="lang-flag"
                src={lang === "es" ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/co.png"}
                alt={lang === "es" ? "English" : "Español"}
              />
            </button>
          </li>
        </ul>

        <div className="nav-right">
          <button className="lang-toggle" onClick={toggleLang} title={lang === "es" ? "Switch to English" : "Cambiar a Español"}>
            <img
              className="lang-flag"
              src={lang === "es" ? "https://flagcdn.com/w40/us.png" : "https://flagcdn.com/w40/co.png"}
              alt={lang === "es" ? "English" : "Español"}
            />
          </button>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={menuOpen ? "bar bar--top open" : "bar bar--top"} />
            <span className={menuOpen ? "bar bar--mid open" : "bar bar--mid"} />
            <span className={menuOpen ? "bar bar--bot open" : "bar bar--bot"} />
          </button>
        </div>
      </nav>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
        <Link to="/videojuegos" onClick={() => setMenuOpen(false)}>{t.nav.games}</Link>
        <Link to="/audiovisual" onClick={() => setMenuOpen(false)}>{t.nav.audiovisual}</Link>
        <Link to="/contacto" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
      </div>
    </>
  )
}

export default Navbar
