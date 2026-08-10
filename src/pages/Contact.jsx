import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { company } from '../data/content'
import styles from './Contact.module.css'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`

function Contact() {
  return (
    <>
      <Hero
        image="real-contact-hero"
        title="Contact Us"
        subtitle="Call us, write to us, or knock on our door, we look forward to discussing your energy-saving needs."
        compact
      />

      <section className="section">
        <Container>
          <div className={styles.layout}>
            <div>
              <SectionHeading title="Let's go green" />
              <ContactForm />
            </div>

            <div>
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <FontAwesomeIcon icon={faPhone} />
                  <div>
                    <div className={styles.infoLabel}>Telephone</div>
                    <div className={styles.infoValue}>{company.phone}</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div>
                    <div className={styles.infoLabel}>Email</div>
                    <div className={styles.infoValue}>{company.email}</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <div>
                    <div className={styles.infoLabel}>Address</div>
                    <div className={styles.infoValue}>{company.address}</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <FontAwesomeIcon icon={faClock} />
                  <div>
                    <div className={styles.infoLabel}>Hours</div>
                    <div className={styles.infoValue}>Mon–Fri, 8am–5pm</div>
                  </div>
                </div>
              </div>

              <div className={styles.mapWrap}>
                <iframe title="Asiye Green location" src={mapSrc} loading="lazy" allowFullScreen />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
