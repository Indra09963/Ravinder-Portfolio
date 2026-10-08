// src/components/FooterAlt.jsx
import React from "react";
import { Link } from "react-router-dom";


import LOGO_SRC  from '../assets/Images/Logos/Nostalgic Photography by Ravinder.jpg'

export default function FooterAlt() {
  return (
    <footer className="bg-black text-white border-t border-amber-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top: centered brand */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={LOGO_SRC}
            alt="Nostalgic Photography"
            className="w-18 h-18 object-cover rounded-md shadow-sm border border-white/6"
            style={{ maxWidth: "100%" }}
          />

          <div className="text-center">
            <h3 className="text-lg font-bold text-amber-500">Nostalgic Photography</h3>
            <p className="text-sm text-gray-400">Cinematic weddings & events • Hyderabad</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/916301979835" aria-label="WhatsApp" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-linear-to-r from-[#E5B567] to-[#D9A74B] text-black font-semibold shadow">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5A11.9 11.9 0 0012 0C5.373 0 .02 5.373 0 12c0 2.063.541 4.05 1.566 5.81L0 24l6.39-1.667A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12 0-1.69-.332-3.292-.95-4.735zM12 21.5c-1.485 0-2.943-.372-4.23-1.074l-.303-.174-3.8.99.996-3.706-.197-.312A8.455 8.455 0 013.5 12c0-4.697 3.804-8.5 8.5-8.5s8.5 3.803 8.5 8.5-3.804 8.5-8.5 8.5z"/></svg>
              <span className="text-sm">WhatsApp</span>
            </a>

            <a href="mailto:nostalgicphotography1212@gmail.com" className="px-3 py-2 rounded-md bg-black/60 border border-white/6 text-white/90 hover:bg-white/5 transition text-sm">Email</a>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-yellow-700/10"></div>

        {/* Link columns */}
        <div className="grid  grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services#wedding" className="hover:text-white">Wedding Photography</Link></li>
              <li><Link to="/services#prewed" className="hover:text-white">Pre-wedding Shoots</Link></li>
              <li><Link to="/services#events" className="hover:text-white">Events & Functions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-3">Contact</h4>
            <div className="text-gray-400 text-sm space-y-2">
              <div>
                <div className="text-xs uppercase text-gray-400">Email</div>
                <a href="mailto:nostalgicphotography1212@gmail.com" className="text-white/90">nostalgicphotography1212@gmail.com</a>
              </div>

              <div>
                <div className="text-xs uppercase text-gray-400">Phone</div>
                <a href="tel:+916301979835" className="text-white/90">+91 6301979835</a>
              </div>

              <div>
                <div className="text-xs uppercase text-gray-400">Location</div>
                <div className="text-white/90">Hyderabad, India</div>
              </div>
               <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>Designed in Hyderabad</span>
            <span className="h-4 w-px bg-white/6 inline-block"></span>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="ml-3 hover:text-white">Terms</a>
          </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 bg-amber-400 border-t border-white/6 text-center">
  <div className="text-black font-bold text-l">
    © {new Date().getFullYear()} Nostalgic Photography. All rights reserved.
  </div>
</div>

      </div>

      {/* small focus style for inputs (if reused) */}
      <style>{`
        a:focus { outline: 3px solid rgba(229,181,103,0.12); outline-offset: 2px; }
      `}</style>
    </footer>
  );
}
