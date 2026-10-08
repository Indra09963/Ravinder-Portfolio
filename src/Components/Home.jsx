import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Hero from './Hero'
import ServicesPage from './ServicesPage'
import PortfolioPage from './PortfolioPage'
import Testimonials from './Testimonials'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import {  testimonials } from '../SampleData/Data'


export default function HomePage() {
  return (
    <main>
      <Hero />
       <AboutPage />
      <ServicesPage />
       
      <PortfolioPage  />
      {/* <Testimonials  testimonials={testimonials}/> */}
      <ContactPage />
    </main>
  )
}