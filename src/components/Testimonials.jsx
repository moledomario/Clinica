const testimonials = [
  {
    name: "María González",
    role: "Paciente — Cardiología",
    quote:
      "Encontré en el Centro Médico Integral la atención que necesitaba. El Dr. Martínez me explicó cada paso del tratamiento con claridad y paciencia. Hoy me siento mucho mejor y con la tranquilidad de estar bien atendida.",
    rating: 5,
  },
  {
    name: "Jorge Álvarez",
    role: "Paciente — Traumatología",
    quote:
      "Después de mi cirugía de rodilla, la recuperación fue mucho mejor de lo esperado gracias al equipo del centro. La atención es impecable, personalizada y sumamente profesional en cada etapa.",
    rating: 5,
  },
  {
    name: "Luciana Fernández",
    role: "Paciente — Pediatría",
    quote:
      "Llevo a mis hijos desde que eran muy pequeños. La atención es excepcional, el ambiente es cálido y los profesionales siempre responden todas mis dudas sin apurarme. Los recomiendo ampliamente.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-azul-oscuro mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            La confianza de nuestros pacientes es el reflejo de nuestro
            compromiso con la excelencia médica y la atención humana.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-slate-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-sm font-semibold text-azul-oscuro">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">{t.role}</div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
