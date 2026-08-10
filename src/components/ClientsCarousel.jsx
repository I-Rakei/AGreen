import { clients } from '../data/content'
import { clientLogos } from '../assets/images'
import styles from './ClientsCarousel.module.css'

function ClientsCarousel() {
  // Duplicate logos for infinite scroll effect
  const allLogos = [...clients.logos, ...clients.logos, ...clients.logos]

  return (
    <div className={styles.carousel}>
      <div className={styles.label}>Trusted by Those Who Matter Most</div>
      <div className={styles.scroll}>
        <div className={styles.scrollContent}>
          {allLogos.map((client, index) => (
            <img
              key={`${client.name}-${index}`}
              className={`${styles.logo} ${client.name === 'GIBS' ? styles.logoBig : ''}`}
              src={clientLogos[client.image]}
              alt={client.name}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientsCarousel
