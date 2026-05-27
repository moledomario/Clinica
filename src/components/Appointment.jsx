"use client";
import { useState } from "react";

const specialties = [
  "Cardiología",
  "Traumatología",
  "Pediatría",
  "Ginecología y Obstetricia",
  "Neurología",
  "Medicina General",
  "Dermatología",
  "Psicología",
];

const contactInfo = [
  {
    label: "Dirección",
    value: "Av. Corrientes 1234, Piso 3 — CABA, Buenos Aires",
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Teléfono",
    value: "(011) 1234-5678",
    iconPath:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "Email",
    value: "turnos@centromedicointegral.com.ar",
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

const hours = [
  { days: "Lunes a Viernes", time: "8:00 — 20:00 hs" },
  { days: "Sábados", time: "8:00 — 14:00 hs" },
  { days: "Domingos y feriados", time: "Cerrado" },
];

const inputClass =
  "w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-azul-oscuro placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent transition-shadow";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="turno" className="bg-white lg:pb-28 mt-10 ">
      <h1 className="font-[dancing_script] text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 text-center leading-[1.15] tracking-tight mb-6">Contacto</h1>
      <p className="text-center text-lg text-slate-700 leading-relaxed mb-8">
        Comunicate con nosotros o pedinos un cita completando el formulario .
      </p>
      <span className="my-4 h-1 w-full bg-verde inline-block "></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 bg-azul-oscuro rounded-2xl p-8 text-white">
            <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
              Contacto
            </p>
            <h2 className="text-2xl font-bold text-white mb-3">
              Solicita tu turno
            </h2>
            <p className="text-gray-900 text-md leading-relaxed mb-8">
              Completá el formulario y nos pondremos en contacto a la brevedad
              para confirmar tu cita con el especialista.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-azul-oscuro rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-verde"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d={item.iconPath}
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-900 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/541112345678?text=Hola%2C%20quisiera%20solicitar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-5 py-3 rounded-lg transition-colors duration-200 mb-8"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Conversar por WhatsApp
            </a>

            {/* Hours */}
            <div className="border-t border-azul-oscuro pt-7">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-4 h-4 text-verde"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-semibold text-black">
                  Horarios de atención
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-black">{h.days}</span>
                    <span className="text-sm text-black font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <p className="text-verde text-sm font-semibold uppercase tracking-widest mb-3">
              Formulario de turno
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-azul-oscuro mb-2">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="text-slate-700 text-sm mb-8">
              Todos los campos con{" "}
              <span className="text-red-500" aria-label="requerido">
                *
              </span>{" "}
              son obligatorios.
            </p>

            {submitted ? (
              <div className="border border-green-200 bg-green-50 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-azul-oscuro mb-2">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-sm text-slate-700">
                  Nos comunicaremos contigo en las próximas horas para confirmar
                  tu turno. Gracias por elegirnos.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Nombre completo{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Ej: Juan García"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Teléfono{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Ej: 11 1234-5678"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Correo electrónico{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Ej: ejemplo@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="specialty" className={labelClass}>
                      Especialidad{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      required
                      value={form.specialty}
                      onChange={handleChange}
                      className={`${inputClass} bg-white cursor-pointer`}
                    >
                      <option value="">Seleccionar especialidad</option>
                      {specialties.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Fecha preferida{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Motivo de consulta{" "}
                    <span className="text-slate-500 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describí brevemente el motivo de tu consulta..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-verde hover:bg-verde disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3.5 rounded-lg transition-colors duration-200 cursor-pointer text-base mt-1"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando solicitud...
                    </>
                  ) : (
                    "Enviar solicitud de turno"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
