import React from "react";
import { Link } from "react-router-dom";

export default function ServiceModal({ service, onClose }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Modal panel */}
      <div className="relative z-10 max-w-3xl w-full bg-black/80 border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-start gap-6 p-6">
          <div className="w-36 h-36 rounded-lg overflow-hidden shrink-0">
            <img src={service.image} alt={`${service.title} preview`} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1">
            <h3 id="service-modal-title" className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="mt-2 text-yellow-300">{service.subtitle} • {service.starting}</p>

            <ul className="mt-4 space-y-2 text-gray-200">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-yellow-300 shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="px-4 py-2 rounded-md bg-linear-to-r from-[#E5B567] to-[#D9A74B] text-black font-semibold">
                Book This Package
              </Link>
              <button onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-white">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}