import Container from '../components/Container'
import ServicesShowcase from '../components/ServicesShowcase'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import { services } from '../data/content'
import styles from './Services.module.css'

function Services() {
  return (
    <>
      <ServicesShowcase />

      <section className="section">
        <Container>
          <SectionHeading
            title="Five ways we help you go green"
            subtitle="From efficiency audits through to solar PV, storage, and supply-only options, we meet you where your project is."
          />
          <div className="grid grid--3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--dark">
        <Container>
          <div className={styles.closingCta}>
            <h2>We provide solutions for energy efficiency and independence</h2>
            <p>
              Tell us about your facility and budget constraints, our engineering and financial
              team will help you find a way forward.
            </p>
            <Button to="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services
