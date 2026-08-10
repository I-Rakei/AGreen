import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faLightbulb,
  faSolarPanel,
  faCarBattery,
  faTruckFast,
  faCircleCheck,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import styles from './ServiceCard.module.css'

const serviceIcons = {
  'energy-efficient-services': faBolt,
  'energy-efficient-products': faLightbulb,
  'solar-pv-systems': faSolarPanel,
  'battery-energy-storage': faCarBattery,
  'supply-only': faTruckFast,
}

function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const hasItems = service.items.length > 0

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.header}
        onClick={() => hasItems && setOpen((v) => !v)}
        aria-expanded={open}
        disabled={!hasItems}
      >
        <div className={styles.iconWrap}>
          <FontAwesomeIcon icon={serviceIcons[service.slug] || faBolt} />
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.summary}>{service.summary}</p>
        </div>
        {hasItems && (
          <FontAwesomeIcon icon={faChevronDown} className={`${styles.toggleIcon} ${open ? styles.toggleOpen : ''}`} />
        )}
      </button>

      {hasItems && (
        <div className={`${styles.itemsWrap} ${open ? styles.itemsWrapOpen : ''}`}>
          <ul className={styles.items}>
            {service.items.map((item) => (
              <li key={item.name} className={styles.item}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <span>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemDetail}>{item.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default ServiceCard
