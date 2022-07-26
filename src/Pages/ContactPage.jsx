import React from 'react'
import Navbar from '../Common/Navbar';
import Contact from '../Contact/Contact';
import ContactHero from '../Contact/ContactHero';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Contact />
    </div>
  )
}

export default ContactPage