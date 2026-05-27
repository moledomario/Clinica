import Image from 'next/image'

const pillars = [
  {
    number: "+15 años",
    title: "De trayectoria",
    description:
      "Una historia construida sobre resultados concretos y la confianza de miles de pacientes en nuestra comunidad.",
    iconPath:
      "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "+20",
    title: "Especialistas certificados",
    description:
      "Profesionales con formación continua en instituciones de excelencia, actualizados en los últimos avances médicos.",
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    number: "+12.000",
    title: "Pacientes atendidos",
    description:
      "Cada caso tratado con dedicación y rigor clínico. La satisfacción de nuestros pacientes es nuestra mayor certificación.",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: "8",
    title: "Especialidades médicas",
    description:
      "Un equipo multidisciplinario que aborda tu salud de manera coordinada, con comunicación permanente entre especialistas.",
    iconPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];
const values = [
  {
    title: "Tecnología de vanguardia",
    description:
      "Equipamiento diagnóstico de última generación para mayor precisión y confort.",
    iconPath:
      "M9 3v2m6-2v2M9 19l-3 3m15-3l-3 3M4 9h16a1 1 0 01.986 1.164l-1.5 10.5A2 2 0 0117.5 22h-11a2 2 0 01-1.986-1.836l-1.5-10.5A1 1 0 014 9z",
  },
  {
    title: "Atención personalizada",
    description:
      "Cada paciente recibe un plan de atención adaptado a sus necesidades particulares.",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Confidencialidad garantizada",
    description:
      "Tu información médica está protegida bajo estrictos protocolos de privacidad.",
    iconPath:
      "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];
const milestones = [
  {
    year: "2008",
    title: "Los comienzos",
    description:
      "La clínica nació como un pequeño consultorio de medicina general en el barrio, fundado por el Dr. Hernández con la visión de brindar atención cercana y de calidad a la comunidad local.",
  },
  {
    year: "2012",
    title: "Primera expansión",
    description:
      "Ante la creciente demanda, incorporamos las especialidades de cardiología y traumatología, sumando los primeros especialistas al equipo y mudándonos a nuestras instalaciones actuales en Av. San Martín 487.",
  },
  {
    year: "2016",
    title: "Tecnología de vanguardia",
    description:
      "Renovamos por completo el equipamiento diagnóstico: ecógrafos de última generación, laboratorio propio y sala de procedimientos. Superamos por primera vez los 5.000 pacientes anuales.",
  },
  {
    year: "2020",
    title: "Adaptación y resiliencia",
    description:
      "Durante la pandemia implementamos la primera plataforma de teleconsulta de la zona, garantizando continuidad asistencial sin interrupciones y reforzando el vínculo con nuestros pacientes.",
  },
  {
    year: "2024",
    title: "Hoy",
    description:
      "Con más de 20 especialistas, 8 especialidades y 12.000 pacientes atendidos, seguimos creciendo con el mismo compromiso de siempre: tu salud, nuestra prioridad.",
  },
];


export default function About() {
  return (
    <section id="nosotros">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 px-4 md:px-24 gap-4">
        <div>
          <h1 className="font-[dancing_script] text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">Sobre Nosotros</h1>
          <p className="text-gray-700 text-lg leading-relaxed">Descubrí nuestra historia, valores y el compromiso que nos distingue en la atención médica.
            <br></br>En <span className="text-verde">Clínica Hernández</span>, la salud de nuestros pacientes es nuestra prioridad.</p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/10] w-full">
            <Image src="/clinicahernandez.png" alt="Hero" className="object-cover" fill />
          </div>


          <div className="absolute -bottom-4 left-4 sm:left-6 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                AV San Martin 487
              </div>
              <div className="text-xs text-slate-500">06:00 - 20:00hs Lunes a Viernes</div>
            </div>
          </div>


        </div>

      </div>

      {/* Timeline */}
      <section className="bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
              Trayectoria
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Un camino construido paso a paso
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Cada etapa de nuestra historia refleja el compromiso con la
              mejora continua y la confianza que nuestros pacientes depositan
              en nosotros.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />

            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  {/* Year bubble */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-verde flex flex-col items-center justify-center text-white shadow-md z-10">
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-80">año</span>
                    <span className="text-base font-bold leading-tight">{m.year}</span>
                  </div>
                  {/* Content */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 flex-1 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-b border-azul-oscuro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {pillars.map((p) => (
              <div key={p.title} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-verde mb-1">
                  {p.number}
                </div>
                <div className="text-sm font-semibold text-verde mb-2">
                  {p.title}
                </div>
                <p className="text-sm text-gray-900  leading-relaxed hidden lg:block">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Comprometidos con tu bienestar
            </h2>
            <p className="text-gray-900  text-base leading-relaxed mb-8 max-w-lg">
              Nuestra clínica fue fundada con una convicción clara: que cada
              persona merece recibir atención médica de la más alta calidad, con
              el respeto y la calidez que corresponde. Ese principio guía cada
              decisión que tomamos.
            </p>
            <a
              href="#turno"
              className="inline-flex items-center gap-2 bg-verde hover:bg-verde text-white font-medium px-5 py-3 rounded-lg transition-colors duration-200 cursor-pointer text-sm"
            >
              Solicitar una consulta
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

          <div className="flex flex-col gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 bg-azul-oscuro border border-slate-700 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-verde rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      d={v.iconPath}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
