export default function Testimonials({testimonials}) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">What clients say</h3>
        <div className="space-y-4">
          {testimonials.map(t => (
            <blockquote key={t.id} className="p-4 border rounded bg-gray-50">"{t.text}" — <strong>{t.name}</strong></blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}