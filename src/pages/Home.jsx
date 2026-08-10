import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ValueCard from '../components/ValueCard'
import ServiceCard from '../components/ServiceCard'
import ProjectsCarousel from '../components/ProjectsCarousel'
import ProjectModal from '../components/ProjectModal'
import ClientsCarousel from '../components/ClientsCarousel'
import Button from '../components/Button'
import { advantages, services, projects, funding } from '../data/content'
import { photos } from '../assets/images'
import styles from './Home.module.css'

const featuredServices = services.filter((s) =>
  ['energy-efficient-services', 'solar-pv-systems', 'battery-energy-storage'].includes(s.slug),
)

function Home() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <Hero
        overlapNav
        large
        centered
        image="hero"
        title="Manage your power consumption easily and effectively and benefit from natural resources"
        subtitle="Reduce the cost of running your business and increase your profit."
        actions={[
          { label: 'Our Services', to: '/services' },
          { label: 'Get in Touch', to: '/contact', variant: 'outline' },
        ]}
      />

      <section className="section">
        <Container>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <h2>Save with solar</h2>
              <p>
                Energy is a significant annual cost for any business, and Eskom's supply
                reliability has made it an unwelcome expense in South Africa. Asiye Green works
                with commercial and industrial clients to reduce consumption and generate energy
                onsite through solar PV.
              </p>
              <p>
                Legacy facilities were often not designed for efficiency, simple operational
                changes can sometimes produce savings at little or no cost. We examine every
                detail to secure at least 30% in energy-cost savings.
              </p>
              <Button to="/services" variant="ghost" icon={<FontAwesomeIcon icon={faArrowRight} />}>
                Read more about our services
              </Button>
            </div>
            <div className={styles.splitImage}>
              <img src={photos['turbines-panels-landscape']} alt="Wind turbines and solar panels" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            title="The Asiye Green Advantage"
            subtitle="Since 2015 we've combined engineering expertise, analytics, and financing support to help organisations go green."
          />
          <div className="grid grid--3">
            {advantages.map((item) => (
              <ValueCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: 0, margin: '0 calc(-50vw + 50%)', marginTop: 56 }}>
        <ClientsCarousel />
      </section>

      <section className="section">
        <Container>
          <div className={`${styles.split} ${styles.reverse}`}>
            <div className={styles.splitImage}>
              <img src={photos['hardhat-closeup-wide']} alt="Solar installer on site" />
            </div>
            <div className={styles.splitText}>
              <h2>{funding.title}</h2>
              <p>{funding.text}</p>
              <Button to="/services" variant="ghost" icon={<FontAwesomeIcon icon={faArrowRight} />}>
                See our funding-aware services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            title="Solutions for energy efficiency and independence"
            subtitle="Lower costs through efficiency projects and renewable resources through solar PV, a blend of analytics, industry experience, and agility to optimise existing facilities."
          />
          <div className="grid grid--3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button to="/services" variant="primary">
              Read more about our services
            </Button>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            title="We deliver only the best projects"
            subtitle="Whatever your project, we can help, our work inspires smiles."
          />
          <ProjectsCarousel projects={projects} onView={setActiveProject} />
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Button to="/projects" variant="outline">
              More info
            </Button>
          </div>
        </Container>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}

export default Home
