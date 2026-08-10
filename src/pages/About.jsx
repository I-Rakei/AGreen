import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ValueCard from '../components/ValueCard'
import ClientsCarousel from '../components/ClientsCarousel'
import Button from '../components/Button'
import { md, proofPoints } from '../data/content'
import { founderPhoto } from '../assets/images'
import styles from './About.module.css'

const values = [
  'Customer satisfaction, above all else',
  'Creating employment opportunities in the communities we serve',
  'A commitment to life-long learning across our team',
]

function About() {
  return (
    <>
      <Hero
        image="panels-sunburst-wide"
        title="About Us"
        subtitle="Asiye Green was established in 2015 to make the most of growing climate concerns and local demand for cheaper, dependable energy."
        compact
      />

      <section className="section">
        <Container>
          <div className={styles.intro}>
            <div>
              <h2>Our vision and purpose</h2>
              <p>
                Our vision is to lead in energy-efficiency products and services, and to own and
                operate 200 MW of renewable energy by 2030. Our purpose is customer savings and
                profitability, alongside a positive contribution to global sustainability.
              </p>
              <p>
                We serve commercial and industrial customers, as well as residential clients, and
                are proudly Level 1 BEE accredited.
              </p>
            </div>
            <div>
              <h2>Our values</h2>
              <ul className={styles.valuesList}>
                {values.map((value) => (
                  <li key={value}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--alt">
        <Container>
          <SectionHeading title="Meet our Managing Director" />
          <div className={styles.mdSection}>
            <img className={styles.mdPhoto} src={founderPhoto} alt={md.name} />
            <div className={styles.mdBio}>
              {md.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.mdMeta}>
            <div className={styles.mdName}>{md.name}</div>
            <div className={styles.mdRole}>{md.role}</div>
            <div className={styles.mdQuals}>
              <span className={styles.mdQualItem}>BSc Electrical Engineering, Wits</span>
              <span className={styles.mdQualItem}>MBL, UNISA</span>
              <span className={styles.mdQualItem}>GCC for Factories</span>
              <span className={styles.mdQualItem}>Registered with ECSA</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading title="Why organisations choose Asiye Green" />
          <div className="grid grid--4">
            {proofPoints.map((point) => (
              <ValueCard key={point.title} icon={point.icon} title={point.title} text={point.text} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: 0, margin: '0 calc(-50vw + 50%)' }}>
        <ClientsCarousel />
      </section>

      <section className="section">
        <Container>
          <div className={styles.closingCta}>
            <h2>Need efficient energy solutions?</h2>
            <p>
              We examine every detail of your operation to secure at least 30% in energy-cost
              savings, let's do it together.
            </p>
            <div className={styles.ctaActions}>
              <Button to="/services" variant="primary">
                Our Services
              </Button>
              <Button to="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
