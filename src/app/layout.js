import { Geist, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing_script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Centro Médico Integral | Salud con Excelencia",
  description:
    "Clínica de salud con más de 15 años de experiencia. Especialistas en cardiología, neurología, traumatología, pediatría y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.className}`}>
      <body className="min-h-dvh bg-white text-azul-oscuro font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
