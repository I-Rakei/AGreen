import { clients } from '../data/content'
import { clientLogos } from '../assets/images'
import styles from './ClientLogos.module.css'

function ClientLogos() {
  return (
    <div className={styles.row}>
      {clients.logos.map((client) => (
        <img key={client.name} className={styles.logo} src={clientLogos[client.image]} alt={client.name} />
      ))}
      {clients.names.map((name) => (
        <span key={name} className={styles.chip}>
          {name}
        </span>
      ))}
    </div>
  )
}

export default ClientLogos
