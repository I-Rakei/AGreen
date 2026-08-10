import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { photos } from '../assets/images'
import styles from './ProjectModal.module.css'

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <img className={styles.image} src={photos[project.image]} alt={project.name} />
        <div className={styles.body}>
          <h3 className={styles.title}>{project.name}</h3>
          <p className={styles.spec}>{project.spec}</p>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
