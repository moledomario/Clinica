import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ourprofesionals from "@/components/Ourprofesionals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Tecnology from "@/components/Tecnology";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ourprofesionals />
        <Tecnology />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
