import { Info } from '@/_mock/data_blog'

export default function Home() {
  const {
    AcessibilityGuidelines,
    AcessibilityImplementation,
    AcessibilityPrinciples,
  } = Info()

  return (
    <>
      <header>
        <h1 className="font-bold text-lg">
          Acessibilidade em Sites Web: Uma Questão de Inclusão e Usabilidade
        </h1>
      </header>
      <div className="pt-10 space-y-3 text-justify">
        <p>
          A acessibilidade em sites web é um aspecto fundamental para garantir
          que todas as pessoas, independentemente de suas habilidades ou
          limitações, possam acessar e interagir com as informações e serviços
          disponíveis na internet. Este conceito não apenas promove a inclusão
          digital, mas também melhora a usabilidade geral dos sites para todos
          os usuários. Aqui, exploraremos a importância da acessibilidade, os
          principais princípios a serem seguidos e as diretrizes e normas
          existentes.
        </p>
        <h2 className="font-semibold">Importância da Acessibilidade</h2>
        <p>
          A internet é uma ferramenta essencial no mundo moderno, utilizada para
          educação, trabalho, entretenimento, serviços públicos e comunicação.
          No entanto, pessoas com deficiências visuais, auditivas, motoras ou
          cognitivas frequentemente enfrentam barreiras que dificultam ou
          impedem o acesso a essas informações e serviços. A acessibilidade web
          visa remover essas barreiras, proporcionando igualdade de
          oportunidades e permitindo que todos os usuários naveguem, interajam e
          colaborem na web de maneira eficiente e independente.
        </p>
        <p>
          Além do aspecto social e inclusivo, sites acessíveis também trazem
          benefícios comerciais. Eles tendem a ter melhor desempenho em
          mecanismos de busca, alcançar um público mais amplo, e melhorar a
          experiência do usuário, o que pode aumentar a taxa de retenção e
          satisfação dos visitantes.
        </p>
        <h2 className="font-semibold">Princípios de Acessibilidade</h2>
        <p>
          Os princípios de acessibilidade web são guiados principalmente pelas
          Diretrizes de Acessibilidade para Conteúdo Web (WCAG), desenvolvidas
          pelo World Wide Web Consortium (W3C). As WCAG 2.1, a versão mais
          recente, são organizadas em torno de quatro princípios fundamentais,
          conhecidos pelo acrônimo POUR:
        </p>
        <ol className="list-decimal list-inside pl-4 space-y-3">
          {AcessibilityPrinciples.map(({ data }, i) => (
            <li key={i}>{data}</li>
          ))}
        </ol>
        <h2 className="font-semibold">Diretrizes e Normas</h2>
        <p>
          Para implementar esses princípios, os desenvolvedores devem seguir um
          conjunto específico de diretrizes e normas técnicas, tais como:
        </p>
        <ol className="list-disc list-inside pl-4 space-y-3">
          {AcessibilityGuidelines.map(({ data }, i) => (
            <li key={i}>{data}</li>
          ))}
        </ol>
        <h2 className="font-semibold">Implementação de Acessibilidade</h2>
        <p>
          Implementar acessibilidade web envolve várias etapas, desde o
          planejamento até a manutenção contínua. Algumas práticas recomendadas
          incluem:
        </p>
        <ol className="list-disc list-inside pl-4 space-y-3">
          {AcessibilityImplementation.map(({ data }, i) => (
            <li key={i}>{data}</li>
          ))}
        </ol>
        <h2 className="font-semibold">Conclusão</h2>
        <p>
          A acessibilidade em sites web é essencial para promover a inclusão
          digital e garantir que todos os usuários tenham acesso igualitário à
          informação e aos serviços disponíveis online. Seguindo princípios e
          diretrizes estabelecidos, e implementando práticas recomendadas,
          desenvolvedores e designers podem criar sites que são não apenas
          acessíveis, mas também mais funcionais e agradáveis para todos os
          usuários. Ao priorizar a acessibilidade, estamos construindo uma
          internet mais justa e equitativa para todos.
        </p>
      </div>
    </>
  )
}
