/* src/config/formsConfigConsorcio.ts
 * --------------------------------------------------------------- */
import type { Field, ProductForm } from '@/components/forms/formsConfig'

/* 1. Campos comuns ------------------------------------------------ */
const DADOS_PESSOAIS: Field[] = [
  { group: 'Dados Pessoais', name: 'nomeCompleto',    label: 'Nome completo',         type: 'text',   required: true },
  { group: 'Dados Pessoais', name: 'cpf',             label: 'CPF',                  type: 'text',   required: true },
  { group: 'Dados Pessoais', name: 'dataNascimento',  label: 'Data de nascimento',   type: 'date' },
  { group: 'Contato',        name: 'telefone',        label: 'Telefone',             type: 'tel',    required: true },
  { group: 'Contato',        name: 'email',           label: 'E-mail',               type: 'email',  required: true },
  { group: 'Contato',        name: 'cidade',          label: 'Cidade',               type: 'text' },
  { group: 'Contato',        name: 'estado',          label: 'Estado',               type: 'text' },
]

/* 2. Detalhes básicos (presentes em TODOS) ------------------------ */
const BASE_DETALHES: Field[] = [
  { group: 'Detalhes', name: 'valorCartaCredito',    label: 'Valor da carta de crédito (R$)', type: 'number', required: true },
  { group: 'Detalhes', name: 'prazoDesejado',        label: 'Prazo desejado (meses)',         type: 'number', required: true },
  { group: 'Detalhes', name: 'entradaDesejada',      label: 'Entrada (opcional)',             type: 'number' },
  { group: 'Detalhes', name: 'urgenciaContemplacao', label: 'Urgência da contemplação',       type: 'select',
    options: ['Imediata', 'Curto Prazo', 'Indiferente'], required: true },
  { group: 'Detalhes', name: 'observacoes',          label: 'Observações',                    type: 'textarea' },
]

/* 3. Lista oficial de tipos -------------------------------------- */
export const tiposConsorcio = [
  // VEÍCULOS
  { id: 'carro',                   nome: 'Carro',                                grupo: 'VEÍCULOS' },
  { id: 'motos',                   nome: 'Motos',                                grupo: 'VEÍCULOS' },
  { id: 'caminhoes',               nome: 'Caminhões',                            grupo: 'VEÍCULOS' },
  { id: 'veiculos_eletricos',      nome: 'Veículos Elétricos',                   grupo: 'VEÍCULOS' },
  { id: 'embarcacao',              nome: 'Embarcação',                           grupo: 'VEÍCULOS' },
  { id: 'vans',                    nome: 'Vans',                                 grupo: 'VEÍCULOS' },
  { id: 'quitacao_fin_auto',       nome: 'Quitação de Financiamento Auto',       grupo: 'VEÍCULOS' },
  { id: 'implementos_rodoviarios', nome: 'Implementos Rodoviários',              grupo: 'VEÍCULOS' },
  { id: 'aviacao',                 nome: 'Aviação',                              grupo: 'VEÍCULOS' },

  // IMÓVEIS
  { id: 'imovel',                       nome: 'Imóvel',                                         grupo: 'IMÓVEIS' },
  { id: 'terrenos',                     nome: 'Terrenos',                                       grupo: 'IMÓVEIS' },
  { id: 'terreno_construcao',           nome: 'Aquisição Terreno + Construção',                 grupo: 'IMÓVEIS' },
  { id: 'construcao_reforma_estrutural',nome: 'Construção ou Reforma Estrutural',               grupo: 'IMÓVEIS' },
  { id: 'construcao_reforma_nao_estrutural', nome: 'Construção ou Reforma Não Estrutural',      grupo: 'IMÓVEIS' },
  { id: 'imoveis_rurais',               nome: 'Imóveis Rurais',                                 grupo: 'IMÓVEIS' },
  { id: 'quitacao_fin_imovel',          nome: 'Quitação de Financiamento Imóvel',               grupo: 'IMÓVEIS' },

  // AGRO
  { id: 'trator_agricola',             nome: 'Trator Agrícola',                                grupo: 'AGRO' },
  { id: 'trator_emplacamento',         nome: 'Trator (emplacamento obrigatório)',              grupo: 'AGRO' },
  { id: 'rebanho',                     nome: 'Rebanho',                                        grupo: 'AGRO' },
  { id: 'maquinas_equipamentos_agro',  nome: 'Máquinas, Equipamentos e Implementos Agrícolas', grupo: 'AGRO' },

  // SERVIÇOS E LAZER
  { id: 'computador_gamer',     nome: 'Computador / Gamer',       grupo: 'SERVIÇOS E LAZER' },
  { id: 'bicicleta_eletrica',   nome: 'Bicicleta Elétrica',       grupo: 'SERVIÇOS E LAZER' },
  { id: 'bicicleta',            nome: 'Bicicleta',                grupo: 'SERVIÇOS E LAZER' },
  { id: 'viagens_festa',        nome: 'Viagens e Festa',          grupo: 'SERVIÇOS E LAZER' },
  { id: 'painel_solar',         nome: 'Painel Solar',             grupo: 'SERVIÇOS E LAZER' },
  { id: 'smartphone_eletronicos',nome: 'Smartphone / Eletrônicos',grupo: 'SERVIÇOS E LAZER' },
  { id: 'servicos',             nome: 'Serviços',                 grupo: 'SERVIÇOS E LAZER' },
] as const

