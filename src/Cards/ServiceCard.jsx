import { Link } from "react-router-dom";

export default function ServiceCard({ service, onOpen }) {
  return (
    <article
      className="group bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-white/5
                 flex flex-col hover:shadow-lg transform-gpu transition hover:-translate-y-1"
      aria-labelledby={`svc-${service.id}-title`}
    >
      {/* Image */}
      <div className="h-44 sm:h-52 w-full overflow-hidden bg-gray-800">
        <img
          src={service.image}
          alt={`${service.title} thumbnail`}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 id={`svc-${service.id}-title`} className="text-xl text-white font-semibold">
              {service.title}
            </h3>
            <p className="text-sm text-yellow-300 mt-1">{service.subtitle}</p>
          </div>
          <span className="text-sm text-gray-200/80">{service.starting}</span>
        </div>

        <ul className="mt-4 space-y-2 flex-1 text-gray-200 text-sm">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg className="h-4 w-4 text-yellow-300 shrink-0 mt-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={onOpen}
            className="px-4 py-2 rounded-md bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5"
            aria-label={`View details about ${service.title}`}
          >
            View details
          </button>

          <Link
            to="/contact"
            className="ml-auto px-4 py-2 rounded-md bg-linear-to-r from-[#E5B567] to-[#D9A74B] text-black text-sm font-semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}