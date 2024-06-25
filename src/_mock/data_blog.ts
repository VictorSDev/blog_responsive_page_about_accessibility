type AcessibilityInfosType = {
  data: string
}[]
export function Info() {
  const AcessibilityPrinciples: AcessibilityInfosType = [
    {
      data: 'Perceptível (Perceivable): A informação e os componentes da interface do usuário devem ser apresentados de maneira que possam ser percebidos por todos os usuários. Isso inclui fornecer alternativas textuais para conteúdo não textual, criar conteúdo que possa ser apresentado de diferentes maneiras (por exemplo, visual, auditiva), e tornar mais fácil para os usuários verem e ouvirem o conteúdo.',
    },
    {
      data: 'Operável (Operable): Os componentes da interface do usuário e a navegação devem ser operáveis. Isto significa que todas as funcionalidades devem estar disponíveis a partir do teclado, que os usuários devem ter tempo suficiente para ler e usar o conteúdo, e que o conteúdo não deve provocar crises epilépticas ou reações físicas adversas.',
    },
    {
      data: 'Compreensível (Understandable): A informação e a operação da interface do usuário devem ser compreensíveis. Os textos devem ser legíveis e compreensíveis, o conteúdo deve aparecer e operar de maneiras previsíveis, e os erros de entrada devem ser evitados ou facilmente corrigidos.',
    },
    {
      data: 'Robusto (Robust): O conteúdo deve ser robusto o suficiente para que possa ser interpretado de forma confiável por uma ampla variedade de agentes de usuário, incluindo tecnologias assistivas. Isso requer a utilização correta de padrões web para garantir que o conteúdo permaneça acessível à medida que as tecnologias avançam.',
    },
  ]

  const AcessibilityGuidelines: AcessibilityInfosType = [
    {
      data: 'WCAG 2.1: Como mencionado, esta é a diretriz central, oferecendo critérios de sucesso em três níveis de conformidade: A (mínimo), AA (aceitável), e AAA (ótimo).',
    },
    {
      data: 'ARIA (Accessible Rich Internet Applications): Conjunto de atributos que pode ser adicionado ao HTML para tornar o conteúdo web mais acessível, especialmente para usuários de leitores de tela.',
    },
    {
      data: 'Section 508: Um padrão dos Estados Unidos que exige que todos os sites e aplicativos governamentais sejam acessíveis a pessoas com deficiência.',
    },
    {
      data: 'ISO/IEC 40500: Reconhece a WCAG 2.0 como um padrão internacional para acessibilidade web.',
    },
  ]

  const AcessibilityImplementation: AcessibilityInfosType = [
    {
      data: 'Design Responsivo: Garantir que o site funcione bem em todos os dispositivos e tamanhos de tela.',
    },
    {
      data: 'Uso Adequado de Cabeçalhos e Estruturas: Utilizar uma estrutura lógica e clara com títulos e subtítulos para facilitar a navegação.',
    },
    {
      data: 'Texto Alternativo: Fornecer descrições textuais para imagens, gráficos e outros elementos não textuais.',
    },
    {
      data: 'Contraste de Cores: Usar combinações de cores que ofereçam contraste suficiente para que o texto seja legível.',
    },
    {
      data: 'Teclado Navegável: Garantir que todas as funcionalidades do site possam ser acessadas através do teclado.',
    },
    {
      data: 'Testes de Acessibilidade: Realizar testes regulares com ferramentas de validação e com usuários reais que tenham deficiências.',
    },
  ]

  return {
    AcessibilityPrinciples,
    AcessibilityGuidelines,
    AcessibilityImplementation,
  }
}
