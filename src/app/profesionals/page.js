import Navbar from "@/components/Navbar";
import Team from "./Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Profesionales | Centro Médico Integral",
  description: "Conocé a nuestro equipo de especialistas certificados con años de trayectoria.",
};

export default function ProfesionalsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
}
