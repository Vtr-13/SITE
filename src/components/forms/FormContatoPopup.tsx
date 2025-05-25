'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  gatilhoGlobal?: string
  assuntos?: string[]
  textoBotao?: string
  mostrarBotao?: boolean
  classeBotao?: string
}

export default function FormContatoPopup({
  gatilhoGlobal = 'abrirContatoPopup',
  assuntos = [
    'Seguros',
    'Investimentos',
    'Saúde',
    'Financiamentos',
    'Consórcios',
    'Outros',
  ],
  textoBotao = 'Fale Conosco',
  mostrarBotao = false,
  classeBotao = '',
}: Props) {
  const [aberto, setAberto] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  })

  useEffect(() => {
    ;(window as any)[gatilhoGlobal] = () => setAberto(true)
    return () => {
      delete (window as any)[gatilhoGlobal]
    }
  }, [gatilhoGlobal])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    if (aberto) {
      html.classList.add('overflow-hidden')
      body.classList.add('overflow-hidden', 'touch-none')
    } else {
      html.classList.remove('overflow-hidden')
      body.classList.remove('overflow-hidden', 'touch-none')
    }
  }, [aberto])

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDados(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviando(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origem: 'contato-geral', ...dados }),
      })
      alert('Mensagem enviada! Em breve retornaremos.')
      setDados({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
      setAberto(false)
    } catch (err) {
      alert('Ocorreu um erro. Tente novamente.')
      console.error(err)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <>
      {/* Botões flutuantes sempre visíveis */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4 items-end">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5511988889998"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          title="Fale via WhatsApp"
        >
          <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-9 h-9" />
        </a>

        {/* Formulário */}
        <button
          onClick={() => setAberto(true)}
          className="cursor-pointer w-9 h-9 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          title="Entre em contato"
        >
          <img src="/images/formulario.svg" alt="Formulário" className="w-9 h-9" />
        </button>
      </div>

      {/* Botão opcional dentro da página */}
      {mostrarBotao && (
        <button
          onClick={() => setAberto(true)}
          className={`inline-block bg-accent text-white hover:bg-primary hover:text-white hover:scale-105 transform transition duration-200 font-medium py-3 px-8 rounded-lg shadow-md ${classeBotao}`}
        >
          {textoBotao}
        </button>
      )}

      {/* Modal de formulário */}
      {aberto &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={() => setAberto(false)}
          >
            <div
              className="relative bg-[#070D17] text-white rounded-lg shadow-lg w-full max-w-xl max-h-full overflow-y-auto p-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Botão de fechar */}
              <button
                onClick={() => setAberto(false)}
                className="absolute top-3 right-3 text-2xl hover:text-accent"
                aria-label="Fechar"
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold mb-6">Entre em Contato</h2>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label className="block mb-1 text-sm">Nome completo*</label>
                  <input
                    type="text"
                    name="nome"
                    value={dados.nome}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email e telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-sm">E-mail*</label>
                    <input
                      type="email"
                      name="email"
                      value={dados.email}
                      onChange={onChange}
                      required
                      className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="voce@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm">Telefone*</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={dados.telefone}
                      onChange={onChange}
                      required
                      className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block mb-1 text-sm">Assunto*</label>
                  <select
                    name="assunto"
                    value={dados.assunto}
                    onChange={onChange}
                    required
                    className="w-full px-3 py-2 rounded border border-gray-600 bg-primary text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Selecione</option>
                    {assuntos.map(a => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block mb-1 text-sm">Descreva sua solicitação</label>
                  <textarea
                    name="mensagem"
                    value={dados.mensagem}
                    onChange={onChange}
                    rows={4}
                    className="w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  disabled={enviando}
                  className="w-full bg-accent text-white font-semibold py-3 rounded-md transition hover:bg-accent/90 disabled:opacity-60"
                >
                  {enviando ? 'Enviando…' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
