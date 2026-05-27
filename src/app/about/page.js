import Navbar from "@/components/Navbar";
import About from "@/app/about/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nosotros | Centro Médico Integral",
  description: "Conocé nuestra historia, valores y el compromiso que nos distingue en la atención médica.",
};



export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>


        <About />
      </main>
      <Footer />
    </>
  );
}
