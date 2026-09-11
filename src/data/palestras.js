const palestras = [
  // ---------------- 2024 ----------------
  {
    id: "criatividade-inovacao",
    ano: 2024,
    titulo: "Criatividade e Inovação: Um Desafio Constante",
    palestrante: "Eduardo Von",
    empresa: "Itix",
    data: "08/04/2024",
    resumo:
      "O palestrante abordou a importância da criatividade e da inovação como elementos essenciais para o desenvolvimento de soluções em um mercado de trabalho em constante transformação, destacando o pensamento criativo como necessidade para enfrentar desafios e gerar impacto real no ambiente profissional.",
    aprendizados: [
      "Criatividade é uma habilidade aplicável a qualquer contexto, não só às áreas artísticas.",
      "Inovação deve ser um processo contínuo: pequenas melhorias geram grandes impactos.",
      "Adaptação com criatividade é tão importante quanto o conhecimento técnico.",
      "Trocar ideias com pessoas de perfis diferentes amplia as soluções possíveis.",
      "Empresas que permitem errar e experimentar são as que mais evoluem.",
    ],
    reflexao:
      "A palestra reforçou que a criatividade não é um dom, mas uma habilidade que pode ser exercitada. Vou levar isso para os projetos acadêmicos e pessoais, buscando abraçar a mudança com um olhar mais criativo e menos receoso.",
  },
  {
    id: "ia-mercado-trabalho",
    ano: 2024,
    titulo: "As possibilidades da IA no mercado de trabalho",
    palestrante: "Guilherme Bastos",
    empresa: "Tegra",
    data: "23/05/2024",
    resumo:
      "Como utilizar a Inteligência Artificial no dia a dia profissional — do ChatGPT como assistente a ferramentas como o Gamma para slides e currículos — sempre revisando o que a IA produz.",
    aprendizados: [
      "A IA pode ser bem útil no dia a dia, desde que usada com sabedoria e revisão humana.",
      "Empresas já incorporam o ChatGPT e outras IAs em suas rotinas.",
    ],
  },
  {
    id: "management-3-0",
    ano: 2024,
    titulo: "Management 3.0",
    palestrante: null,
    empresa: "Eduzz",
    data: "27/05/2024",
    resumo:
      "Abordagem de gestão que coloca as pessoas no centro das decisões, criando um ambiente colaborativo em que todos se sentem valorizados e motivados a contribuir com ideias.",
    aprendizados: [
      "Esse modelo de gestão fortalece o engajamento da equipe e o bem-estar das pessoas.",
      "É uma prática cada vez mais valorizada dentro das empresas.",
    ],
  },
  {
    id: "hacker-do-bem",
    ano: 2024,
    titulo: "Hacker do bem e a segurança digital no dia a dia",
    palestrante: "Luiz Milagres",
    empresa: "Itix",
    data: "31/07/2024",
    resumo:
      "Formas práticas de se proteger de golpes virtuais e o papel do hacker do bem na proteção de dados e na construção de uma internet mais segura.",
    aprendizados: [
      "Criar senhas fortes.",
      "Não clicar em links estranhos.",
      "Manter os programas sempre atualizados.",
      "Usar um bom antivírus.",
      "O hacker do bem ajuda a proteger dados e impedir roubos de informação.",
    ],
  },
  {
    id: "pessoa-organizada",
    ano: 2024,
    titulo: "Você é uma pessoa organizada?",
    modalidade: "Online",
    palestrante: "Vinicius e Michele",
    empresa: "Eduzz",
    data: "28/08/2024",
    resumo:
      "Técnicas de organização e gestão de tempo, incluindo a metodologia Eat the Frog, o método Pomodoro e o uso de engenharia de prompt para organizar tarefas com apoio de IA.",
    aprendizados: [
      "Eat the Frog: identificar a tarefa mais desafiadora e resolvê-la logo pela manhã.",
      "Método Pomodoro: ciclos de 25 minutos de foco com pausas de 5 minutos.",
      "Apps como Pomodoro Timer e Forest ajudam na organização.",
      "Engenharia de prompt: ser claro, específico e revisar o que se pede à IA.",
    ],
  },
  {
    id: "fluxo-operacoes-comercial",
    ano: 2024,
    titulo: "Fluxo de Operações Comercial",
    modalidade: "Online",
    palestrante: "André Lopes e Tamires Marciano",
    empresa: "Uno",
    data: "29/08/2024",
    resumo:
      "Como a empresa organiza e gerencia suas operações comerciais em ambiente digital, incluindo o sistema utilizado no dia a dia.",
    aprendizados: [
      "Uma boa organização das operações de vendas facilita a gestão comercial como um todo.",
    ],
  },
  {
    id: "tendencias-ia-generativa",
    imagens: ["/public/images/images-novas/tendencias-ia-generativa/1.jpg"],
    ano: 2024,
    titulo:
      "Quais as tendências da área de TI com a virada da IA Generativa e outras tecnologias",
    palestrante: "Guilherme Bastos",
    empresa: "Tegra",
    data: "05/09/2024",
    resumo:
      "Como a IA pode ser usada na criação de projetos, na revisão de código e na produção de sites e apps. Os slides da própria palestra foram feitos com o Gamma, uma IA geradora de apresentações.",
    aprendizados: [
      "Nem tudo que a IA produz é 100% eficaz — adaptações continuam necessárias.",
      "Existem IAs específicas para diferentes etapas de um projeto de desenvolvimento.",
      "Em Desenvolvimento de Sistemas, saber usar bem essas ferramentas é um diferencial.",
    ],
  },
  {
    id: "soft-skills",
    imagens: ["/public/images/images-novas/soft-skills/1.jpg", "/public/images/images-novas/soft-skills/2.jpg", "/public/images/images-novas/soft-skills/3.jpg", "/public/images/images-novas/soft-skills/4.jpg"],
    ano: 2024,
    titulo: "Soft Skills",
    palestrante: "Liliane Pereira",
    empresa: "Uno",
    data: "13/09/2024",
    resumo:
      "Diferença entre soft skills e hard skills, com exemplos como comunicação, inteligência emocional, resolução de conflitos, empatia, trabalho em equipe e adaptabilidade — e por que as empresas valorizam tanto esse equilíbrio na hora de contratar.",
    aprendizados: [
      "Soft skills influenciam diretamente a produtividade e o clima organizacional.",
      "Empresas buscam equilíbrio entre hard skills e soft skills, não apenas experiência técnica.",
      "Comunicação clara, empatia e trabalho em equipe são frequentemente avaliados em processos seletivos.",
    ],
  },
  {
    id: "capricho",
    imagens: ["/public/images/images-novas/capricho/1.jpg", "/public/images/images-novas/capricho/2.jpg"],
    ano: 2024,
    titulo: "Capricho: skill cada vez mais raro no mercado",
    palestrante: "Luiz Fernando Milagres",
    empresa: "Eduzz",
    data: "24/09/2024",
    resumo:
      "Reflexão sobre a diferença entre capricho — fazer o melhor possível dentro das condições que se tem — e mediocridade, que é fazer o mínimo mesmo tendo condições de fazer mais.",
    aprendizados: [
      "É importante sempre fazer o melhor em qualquer situação, prestando atenção aos detalhes.",
      "\"Nosso melhor\" muda de um dia para o outro, e isso também faz parte do processo.",
    ],
  },
  {
    id: "codigo-ao-no-code",
    ano: 2024,
    titulo: "Desenvolvimento de software: Do código ao No-code",
    palestrante: "Guilherme Bastos",
    empresa: "Tegra",
    data: "10/10/2024",
    resumo:
      "Panorama sobre desenvolvimento estruturado, suas vantagens (flexibilidade, personalização e escalabilidade) e a diferença entre No-code (sem código, como o Bubble) e Low-code (pouco código, como o FlutterFlow).",
    aprendizados: [
      "Low-code exige conhecimento básico de programação, mas evita ficar preso à plataforma.",
      "No-code é mais limitado às ferramentas oferecidas pela própria plataforma.",
      "Conhecer as opções disponíveis ajuda a escolher a abordagem certa para cada projeto.",
    ],
  },
  {
    id: "preparando-para-o-amanha",
    imagens: ["/public/images/images-novas/preparando-para-o-amanha/1.jpg"],
    ano: 2024,
    titulo: "Preparando-se para o amanhã: da Etec/Fatec para o mundo",
    palestrante: "Flávia Freitas",
    empresa: "Iochpe",
    data: "17/10/2024",
    resumo:
      "Palestra da Fundação Iochpe em parceria com o Centro Paula Souza e a IBM, trazendo a trajetória de Flávia Freitas (Fatec Baixada Santista, 1995) e o plano de aprendizagem IBM de 60 horas ao longo dos três anos do curso técnico.",
    aprendizados: [
      "\"Nunca pare de estudar\" e \"você se torna o que faz diariamente\".",
      "Conhecer as pessoas e suas qualidades fortalece o trabalho em equipe.",
      "Aprender novas línguas, especialmente inglês, é um diferencial valorizado pelas empresas.",
      "Ter sempre um plano B no mercado de trabalho.",
      "A inclusão de pessoas com deficiência é parte importante da diversidade nas empresas.",
    ],
  },
  {
    id: "web3-propriedade-digital",
    ano: 2024,
    titulo: "A revolução da web3 e a propriedade digital",
    palestrante: "Caio Mattos",
    empresa: "Fundação Iochpe",
    data: "04/11/2024",
    resumo:
      "Conceitos de propriedade digital, descentralização e blockchain: dependência de intermediários como bancos, o movimento Cypherpunk, o Bitcoin, moedas digitais de bancos centrais (como o Drex) e aplicações de empresas como Rolex e Toyota.",
    aprendizados: [
      "A Web3 reduz a dependência de intermediários e amplia a autonomia digital dos usuários.",
      "O mercado de blockchain e criptomoedas está em expansão, com oportunidades profissionais reais.",
      "A autenticidade digital tende a se tornar cada vez mais valorizada em diversos setores.",
    ],
  },

  // ---------------- 2025 ----------------
  {
    id: "primeiro-emprego-ti",
    imagens: ["/public/images/images-novas/primeiro-emprego-ti/1.jpg", "/public/images/images-novas/primeiro-emprego-ti/2.jpg"],
    ano: 2025,
    titulo: "Desafios do primeiro emprego em TI e como superá-los",
    palestrante: "Tiago Baldo",
    empresa: "Eduzz",
    data: "10/04/2025",
    resumo:
      "Panorama do mercado de TI para 2025, com oportunidades, salários e os principais desafios de quem busca a primeira vaga: falta de experiência, concorrência, portfólio pouco desenvolvido e barreiras de autoconfiança.",
    aprendizados: [
      "O mercado de TI é promissor, mas exige qualificação constante.",
      "Investir em projetos práticos e em um portfólio sólido é essencial para se destacar.",
      "Certificações reconhecidas aumentam a credibilidade profissional.",
      "Diante da concorrência, basta conquistar uma oportunidade — foco e persistência fazem diferença.",
    ],
    reflexao:
      "Essa palestra me fez perceber a importância de estar preparada para as exigências do mercado de TI. Compreendi melhor a relevância de investir em certificações, projetos práticos e autoconfiança na busca pelo primeiro emprego.",
  },
  {
    id: "carreira-suporte-pratica",
    ano: 2025,
    titulo: "Carreira e Suporte na Prática",
    palestrante: "Matheus Dias, Tamires, Matheus Jorge e Raissa",
    empresa: "Itix",
    data: "16/04/2025",
    resumo:
      "Desafios e oportunidades da transição de carreira em TI: processos seletivos de estágio, gestão de SLA no suporte técnico e o uso da IA no dia a dia (correção de queries SQL, organização de anotações, revisão de textos e escrita de prompts).",
    aprendizados: [
      "O estágio é uma etapa essencial de aprendizado, exigindo adaptação e postura profissional.",
      "A IA pode ser uma aliada poderosa para otimizar atividades técnicas e administrativas.",
      "Comunicação ativa com o cliente é fundamental na gestão de suporte.",
      "Receber feedbacks e assumir responsabilidades são fatores-chave para o crescimento na carreira.",
    ],
    reflexao:
      "Percebi que a evolução profissional depende não apenas do conhecimento técnico, mas também da atitude, da responsabilidade e da disposição para resolver problemas desafiadores.",
  },
  {
    id: "linkedin-marca-pessoal",
    imagens: ["/public/images/images-novas/linkedin-marca-pessoal/1.jpg", "/public/images/images-novas/linkedin-marca-pessoal/2.jpg", "/public/images/images-novas/linkedin-marca-pessoal/3.jpg", "/public/images/images-novas/linkedin-marca-pessoal/4.jpg", "/public/images/images-novas/linkedin-marca-pessoal/5.jpg", "/public/images/images-novas/linkedin-marca-pessoal/6.jpg"],
    ano: 2025,
    titulo: "LinkedIn e Marca Pessoal para Profissionais de TI",
    palestrante: "Priscila",
    empresa: "Eduzz",
    data: "23/04/2025",
    resumo:
      "Como construir um perfil eficiente no LinkedIn, fortalecer a marca pessoal e aproveitar as oportunidades de networking: título claro, resumo com propósito, portfólio de projetos da universidade e conteúdo de valor.",
    aprendizados: [
      "87% dos recrutadores usam o LinkedIn para buscar talentos.",
      "Manter o perfil atualizado, com formação e experiências claras, é essencial.",
      "Interagir na plataforma (curtir, comentar, compartilhar) aumenta a visibilidade digital.",
      "Vale destacar projetos da universidade mesmo antes de concluir o curso.",
    ],
    reflexao:
      "Como estou cursando Desenvolvimento de Sistemas, vejo que manter uma presença ativa no LinkedIn pode me ajudar a mostrar meus projetos e me aproximar de profissionais da área desde já.",
  },
  {
    id: "inteligencia-artificial-2025",
    ano: 2025,
    titulo: "Inteligência Artificial",
    palestrante: "Prof. Dilenardo Piva Júnior",
    empresa: null,
    data: "12/05/2025",
    resumo:
      "Visão geral sobre IA, aprendizado de máquina e automação, mostrando como essas tecnologias já estão presentes em praticamente todos os setores e exigem novas competências dos profissionais.",
    aprendizados: [
      "A IA complementa as atividades humanas, mas não as substitui totalmente.",
      "O avanço da IA exige ética e responsabilidade no tratamento de dados.",
      "Ferramentas de IA podem otimizar tarefas como correção de textos e organização de dados.",
    ],
  },
  {
    id: "empreendedorismo-inovacao",
    imagens: ["/public/images/images-novas/empreendedorismo-inovacao/1.jpg", "/public/images/images-novas/empreendedorismo-inovacao/2.jpg", "/public/images/images-novas/empreendedorismo-inovacao/3.jpg", "/public/images/images-novas/empreendedorismo-inovacao/4.jpg", "/public/images/images-novas/empreendedorismo-inovacao/5.jpg"],
    ano: 2025,
    titulo: "Empreendedorismo e Inovação na Tecnologia",
    palestrante: "Luciana Ogusco",
    empresa: "Eduzz",
    data: "13/05/2025",
    resumo:
      "Fundamentos do empreendedorismo em tecnologia, com foco em equilibrar conhecimento técnico, compreensão das necessidades humanas e objetivos de negócio, usando ferramentas acessíveis para validar ideias rapidamente.",
    aprendizados: [
      "Conhecimento técnico acelera processos, mas não substitui entender pessoas e negócios.",
      "Validar hipóteses rapidamente (formulários, MVPs) evita retrabalho.",
      "Ferramentas como Google Trends, Bubble, Uizard e Vaquinha apoiam todas as etapas do projeto.",
      "A jornada empreendedora é pessoal e coletiva: rede de apoio e mentoria fazem diferença.",
    ],
    reflexao:
      "Percebi que a base de uma startup de sucesso está em um processo estruturado de descoberta e validação centrado no ser humano, e não apenas em uma grande inovação técnica.",
  },
  {
    id: "produtividade-organizacao",
    imagens: ["/public/images/images-novas/produtividade-organizacao/1.jpg", "/public/images/images-novas/produtividade-organizacao/2.jpg", "/public/images/images-novas/produtividade-organizacao/3.jpg", "/public/images/images-novas/produtividade-organizacao/4.jpg", "/public/images/images-novas/produtividade-organizacao/5.jpg", "/public/images/images-novas/produtividade-organizacao/6.jpg"],
    ano: 2025,
    titulo: "Produtividade e Organização no Dia a Dia",
    palestrante: "Henrico Gabriel Ibanez",
    empresa: "Eduzz",
    data: "20/08/2025",
    resumo:
      "As três dimensões da produtividade (eficiência, eficácia e equilíbrio), a Matriz de Eisenhower para priorizar tarefas e a regra dos 2 minutos do método GTD para evitar procrastinação.",
    aprendizados: [
      "Matriz de Eisenhower: separar tarefas por urgência e importância (fazer, decidir, delegar, excluir).",
      "Regra dos 2 minutos: tarefas rápidas devem ser feitas na hora, sem procrastinar.",
      "Ferramentas como Todoist, Trello e Notion ajudam na organização diária.",
      "Produtividade é gerar resultados relevantes, não apenas fazer mais coisas.",
    ],
    reflexao:
      "A Matriz de Eisenhower ofereceu um método visual e lógico para priorizar tarefas que posso levar para todas as áreas da minha vida. A verdadeira produtividade está ligada à clareza e ao foco intencional.",
  },
  {
    id: "banco-de-dados",
    ano: 2025,
    titulo: "Treinamento de banco de dados",
    palestrante: "Andrea Maria Fieri, Raissa Brito Miranda e Rafael Santos",
    empresa: "Itix",
    data: "27/08/2025",
    resumo:
      "Introdução prática a bancos de dados relacionais e SGBDR, ferramentas de mercado (SQL Server Management Studio, Azure Data Studio, DBeaver) e objetos de banco como views, funções e stored procedures, com um projeto prático de biblioteca.",
    aprendizados: [
      "Um banco de dados precisa estar organizado e otimizado, não só armazenar informações.",
      "Views simplificam consultas e stored procedures automatizam tarefas repetitivas.",
      "Praticamos organizando um banco de dados de biblioteca por categoria e autor.",
    ],
    reflexao:
      "Esse conteúdo reforça a importância de dominar bancos de dados, já que praticamente todo sistema utiliza algum tipo de armazenamento estruturado.",
  },
  {
    id: "seguranca-ciberseguranca",
    imagens: ["/public/images/images-novas/seguranca-ciberseguranca/1.jpg", "/public/images/images-novas/seguranca-ciberseguranca/2.jpg"],
    ano: 2025,
    titulo: "Segurança de informação e Cibersegurança",
    palestrante: "Guilherme Rodrigues Mattos",
    empresa: "Eduzz",
    data: "03/09/2025",
    resumo:
      "Ameaças digitais comuns, com foco em phishing e autenticação multifator (MFA), explicando como os golpes funcionam e a importância de camadas extras de segurança para proteger contas e dados.",
    aprendizados: [
      "Phishing tenta enganar o usuário se passando por uma instituição confiável.",
      "MFA soma camadas de verificação: senha, código por SMS e biometria.",
      "A segurança digital depende tanto de ferramentas quanto do comportamento do usuário.",
    ],
    reflexao:
      "\"Clicar sem pensar é o novo abrir a porta sem perguntar quem está do outro lado.\" A partir de agora, terei uma postura mais cautelosa e proativa com a segurança dos meus dados.",
  },
  {
    id: "ia-na-pratica",
    imagens: ["/public/images/images-novas/ia-na-pratica/1.jpg", "/public/images/images-novas/ia-na-pratica/2.jpg", "/public/images/images-novas/ia-na-pratica/3.jpg", "/public/images/images-novas/ia-na-pratica/4.jpg", "/public/images/images-novas/ia-na-pratica/5.jpg", "/public/images/images-novas/ia-na-pratica/6.jpg", "/public/images/images-novas/ia-na-pratica/7.jpg"],
    ano: 2025,
    titulo: "Inteligência Artificial na Prática: Aplicações no Mercado",
    palestrante: "Lucas Lascasas",
    empresa: "Eduzz",
    data: "16/09/2025",
    resumo:
      "Casos reais de IA e estruturas de dados em empresas brasileiras: Data Lake e Data Mesh, IA tradicional em anti-fraude (Eduzz), IA generativa reduzindo em 99% o tempo de geração de relatórios (Hospital Sírio-Libanês) e Data Lake de imagens de satélite no agronegócio (Amaggi).",
    aprendizados: [
      "Data Lake funciona como repositório central de dados para treinar modelos de IA.",
      "Data Mesh permite que diferentes áreas gerenciem seus próprios dados com escalabilidade.",
      "IA tradicional (Machine Learning) já é usada para detectar fraude em milhares de transações.",
      "IA generativa pode reduzir drasticamente o tempo gasto em tarefas manuais e repetitivas.",
    ],
    reflexao:
      "O que mais me impressionou foi ver como empresas brasileiras estão na vanguarda dessas aplicações. A IA não é mais futurológica, é uma ferramenta atual para resolver problemas reais.",
  },
  {
    id: "desenvolvimento-mobile",
    imagens: ["/public/images/images-novas/desenvolvimento-mobile/1.jpg", "/public/images/images-novas/desenvolvimento-mobile/2.jpg", "/public/images/images-novas/desenvolvimento-mobile/3.jpg", "/public/images/images-novas/desenvolvimento-mobile/4.jpg", "/public/images/images-novas/desenvolvimento-mobile/5.jpg", "/public/images/images-novas/desenvolvimento-mobile/6.jpg", "/public/images/images-novas/desenvolvimento-mobile/7.jpg"],
    ano: 2025,
    titulo: "Desenvolvimento Mobile: Criando Aplicativos do Zero",
    palestrante: "Lucas de Assis Cefali Almeida",
    empresa: "Eduzz",
    data: "30/10/2025",
    resumo:
      "Fundamentos e tendências do desenvolvimento mobile: design centrado no usuário, princípios de UX/UI, a comparação entre apps nativos e multiplataforma, e o papel do CI/CD na automação e qualidade do ciclo de desenvolvimento.",
    aprendizados: [
      "Toda decisão visual deve responder: \"isso facilita a vida do usuário?\"",
      "Apps nativos entregam mais performance; multiplataforma entrega agilidade e menor custo.",
      "CI/CD automatiza testes, builds e publicação, prevenindo bugs antes da produção.",
    ],
    reflexao:
      "A discussão sobre nativo versus multiplataforma foi enriquecedora: não existe bala de prata, é preciso analisar o objetivo do produto para escolher a abordagem certa.",
  },

  // ---------------- 2026 ----------------
  {
    id: "analista-suporte-pratica",
    imagens: ["/public/images/images-novas/analista-suporte-pratica/1.jpg"],
    ano: 2026,
    titulo: "Analista de Suporte na Prática",
    palestrante: "Representantes da Itix",
    empresa: "Itix",
    data: "10/06/2026",
    resumo:
      "Visão prática da atuação do Analista de Suporte de TI: os níveis N1, N2 e N3, os tipos de chamado (Incidente, Requisição e Mudança) e as ferramentas do dia a dia, como Azure DevOps e OneNote para uma base de conhecimento colaborativa.",
    aprendizados: [
      "Dividir o suporte em níveis (N1, N2, N3) otimiza recursos e direciona cada problema ao especialista certo.",
      "Manter uma base de conhecimento atualizada acelera o atendimento e ajuda no onboarding de novos integrantes.",
      "A diferença entre Incidente (resolver agora) e Mudança/RDM (prevenir no futuro) muda a forma de encarar o suporte.",
    ],
    reflexao:
      "Essa palestra consolidou minha vontade de não apenas resolver problemas, mas de atuar como agente de melhoria e inovação dentro da infraestrutura de TI.",
  },
];

export default palestras;
