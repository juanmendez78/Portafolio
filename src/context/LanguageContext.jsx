import { createContext, useContext, useState } from "react"
import { translations } from "../i18n/translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "es"
  )

  function toggleLang() {
    const next = lang === "es" ? "en" : "es"
    setLang(next)
    localStorage.setItem("lang", next)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
