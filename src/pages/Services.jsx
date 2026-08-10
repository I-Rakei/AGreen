import Container from '../components/Container'
import ServicesShowcase from '../components/ServicesShowcase'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/content'

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
    </>
  )
}

export default Services
