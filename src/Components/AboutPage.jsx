import React from "react";
import AbtImg from '../assets/Images/Photograper/1.jpg'
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section id="about" className="pt-20 bg-black text-black">
      <div
        className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12
                   items-stretch opacity-0 translate-y-6 animate-[fadeUp_1s_ease-out_forwards]"
      >

        {/* LEFT COLUMN - IMAGE */}
        <div className="flex h-full">
          <div className="
            overflow-hidden w-full max-w-[600px] mx-auto md:mx-0 md:ml-8
            rounded-xl shadow-xl border border-white/10
            h-96 md:h-[650px]
          ">
            <img
              src={AbtImg}
              alt="Photographer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN (MATCH HEIGHT OF IMAGE) */}
        <div className="flex flex-col h-full justify-between ">

          {/* Top Content */}
          <div className="space-y-6 pr-4">
            <p className="text-white font-extrabold text-4xl tracking-wide">
              Ravinder
            </p>

            <h2 className="text-yellow-300 text-xl md:text-2xl font-light">
              Professional Wedding & Event Photographer, Hyderabad
            </h2>

            <p className="text-white leading-relaxed">
              With a passion for capturing real emotions, I specialize in Wedding, Pre-Wedding,
              and Event Photography across Hyderabad. My style blends cinematic visuals with
              candid storytelling, turning every moment I capture into a timeless memory.
            </p>

            <p className="text-white leading-relaxed">
              Over the years, I’ve had the privilege of working with countless couples and families,
              documenting their biggest celebrations with creativity, patience, and artistic vision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-300">300+</h3>
                <p className="text-sm text-gray-400">Weddings</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-300">7+ yrs</h3>
                <p className="text-sm text-gray-400">Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-300">500+</h3>
                <p className="text-sm text-gray-400">Events Covered</p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons (pushed to bottom) */}
          {/* Bottom Buttons (moved slightly up) */}
            <div className="flex gap-4 pt-6 mb-4">
              <Link
                to="/contact"
                className="hidden md:inline-block px-5 py-3 bg-linear-to-r from-yellow-400 to-yellow-600 
                          text-black font-medium rounded-md shadow"
              >
                Book Now
              </Link>

              <Link
                to="/portfolio"
                className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/10 
                          transition text-white font-medium"
              >
                View Portfolio
              </Link>
            </div>


        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
