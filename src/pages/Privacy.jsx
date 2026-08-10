import Container from '../components/Container'
import Hero from '../components/Hero'
import { company } from '../data/content'
import styles from './Privacy.module.css'

function Privacy() {
  return (
    <>
      <Hero
        image="transmission-tower"
        title="Privacy Policy"
        subtitle="How Asiye Green collects, uses, and protects your information."
        compact
      />

      <section className="section">
        <Container>
          <div className={styles.prose}>
            <p className={styles.updated}>Last updated: 10 August 2026</p>

            <h2>Introduction</h2>
            <p>
              Asiye Green ("we", "us", "our") respects your privacy and is committed to protecting
              the personal information you share with us. This policy explains what information
              we collect, how we use it, and the choices you have.
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you contact us through our website, request a quote, or ask about a project, we
              may collect your name, phone number, email address, physical address, and any
              details you provide about your energy needs.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to enquiries, prepare quotes and
              proposals, deliver our services, and communicate with you about your project. We do
              not sell your personal information to third parties.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to understand how visitors use
              the site and to improve your browsing experience. You can disable cookies through
              your browser settings at any time.
            </p>

            <h2>Sharing Your Information</h2>
            <p>
              We may share your information with trusted partners, funders, or subcontractors
              where necessary to deliver a project or financing option you have requested. We
              require these parties to keep your information secure and confidential.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal
              information against loss, misuse, or unauthorised access.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of the personal information we
              hold about you at any time by contacting us using the details below.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your
              information, please contact us at{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a> or {company.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Privacy
