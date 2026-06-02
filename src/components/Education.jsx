import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"
import "../styles/education.css"

function Education() {
  const { t } = useLanguage()
  const { title, badges, items } = t.education

  return (
    <section className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <div className="timeline">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-body">
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              <span className={`timeline-badge ${item.badge}`}>
                {badges[item.badge]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
