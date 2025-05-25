"use client";
declare global {
  interface Window {
    abrirContatoPopup?: () => void;
  }
}

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroCards from "@/components/layout/HeroCards";
import FormContatoPopup from "@/components/forms/FormContatoPopup";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 6,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(max-width: 480px)": {
        slides: { perView: 2, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    if (!slider.current) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 1000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Fundo com imagem escura */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full scale-105">
            <Image
              src="/images/panorama.png"
              alt="Panorama"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
        </div>

        {/* Conteúdo central */}
        <div className="relative z-10 flex flex-col items-center justify-end text-white text-center px-4 sm:px-6 md:px-8 h-full max-w-5xl mx-auto pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 opacity-0 animate-fade-in-up animation-delay-200 break-words">
            Excelência em Gestão Patrimonial
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-8 opacity-0 animate-fade-in-up animation-delay-500">
            Atendimento personalizado e soluções financeiras de alto padrão para empresas e clientes exigentes. Seguros, investimentos, crédito e muito mais.
          </p>
          <Link
            href="#solucoes"
            className="inline-block bg-accent/100 text-white hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
          >
            CONHEÇA NOSSAS SOLUÇÕES
          </Link>
          
        </div>
      </section>

      {/* Animated Hero Cards Section */}
      <section id="solucoes" className="scroll-mt-20">
        <HeroCards />
      </section>

      {/* Nossos Parceiros com Keen Slider */}
      <section className="text-center py-12 bg-offwhite text-primary">
        <h2 className="text-5xl font-heading mt-6 mb-8 text-primary">NOSSOS PARCEIROS</h2>
        <div className="container mx-auto px-4">
          <div ref={sliderRef} className="keen-slider">
            {[...Array(30)].map((_, index) => (
              <div className="keen-slider__slide" key={index}>
                <Image
                  src={`/images/logos_parceiros/logo${index + 1}.png`}
                  alt={`Logo ${index + 1}`}
                  width={140}
                  height={100}
                  className="mx-auto opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-16 bg-primary text-offwhite text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Quer entender como podemos ajudar você?
        </h2>
        <p className="mb-8">
          Fale com um consultor da ARJ PRIME e receba uma orientação personalizada para proteger e impulsionar seu patrimônio.
        </p>
        <button
          onClick={() => window.abrirContatoPopup?.()}
          className="inline-block bg-accent text-white hover:bg-offwhite hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md"
        >
          Fale com um consultor
        </button>
      </section>

      {/* Popup de Contato */}
      <FormContatoPopup />
    </div>
  );
}
