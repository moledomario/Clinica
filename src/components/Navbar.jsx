"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Especialidades" },
  { href: "/profesionals", label: "Profesionales" },
  { href: "/about", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="fixed w-full top-0 z-50 bg-verde shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
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
              <span className="block text-white text-xs font-normal">
                Integral
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-slate-300 text-lg font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+541112345678"
              className="flex items-center gap-1.5 text-white text-md font-bold hover:text-slate-600 transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5"
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
            <a
              href="/contacto"
              className="bg-white hover:bg-white/90 text-verde text-lg font-medium px-4 py-2 rounded transition-colors duration-200 cursor-pointer"
            >
              Solicitar Turno
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="md:hidden py-4 border-t border-azul-oscuro flex flex-col gap-1"
            aria-label="Navegación móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white px-2 py-2.5 text-sm font-medium transition-colors cursor-pointer rounded"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-azul-oscuro flex flex-col gap-3">
              <a
                href="tel:+541112345678"
                className="text-white text-sm px-2"
              >
                (011) 1234-5678
              </a>
              <a
                href="/contacto"
                onClick={() => setOpen(false)}
                className="bg-verde text-white text-sm font-medium px-4 py-2.5 rounded text-center transition-colors cursor-pointer"
              >
                Solicitar Turno
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
