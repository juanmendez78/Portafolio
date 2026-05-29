import "../styles/audiovisualModal.css"

function AudiovisualModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="tools">
          {project.tools.map(tool => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        {project.video ? (
          <iframe
            src={project.video}
            title={project.title}
            allowFullScreen
          />
        ) : (
          <img
            src={project.cover}
            alt={project.title}
            className="poster-image"
          />
        )}
      </div>
    </div>
  )
}

export default AudiovisualModal