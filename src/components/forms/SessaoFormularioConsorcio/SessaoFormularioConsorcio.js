'use client'

import { useState, useEffect, useRef, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import * as Tabs from '@radix-ui/react-tabs'
import { gruposConsorcio, camposConsorcio } from '@/components/forms/formsConfigConsorcio'
import './SessaoFormularioConsorcio.css'

const SessaoFormularioConsorcio = forwardRef((_, ref) => {
  const [grupoAtivo, setGrupoAtivo] = useState(null)
  const [tipo, setTipo] = useState(null)
  const formRef = useRef(null) // ✅ usado para rolar até o formulário
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  useEffect(() => {
    function aoSelecionarGrupo(event) {
      const grupoSelecionado = event.detail
      if (gruposConsorcio[grupoSelecionado]) {
        setGrupoAtivo(grupoSelecionado)
        setTipo(null)
      }
    }
    window.addEventListener('abrir-grupo-consorcio', aoSelecionarGrupo)
    return () => {
      window.removeEventListener('abrir-grupo-consorcio', aoSelecionarGrupo)
    }
  }, [])

  // ✅ Rolar até o formulário assim que o tipo for selecionado
  useEffect(() => {
    if (tipo && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [tipo])

  const onSubmit = async (data) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ segmento: 'consorcios', produtoId: tipo, ...data })
      })
      alert('Formulário enviado! Aguarde nosso contato.')
      reset()
      setTipo(null)
    } catch (err) {
      alert('Erro no envio, tente novamente.')
    }
  }

  return (
    <section id="form-consorcio" ref={ref} className="py-20 bg-offwhite text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-6 text-center">
          QUEM PLANEJA CONQUISTA! SIMULE SEU CONSÓRCIO
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
          Escolha o tipo de consórcio e complete os dados para receber sua simulação.
        </p>

        <Tabs.Root value={grupoAtivo} onValueChange={(val) => { setGrupoAtivo(val); setTipo(null) }}>
          <Tabs.List className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(gruposConsorcio).map(grupo => (
              <Tabs.Trigger
                key={grupo}
                value={grupo}
                className="px-4 py-2 rounded-md font-medium bg-primary text-white data-[state=active]:bg-accent data-[state=active]:text-white hover:bg-accent transition"
              >
                {grupo}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.entries(gruposConsorcio).map(([grupo, tipos]) => (
            <Tabs.Content key={grupo} value={grupo}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {grupoAtivo === grupo && tipos.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTipo(t.id)}
                    className={`rounded-lg p-6 text-left border shadow-card transition duration-200 w-full ${tipo === t.id ? 'bg-accent text-primary' : 'bg-white text-primary hover:bg-primary/10'}`}
                  >
                    <div className="text-lg font-semibold">{t.nome}</div>
                    <div className="mt-1 text-sm text-primary/60">Clique para selecionar</div>
                  </button>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        {tipo && camposConsorcio[tipo] && (
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-3xl space-y-6 px-4"
          >
            {camposConsorcio[tipo].map(c => (
              <div key={c.name}>
                <label className="label">{c.label}</label>
                {c.type === 'checkbox' ? (
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register(c.name, { required: c.required })}
                      className="accent-accent"
                    />
                    <span>{c.label}</span>
                  </label>
                ) : c.type === 'select' ? (
                  <select {...register(c.name, { required: c.required })} className="input">
                    <option value="">Selecione</option>
                    {c.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                ) : c.type === 'textarea' ? (
                  <textarea rows={3} {...register(c.name)} className="input" />
                ) : (
                  <input
                    type={c.type}
                    {...register(c.name, { required: c.required })}
                    className="input"
                  />
                )}
                {errors[c.name] && <p className="erro">Campo obrigatório</p>}
              </div>
            ))}

            <button type="submit" className="btn-enviar" disabled={Object.keys(errors).length > 0}>
              
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  )
})

export default SessaoFormularioConsorcio
