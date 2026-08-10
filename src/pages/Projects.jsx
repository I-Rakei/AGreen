import { useState } from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/content'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <Hero
        image="warehouse-sunset-wide"
        title="Empowering our customers"
        subtitle="We provide a roadmap to energy efficiency, our portfolio of clean-energy projects brings solar power to homes and businesses across Johannesburg."
        compact
      />

      <section className="section">
        <Container>
          <SectionHeading title="We deliver only the best projects" />
          <div className="grid grid--2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} onView={setActiveProject} />
            ))}
          </div>
        </Container>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}

export default Projects
