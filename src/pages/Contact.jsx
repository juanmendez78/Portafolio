import { motion } from "framer-motion"
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useLanguage } from "../context/LanguageContext"
import "../styles/contact.css"

const LINKS = [
  {
    icon: MdEmail,
    label: "Email",
    handle: "juan.esteban.mendez.t@gmail.com",
    href: "mailto:juan.esteban.mendez.t@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "@juanmendez78",
    href: "https://github.com/juanmendez78",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "Juan Esteban Méndez",
    href: "https://www.linkedin.com/in/juan-esteban-m%C3%A9ndez-tobar-b94828279/",
  },
]

function Contact() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-badge">
        <span className="contact-badge-dot" />
        {t.contact.available}
      </div>

      <h2 className="contact-title">{t.contact.title}</h2>
      <p className="contact-text">{t.contact.text}</p>

      <div className="contact-cards">
        {LINKS.map(({ icon: Icon, label, handle, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
          >
            <span className="contact-card-icon">
              <Icon size={30} />
            </span>
            <span className="contact-card-label">{label}</span>
            <span className="contact-card-handle">{handle}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

export default Contact
