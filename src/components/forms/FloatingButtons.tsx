'use client'

// ⬇️ Declaração global para o TypeScript aceitar o `window.abrirContatoPopup`
declare global {
  interface Window {
    abrirContatoPopup?: () => void
  }
}

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4 items-end">
      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511988889998"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        title="Fale via WhatsApp"
      >
        <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-9 h-9" />
      </a>

      {/* Botão Formulário */}
      <button
        onClick={() => window.abrirContatoPopup?.()}
        className="cursor-pointer w-9 h-9 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
        title="Entre em contato"
      >
        <img src="/images/formulario.svg" alt="Formulário" className="w-9 h-9" />
      </button>
    </div>
  )
}
