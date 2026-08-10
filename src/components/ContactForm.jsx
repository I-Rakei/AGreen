import { useState } from 'react'
import Button from './Button'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        Thanks for reaching out, we'll be in touch to help you start saving energy.
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Write Us</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" variant="primary">
        Send
      </Button>
    </form>
  )
}

export default ContactForm
