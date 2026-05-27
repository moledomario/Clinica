import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";

const stats = [
  { value: "+20", label: "Especialistas" },
  { value: "+15 años", label: "De experiencia" },
  { value: "+12.000", label: "Pacientes atendidos" },
  { value: "8", label: "Especialidades" },
];

export default function Hero() {
  return (
    <section className=" overflow-hidden pt-20" style={{ backgroundImage: "url('/final.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-12">

          <div className="flex justify-center items-center flex-col">

            <AnimatedContent direction="vertical" distance={40} duration={0.7} delay={0.1} ease="power3.out">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                Atención médica de excelencia
              </div>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={60} duration={0.9} delay={0.25} ease="power3.out">
              <h1 className="font-[dancing_script] text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-6">
                Clinica Integral{" "}
                <span className="text-verde">Hernandez</span>
              </h1>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={50} duration={0.9} delay={0.4} ease="power3.out">
              <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-xl text-center">
                Somos un equipo de especialistas comprometidos con tu bienestar.
                Brindamos atención integral, personalizada y de alta calidad en
                múltiples especialidades médicas.
              </p>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={40} duration={0.8} delay={0.55} ease="power3.out">
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-verde hover:bg-verdehover text-white font-medium px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer text-base"
                >
                  Solicitar un turno
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
                </Link>
                <Link
                  href="/profesionals"
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-medium px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer text-base"
                >
                  Ver especialidades
                </Link>
              </div>
            </AnimatedContent>

            <AnimatedContent direction="vertical" distance={30} duration={0.8} delay={0.7} ease="power3.out">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-slate-700">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContent>

          </div>

        </div>
      </div>

    </section>
  );
}
