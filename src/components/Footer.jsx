const specialties = [
  "Cardiología",
  "Traumatología",
  "Pediatría",
  "Ginecología",
  "Neurología",
  "Medicina General",
  "Dermatología",
  "Psicología",
];

const quickLinks = [
  { label: "Sobre nosotros", href: "#nosotros" },
  { label: "Nuestro equipo", href: "#profesionales" },
  { label: "Solicitar turno", href: "/contacto" },
  { label: "Resultados en línea", href: "#" },
  { label: "Obra social / Prepaga", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-verde rounded flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11 3a1 1 0 012 0v7h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V3z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm leading-tight">
                Centro Médico
                <span className="block text-zinc-400 text-xs font-normal">
                  Integral
                </span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-xs">
              Más de 15 años comprometidos con la salud y el bienestar de
              nuestros pacientes. Atención profesional, humana e integral.
            </p>
            <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
              <svg
                className="w-3.5 h-3.5 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Habilitación GCBA N° 12.345-A
            </div>
          </div>

          {/* Col 2: Specialties */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Especialidades
            </h3>
            <ul className="flex flex-col gap-2.5">
              {specialties.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Información
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Contacto</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-zinc-400 text-sm">
                <svg
                  className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Av. Corrientes 1234, Piso 3
                <br />
                CABA, Buenos Aires
              </li>
              <li>
                <a
                  href="tel:+541112345678"
                  className="flex items-center gap-2.5 text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-zinc-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (011) 1234-5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:turnos@centromedicointegral.com.ar"
                  className="flex items-center gap-2.5 text-zinc-400 text-sm hover:text-white transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-zinc-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  turnos@centromedicointegral.com.ar
                </a>
              </li>

              <li className="pt-1">
                <div className="text-xs text-zinc-500 mb-2 font-medium">
                  Horarios
                </div>
                <div className="flex flex-col gap-1 text-zinc-400 text-xs">
                  <div className="flex justify-between gap-6">
                    <span>Lun — Vie</span>
                    <span>8:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Sábados</span>
                    <span>8:00 — 14:00</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-xs">
            &copy; {currentYear} Centro Médico Integral. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-zinc-500 hover:text-white text-xs transition-colors cursor-pointer"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-zinc-500 hover:text-white text-xs transition-colors cursor-pointer"
            >
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
