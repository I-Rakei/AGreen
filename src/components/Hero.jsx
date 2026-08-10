import Container from './Container'
import Button from './Button'
import { photos } from '../assets/images'
import styles from './Hero.module.css'

function Hero({
  image,
  title,
  subtitle,
  actions = [],
  stats,
  compact = false,
  overlapNav = false,
  large = false,
  centered = false,
}) {
  return (
    <section
      className={`${styles.hero} ${compact ? styles.compact : ''} ${overlapNav ? styles.overlapNav : ''} ${large ? styles.large : ''} ${centered ? styles.centered : ''}`.trim()}
    >
      <img className={styles.bg} src={photos[image]} alt="" fetchPriority="high" />
      <div className={styles.overlayDark} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {actions.length > 0 && (
            <div className={styles.actions}>
              {actions.map((action) => (
                <Button key={action.label} to={action.to} variant={action.variant || 'primary'}>
                  {action.label}
                </Button>
              ))}
            </div>
          )}

          {stats && (
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  )
}

export default Hero
