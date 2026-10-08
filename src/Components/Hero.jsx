import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../assets/Images/HeroSection/hero-section.jpg'

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-center"
      style={{
        
       backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>

   
      <div className="absolute inset-0 transform-gpu transition-transform duration-700 ease-out scale-100 md:scale-102"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl">
      
          <p className="text-yellow-400/80 text-sm font-medium mb-3">Hyderabad • Weddings • Pre-wedding • Events</p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Capturing Memories<br className="hidden sm:inline" />
            That Last Forever
          </h1>

          <p className="mt-5 text-gray-100/90 text-base sm:text-lg max-w-2xl">
            Cinematic wedding photography and pre-wedding shoots across Hyderabad — candid moments, timeless portraits.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
       
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-black font-semibold text-base
                         bg-linear-to-r from-yellow-400 to-yellow-600 shadow-lg hover:scale-[1.02] transform-gpu transition"
            >
              Book Now
            </Link>

  
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-medium text-base
                         border border-white/30 bg-white/5 hover:bg-white/10 transition"
            >
              View Portfolio
            </Link>
          </div>

        
          <div className="mt-6 text-sm text-gray-200/80">
            <span>Available for Hyderabad bookings — </span>
            <a href="tel:+916301979835" className="text-yellow-500 underline ml-1">Call / WhatsApp</a>
          </div>
        </div>
      </div>


      <a
        href="https://wa.me/916301979835"
        className="fixed right-4 bottom-6 md:hidden inline-flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 shadow-lg z-20"
        aria-label="WhatsApp"
      >
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.373 0 .02 5.373 0 12c0 2.063.541 4.05 1.566 5.81L0 24l6.39-1.667A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12 0-1.69-.332-3.292-.95-4.735zM12 21.5c-1.485 0-2.943-.372-4.23-1.074l-.303-.174-3.8.99.996-3.706-.197-.312A8.455 8.455 0 013.5 12c0-4.697 3.804-8.5 8.5-8.5s8.5 3.803 8.5 8.5-3.804 8.5-8.5 8.5z"/>
        </svg>
        <span className="text-white text-sm font-medium">WhatsApp</span>
      </a>
    </section>
  );
}
