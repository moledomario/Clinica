import Navbar from "@/components/Navbar";
import Services from "./Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Especialidades | Centro Médico Integral",
  description: "Atención médica en múltiples especialidades: cardiología, neurología, pediatría y más.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
