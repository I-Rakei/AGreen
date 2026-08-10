import styles from './SectionHeading.module.css'

function SectionHeading({ title, subtitle }) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
