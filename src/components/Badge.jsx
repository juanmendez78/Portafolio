import "../styles/badge.css"

const colorMap = {
  "PC":             "badge--pc",
  "MOBILE":         "badge--mobile",
  "AR":             "badge--ar",
  "Video · Edición":"badge--video",
  "Diseño gráfico": "badge--design",
}

function Badge({ value }) {
  const colorClass = colorMap[value] ?? "badge--default"
  return (
    <span className={`badge ${colorClass}`}>{value}</span>
  )
}

export default Badge
