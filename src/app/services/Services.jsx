const services = [
  {
    name: "Cardiología",
    description:
      "Evaluación y tratamiento de enfermedades del corazón y sistema cardiovascular con tecnología de diagnóstico avanzada.",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Traumatología",
    description:
      "Diagnóstico y tratamiento de lesiones óseas, musculares y articulares. Cirugía ortopédica y rehabilitación.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    name: "Pediatría",
    description:
      "Atención médica integral para niños y adolescentes. Control de crecimiento, vacunación y seguimiento del desarrollo.",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    name: "Ginecología",
    description:
      "Salud integral de la mujer. Control ginecológico preventivo, seguimiento del embarazo y atención obstétrica.",
    iconPath:
      "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    name: "Neurología",
    description:
      "Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico. Cefaleas, epilepsia y más.",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    name: "Medicina General",
    description:
      "Consultas clínicas generales, diagnóstico preventivo, manejo de enfermedades crónicas y derivaciones.",
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    name: "Dermatología",
    description:
      "Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas. Control preventivo y dermatoscopía.",
    iconPath:
      "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    name: "Psicología",
    description:
      "Apoyo psicoterapéutico individual, familiar y de pareja. Tratamiento de ansiedad, depresión y bienestar emocional.",
    iconPath:
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-20 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-azul-oscuro mb-4">
            Atención médica en múltiples áreas
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Contamos con profesionales especializados en las principales áreas
            de la medicina, para brindarte una atención integral y coordinada.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-verde rounded-lg flex items-center justify-center mb-4 group-hover:bg-verde transition-colors duration-200">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={service.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-azul-oscuro mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