/* 4. Campos ESPECÍFICOS por tipo --------------------------------- */
const ESPECIFICOS: Record<string, Field[]> = {
  /* ----- VEÍCULOS ----- */
  carro: [
    { group: 'Veículo', name: 'tipoVeiculo',    label: 'Tipo de veículo', type: 'select',
      options: ['Novo','Seminovo'], required: true },
    { group: 'Veículo', name: 'marcaModelo',    label: 'Marca / Modelo',  type: 'text',   required: true },
    { group: 'Veículo', name: 'anoFabricacao',  label: 'Ano de fabricação', type: 'number' },
    { group: 'Veículo', name: 'possuiTroca',    label: 'Possui veículo para troca?', type: 'select',
      options: ['Sim','Não'] },
  ],
  motos: [
    { group: 'Veículo', name: 'cilindrada',     label: 'Cilindrada (cc)', type: 'number' },
    { group: 'Veículo', name: 'marcaModelo',    label: 'Marca / Modelo',  type: 'text' },
    { group: 'Veículo', name: 'anoFabricacao',  label: 'Ano de fabricação', type: 'number' },
  ],
  caminhoes: [
    { group: 'Veículo', name: 'tipoCaminhao',   label: 'Tipo de caminhão', type: 'text' },
    { group: 'Veículo', name: 'capCargaKg',     label: 'Capacidade de carga (kg)', type: 'number' },
    { group: 'Veículo', name: 'anoFabricacao',  label: 'Ano de fabricação', type: 'number' },
  ],
  veiculos_eletricos: [
    { group: 'Veículo', name: 'categoria',      label: 'Categoria', type: 'select',
      options: ['Carro','Moto','Outro'] },
    { group: 'Veículo', name: 'autonomiaKm',    label: 'Autonomia (km)', type: 'number' },
    { group: 'Veículo', name: 'marcaModelo',    label: 'Marca / Modelo', type: 'text' },
  ],
  embarcacao: [
    { group: 'Embarcação', name: 'tipoEmbarcacao', label: 'Tipo de embarcação', type: 'select',
      options: ['Lancha','Veleiro','Jet Ski','Pesca'] },
    { group: 'Embarcação', name: 'comprimentoPe',  label: 'Comprimento (pés)', type: 'number' },
    { group: 'Embarcação', name: 'potenciaHp',     label: 'Potência do motor (HP)', type: 'number' },
  ],
  vans: [
    { group: 'Veículo', name: 'capPassageiros', label: 'Capacidade (passageiros)', type: 'number' },
    { group: 'Veículo', name: 'usoPrincipal',   label: 'Uso principal', type: 'select',
      options: ['Escolar','Turismo','Carga'] },
  ],
  quitacao_fin_auto: [
    { group: 'Financiamento', name: 'saldoDevedor', label: 'Saldo devedor atual (R$)', type: 'number', required: true },
    { group: 'Financiamento', name: 'banco',        label: 'Banco / Financeira',       type: 'text' },
    { group: 'Financiamento', name: 'prazoRestante',label: 'Prazo restante (meses)',   type: 'number' },
  ],
  implementos_rodoviarios: [
    { group: 'Implemento', name: 'tipoImplemento', label: 'Tipo de implemento', type: 'text' },
    { group: 'Implemento', name: 'capacidade',     label: 'Capacidade (m³ / ton)', type: 'text' },
  ],
  aviacao: [
    { group: 'Aeronave', name: 'tipoAeronave',  label: 'Tipo de aeronave', type: 'select',
      options: ['Monomotor','Bimotor','Helicóptero','Ultraleve'] },
    { group: 'Aeronave', name: 'finalidade',    label: 'Finalidade', type: 'select',
      options: ['Uso Pessoal','Táxi Aéreo','Agrícola'] },
    { group: 'Aeronave', name: 'horasVoo',      label: 'Horas totais de voo', type: 'number' },
  ],

  /* ----- IMÓVEIS ----- */
  imovel: [
    { group: 'Imóvel', name: 'tipoImovel', label: 'Tipo de imóvel', type: 'select',
      options: ['Residencial','Comercial'] },
    { group: 'Imóvel', name: 'novoUsado', label: 'Novo ou usado',   type: 'select',
      options: ['Novo','Usado'] },
    { group: 'Imóvel', name: 'cidadeImovel', label: 'Cidade do imóvel', type: 'text' },
  ],
  terrenos: [
    { group: 'Terreno', name: 'areaM2',      label: 'Área (m²)', type: 'number' },
    { group: 'Terreno', name: 'finalidade',  label: 'Finalidade', type: 'select',
      options: ['Construção','Investimento','Agrícola'] },
  ],
  terreno_construcao: [
    { group: 'Obra', name: 'valorTerreno',    label: 'Valor do terreno (R$)', type: 'number' },
    { group: 'Obra', name: 'valorConstrucao', label: 'Valor de construção (R$)', type: 'number' },
    { group: 'Obra', name: 'areaConstrucao',  label: 'Área a construir (m²)', type: 'number' },
  ],
  construcao_reforma_estrutural: [
    { group: 'Obra', name: 'tipoObra',        label: 'Tipo de obra', type: 'select',
      options: ['Ampliação','Estrutural Total','Fundação'] },
    { group: 'Obra', name: 'enderecoImovel',  label: 'Endereço do imóvel', type: 'text' },
  ],
  construcao_reforma_nao_estrutural: [
    { group: 'Obra', name: 'descricao', label: 'Descrição dos trabalhos', type: 'textarea' },
    { group: 'Obra', name: 'enderecoImovel', label: 'Endereço do imóvel', type: 'text' },
  ],
  imoveis_rurais: [
    { group: 'Imóvel', name: 'areaHa',     label: 'Área (ha)', type: 'number' },
    { group: 'Imóvel', name: 'finalidade', label: 'Finalidade', type: 'select',
      options: ['Pecuária','Agrícola','Turismo Rural'] },
  ],
  quitacao_fin_imovel: [
    { group: 'Financiamento', name: 'saldoDevedor', label: 'Saldo devedor atual (R$)', type: 'number', required: true },
    { group: 'Financiamento', name: 'banco',        label: 'Banco / Financeira',       type: 'text' },
    { group: 'Financiamento', name: 'prazoRestante',label: 'Prazo restante (meses)',   type: 'number' },
  ],

  /* ----- AGRO ----- */
  trator_agricola: [
    { group: 'Máquina', name: 'potenciaCv', label: 'Potência (CV)', type: 'number' },
    { group: 'Máquina', name: 'marcaModelo', label: 'Marca / Modelo', type: 'text' },
  ],
  trator_emplacamento: [
    { group: 'Máquina', name: 'potenciaCv',        label: 'Potência (CV)', type: 'number' },
    { group: 'Máquina', name: 'municipioPlaca',    label: 'Município de emplacamento', type: 'text' },
  ],
  rebanho: [
    { group: 'Rebanho', name: 'tipoRebanho',  label: 'Tipo de rebanho', type: 'select',
      options: ['Bovino','Suíno','Ovino','Caprino'] },
    { group: 'Rebanho', name: 'quantidade',   label: 'Quantidade de animais', type: 'number' },
    { group: 'Rebanho', name: 'finalidade',   label: 'Finalidade', type: 'select',
      options: ['Corte','Leite','Reprodução'] },
  ],
  maquinas_equipamentos_agro: [
    { group: 'Equipamento', name: 'tipoEquipamento', label: 'Tipo de equipamento', type: 'text' },
    { group: 'Equipamento', name: 'marcaModelo',     label: 'Marca / Modelo',      type: 'text' },
    { group: 'Equipamento', name: 'anoFabricacao',   label: 'Ano de fabricação',   type: 'number' },
  ],

  /* ----- SERVIÇOS E LAZER ----- */
  computador_gamer: [
    { group: 'Equipamento', name: 'finalidadeUso', label: 'Finalidade de uso', type: 'select',
      options: ['Jogos','Design','Programação'] },
    { group: 'Equipamento', name: 'cpu',           label: 'CPU desejado',       type: 'text' },
    { group: 'Equipamento', name: 'ramGb',         label: 'RAM (GB)',           type: 'number' },
    { group: 'Equipamento', name: 'gpu',           label: 'Placa de vídeo',     type: 'text' },
  ],
  bicicleta_eletrica: [
    { group: 'Bike', name: 'autonomiaKm', label: 'Autonomia (km)', type: 'number' },
    { group: 'Bike', name: 'marcaModelo', label: 'Marca / Modelo', type: 'text' },
  ],
  bicicleta: [
    { group: 'Bike', name: 'tipoBike',    label: 'Tipo de bicicleta', type: 'select',
      options: ['MTB','Speed','Urbana','Gravel'] },
    { group: 'Bike', name: 'marcaModelo', label: 'Marca / Modelo',   type: 'text' },
  ],
  viagens_festa: [
    { group: 'Evento', name: 'tipoDespesa',   label: 'Tipo',   type: 'select',
      options: ['Viagem','Festa','Lua de Mel'] },
    { group: 'Evento', name: 'destinoEvento', label: 'Destino / Local', type: 'text' },
    { group: 'Evento', name: 'dataPrevista',  label: 'Data prevista', type: 'date' },
    { group: 'Evento', name: 'numeroPessoas', label: 'Número de pessoas', type: 'number' },
  ],
  painel_solar: [
    { group: 'Energia', name: 'capacidadeKwp',  label: 'Capacidade (kWp)', type: 'number' },
    { group: 'Energia', name: 'tipoInstalacao', label: 'Tipo de instalação', type: 'select',
      options: ['Residencial','Comercial','Industrial'] },
    { group: 'Energia', name: 'localInstalacao',label: 'Local da instalação', type: 'text' },
  ],
  smartphone_eletronicos: [
    { group: 'Eletrônico', name: 'categoriaEletronico', label: 'Categoria', type: 'select',
      options: ['Smartphone','Notebook','Tablet','Console'] },
    { group: 'Eletrônico', name: 'marcaModelo',         label: 'Marca / Modelo', type: 'text' },
  ],
  servicos: [
    { group: 'Serviço', name: 'tipoServico',   label: 'Tipo de serviço', type: 'text' },
    { group: 'Serviço', name: 'dataPrevista',  label: 'Data prevista',   type: 'date' },
  ],
}

/* 5. Monta a ficha completa por tipo ------------------------------ */
export const camposConsorcio: Record<string, Field[]> = Object.fromEntries(
  tiposConsorcio.map(t => [
    t.id,
    [
      ...DADOS_PESSOAIS,
      ...BASE_DETALHES,
      ...(ESPECIFICOS[t.id] ?? []),
    ],
  ])
)

/* 6. Agrupamento por categoria (útil para menu) ------------------- */
export const gruposConsorcio = tiposConsorcio.reduce<Record<string, typeof tiposConsorcio[number][]>>(
  (acc, tipo) => {
    (acc[tipo.grupo] ||= []).push(tipo)
    return acc
  },
  {}
)

/* 7. Config final para <FormPopup> ou similares ------------------- */
export const formsConfigConsorcio: Record<string, ProductForm> = Object.fromEntries(
  tiposConsorcio.map(t => [
    t.id,
    {
      title: `Cotação de Consórcio – ${t.nome}`,
      description: 'Preencha para receber sua simulação personalizada.',
      fields: camposConsorcio[t.id],
    },
  ])
)
