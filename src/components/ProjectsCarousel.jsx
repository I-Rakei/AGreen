import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from './ProjectCard'
import styles from './ProjectsCarousel.module.css'

function ProjectsCarousel({ projects, onView }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  function scrollToIndex(index) {
    const track = trackRef.current
    const card = track?.children[index]
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    }
  }

  function goPrev() {
    const next = Math.max(activeIndex - 1, 0)
    setActiveIndex(next)
    scrollToIndex(next)
  }

  function goNext() {
    const next = Math.min(activeIndex + 1, projects.length - 1)
    setActiveIndex(next)
    scrollToIndex(next)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    let raf = null
    function handleScroll() {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const cards = Array.from(track.children)
        const index = cards.reduce((closest, card, i) => {
          const distance = Math.abs(card.offsetLeft - track.scrollLeft)
          const closestDistance = Math.abs(cards[closest].offsetLeft - track.scrollLeft)
          return distance < closestDistance ? i : closest
        }, 0)
        setActiveIndex(index)
      })
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', handleScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [projects.length])

  return (
    <div className={styles.carousel}>
      <div className={styles.track} ref={trackRef}>
        {projects.map((project) => (
          <div className={styles.slide} key={project.slug}>
            <ProjectCard project={project} onView={onView} />
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Previous project"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className={styles.dots}>
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => {
                setActiveIndex(index)
                scrollToIndex(index)
              }}
              aria-label={`Go to ${project.name}`}
            />
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={goNext}
          disabled={activeIndex === projects.length - 1}
          aria-label="Next project"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default ProjectsCarousel
