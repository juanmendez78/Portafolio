import { Link } from "react-router-dom"
import "../styles/navbar.css"
import unityIcon from "../assets/images/unity.png";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="footer-name">
      <span className="white-name">Juan</span>{" "}
      <span className="purple-name name-with-icon">
        Méndez
        <img src={unityIcon} alt="icono" className="name-icon" />
      </span>
    </h1>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/videojuegos">Videojuegos</Link></li>
        <li><Link to="/audiovisual">Audiovisual</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar