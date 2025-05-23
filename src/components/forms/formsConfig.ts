// src/components/forms/formsConfig.ts


export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'date'
  | 'select'
  | 'checkbox'
  | 'textarea'

export interface Field {
  name: string
  label: string
  type: FieldType
  required?: boolean
  options?: string[]         // apenas para select
  group?: string             // para agrupar em fieldsets/abas, se quiser
}

export interface ProductForm {
  title: string
  description?: string
  fields: Field[]
}
/* ---------- Núcleo compartilhado de RC ---------- */
const RC_CORE = [
  { group: 'Profissional', name: 'nome',  label: 'Nome completo', type: 'text',  required: true },
  { group: 'Profissional', name: 'cpf',   label: 'CPF',           type: 'text',  required: true },
  { group: 'Profissional', name: 'conselho', label: 'Registro (CRM/OAB/CREA…) ', type: 'text', required: true },
  { group: 'Contato',      name: 'telefone', label: 'Telefone',   type: 'tel',   required: true },
  { group: 'Contato',      name: 'email',    label: 'E-mail',     type: 'email', required: true },
  { group: 'Cobertura',    name: 'limiteDesejado', label: 'Limite de indenização (R$)', type: 'number', required: true },
  { group: 'Histórico',    name: 'sinistros5anos', label: 'Processos nos últimos 5 anos?', type: 'checkbox' },
] as const;


export const formsConfig: Record<string, ProductForm> = {
 /* ---------------- VIDA ---------------- */
vida: {
  title: 'Cotação de Seguro de Vida',
  description: 'Proteção financeira para você e sua família.',
  fields: [
    { group: 'Pessoais', name: 'nomeCompleto', label: 'Nome completo', type: 'text', required: true },
    { group: 'Pessoais', name: 'cpf', label: 'CPF', type: 'text', required: true },
    { group: 'Pessoais', name: 'dataNascimento', label: 'Data de nascimento', type: 'date', required: true },
    { group: 'Pessoais', name: 'sexo', label: 'Sexo', type: 'select', options: ['Masculino', 'Feminino', 'Outro'] },
    { group: 'Pessoais', name: 'estadoCivil', label: 'Estado civil', type: 'select', options: ['Solteiro(a)', 'Casado(a)', 'Outros'] },
    { group: 'Pessoais', name: 'escolaridade', label: 'Escolaridade', type: 'select', options: ['Fundamental', 'Médio', 'Superior', 'Pós-graduação'] },
    { group: 'Profissional', name: 'profissao', label: 'Profissão', type: 'text', required: true },
    { group: 'Profissional', name: 'rendaMensal', label: 'Renda mensal (R$)', type: 'number', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
    { group: 'Cobertura', name: 'capitalSegurado', label: 'Capital segurado desejado (R$)', type: 'number' },
    { group: 'Saúde', name: 'fumante', label: 'Fumante?', type: 'checkbox' },
    { group: 'Saúde', name: 'doencasCronicas', label: 'Possui doenças crônicas?', type: 'checkbox' },
    { group: 'Saúde', name: 'altura', label: 'Altura (cm)', type: 'number' },
    { group: 'Saúde', name: 'peso', label: 'Peso (kg)', type: 'number' },
    { group: 'Observações', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* ---------------- EMPRESARIAL ---------------- */
empresarial: {
  title: 'Cotação de Seguro Empresarial',
  description: 'Proteção patrimonial completa para o seu negócio.',
  fields: [
    { group: 'Empresa', name: 'razaoSocial', label: 'Razão social', type: 'text', required: true },
    { group: 'Empresa', name: 'cnpj', label: 'CNPJ', type: 'text', required: true },
    { group: 'Empresa', name: 'ramoAtividade', label: 'Ramo de atividade', type: 'text', required: true },
    { group: 'Empresa', name: 'faturamentoMensal', label: 'Faturamento mensal (R$)', type: 'number' },
    { group: 'Contato', name: 'responsavel', label: 'Nome do responsável', type: 'text', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
    { group: 'Imóvel', name: 'tipoImovel', label: 'Tipo de imóvel', type: 'select', options: ['Próprio', 'Alugado'] },
    { group: 'Imóvel', name: 'areaConstruida', label: 'Área construída (m²)', type: 'number' },
    { group: 'Imóvel', name: 'valorImovel', label: 'Valor aproximado do imóvel (R$)', type: 'number' },
    { group: 'Imóvel', name: 'possuiSistemaIncendio', label: 'Sistema de incêndio?', type: 'checkbox' },
    { group: 'Cobertura', name: 'valorTotalSeguro', label: 'Capital segurado desejado (R$)', type: 'number' },
    { group: 'Cobertura', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* --------- TRANSPORTES ---------- */
transportes: {
  title: 'Cotação de Seguro de Transportes',
  description: 'Para mercadorias transportadas por rodovias, ferrovias, navios ou aeronaves.',
  fields: [
    /* DADOS DA EMPRESA */
    { group: 'Empresa', name: 'razaoSocial', label: 'Razão social', type: 'text', required: true },
    { group: 'Empresa', name: 'cnpj', label: 'CNPJ', type: 'text', required: true },
    { group: 'Empresa', name: 'ramoAtividade', label: 'Ramo de atividade', type: 'text', required: true },
    { group: 'Empresa', name: 'cep', label: 'CEP', type: 'text' },

    /* CONTATO */
    { group: 'Contato', name: 'responsavel', label: 'Nome do responsável', type: 'text', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },

    /* OPERAÇÃO */
    { group: 'Operação', name: 'modalidadeApolice', label: 'Modalidade da apólice', type: 'select',
      options: ['Averbação mensal', 'Viagem avulsa', 'Anual com prêmio único'], required: true },
    { group: 'Operação', name: 'tipoTransporte', label: 'Modal de transporte', type: 'select',
      options: ['Rodoviário','Ferroviário','Aéreo','Marítimo'], required: true },
    { group: 'Operação', name: 'tipoMercadoria', label: 'Tipo de mercadoria', type: 'text', required: true },
    { group: 'Operação', name: 'valorMedioViagem', label: 'Valor médio por viagem (R$)', type: 'number', required: true },
    { group: 'Operação', name: 'lmiDesejado', label: 'Limite Máx. Indenização (LMI) por embarque (R$)', type: 'number', required: true },
    { group: 'Operação', name: 'frequencia', label: 'Frequência', type: 'select',
      options: ['Diária','Semanal','Mensal','Sazonal'], required: true },
    { group: 'Operação', name: 'origemDestino', label: 'Origem / Destino', type: 'text', required: true },
    { group: 'Operação', name: 'possuiRastreamento', label: 'Possui rastreamento/escolta?', type: 'checkbox' },

    /* OBS */
    { group: 'Observações', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* --------- FIANÇA LOCATÍCIA ---------- */
fianca: {
  title: 'Cotação de Fiança Locatícia',
  description: 'Substitua o fiador e alugue com segurança.',
  fields: [
    /* LOCATÁRIO */
    { group: 'Locatário', name: 'nome', label: 'Nome completo', type: 'text', required: true },
    { group: 'Locatário', name: 'cpf', label: 'CPF', type: 'text', required: true },
    { group: 'Locatário', name: 'dataNascimento', label: 'Data de nascimento', type: 'date', required: true },
    { group: 'Locatário', name: 'profissao', label: 'Profissão', type: 'text' },
    { group: 'Locatário', name: 'renda', label: 'Renda mensal (R$)', type: 'number', required: true },
    { group: 'Locatário', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Locatário', name: 'email', label: 'E-mail', type: 'email', required: true },

    /* IMÓVEL */
    { group: 'Imóvel', name: 'tipoImovel', label: 'Tipo de imóvel', type: 'select',
      options: ['Residencial','Comercial não residencial','Sala em shopping','Built-to-Suit'], required: true },
    { group: 'Imóvel', name: 'valorAluguel', label: 'Aluguel mensal (R$)', type: 'number', required: true },
    { group: 'Imóvel', name: 'condominioIptu', label: 'Condomínio + IPTU (R$)', type: 'number' },
    { group: 'Imóvel', name: 'prazoLocacao', label: 'Prazo desejado', type: 'text', required: true },

    /* OBS */
    { group: 'Observações', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* --------- GARANTIA ---------- */
garantia: {
  title: 'Cotação de Seguro Garantia',
  description: 'Para contratos, licitações e obrigações legais da sua empresa.',
  fields: [
    /* EMPRESA */
    { group: 'Empresa', name: 'razaoSocial', label: 'Razão social', type: 'text', required: true },
    { group: 'Empresa', name: 'cnpj', label: 'CNPJ', type: 'text', required: true },
    { group: 'Empresa', name: 'ramoAtividade', label: 'Ramo de atividade', type: 'text', required: true },
    { group: 'Empresa', name: 'faturamentoAnual', label: 'Faturamento anual (R$)', type: 'number', required: true },
    { group: 'Empresa', name: 'telefone', label: 'Telefone', type: 'tel' },
    { group: 'Empresa', name: 'email', label: 'E-mail', type: 'email' },

    /* GARANTIA */
    { group: 'Garantia', name: 'tipoGarantia', label: 'Tipo de garantia', type: 'select',
      options: ['Garantia Contratual','Garantia Judicial','Garantia de Licitação','Outros'], required: true },
    { group: 'Garantia', name: 'contratante', label: 'Órgão/empresa contratante', type: 'text', required: true },
    { group: 'Garantia', name: 'descricaoContrato', label: 'Descrição do contrato', type: 'text', required: true },
    { group: 'Garantia', name: 'valorContrato', label: 'Valor do contrato (R$)', type: 'number', required: true },
    { group: 'Garantia', name: 'valorGarantia', label: 'Valor da garantia (R$)', type: 'number', required: true },
    { group: 'Garantia', name: 'percentualGarantia', label: 'Percentual da garantia (%)', type: 'number' },
    { group: 'Garantia', name: 'prazoExecucao', label: 'Prazo de execução', type: 'text', required: true },

    /* OBS */
    { group: 'Observações', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* ---------------- VIAGEM ---------------- */
viagem: {
  title: 'Cotação de Seguro Viagem',
  description: 'Cobertura médica e assistência global.',
  fields: [
    { group: 'Viajante', name: 'nome', label: 'Nome completo', type: 'text', required: true },
    { group: 'Viajante', name: 'cpf', label: 'CPF', type: 'text', required: true },
    { group: 'Viajante', name: 'dataNascimento', label: 'Data de nascimento', type: 'date', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
    { group: 'Viagem', name: 'origem', label: 'Origem', type: 'text', required: true },
    { group: 'Viagem', name: 'destino', label: 'Destino', type: 'text', required: true },
    { group: 'Viagem', name: 'dataInicio', label: 'Data de embarque', type: 'date', required: true },
    { group: 'Viagem', name: 'dataFim', label: 'Data de retorno', type: 'date', required: true },
    { group: 'Viagem', name: 'finalidade', label: 'Finalidade', type: 'select',
      options: ['Turismo', 'Negócios', 'Estudos', 'Outros'] },
    { group: 'Observações', name: 'observacoes', label: 'Observações', type: 'textarea' },
  ],
},

/* ---------------- RESIDENCIAL ---------------- */
residencial: {
  title: 'Cotação de Seguro Residencial',
  description: 'Proteção completa para casas e apartamentos.',
  fields: [
    { group: 'Proprietário', name: 'nome', label: 'Nome completo', type: 'text', required: true },
    { group: 'Proprietário', name: 'cpf', label: 'CPF', type: 'text', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
    { group: 'Imóvel', name: 'uso', label: 'Uso do imóvel', type: 'select',
      options: ['Habitual', 'Veraneio', 'Locado'], required: true },
    { group: 'Imóvel', name: 'valorImovel', label: 'Valor do imóvel (R$)', type: 'number', required: true },
    { group: 'Imóvel', name: 'cep', label: 'CEP', type: 'text', required: true },
    { group: 'Cobertura', name: 'capitalIncendio', label: 'Capital para incêndio (R$)', type: 'number', required: true },
    { group: 'Cobertura', name: 'desejaAssistencia', label: 'Assistência 24h?', type: 'checkbox' },
  ],
},

/* ---------------- CONDOMÍNIO ---------------- */
condominio: {
  title: 'Cotação de Seguro Condomínio',
  description: 'Proteção obrigatória para áreas comuns e estrutura predial.',
  fields: [
    { group: 'Condomínio', name: 'nomeCondominio', label: 'Nome do condomínio', type: 'text', required: true },
    { group: 'Condomínio', name: 'cnpj', label: 'CNPJ', type: 'text' },
    { group: 'Condomínio', name: 'tipo', label: 'Tipo', type: 'select',
      options: ['Residencial', 'Comercial', 'Misto'], required: true },
    { group: 'Condomínio', name: 'numeroUnidades', label: 'Nº de unidades', type: 'number', required: true },
    { group: 'Condomínio', name: 'areaConstruida', label: 'Área construída (m²)', type: 'number' },
    { group: 'Contato', name: 'sindico', label: 'Nome do síndico', type: 'text', required: true },
    { group: 'Contato', name: 'telefone', label: 'Telefone', type: 'tel', required: true },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
  ],
},

/* ---------------- AUTO ---------------- */
auto: {
  title: 'Cotação de Seguro Auto',
  description: 'Proteção completa para automóveis.',
  fields: [
    { group: 'Veículo', name: 'placa', label: 'Placa', type: 'text', required: true },
    { group: 'Veículo', name: 'anoModelo', label: 'Ano/Modelo', type: 'number', required: true },
    { group: 'Veículo', name: 'valorVeiculo', label: 'Valor de tabela (R$)', type: 'number' },
    { group: 'Perfil', name: 'nomeCondutor', label: 'Nome do principal condutor', type: 'text', required: true },
    { group: 'Perfil', name: 'cpfCondutor', label: 'CPF do condutor', type: 'text', required: true },
    { group: 'Perfil', name: 'idade', label: 'Idade do condutor', type: 'number', required: true },
    { group: 'Perfil', name: 'sexo', label: 'Sexo', type: 'select', options: ['Masculino','Feminino','Outro'] },
    { group: 'Uso', name: 'usoVeiculo', label: 'Uso do veículo', type: 'select',
      options: ['Particular','Trabalho','Aplicativo','Frota'] },
    { group: 'Cobertura', name: 'coberturaDesejada', label: 'Cobertura desejada', type: 'select',
      options: ['Compreensiva','Roubo/furto','Terceiros','APP'] },
  ],
},

/* ---------------- MOTOS ---------------- */
motos: {
  title: 'Cotação de Seguro Motos',
  description: 'Proteção para motocicletas de uso pessoal ou profissional.',
  fields: [
    { group: 'Moto', name: 'placa', label: 'Placa', type: 'text', required: true },
    { group: 'Moto', name: 'anoModelo', label: 'Ano/Modelo', type: 'number', required: true },
    { group: 'Perfil', name: 'nomeCondutor', label: 'Nome do condutor', type: 'text', required: true },
    { group: 'Perfil', name: 'idade', label: 'Idade', type: 'number', required: true },
    { group: 'Perfil', name: 'experiencia', label: 'Tempo de carteira (anos)', type: 'number' },
    { group: 'Uso', name: 'usoMoto', label: 'Uso da moto', type: 'select',
      options: ['Particular','Trabalho','Delivery'], required: true },
    { group: 'Cobertura', name: 'coberturaDesejada', label: 'Cobertura desejada', type: 'select',
      options: ['Compreensiva','Roubo/furto','Terceiros','APP'] },
  ],
},

/* ---------------- CYBER ---------------- */
cyber: {
  title: 'Cotação de Seguro Cyber',
  description: 'Protege contra vazamentos de dados e ataques virtuais.',
  fields: [
    { group: 'Empresa', name: 'razaoSocial', label: 'Razão social', type: 'text', required: true },
    { group: 'Empresa', name: 'cnpj', label: 'CNPJ', type: 'text', required: true },
    { group: 'Tecnologia', name: 'segmentoTI', label: 'Possui TI interna ou terceirizada?', type: 'select',
      options: ['Interna','Terceirizada','Mista'] },
    { group: 'Tecnologia', name: 'dadosSensiveis', label: 'Armazena dados sensíveis?', type: 'checkbox' },
    { group: 'Tecnologia', name: 'faturamentoAnual', label: 'Faturamento anual (R$)', type: 'number', required: true },
    { group: 'Cobertura', name: 'capitalDesejado', label: 'Limite de indenização (R$)', type: 'number', required: true },
    { group: 'Cobertura', name: 'incidentesAnteriores', label: 'Já sofreu ataque nos últimos 3 anos?', type: 'checkbox' },
    { group: 'Contato', name: 'responsavelTI', label: 'Responsável TI', type: 'text' },
    { group: 'Contato', name: 'email', label: 'E-mail', type: 'email', required: true },
  ],
},


/* ---------- Médico ---------- */
rc_medico: {
  title: 'RC Profissional — Médico',
  description: 'Responsabilidade Civil Profissional para médicos e clínicas.',
  fields: [
    ...RC_CORE,
    { group:'Médico', name:'especialidade',  label:'Especialidade', type:'select',
      options:['Clínico','Ortopedia','Ginecologia','Dermato','Outras'], required: true },
    { group:'Médico', name:'procedimentosMes', label:'Procedimentos/mês', type:'number' },
  ],
},

/* ---------- Advogado ---------- */
rc_advogado: {
  title: 'RC Profissional — Advogado',
  description: 'Responsabilidade Civil Profissional para advogados.',
  fields: [
    ...RC_CORE,
    { group:'Advogado', name:'areaAtuacao', label:'Área de atuação', type:'select',
      options:['Cível','Trabalhista','Tributário','Penal','Outras'], required: true },
  ],
},

/* ---------- Engenheiro / Arquiteto ---------- */
rc_engenheiro: {
  title: 'RC Profissional — Engenheiro/Arquiteto',
  description: 'Cobertura para atividades de engenharia e arquitetura.',
  fields: [
    ...RC_CORE,
    { group:'Engenharia', name:'tipoObra', label:'Tipo de obra', type:'select',
      options:['Estrutural','Elétrica','Saneamento','Reforma'], required: true },
    { group:'Engenharia', name:'valorContratoMax', label:'Maior contrato (R$)', type:'number' },
  ],
},

/* ---------- Contador ---------- */
rc_contador: {
  title: 'RC Profissional — Contador',
  description: 'Proteção para profissionais de contabilidade.',
  fields: [
    ...RC_CORE,
    { group:'Contador', name:'empresasAtendidas', label:'Nº de empresas atendidas', type:'number' },
  ],
},

/* ---------- TI / Software ---------- */
rc_ti: {
  title: 'RC Profissional — TI / Software',
  description: 'Cobertura E&O para desenvolvedores e consultorias de TI.',
  fields: [
    ...RC_CORE,
    { group:'TI', name:'tipoSistema', label:'Tipo de sistema', type:'select',
      options:['Financeiro','E-commerce','Saúde','Outros'], required: true },
    { group:'TI', name:'slaContratual', label:'SLA contratual (horas)', type:'number' },
  ],
},

/* ---------- RC Corretor de Imóveis ---------- */
rc_corretores_imoveis: {
  title: 'RC Profissional — Corretor de Imóveis',
  description: 'Responsabilidade Civil para corretores e imobiliárias.',
  fields: [
    ...RC_CORE,
    { group:'Corretor', name:'creci',   label:'CRECI/UF',          type:'text', required:true },
    { group:'Corretor', name:'qtdeTransacoes', label:'Transações/ano', type:'number' },
  ],
},

/* ---------- RC Veterinário ---------- */
rc_veterinarios: {
  title: 'RC Profissional — Veterinário',
  description: 'Cobertura para clínicas e profissionais de veterinária.',
  fields: [
    ...RC_CORE,
    { group:'Veterinário', name:'crmv', label:'CRMV/UF', type:'text', required:true },
    { group:'Veterinário', name:'tipoAtuacao', label:'Tipo de atuação', type:'select',
      options:['Clínico geral','Cirurgião','Silvestres','Grandes animais','Outros'], required:true },
  ],
},

/* ---------- RC Nutricionista ---------- */
rc_nutricionistas: {
  title: 'RC Profissional — Nutricionista',
  description: 'Cobertura para consultórios e profissionais de nutrição.',
  fields: [
    ...RC_CORE,
    { group:'Nutricionista', name:'crn',  label:'CRN/UF', type:'text', required:true },
    { group:'Nutricionista', name:'publicoAlvo', label:'Público-alvo principal', type:'select',
      options:['Clínica geral','Esportiva','Hospitalar','Estética','Outros'] },
  ],
},

/* ---------- RC Arquiteto ---------- */
rc_arquitetos: {
  title: 'RC Profissional — Arquiteto',
  description: 'Responsabilidade Civil para projetos e obras de arquitetura.',
  fields: [
    ...RC_CORE,
    { group:'Arquiteto', name:'cau', label:'CAU/UF', type:'text', required:true },
    { group:'Arquiteto', name:'tipoProjeto', label:'Tipo de projeto predominante', type:'select',
      options:['Residencial','Comercial','Corporativo','Urbanístico','Interiores'] },
  ],
},

/* ---------- RC Dentista ---------- */
rc_dentistas: {
  title: 'RC Profissional — Dentista',
  description: 'Cobertura para consultórios e clínicas odontológicas.',
  fields: [
    ...RC_CORE,
    { group:'Dentista', name:'cro', label:'CRO/UF', type:'text', required:true },
    { group:'Dentista', name:'especialidade', label:'Especialidade', type:'select',
      options:['Clínico geral','Ortodontia','Implantodontia','Endodontia','Estética','Outras'], required:true },
  ],
},

/* ---------- RC Psicólogo ---------- */
rc_psicologos: {
  title: 'RC Profissional — Psicólogo',
  description: 'Proteção para profissionais de psicologia clínica e organizacional.',
  fields: [
    ...RC_CORE,
    { group:'Psicólogo', name:'crp', label:'CRP/UF', type:'text', required:true },
    { group:'Psicólogo', name:'abordagem', label:'Abordagem principal', type:'text' },
  ],
},

/* ---------- RC Enfermeiro ---------- */
rc_enfermeiros: {
  title: 'RC Profissional — Enfermeiro',
  description: 'Cobertura de responsabilidade civil para enfermagem.',
  fields: [
    ...RC_CORE,
    { group:'Enfermeiro', name:'coren', label:'COREN/UF', type:'text', required:true },
    { group:'Enfermeiro', name:'areaAtuacao', label:'Área de atuação', type:'select',
      options:['Hospitalar','Home care','Clínica','UTI','Obstetrícia','Outras'] },
  ],
},


/* -------------------------------------------------------------------------- */
/* FINANCIAMENTOS / CRÉDITO                                                   */
/* -------------------------------------------------------------------------- */

  /* === 1. CAR EQUITY ===================================================== */
  car_equity: {
    title: 'Car Equity – Crédito com Garantia de Veículo',
    description:
      'Use seu carro como garantia e libere dinheiro rápido com juros mais baixos.',
    fields: [
      { group: 'Dados pessoais', name: 'nome',      label: 'Nome completo',                           type: 'text',    required: true },
      { group: 'Dados pessoais', name: 'cpf',       label: 'CPF',                                     type: 'text',    required: true },
      { group: 'Dados pessoais', name: 'email',     label: 'E-mail',                                  type: 'email',   required: true },
      { group: 'Dados pessoais', name: 'telefone',  label: 'Telefone / WhatsApp',                     type: 'tel',     required: true },

      { group: 'Veículo',        name: 'marca',     label: 'Marca',                                   type: 'text',    required: true },
      { group: 'Veículo',        name: 'modelo',    label: 'Modelo',                                  type: 'text',    required: true },
      { group: 'Veículo',        name: 'ano',       label: 'Ano',                                     type: 'number',  required: true },
      { group: 'Veículo',        name: 'valorFipe', label: 'Valor FIPE (R$)',                         type: 'number',  required: true },

      { group: 'Crédito',        name: 'valorDesejado', label: 'Valor desejado (R$)',                 type: 'number',  required: true },
      { group: 'Crédito',        name: 'prazo',        label: 'Prazo desejado (meses)',               type: 'number',  required: true },

      { group: 'Observações',    name: 'observacoes', label: 'Observações adicionais',                type: 'textarea', required: false },
    ],
  },

  /* === 2. HOME EQUITY ==================================================== */
  home_equity: {
    title: 'Home Equity – Crédito com Garantia de Imóvel',
    description:
      'Use seu imóvel como garantia e contrate crédito com juros baixos e prazos longos.',
    fields: [
      { group: 'Dados pessoais', name: 'nome',        label: 'Nome completo',           type: 'text',    required: true },
      { group: 'Dados pessoais', name: 'cpf',         label: 'CPF',                     type: 'text',    required: true },
      { group: 'Dados pessoais', name: 'email',       label: 'E-mail',                  type: 'email',   required: true },
      { group: 'Dados pessoais', name: 'telefone',    label: 'Telefone / WhatsApp',     type: 'tel',     required: true },

      { group: 'Imóvel',         name: 'tipoImovel',  label: 'Tipo de imóvel',          type: 'select',  required: true,
        options: ['Casa', 'Apartamento', 'Terreno', 'Comercial'] },
      { group: 'Imóvel',         name: 'valorImovel', label: 'Valor de mercado (R$)',   type: 'number',  required: true },
      { group: 'Imóvel',         name: 'cidade',      label: 'Cidade do imóvel',        type: 'text',    required: true },
      { group: 'Imóvel',         name: 'estado',      label: 'Estado',                  type: 'text',    required: true },

      { group: 'Crédito',        name: 'valorDesejado', label: 'Valor desejado (R$)',   type: 'number',  required: true },
      { group: 'Crédito',        name: 'prazo',         label: 'Prazo desejado (meses)', type: 'number',  required: true },

      { group: 'Observações',    name: 'observacoes',   label: 'Observações adicionais', type: 'textarea', required: false },
    ],
  },

  /* === 3. FINANCIAMENTO IMOBILIÁRIO ===================================== */
  fin_imobiliario: {
    title: 'Financiamento Imobiliário',
    description:
      'Compre seu imóvel com as melhores taxas e prazos do mercado.',
    fields: [
      { group: 'Dados pessoais',  name: 'nome',          label: 'Nome completo',          type: 'text',    required: true },
      { group: 'Dados pessoais',  name: 'cpf',           label: 'CPF',                    type: 'text',    required: true },
      { group: 'Dados pessoais',  name: 'email',         label: 'E-mail',                 type: 'email',   required: true },
      { group: 'Dados pessoais',  name: 'telefone',      label: 'Telefone / WhatsApp',    type: 'tel',     required: true },
      { group: 'Dados pessoais',  name: 'rendaMensal',   label: 'Renda mensal (R$)',      type: 'number',  required: true },

      { group: 'Imóvel',          name: 'tipoImovel',    label: 'Tipo de imóvel',         type: 'select',  required: true,
        options: ['Novo', 'Usado', 'Na planta', 'Terreno + construção'] },
      { group: 'Imóvel',          name: 'valorImovel',   label: 'Valor do imóvel (R$)',   type: 'number',  required: true },
      { group: 'Imóvel',          name: 'entrada',       label: 'Valor de entrada (R$)',  type: 'number',  required: false },

      { group: 'Financiamento',   name: 'prazo',         label: 'Prazo (anos)',           type: 'number',  required: true },
      { group: 'Financiamento',   name: 'sistema',       label: 'Sistema de amortização', type: 'select',  required: true,
        options: ['SAC', 'PRICE'] },

      { group: 'Observações',     name: 'observacoes',   label: 'Observações adicionais', type: 'textarea', required: false },
    ],
  },

  /* === 4. FINANCIAMENTO DE VEÍCULOS ===================================== */
  fin_veiculos: {
    title: 'Financiamento de Veículos',
    description:
      'Crédito para carro, moto ou caminhão, novos ou usados, com aprovação rápida.',
    fields: [
      { group: 'Dados pessoais',  name: 'nome',        label: 'Nome completo',            type: 'text',    required: true },
      { group: 'Dados pessoais',  name: 'cpf',         label: 'CPF',                      type: 'text',    required: true },
      { group: 'Dados pessoais',  name: 'email',       label: 'E-mail',                   type: 'email',   required: true },
      { group: 'Dados pessoais',  name: 'telefone',    label: 'Telefone / WhatsApp',      type: 'tel',     required: true },

      { group: 'Veículo',         name: 'tipoVeiculo', label: 'Tipo de veículo',          type: 'select',  required: true,
        options: ['Carro', 'Moto', 'Caminhão'] },
      { group: 'Veículo',         name: 'valorVeiculo',label: 'Valor do veículo (R$)',    type: 'number',  required: true },
      { group: 'Veículo',         name: 'anoModelo',   label: 'Ano / Modelo',             type: 'text',    required: true },

      { group: 'Financiamento',   name: 'prazo',       label: 'Prazo (meses)',            type: 'number',  required: true },
      { group: 'Financiamento',   name: 'entrada',     label: 'Entrada (R$)',             type: 'number',  required: false },

      { group: 'Observações',     name: 'observacoes', label: 'Observações adicionais',   type: 'textarea', required: false },
    ],
  },

  /* === 5. MÁQUINAS & EQUIPAMENTOS ====================================== */
  maquinas_equipamentos: {
    title: 'Financiamento de Máquinas e Equipamentos',
    description:
      'Crédito para aquisição ou modernização de máquinas novas ou usadas.',
    fields: [
      { group: 'Empresa',       name: 'razaoSocial', label: 'Razão social',          type: 'text',    required: true },
      { group: 'Empresa',       name: 'cnpj',        label: 'CNPJ',                  type: 'text',    required: true },
      { group: 'Empresa',       name: 'telefone',    label: 'Telefone',              type: 'tel',     required: true },
      { group: 'Empresa',       name: 'email',       label: 'E-mail',                type: 'email',   required: true },

      { group: 'Equipamento',   name: 'descricao',   label: 'Descrição do bem',      type: 'text',    required: true },
      { group: 'Equipamento',   name: 'valor',       label: 'Valor do equipamento',  type: 'number',  required: true },
      { group: 'Equipamento',   name: 'novoUsado',   label: 'Novo ou usado?',        type: 'select',  required: true,
        options: ['Novo', 'Usado'] },

      { group: 'Financiamento', name: 'prazo',       label: 'Prazo desejado (meses)', type: 'number',  required: true },

      { group: 'Observações',   name: 'observacoes', label: 'Observações adicionais', type: 'textarea', required: false },
    ],
  },

  /* === 6. CAPITAL DE GIRO ============================================== */
  capital_giro: {
    title: 'Capital de Giro',
    description:
      'Crédito rápido para fluxo de caixa, estoque ou expansão do negócio.',
    fields: [
      { group: 'Empresa',       name: 'razaoSocial',   label: 'Razão social',           type: 'text',    required: true },
      { group: 'Empresa',       name: 'cnpj',          label: 'CNPJ',                   type: 'text',    required: true },
      { group: 'Empresa',       name: 'telefone',      label: 'Telefone',               type: 'tel',     required: true },
      { group: 'Empresa',       name: 'email',         label: 'E-mail',                 type: 'email',   required: true },
      { group: 'Empresa',       name: 'faturamento',   label: 'Faturamento mensal (R$)',type: 'number',  required: true },

      { group: 'Crédito',       name: 'valorDesejado', label: 'Valor desejado (R$)',    type: 'number',  required: true },
      { group: 'Crédito',       name: 'prazo',         label: 'Prazo (meses)',          type: 'number',  required: true },

      { group: 'Uso',           name: 'destino',       label: 'Destino do crédito',     type: 'select',  required: true,
        options: ['Fluxo de caixa', 'Estoque', 'Reforma/expansão', 'Outros'] },

      { group: 'Observações',   name: 'observacoes',   label: 'Observações adicionais', type: 'textarea', required: false },
    ],
  },






  
}




