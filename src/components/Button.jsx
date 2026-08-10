import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({ children, to, href, variant = 'primary', icon, onClick, type = 'button', className = '' }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
