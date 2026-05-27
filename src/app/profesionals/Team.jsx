import Image from "next/image";

const team = [
  {
    name: "Dr. Alejandro Martínez",
    specialty: "Cardiología",
    degree: "MN 45.231",
    description:
      "Especialista en cardiología clínica e intervencionista. Formado en el Hospital Italiano de Buenos Aires con más de 15 años de trayectoria en diagnóstico y tratamiento cardiovascular.",
    years: "15 años",
    image: "/doctores/doctor1.jpg",
  },
  {
    name: "Dra. Valentina Torres",
    specialty: "Neurología",
    degree: "MN 67.408",
    description:
      "Neuróloga clínica especializada en enfermedades neurodegenerativas y cefaleas. Formación en centros de excelencia nacionales e internacionales. Miembro de la Sociedad Neurológica Argentina.",
    years: "12 años",
    image: "/doctores/doctora2.jpg",

  },
  {
    name: "Dr. Ricardo Pérez",
    specialty: "Traumatología",
    degree: "MN 38.892",
    description:
      "Traumatólogo y ortopedista con amplia experiencia en cirugía articular, reemplazos y patología de columna vertebral. Referente en cirugía mínimamente invasiva de rodilla y cadera.",
    years: "18 años",
    image: "/doctores/doctor3.jpg",

  },
  {
    name: "Dra. Carolina Sánchez",
    specialty: "Ginecología y Obstetricia",
    degree: "MN 52.114",
    description:
      "Ginecóloga obstetra con enfoque integral en la salud de la mujer. Especialización en embarazo de alto riesgo y medicina fetal. Atención personalizada en cada etapa de la vida reproductiva.",
    years: "14 años",
    image: "/doctores/doctora1.jpg",

  },
];

export default function Team() {
  return (
    <section id="profesionales" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestro equipo
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-azul-oscuro mb-4">
            Profesionales de excelencia
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Cada integrante de nuestro equipo posee formación especializada y
            una sólida trayectoria, garantizando la mejor atención para cada
            paciente.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow 
              duration-500 
              hover:-translate-y-3 transition-transform duration-300 ease-out "
            >
              {/* Photo placeholder */}
              <div className="bg-slate-100 aspect-[3/4] flex flex-col items-center justify-center gap-2 text-slate-400">
                <div className="w-full h-full relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-fill"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base font-semibold text-azul-oscuro leading-tight">
                    {member.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-verde mb-1">
                  {member.specialty}
                </p>
                <p className="text-xs text-slate-600 mb-3">
                  {member.degree} · {member.years} de experiencia
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
              <div className="w-full text-center my-5">
                <a href="/turno" className="text-verde hover:text-verde/80 py-4 font-medium text-sm cursor-pointer transition-colors">Obtener Turno</a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#turno"
            className="inline-flex items-center gap-2 text-verde hover:text-verde font-medium text-sm cursor-pointer transition-colors"
          >
            Consultar disponibilidad de turnos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
