'use client'
import { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { formsConfig, Field } from './formsConfig'

interface FormPopupProps {
  segmento: 'seguros' | 'investimentos' | 'saude' | 'financiamentos' | 'consorcios'
  produtoId: keyof typeof formsConfig     // 'vida', 'auto', …
  buttonText?: string
  className?: string
}

/* ------------- COMPONENTE PRINCIPAL ------------------- */
export default function FormPopup({
  segmento,
  produtoId,
  buttonText = 'Solicitar Cotação',
  className = '',
}: FormPopupProps) {
  const produto = formsConfig[produtoId]

  /* Estado dinâmico */
  const initialState = useMemo(() => {
    const state: Record<string, any> = {}
    produto.fields.forEach(f => (state[f.name] = f.type === 'checkbox' ? false : ''))
    return state
  }, [produto])

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<Record<string, any>>(initialState)
  const [sending, setSending] = useState(false)

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target
  const checked = (e.target as HTMLInputElement).checked

  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }))
}


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          segmento,
          produtoId,
          ...formData,
        }),
      })
      alert('Proposta enviada! Nossa equipe entrará em contato em breve.')
      setFormData(initialState)
      setIsOpen(false)
    } catch (err) {
      alert('Erro no envio. Tente novamente.')
    } finally {
      setSending(false)
    }
  }

  /* ----- RENDERIZAÇÃO DE CAMPO DINÂMICO ----------------- */
  const renderField = (f: Field) => {
    const commonProps = {
      name: f.name,
      value: formData[f.name],
      onChange: handleChange,
      required: f.required,
      className:
        'w-full px-3 py-2 rounded border border-gray-600 bg-transparent text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent',
    }

    if (f.type === 'select') {
      return (
        <select {...commonProps as any}>
          <option value="">Selecione</option>
          {f.options!.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      )
    }
    if (f.type === 'textarea') {
      return <textarea rows={3} {...commonProps as any} />
    }
    if (f.type === 'checkbox') {
      return (
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name={f.name}
            checked={formData[f.name]}
            onChange={handleChange}
            className="accent-accent"
          />
          {f.label}
        </label>
      )
    }
    /* text, email, tel, number, date */
    return <input type={f.type} placeholder={f.label} {...commonProps} />
  }

  /* UI */
  return (
    <>
      <button
  onClick={() => setIsOpen(true)}
  className={`inline-block bg-accent text-white
              hover:bg-primary hover:text-white hover:scale-105
              transform transition duration-200
              font-medium py-3 px-8 rounded-lg shadow-md ${className}`}
>
  {buttonText}
</button>


      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4 py-6 sm:py-8">
            <div className="relative bg-[#070D17] text-white rounded-lg shadow-lg w-full max-w-2xl max-h-full overflow-y-auto p-6 sm:p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-2xl hover:text-accent"
                aria-label="Fechar"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold mb-1">{produto.title}</h2>
              {produto.description && (
                <p className="mb-4 text-sm text-gray-300">{produto.description}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {produto.fields.map(f => (
                  <div key={f.name}>
                    {f.type !== 'checkbox' && (
                      <label className="block mb-1 text-sm">{f.label}</label>
                    )}
                    {renderField(f)}
                  </div>
                ))}

                <button
                  disabled={sending}
                  className="w-full bg-accent text-white font-semibold py-3 rounded-md transition hover:bg-accent/90 disabled:opacity-60"
                >
                  {sending ? 'Enviando…' : 'Enviar'}
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
