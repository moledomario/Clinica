'use client';

import Image from "next/image";
import AnimatedContent from "@/components/AnimatedContent";
import Link from "next/link";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Tecnology() {
    const sectionRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const ctaRef = useRef(null);
    const imagesGridRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const cta = ctaRef.current;
        const grid = imagesGridRef.current;

        if (!section || !cta || !grid) return;

        const mm = gsap.matchMedia();

        mm.add('(min-width: 1024px)', () => {
            const imgRefs = [img1Ref.current, img2Ref.current, img3Ref.current];
            // Scrub distinto por imagen → efecto cascada al caer
            const scrubValues = [2, 3, 4];

            imgRefs.forEach((img, i) => {
                if (!img) return;

                const imgTop = window.scrollY + img.getBoundingClientRect().top;
                const ctaTop = window.scrollY + cta.getBoundingClientRect().top;
                const distance = ctaTop - imgTop;

                gsap.to(img, {
                    y: '40%',
                    ease: 'ease-in-out',
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 10%',
                        endTrigger: cta,
                        end: 'top bottom',
                        scrub: scrubValues[i],
                    },
                });
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className=" mx-auto  pt-10  grid grid-cols-1 gap-8  border-t border-slate-200">
            <div className="lg:w-1/2 mx-auto px-4">
                <AnimatedContent direction="vertical" distance={50} duration={0.8} delay={0.1} ease="power3.out">
                    <h1 className="pb-6 text-4xl font-[dancing_script] text-center sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                        Combinando los <span className="text-verde">mejores profesionales</span> con la <span className="text-verde">mejor tecnología</span>
                    </h1>
                </AnimatedContent>
                <AnimatedContent direction="vertical" distance={50} duration={0.8} delay={0.25} ease="power3.out">
                    <p className="text-center text-xl text-slate-700">En nuestra clínica, combinamos la experiencia de nuestros profesionales con la tecnología más avanzada para ofrecerte el mejor tratamiento possible. </p>
                </AnimatedContent>
            </div>

            <div ref={imagesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 lg:items-start lg:pb-40">
                <div ref={img1Ref} className="relative w-[300px] mx-auto h-[400px]">
                    <Image
                        src="/tecnologia/tec1.jpg"
                        alt="Tecnología 1"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div ref={img2Ref} className="relative w-[300px] h-[400px] mx-auto ">
                    <Image
                        src="/tecnologia/tec2.jpg"
                        alt="Tecnología 2"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
                <div ref={img3Ref} className="relative w-[300px] h-[400px] mx-auto ">
                    <Image
                        src="/tecnologia/tec3.jpg"
                        alt="Tecnología 3"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            <div ref={ctaRef} className="flex justify-center items-center py-16 h-40 w-full bg-verde">
                <Link
                    href="/contacto"
                    className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-verde bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-white/30 hover:shadow-2xl focus:outline-none"
                >
                    <span className="absolute inset-0 w-full h-full bg-black/5 group-hover:translate-x-full transition-transform duration-500 ease-out -translate-x-full skew-x-12"></span>
                    <span className="relative flex items-center gap-2">
                        Agenda tu cita
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
}
