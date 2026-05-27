import Navbar from "@/components/Navbar";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto | Centro Médico Integral",
  description: "Contactanos para solicitar un turno o consultar sobre nuestros servicios.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
