import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";



export default function Ourprofesionals() {
    return (
        <section className=" mx-auto px-4 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  border-t border-slate-200">
            <div>
                <AnimatedContent direction="horizontal" reverse={true} distance={60} duration={0.8} delay={0.1} ease="power3.out">
                    <h1 className="pb-6 text-4xl font-[dancing_script] text-center sm:text-5xl lg:text-5xl
                     font-bold text-slate-900 leading-[1.15] tracking-tight">
                        Trabajando con los profesionales
                        <span className="text-verde">
                            {""} mas dedicados
                        </span>
                    </h1>
                </AnimatedContent>

                <AnimatedContent direction="horizontal" reverse={true} distance={60} duration={0.8} delay={0.25} ease="power3.out">
                    <p className="pb-4 text-lg text-slate-700 leading-relaxed mb-8 max-w-xl text-center lg:mx-20">
                        Conoce a los profesionales que estan detrás de nuestra clínica.
                        Y sus areas de especialización
                    </p>
                </AnimatedContent>

                <AnimatedContent direction="horizontal" reverse={true} distance={60} duration={0.8} delay={0.4} ease="power3.out">
                    <div className="flex  justify-center items-center gap-4">
                        <Link className="inline-flex items-center justify-center gap-2 bg-verde
                        hover:bg-white hover:text-black hover:border-verde hover:border-2  text-white font-medium px-6 py-3.5 rounded-lg
                        transition-colors duration-200 cursor-pointer text-base w-[250px]" href={"/profesionals"}>
                            Nuestro equipo
                        </Link>
                        <Link className="inline-flex items-center justify-center gap-2
                        hover:bg-verdehover hover:text-white border-2 border-verde text-black font-medium px-6 py-3.5 rounded-lg
                        transition-colors duration-200 cursor-pointer text-base w-[250px]" href={"/services"}>
                            Especialidades
                        </Link>
                    </div>
                </AnimatedContent>
            </div>

            <AnimatedContent direction="horizontal" distance={80} duration={0.9} delay={0.2} ease="power3.out">
                <div className="relative">
                    <Image
                        src="/profesionales-grupo.jpg"
                        alt="Our profesionals"
                        width={500}
                        height={500}
                        className="object-contain rounded-lg shadow-xl"
                    />
                </div>
            </AnimatedContent>
        </section>
    );
}
