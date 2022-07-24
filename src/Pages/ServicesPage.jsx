import React from 'react'
import Facts from '../Services/Facts'
import OurServices from '../Services/OurServices'
import ServicesHero from '../Services/ServicesHero'

const ServicesPage = () => {
  return (
    <div>
        <ServicesHero/>
        <Facts/>
        <OurServices/>
    </div>
  )
}

export default ServicesPage