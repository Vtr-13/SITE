import type { Metadata, Viewport } from 'next'
import './globals.css'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FormContatoPopup from '@/components/forms/FormContatoPopup'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
  description:
    'Soluções completas para proteção e crescimento do seu patrimônio. Seguros, Empréstimos, Saúde, Financiamentos, Consórcios e Investimentos.',
  keywords:
    'gestão patrimonial, seguros, empréstimo consignado, planos de saúde, financiamentos, consórcios, investimentos',
  openGraph: {
    title: 'ARJ PRIME - Excelência em Gestão Patrimonial',
    description:
      'Soluções completas para proteção e crescimento do seu patrimônio.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arjprime.com.br',
    siteName: 'ARJ PRIME',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>{/* ... */}</head>
      <body className="bg-primary">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />

        {/* Apenas o FormContatoPopup — agora com botões flutuantes embutidos */}
        <FormContatoPopup />
      </body>
    </html>
  )
}
