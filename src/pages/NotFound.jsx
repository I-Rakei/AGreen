import { useEffect } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import styles from './NotFound.module.css'

function NotFound() {
  useEffect(() => {
    let tag = document.head.querySelector('meta[name="robots"]')
    const existed = Boolean(tag)
    const previous = tag?.getAttribute('content')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'robots')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', 'noindex, follow')
    document.title = 'Page Not Found | Asiye Green'
    return () => {
      if (existed) {
        tag.setAttribute('content', previous)
      } else {
        tag.remove()
      }
    }
  }, [])

  return (
    <section className="section">
      <Container>
        <div className={styles.wrap}>
          <p className={styles.code}>404</p>
          <h1>Page not found</h1>
          <p className={styles.text}>
            The page you're looking for doesn't exist or may have moved. Let's get you back on
            track.
          </p>
          <div className={styles.actions}>
            <Button to="/" variant="primary">
              Back to Home
            </Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotFound
