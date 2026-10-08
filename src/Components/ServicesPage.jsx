import React from "react";
import { Link } from "react-router-dom";


import { servicesData } from "../SampleData/Data";
import ServiceCard from "../Cards/ServiceCard";
import ServiceModal from "../Modal/ServiceModal";



export default function ServicesPage() {
  const [open, setOpen] = React.useState(null);

  return (
    <section id="services" className="py-16 bg-linear-to-b from-black/40 to-black/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80')" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-yellow-300 font-medium mb-2">Services • Hyderabad</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Wedding & Event Photography</h2>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            From candid moments to cinematic portraits — tailored packages for weddings, pre-wedding shoots and all functions across Hyderabad.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-black lg:grid-cols-3 gap-6">
          {servicesData.map((s) => (
            <ServiceCard key={s.id} service={s} onOpen={() => setOpen(s.id)} />
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-md text-black font-semibold
                       bg-linear-to-r from-yellow-400 to-yellow-600 shadow-lg hover:scale-[1.02] transform transition"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Modal: Service details */}
      {open && (
        <ServiceModal
          service={servicesData.find((x) => x.id === open)}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}

