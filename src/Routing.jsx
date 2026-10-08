import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesPage from './Components/ServicesPage'
import PortfolioPage from './Components/PortfolioPage'
import AboutPage from './Components/AboutPage'
import Testimonials from './Components/Testimonials'
import ContactPage from './Components/ContactPage'
import ThankYou from './Components/ThankYou'
import HomePage from './Components/Home'
import Footer from './Components/Footer'


export default function Routing() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

