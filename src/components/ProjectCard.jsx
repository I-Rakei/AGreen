import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { photos } from '../assets/images'
import styles from './ProjectCard.module.css'

function ProjectCard({ project, onView }) {
  return (
    <button type="button" className={styles.card} onClick={() => onView(project)}>
      <img className={styles.bg} src={photos[project.image]} alt={project.name} loading="lazy" />
      <div className={styles.overlay} />
      <div className={styles.body}>
        <span className={styles.tag}>{project.tag}</span>
        <div>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.spec}>{project.spec}</p>
          <div className={styles.footer}>
            <span className={styles.view}>
              View project <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default ProjectCard
