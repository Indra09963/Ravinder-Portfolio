import React from "react"
import { gallery } from "../SampleData/Data"

export default function Gallery() {
 const [filter, setFilter] = React.useState('wedding')
  const images = gallery[filter]
  return (
    <div>
      <div className="mb-6 flex gap-3">
        <button onClick={() => setFilter('wedding')} className={`px-4 py-2 rounded ${filter==='wedding' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Weddings</button>
        <button onClick={() => setFilter('prewed')} className={`px-4 py-2 rounded ${filter==='prewed' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Pre-wedding</button>
        <button onClick={() => setFilter('events')} className={`px-4 py-2 rounded ${filter==='events' ? 'bg-indigo-600 text-white' : 'bg-white border'}`}>Events</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="rounded overflow-hidden shadow">
            <img alt="gallery" src={src} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}