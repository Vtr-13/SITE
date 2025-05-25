'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FormPopup from '@/components/forms/FormPopup'
import { DistribuicaoGrid } from '@/components/forms/FormSaudeAddon'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import {
  ShieldCheckIcon,
  HandThumbUpIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'



/* COMPONENTE CARD */
type Ramo = {
  nome: string;
  icone: string;
  desc: string;
  bullets: string[];
  produtoId: string
}

type CardProps = {
  ramo: Ramo;
  flipped: string | null;
  setFlipped: (v: string | null) => void;
};

function Card({ ramo, flipped, setFlipped }: CardProps) {
  const isOpen = flipped === ramo.nome;

  return (
    <div
      className={`flip-card bg-offwhite rounded-xl shadow-lg h-full transform hover:scale-105 transition-transform duration-300 ${isOpen ? 'is-flipped' : ''}`}
      onClick={() => setFlipped(isOpen ? null : ramo.nome)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front p-8 border-t-4 border-accent flex flex-col">
          <Image src={ramo.icone} alt={`Ícone do plano ${ramo.nome}`} width={48} height={48} className="mb-5" />
          <h3 className="text-xl font-semibold text-primary mb-3">{ramo.nome}</h3>
          <p className="text-primary mb-4">{ramo.desc}</p>
          <div className="mt-auto flex flex-col gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(ramo.nome)
              }}
              className="inline-block bg-primary text-white hover:bg-accent hover:text-primary font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105"
            >
              Saiba mais
            </button>
           <div onClick={(e) => e.stopPropagation()}>
  <FormPopup
    segmento="saude"
    produtoId={ramo.produtoId as any}
    buttonText="Solicitar Cotação"
    className="inline-block bg-accent text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:scale-105"
  />
</div>


          </div>
        </div>

        <div className="flip-card-back text-white flex justify-center items-start overflow-auto" onClick={() => setFlipped(null)}>
          <div className="relative w-full max-w-3xl pt-14 pb-10 px-4 md:px-0" onClick={(e) => e.stopPropagation()}>
            <button className="flip-close" onClick={(e) => { e.stopPropagation(); setFlipped(null); }}>✕ Fechar</button>
            <h3 className="text-3xl font-semibold mb-4">{ramo.nome}</h3>
            <p className="mb-6 text-lg">{ramo.desc}</p>
            <h4 className="text-xl font-semibold mb-2 text-accent">Diferenciais</h4>
            <ul className="space-y-2 mb-8">
              {ramo.bullets.map((b: string, i: number) => {

                const isTitulo = b.startsWith("• • • ")
                return isTitulo
                  ? <li key={i} className="text-accent font-bold mt-6">{b.replace("• • • ", "")}</li>
                  : <li key={i} className="list-disc list-inside text-white/90">{b}</li>
              })}
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(null)
                setTimeout(() => {
                  const target = document.getElementById("formulario-cotacao")
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
              className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
            >
              Fazer Cotação
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
 const [flipped, setFlipped] = useState<string | null>(null)
 const [openIndex, setOpenIndex] = useState<number | null>(null);


  /* 1️⃣  AOS: roda só uma vez ---------------------------------------- */
useEffect(() => {
  AOS.init({ once: true });
}, []);

/* 2️⃣  Bloqueia / libera a rolagem -------------------------------- */
useEffect(() => {
  const html = document.documentElement;
  const body = document.body;

  if (flipped) {
    html.classList.add("overflow-hidden");              // remove scrollbar
    body.classList.add("overflow-hidden", "touch-none"); // bloqueia gesto
  } else {
    html.classList.remove("overflow-hidden");
    body.classList.remove("overflow-hidden", "touch-none");
  }
}, [flipped]);



  const beneficios = [
    { icon: ShieldCheckIcon, title: 'Isenção de Carência*', desc: 'Operadoras parceiras com carência zero para consultas, exames e procedimentos essenciais — ideal para quem precisa de uso imediato.' },
    { icon: HandThumbUpIcon, title: 'Atendimento 24h', desc: 'Suporte humanizado sempre que você precisar. Equipe disponível em plantão para tirar dúvidas, acompanhar sua proposta e dar suporte após a contratação.' },
    { icon: UsersIcon, title: 'Consultoria Personalizada', desc: 'Você não fica sozinho: seu consultor da ARJ Prime analisa seu perfil, simula as melhores operadoras e acompanha todo o processo de adesão.' },
  ]

  const faqs = [
  {
    q: "O que é carência e quando posso ter isenção?",
    a: "Carência é o período que você precisa aguardar para utilizar certos procedimentos após a contratação. Dependendo do tipo de plano, do tempo de permanência anterior e se a contratação for dentro dos prazos da ANS, você pode ter isenção total ou parcial das carências."
  },
  {
    q: "Como funciona a portabilidade de carências?",
    a: "Se você já tem um plano há pelo menos 2 anos (ou 3 no caso de doenças ou lesões preexistentes), pode trocar de plano mantendo parte ou toda a cobertura, sem cumprir novas carências, desde que atenda às regras da ANS e migre para um plano compatível."
  },
  {
    q: "Planos empresariais exigem quantidade mínima de vidas?",
    a: "Sim. A maioria das operadoras exige no mínimo 2 ou 3 vidas para planos PME ou empresariais. No entanto, analisamos seu CNPJ e oferecemos opções com a melhor relação custo-benefício, inclusive para MEIs e profissionais liberais."
  },
  {
    q: "Posso contratar um plano sem CNPJ?",
    a: "Sim. Além dos planos empresariais, existem opções individuais, familiares e por adesão. Também avaliamos possibilidades de incluir dependentes ou criar grupos elegíveis com entidade de classe ou sindicato."
  },
  {
    q: "Quais documentos são necessários para contratar o plano?",
    a: "Geralmente são exigidos: documento com foto, CPF, comprovante de residência, cartão do SUS e, no caso de plano empresarial, documentos da empresa e vínculo dos beneficiários."
  },
  {
    q: "O plano cobre consultas, exames e internações?",
    a: "Sim. A cobertura depende do tipo de plano contratado (ambulatorial, hospitalar, com ou sem obstetrícia). A maioria dos planos cobre consultas, exames, pronto-socorro e internações, conforme o rol da ANS."
  },
  {
  q: "Quais são os tipos de planos de saúde disponíveis?",
  a: "Existem planos individuais, familiares, empresariais e por adesão. Eles podem ter cobertura ambulatorial, hospitalar com ou sem obstetrícia, além de opções regionais ou nacionais. Nós ajudamos você a escolher o plano ideal para o seu perfil e orçamento."
},
{
  q: "O que é coparticipação e quando vale a pena?",
  a: "Coparticipação é quando o beneficiário paga uma porcentagem ou valor fixo ao utilizar determinados serviços, como consultas ou exames. Essa modalidade pode reduzir o valor da mensalidade e é indicada para quem usa o plano com baixa frequência."
}
]


const planosSaude = [
  {
    nome: "INDIVIDUAL/FAMILIAR",
    icone: "images/saude/icons/familia.svg",
    desc: "Proteja sua saúde e da sua família com planos acessíveis, ampla rede credenciada, reembolso para consultas particulares e possibilidade de isenção de carência com análise do plano anterior. A partir de R$ 180/mês por pessoa*",
    produtoId: 'saude_individual',
    bullets: [
  "• • • PARA QUEM É INDICADO?",
  "Pessoas físicas que desejam contratar um plano de forma independente",
  "Famílias com dependentes (cônjuges, filhos, pais) que desejam proteção coletiva",
  "Casais que querem aproveitar preços melhores em planos familiares",
  "Idosos que buscam alternativas ao SUS com rede particular",
  
  "• • • COBERTURA DISPONÍVEL",
  "Ambulatorial (consultas, exames, terapias)",
  "Hospitalar com ou sem obstetrícia (internações, cirurgias e partos)",
  "Pronto-socorro 24h com cobertura de urgência e emergência",
  "Serviços de reembolso para quem prefere médicos fora da rede",
  
  "• • • DIFERENCIAIS DO PLANO",
  "Liberdade para escolher entre plano regional ou nacional",
  "Reembolso para consultas particulares em planos superiores",
  "Possibilidade de isenção de carência com análise de plano anterior (portabilidade)",
  "Cobertura estendida para dependentes sem vínculo de sangue em alguns casos",
  "Acesso a hospitais de referência e clínicas especializadas",
  
  "• • • VALORES E CONTRATAÇÃO",
  "Mensalidades a partir de R$ 180/mês por pessoa*",
  "Contratação 100% digital, com assinatura eletrônica do contrato",
  "Isenção de carência para quem teve plano nos últimos 30 a 60 dias",
  "Sem necessidade de CNPJ ou entidade de classe",
  
  "• • • DOCUMENTOS NECESSÁRIOS",
  "RG e CPF de todos os beneficiários",
  "Comprovante de residência atualizado",
  "Cartão do SUS (obrigatório para todos)",
  "Comprovante do plano anterior (em caso de portabilidade)"
],
  },
  {
  nome: "EMPRESARIAL",
  icone: "images/saude/icons/empresarial.svg",
  desc: "Ofereça planos de saúde para sua equipe com preços reduzidos, carências facilitadas e condições exclusivas para empresas a partir de 3 vidas. A partir de R$ 99/mês por colaborador*",
  produtoId: 'saude_empresarial',
  bullets: [
    "• • • PARA QUEM É INDICADO?",
    "Microempreendedores Individuais (MEIs), pequenas e médias empresas",
    "Negócios com CNPJ ativo e pelo menos 3 beneficiários (titulares ou dependentes)",
    "Empresas que desejam oferecer benefício de saúde com custo competitivo",
    "Organizações que buscam planos com menos carência e mais rede credenciada",
    
    "• • • COBERTURA DISPONÍVEL",
    "Consultas médicas em diversas especialidades",
    "Exames laboratoriais e de imagem, terapias e fisioterapia",
    "Internações hospitalares, cirurgias, UTI e pronto-atendimento 24h",
    "Cobertura com ou sem obstetrícia, conforme o plano contratado",
    
    "• • • DIFERENCIAIS DO PLANO",
    "Planos com cobertura nacional ou regional ajustados ao perfil da empresa",
    "Redução ou isenção de carência com base em sinistralidade e número de vidas",
    "Condições especiais para MEIs e empresas com histórico de plano anterior",
    "Possibilidade de inclusão de dependentes diretos e indiretos",
    "Atendimento em hospitais de referência e laboratórios de ponta",
    
    "• • • VALORES E CONTRATAÇÃO",
    "Planos a partir de R$ 99 por vida/mês* (valores variam conforme região e operadora)",
    "Contratação simplificada com documentação digital e assinatura eletrônica",
    "Análise personalizada do perfil da empresa para melhores condições",
    "Ideal para empresas que desejam atrair e reter talentos com benefícios estratégicos",
    
    "• • • DOCUMENTOS NECESSÁRIOS",
    "CNPJ ativo e comprovante de endereço da empresa",
    "Contrato social ou documento equivalente (MEI, LTDA, etc.)",
    "Documentos dos titulares e dependentes (RG, CPF, Cartão do SUS)",
    "Comprovante de vínculo empregatício ou societário dos beneficiários"
  ]
},

 {
  nome: "ADESÃO",
  icone: "images/saude/icons/adesao.svg",
  desc: "Planos com valores acessíveis para profissionais, estudantes e servidores vinculados a entidades de classe, com rede ampla e possibilidade de isenção de carência. A partir de R$ 139/mês por pessoa*",
  produtoId: 'saude_adesao',
  bullets: [
    "• • • PARA QUEM É INDICADO?",
    "Profissionais liberais vinculados a sindicatos ou conselhos de classe (ex: OAB, CRM, CREA)",
    "Servidores públicos, aposentados, pensionistas e militares",
    "Estudantes universitários de instituições conveniadas",
    "Dependentes diretos e indiretos de profissionais vinculados",

    "• • • COBERTURA DISPONÍVEL",
    "Consultas, exames, pronto-atendimento e internações",
    "Cobertura hospitalar com ou sem obstetrícia",
    "Cobertura ambulatorial e terapêutica (fisioterapia, psicologia, etc.)",
    "Planos com opção de reembolso em operadoras específicas",
    
    "• • • DIFERENCIAIS DO PLANO",
    "Valores mais acessíveis que planos individuais convencionais",
    "Isenção de carência com comprovação de plano anterior ativo",
    "Cobertura nacional ou regional de acordo com a operadora",
    "Diversas opções de operadoras e entidades conveniadas",
    "Permite inclusão de dependentes mesmo sem vínculo sanguíneo em alguns casos",
    
    "• • • VALORES E CONTRATAÇÃO",
    "Planos a partir de R$ 139/mês por pessoa*",
    "Adesão rápida com assinatura digital e análise de elegibilidade",
    "Possibilidade de contratação individual ou familiar via entidade",
    "Contratação 100% digital com suporte consultivo durante o processo",
    
    "• • • DOCUMENTOS NECESSÁRIOS",
    "RG e CPF do titular e dos dependentes",
    "Comprovante de residência atualizado",
    "Cartão do SUS obrigatório para todos os beneficiários",
    "Comprovante de vínculo com entidade (carteira de classe, declaração ou boleto ativo)"
  ]
},

  {
  nome: "ODONTOLÓGICO",
  icone: "images/saude/icons/odontologico.svg",
  desc: "Garanta acesso a dentistas, tratamentos preventivos e procedimentos de urgência com planos acessíveis e cobertura nacional. A partir de R$ 29,90/mês por pessoa*",
  produtoId: 'saude_odontologico',
  bullets: [
    "• • • PARA QUEM É INDICADO?",
    "Pessoas físicas que desejam atendimento odontológico regular e emergencial",
    "Famílias que querem reduzir gastos com consultas e procedimentos particulares",
    "Empresas que desejam incluir plano odontológico como benefício aos colaboradores",
    "Estudantes, MEIs e profissionais liberais buscando atendimento preventivo acessível",
    
    "• • • COBERTURA DISPONÍVEL",
    "Consultas com clínico geral, cirurgião-dentista e especialistas",
    "Urgência e emergência odontológica 24h em todo o Brasil",
    "Limpeza, aplicação de flúor, radiografias e exames preventivos",
    "Restaurações, extrações simples, tratamento de canal e gengivite",
    "Cirurgias, próteses e ortodontia (conforme plano contratado)",
    
    "• • • DIFERENCIAIS DO PLANO",
    "Preços extremamente acessíveis e ampla rede credenciada",
    "Atendimento em clínicas, consultórios particulares e redes populares",
    "Cobertura nacional com possibilidade de escolher dentista da rede",
    "Algumas operadoras oferecem reembolso para tratamentos fora da rede",
    "Isenção de carência para procedimentos simples em planos selecionados",
    
    "• • • VALORES E CONTRATAÇÃO",
    "Mensalidades a partir de R$ 29,90 por pessoa*",
    "Contratação 100% online com emissão rápida do cartão virtual",
    "Planos individuais, familiares ou empresariais",
    "Possibilidade de contratação conjunta com plano de saúde",
    
    "• • • DOCUMENTOS NECESSÁRIOS",
    "RG e CPF do titular e dependentes (se houver)",
    "Comprovante de residência atualizado",
    "Não é necessário ter vínculo com entidade ou CNPJ"
  ]
},

  
];
return (
  <main className="bg-white text-primary">

    {/* HERO */}
<section className="relative isolate text-white h-[90vh] overflow-hidden">
  {/* Imagem de fundo */}
  <Image
    src="/images/saude/hero.png"
    alt="Família feliz com plano de saúde"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Overlay escuro por cima da imagem */}
  <div className="absolute inset-0 bg-black bg-opacity-60" />

  {/* Conteúdo sobre a imagem */}
  <div className="absolute bottom-10 left-0 w-full z-10">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Planos de Saúde para Todas as Fases da Vida
      </h1>
      <p className="text-lg text-white/80 mb-6">
        Escolha o plano ideal com consultoria gratuita e cobertura nacional
      </p>
      <Link
        href="#planos-saude"
        onClick={() => setFlipped(null)}
        className="inline-block bg-accent/100 text-white hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-lg transition shadow-md"
      >
        FAÇA UMA SIMULAÇÃO
      </Link>
    </div>
  </div>
</div>


</section>
<meta name="description" content="Encontre o plano de saúde ideal com ajuda de um consultor gratuito. Trabalhamos com as maiores operadoras do país. Simule agora e tenha cobertura nacional com carência reduzida." />


  {/* POR QUE ESCOLHER A ARJ PRIME? ------------------------------------ */}
<section id="beneficios-saude" className="bg-primary text-white py-24">
  <div className="container mx-auto px-4">
    <h2 className="mb-16 text-center font-heading text-4xl font-bold">
       <span className="text-white">POR QUE ESCOLHER A ARJ PRIME</span>?
    </h2>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* ---------- 1. SEM CARÊNCIA */}
      <article
        itemScope
        itemType="https://schema.org/HealthInsurancePlan"
        className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <img src="/images/saude/icons/car.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Sem Carência*
        </h3>
        <p className="text-primary/80">
          Comece a usar <strong>logo após a contratação</strong> – consultas, exames e muito mais, sem esperar. Ideal para quem tem pressa!
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Quero meu plano hoje →
        </a>
      </article>

      {/* ---------- 2. ATENDIMENTO 24 h */}
      <article itemScope itemType="https://schema.org/HealthInsurancePlan" className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img src="/images/saude/icons/up.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Atendimento 24 h
        </h3>
        <p className="text-primary/80">
          Ligue, chame no WhatsApp ou use o chat a qualquer hora. Nossa equipe resolve tudo, do boleto à liberação de exame.
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Falar com especialista →
        </a>
      </article>

      {/* ---------- 3. CONSULTORIA PERSONALIZADA */}
      <article itemScope itemType="https://schema.org/HealthInsurancePlan" className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img src="/images/saude/icons/user.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Consultoria Personalizada
        </h3>
        <p className="text-primary/80">
          A gente compara Porto, Bradesco, SulAmérica, Omint e outras para achar <strong>o melhor custo-benefício</strong> para você.
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Agendar análise →
        </a>
      </article>

      {/* ---------- 4. TELEMEDICINA INCLUSA */}
      <article itemScope itemType="https://schema.org/HealthInsurancePlan" className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img src="/images/saude/icons/stet.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Telemedicina 24/7
        </h3>
        <p className="text-primary/80">
          Fale com médicos online quando quiser. Praticidade para consultas rápidas, receitas digitais e segunda opinião.
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Ver como funciona →
        </a>
      </article>

      {/* ---------- 5. REDE PREMIUM */}
      <article itemScope itemType="https://schema.org/HealthInsurancePlan" className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img src="/images/saude/icons/hospital.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Rede Premium Nacional
        </h3>
        <p className="text-primary/80">
          Tenha acesso a hospitais referência como Albert Einstein, Sírio-Libanês e Oswaldo Cruz nos principais planos executivos.
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Conhecer hospitais →
        </a>
      </article>

      {/* ---------- 6. BEM-ESTAR & DESCONTOS */}
      <article itemScope itemType="https://schema.org/HealthInsurancePlan" className="rounded-2xl bg-offwhite p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <img src="/images/saude/icons/coracao.svg" alt="" aria-hidden="true" width={46} height={46} className="mx-auto mb-6" />
        <h3 className="mb-3 text-xl font-semibold text-primary">
          Bem-Estar & Descontos
        </h3>
        <p className="text-primary/80">
          Apps fitness, check-up anual gratuito e até <strong>70 % off</strong> em farmácias parceiras. Saúde e bolso agradecem!
        </p>
        <a href="#planos-saude" className="mt-6 inline-block font-medium text-accent underline-offset-2 hover:text-accent/80">
          Quero aproveitar →
        </a>
      </article>
    </div>

    {/* Observação legal enxuta */}
    <p className="mt-12 text-center text-sm text-primary/70">
      * Consulte condições para isenção de carência. Benefícios podem variar conforme operadora e categoria do plano.
    </p>
  </div>
</section>



    {/* PLANOS DE SAÚDE */}
    <section className="bg-primary py-20 text-offwhite scroll-mt-20" id="planos-saude">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold">
             <span className="text-white">CONHEÇA NOSSOS PLANOS</span>
          </h2>
          <p className="mt-4 text-lg text-primary/70">
            Temos soluções completas para pessoa física, MEI e empresas de todos os portes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {planosSaude.map((ramo, i) => (
            <Card            
              key={i}
              ramo={ramo}
              flipped={flipped}
              setFlipped={setFlipped}
            />
          ))}
        </div>
      </div>
    </section>

    

    {/* PARCEIROS */}
<section id="parceiros" className="bg-white py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-center text-3xl font-semibold mb-10 text-primary">
      NOSSOS PARCEIROS
    </h2>

    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      loop={true}
    >
      {/* ✅ Substitua os src pelos logos reais dos parceiros */}
      {[
        '/images/saude/logos/porto.png',
        '/images/saude/logos/bradesco.png',
        '/images/saude/logos/unimed.png',
        '/images/saude/logos/notredame.png',
        '/images/saude/logos/amil.png',
        '/images/saude/logos/sulamerica.png',
        '/images/saude/logos/omint.png'

      ].map((logo, i) => (
        <SwiperSlide key={i} className="flex items-center justify-center">
          <Image
            src={logo}
            alt={`Logo ${i}`}
            width={120}
            height={120}
            className="object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


    {/* FAQ */}
   
      <section className="py-16 bg-primary text-white" data-aos="fade-up">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-8 text-white">PERGUNTAS frequentes</h2>
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
           className="bg-offwhite border border-white/10 rounded-lg transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left p-4 text-accent font-medium cursor-pointer flex justify-between items-center"
          >
            {q}
            <span
              className={`text-accent text-lg transform transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-4 text-primary text-sm">{a}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>  
    

  </main>
)
}
