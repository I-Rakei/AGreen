import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import styles from './ScrollToTop.module.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}

export default ScrollToTop
