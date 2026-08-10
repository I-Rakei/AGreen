import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { services } from '../data/content'
import { photos } from '../assets/images'
import Container from './Container'
import Button from './Button'
import styles from './ServicesShowcase.module.css'

const serviceImages = {
  'energy-efficient-services': 'real-services-hero',
  'energy-efficient-products': 'hardhat-closeup-wide',
  'solar-pv-systems': 'panels-turbines-wide',
  'battery-energy-storage': 'warehouse-sunset-wide',
  'supply-only': 'installers-roof',
}

const AUTO_CYCLE_MS = 5000

function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [bgLayers, setBgLayers] = useState(() => {
    const initial = photos[serviceImages[services[0].slug]]
    return { images: [initial, initial], top: 0 }
  })
  const timerRef = useRef(null)
  const active = services[activeIndex]

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length)
    }, AUTO_CYCLE_MS)
    return () => clearInterval(timerRef.current)
  }, [activeIndex])

  useEffect(() => {
    const nextImage = photos[serviceImages[active.slug]]
    setBgLayers((prev) => {
      if (prev.images[prev.top] === nextImage) return prev
      const back = prev.top === 0 ? 1 : 0
      const images = [...prev.images]
      images[back] = nextImage
      return { images, top: back }
    })
  }, [activeIndex, active.slug])

  function selectTab(index) {
    clearInterval(timerRef.current)
    setActiveIndex(index)
  }

  return (
    <section className={styles.showcase}>
      <img
        className={`${styles.bg} ${bgLayers.top === 0 ? styles.bgTop : ''}`}
        src={bgLayers.images[0]}
        alt=""
        fetchPriority="high"
      />
      <img
        className={`${styles.bg} ${bgLayers.top === 1 ? styles.bgTop : ''}`}
        src={bgLayers.images[1]}
        alt=""
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <Container>
          <div className={styles.textBlock} key={active.slug}>
            <h1 className={styles.title}>
              {active.title} <FontAwesomeIcon icon={faChevronRight} className={styles.titleArrow} />
            </h1>

            <p className={styles.subtext}>{active.summary}</p>

            <Button to="/contact" variant="primary">
              Enquire About This Service
            </Button>
          </div>
        </Container>
      </div>

      <div className={styles.tabBar}>
        <div className={styles.tabs}>
          {services.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
              onClick={() => selectTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase
