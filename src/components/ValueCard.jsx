import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHardHat,
  faAward,
  faCertificate,
  faChartLine,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'
import styles from './ValueCard.module.css'

const valueIcons = {
  worker: faHardHat,
  award: faAward,
  quality: faCertificate,
  growth: faChartLine,
  warranty: faShieldHalved,
}

function ValueCard({ icon, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <FontAwesomeIcon icon={valueIcons[icon] || faCertificate} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default ValueCard
