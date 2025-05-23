'use client';

/* -------------------------------------------------------------------------- */
/* IMPORTS                                                                    */
/* -------------------------------------------------------------------------- */
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {  UsersIcon,  GiftIcon,  CurrencyDollarIcon,  ShieldCheckIcon,  HandThumbUpIcon,  BanknotesIcon,  ChartBarIcon,
  HomeIcon,  TruckIcon,  AcademicCapIcon,  Cog6ToothIcon,} from '@heroicons/react/24/outline';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import SessaoFormularioConsorcio from '@/components/forms/SessaoFormularioConsorcio/SessaoFormularioConsorcio'
import { useRef } from 'react'


export default function ConsorcioPage() {
  const [flipped, setFlipped] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const formularioRef = useRef<HTMLDivElement | null>(null)

function scrollParaFormularioGrupo(grupo: string) {
  const evento = new CustomEvent('abrir-grupo-consorcio', { detail: grupo })
  window.dispatchEvent(evento)
  setTimeout(() => {
    if (formularioRef.current) {
      formularioRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

  const faqs = [
    {
      q: "Preciso dar entrada para participar do consórcio?",
      a: "Não. No consórcio você não paga entrada nem juros. As parcelas incluem apenas a taxa de administração, fundo comum e fundo de reserva, quando aplicável.",
    },
    {
      q: "Como funciona a contemplação no consórcio?",
      a: "Todos os meses ocorre uma assembleia: um participante é contemplado por sorteio e outros podem antecipar a contemplação com lances (adiantamento de parcelas ou recursos próprios).",
    },
    {
      q: "Posso usar meu carro usado como forma de lance?",
      a: "Sim. É possível usar um veículo usado como lance para antecipar a carta de crédito, desde que seja aprovado na avaliação da administradora.",
    },
    {
      q: "O consórcio é regulamentado?",
      a: "Sim. As administradoras parceiras da ARJ PRIME são autorizadas e fiscalizadas pelo Banco Central do Brasil, oferecendo segurança jurídica e transparência em todo o processo.",
    },
    {
      q: "O que posso fazer com a carta de crédito após ser contemplado?",
      a: "Você pode usar o crédito para comprar bens novos ou usados, quitar financiamentos, reformar, construir ou até contratar serviços, de acordo com as regras do grupo contratado.",
    },
    {
      q: "Posso antecipar parcelas ou quitar meu consórcio?",
      a: "Sim. Você pode fazer antecipações parciais ou quitar o consórcio a qualquer momento, inclusive com uso do próprio FGTS em consórcios de imóveis.",
    },
    {
      q: "O consórcio faz análise de crédito?",
      a: "Não há análise de crédito para entrar no grupo. Mas ela pode ocorrer no momento da contemplação, caso você deseje retirar o bem com garantia de pagamento.",
    },
    {
      q: "Qual a diferença entre consórcio e financiamento?",
      a: "No consórcio você não paga juros, mas precisa esperar ser contemplado. Já no financiamento, há liberação imediata do bem com cobrança de juros, o que aumenta o valor total pago.",
    },
  ];


/* -------------------------------------------------------------------------- */
/* PÁGINA                                                                     */
/* -------------------------------------------------------------------------- */

useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <main className="bg-white text-primary">

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate text-white h-[90vh] flex flex-col justify-end">

        <Image
          src="/images/consorcios/hero.jpg"
          alt="Família comemorando conquista com consórcio ARJ PRIME"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />

        <div className="relative z-10 container mx-auto flex flex-col justify-end grow px-4 py-10">
          <div>
            <h1 className="text-5xl font-heading font-bold leading-tight md:text-6xl">
             <span className="text-white">CONSÓRCIO ARJ PRIME</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl">
              Sem juros, sem entrada e com parcelas flexíveis. Planeje a compra
              do seu <strong>imóvel, veículo ou serviço</strong> do seu jeito.
            </p>

            <ul className="mb-10 mt-6 space-y-2 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span> Crédito de R$ 20 mil a R$
                1 milhão
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span> Prazos até 200 meses
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span> Assessoria personalizada
              </li>
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Simulador de Consórcio*/}
                  <Link
                       href="#tipos-consorcio"
                       onClick={() => setFlipped(null)}
                        className="inline-block bg-accent/100 text-white hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
                     >
                       FAÇA UMA SIMULAÇÃO
                     </Link>    
        
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* O QUE É CONSÓRCIO?                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="o-que-e-consorcio"
        className="bg-offwhite py-20 text-primary scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold">
              O <span className="text-accent">Consórcio</span> em 3 passos
            </h2>
            <p className="mt-4 text-lg text-primary/80">
              Uma solução de compra programada sem juros nem entrada. Você entra
              em um <strong>grupo</strong>, participa de{' '}
              <strong>sorteios mensais</strong> ou faz <strong>lance</strong>{' '}
              para antecipar a contemplação e utiliza o crédito como quiser.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* PASSO 1 */}
            <div className="group rounded-xl bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <UsersIcon className="h-14 w-14 text-accent" />
              <h3 className="mt-6 text-xl font-semibold">1. Grupo</h3>
              <p className="mt-2 text-primary/70">
                Você entra em um grupo com pessoas que têm o mesmo objetivo de compra. Isso permite diluir os custos, 
                eliminar juros e aumentar o poder de negociação com fornecedores e lojas.
              </p>
            </div>

            {/* PASSO 2 */}
            <div className="group rounded-xl bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <GiftIcon className="h-14 w-14 text-accent" />
              <h3 className="mt-6 text-xl font-semibold">2. Sorteio</h3>
              <p className="mt-2 text-primary/70">
                Todo mês acontece uma assembleia e um participante é contemplado por sorteio, 
                recebendo a carta de crédito sem custo adicional ou necessidade de lance.
              </p>
            </div>

            {/* PASSO 3 */}
            <div className="group rounded-xl bg-white p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CurrencyDollarIcon className="h-14 w-14 text-accent" />
              <h3 className="mt-6 text-xl font-semibold">3. Lance</h3>
              <p className="mt-2 text-primary/70">
                Deseja antecipar sua contemplação? Você pode oferecer um lance — um adiantamento de parcelas — e aumentar significativamente suas chances. 
                É possível usar recursos próprios ou até mesmo a própria carta de crédito como forma de lance, conforme as regras do grupo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BENEFÍCIOS                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section id="beneficios" className="bg-primary py-20 text-pprimary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold">
              
              <span className="text-white">Por que escolher o Consórcio ?</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1 – Zero juros */}
            <div className="group rounded-xl bg-offwhite p-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <ShieldCheckIcon className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">Zero Juros</h3>
              <p className="mt-2 text-primary/70">
                Você não paga juros, apenas taxa de administração. A economia em relação ao financiamento pode chegar a até 40% do valor total do bem.
              </p>
            </div>

            {/* 2 – Parcelas flexíveis */}
            <div className="group rounded-xl bg-offwhite p-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <HandThumbUpIcon className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">Parcelas Flexíveis</h3>
              <p className="mt-2 text-primary/70">
                Planos entre R$ 20 mil e R$ 1 milhão, com prazos de até 200 meses. Escolha o valor que cabe no seu orçamento.
              </p>
            </div>

            {/* 3 – Planejamento seguro */}
            <div className="group rounded-xl bg-offwhite p-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <ChartBarIcon className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">Planejamento Seguro</h3>
              <p className="mt-2 text-primary/70">
                Todos os consórcios são fiscalizados pelo Banco Central do Brasil. Segurança jurídica e fundo comum garantido.
              </p>
            </div>

            {/* 4 – Uso livre */}
            <div className="group rounded-xl bg-offwhite p-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
              <BanknotesIcon className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">Uso Livre do Crédito</h3>
              <p className="mt-2 text-primary/70">
                Após a contemplação, utilize o crédito para comprar imóveis, veículos, reformar, estudar ou contratar serviços, conforme o grupo contratado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
{/* TIPOS DE CONSÓRCIO                                                */}
{/* ------------------------------------------------------------------ */}
<section
  id="tipos-consorcio"
  className="bg-offwhite py-20 text-primary scroll-mt-20"
>
  <div className="container mx-auto px-4">
    <header className="mx-auto mb-14 max-w-3xl text-center">
      <h2 className="font-heading text-4xl font-bold">
        Compare os <span className="text-accent">tipos de consórcio</span> disponíveis
      </h2>
      <p className="mt-4 text-lg text-primary/80">
        Encontre a melhor solução para conquistar seu carro, imóvel, serviço ou equipamento com parcelas acessíveis e prazos flexíveis.
      </p>
    </header>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* IMÓVEIS */}
      <article
  itemScope
  itemType="https://schema.org/FinancialProduct"
  className="group relative rounded-xl bg-white p-8 shadow-sm border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-accent/90 hover:bg-primary/5 hover:shadow-lg
 cursor-pointer"
        onClick={() => scrollParaFormularioGrupo('IMÓVEIS')}
      >
        <img
          src="images/consorcios/money.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={40}
          height={40}
          className="mb-6"
        />
        <h3 itemProp="name" className="mb-3 text-xl font-semibold">
          Consórcio Imobiliário
        </h3>
        <p itemProp="description" className="mb-6 text-primary/80">
          Adquira, reforme ou construa seu imóvel com cartas de crédito entre R$ 200 mil e R$ 1 milhão, em até 200 meses.
        </p>
        <span
          itemProp="url"
          className="inline-block font-medium text-accent underline underline-offset-2 transition-colors duration-150 group-hover:text-accent/80"
        >
          Simular consórcio de imóvel →
        </span>
      </article>

      {/* VEÍCULOS */}
      <article
        itemScope
        itemType="https://schema.org/FinancialProduct"
        className="group relative rounded-xl bg-white p-8 shadow-sm border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-accent/90 hover:bg-primary/5 hover:shadow-lg
 cursor-pointer"
        onClick={() => scrollParaFormularioGrupo('VEÍCULOS')}
      >
        <img
          src="images/consorcios/money.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={40}
          height={40}
          className="mb-6"
        />
        <h3 itemProp="name" className="mb-3 text-xl font-semibold">
          Consórcio de Veículos
        </h3>
        <p itemProp="description" className="mb-6 text-primary/80">
          Planeje a compra do seu carro, moto ou utilitário com parcelas acessíveis e cartas de R$ 30 mil a R$ 300 mil.
        </p>
        <span
          itemProp="url"
          className="inline-block font-medium text-accent underline underline-offset-2 transition-colors duration-150 group-hover:text-accent/80"
        >
          Simular consórcio de veículo →
        </span>
      </article>

      {/* SERVIÇOS */}
      <article
        itemScope
        itemType="https://schema.org/FinancialProduct"
        className="group relative rounded-xl bg-white p-8 shadow-sm border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-accent/90 hover:bg-primary/5 hover:shadow-lg
 cursor-pointer"
        onClick={() => scrollParaFormularioGrupo('SERVIÇOS E LAZER')}
      >
        <img
          src="images/consorcios/money.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={40}
          height={40}
          className="mb-6"
        />
        <h3 itemProp="name" className="mb-3 text-xl font-semibold">
          Consórcio de Serviços
        </h3>
        <p itemProp="description" className="mb-6 text-primary/80">
          Pague cirurgias, festas, viagens ou cursos com valores de R$ 20 mil a R$ 120 mil.
        </p>
        <span
          itemProp="url"
          className="inline-block font-medium text-accent underline underline-offset-2 transition-colors duration-150 group-hover:text-accent/80"
        >
          Simular consórcio de serviços →
        </span>
      </article>

      {/* MÁQUINAS & PESADOS */}
      <article
        itemScope
        itemType="https://schema.org/FinancialProduct"
        className="group relative rounded-xl bg-white p-8 shadow-sm border border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-accent/90 hover:bg-primary/5 hover:shadow-lg
 cursor-pointer"
        onClick={() => scrollParaFormularioGrupo('AGRO')}
      >
        <img
         src="images/consorcios/money.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={40}
          height={40}
          className="mb-6"
        />
        <h3 itemProp="name" className="mb-3 text-xl font-semibold">
          Consórcio de Máquinas e Equipamentos
        </h3>
        <p itemProp="description" className="mb-6 text-primary/80">
          Financiamento inteligente para tratores, caminhões e máquinas pesadas. Cartas de até R$ 1,2 milhão.
        </p>
        <span
          itemProp="url"
          className="inline-block font-medium text-accent underline underline-offset-2 transition-colors duration-150 group-hover:text-accent/80"
        >
          Simular consórcio de máquinas →
        </span>
      </article>
    </div>
  </div>
</section>


<div ref={formularioRef}>
  <SessaoFormularioConsorcio />
</div>



{/* ------------------------------------------------------------------ */}
{/* DEPOIMENTOS (Swiper)                                              */}
{/* ------------------------------------------------------------------ */}
<section
  id="depoimentos"
  className="bg-primary py-20 text-white scroll-mt-20"
>
  <div className="container mx-auto px-4">
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="font-heading text-4xl font-bold">
        Muitos clientes <span className="text-accent">satisfeitos</span>
      </h2>
    </div>

    <div className="container mx-auto px-4">
      <div className="rounded-xl overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="!overflow-visible"
        >
          {[
            {
              nome: 'Fernanda Silva',
              texto:
                'Consegui minha carta de crédito em 8 meses e comprei meu primeiro apartamento sem pagar juros. Atendimento nota 10!',
            },
            {
              nome: 'Carlos Oliveira',
              texto:
                'Fiz um consórcio de caminhão e fui contemplado por lance. Economia enorme comparada ao leasing.',
            },
            {
              nome: 'Juliana Costa',
              texto:
                'A equipe da ARJ PRIME me ajudou em cada passo. Hoje tenho meu carro novo pagando muito menos.',
            },
            {
              nome: 'Marcos Vieira',
              texto:
                'Optei por consórcio de serviços para minha pós-graduação no exterior. Processo transparente e rápido.',
            },
          ].map((d, i) => (
            <SwiperSlide key={i}>
              <article className="relative h-full rounded-xl bg-white p-8 text-primary shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute -top-4 left-4 h-10 w-10 text-accent/60"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M7.17 6C4.66 6 3 7.9 3 10.5S4.66 15 7.17 15c.74 0 1.37-.11 1.89-.32l.29 1.54C8.25 16.73 7.27 17 6 17c-3 0-5-2.38-5-6s2-6 5-6c1.5 0 2.76.48 3.64 1.37L9.17 9C8.7 8.5 8 8 7.17 8zm11 0C15.66 6 14 7.9 14 10.5S15.66 15 18.17 15c.74 0 1.37-.11 1.89-.32l.29 1.54C19.25 16.73 18.27 17 17 17c-3 0-5-2.38-5-6s2-6 5-6c1.5 0 2.76.48 3.64 1.37L20.17 9c-.47-.5-1.17-1-2-1z"
                  />
                </svg>

                <p className="mt-6 text-base leading-relaxed">{d.texto}</p>
                <p className="mt-4 font-semibold text-accent">{d.nome}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
</section>




        {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="faq" className="bg-white py-20 text-primary scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-4xl font-bold">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-offwhite p-4 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-lg font-medium"
                  >
                    <span>{item.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-primary/70 transition-all duration-300">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}