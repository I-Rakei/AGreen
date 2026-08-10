import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Container from './Container'
import Button from './Button'
import { company, ctaBanner } from '../data/content'
import { asiyeGreenLogo, photos } from '../assets/images'
import styles from './Footer.module.css'

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'About Us', to: '/about' },
      { label: 'Meet the MD', to: '/about' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Projects', to: '/projects' },
      { label: 'Solar PV Systems', to: '/services' },
      { label: 'Battery Storage', to: '/services' },
    ],
  },
  {
    title: 'Collaborate',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Funding Options', to: '/services' },
    ],
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <img className={styles.ctaBg} src={photos[ctaBanner.image]} alt="" />
        <div className={styles.ctaOverlay} />
        <Container>
          <div className={styles.ctaContent}>
            <h2>{ctaBanner.title}</h2>
            <p>{ctaBanner.text}</p>
            <div className={styles.ctaActions}>
              <Button to="/services" variant="outline">
                Services
              </Button>
              <Button to="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={asiyeGreenLogo} alt="Asiye Green" />
            <p>
              Helping South African organisations cut energy costs and generate power onsite
              through solar PV, storage, and efficiency projects since {company.founded}.
            </p>
            <div className={styles.social}>
              <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              <ul className={styles.colList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className={styles.colTitle}>Connect</div>
            <ul className={styles.colList}>
              <li className={styles.contactItem}>
                <FontAwesomeIcon icon={faPhone} />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className={styles.contactItem}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Copyright Asiye Green. All rights reserved.</span>
          <Link to="/contact">Privacy Policy</Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
