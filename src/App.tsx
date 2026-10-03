import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Braces, Code2, Database, Download, Layers3, Mail, Menu, Server, X } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', text: 'Interfaces modernas, componentes reutilizáveis e integração com APIs.', items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
  { icon: Server, title: 'Backend', text: 'APIs, microsserviços e sistemas com responsabilidades bem definidas.', items: ['Python', 'FastAPI', 'Django', 'C# / .NET', 'JWT / OAuth'] },
  { icon: Database, title: 'Dados & infraestrutura', text: 'Persistência, comunicação entre serviços e ambientes consistentes.', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Docker', 'RabbitMQ'] },
  { icon: Layers3, title: 'Arquitetura & qualidade', text: 'Código sustentável, testes e boas práticas em cada entrega.', items: ['Arquitetura hexagonal', 'Pytest', 'SOLID', 'Git', 'Code review'] },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Tiago Augusto, início">TASS<span>.</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {['Sobre', 'Tecnologias', 'Experiência', 'Projetos'].map(item => <a key={item} href={`#${item === 'Experiência' ? 'experiencia' : item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-contact" href="#contato" onClick={() => setMenuOpen(false)}>Vamos conversar <ArrowUpRight size={15} /></a>
      </nav>
    </header>
    <main id="conteudo">
      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> DESENVOLVEDOR FULL STACK</p>
          <p className="intro">Olá, eu sou Tiago Augusto.</p>
          <h1>Da interface<br />à arquitetura<span className="accent">.</span></h1>
          <p className="hero-description">Desenvolvo aplicações web e APIs conectando interfaces modernas a sistemas escaláveis e de fácil manutenção.</p>
          <div className="actions"><a className="button primary" href="#experiencia">Conheça meu trabalho <ArrowUpRight size={18} /></a><a className="button secondary" href={`${import.meta.env.BASE_URL}curriculo.pdf`} download>Currículo <Download size={17} /></a></div>
          <div className="hero-stack"><span>PYTHON</span><i /> <span>.NET</span><i /><span>REACT</span><i /><span>TYPESCRIPT</span></div>
        </div>
        <div className="hero-art" aria-label="Representação visual das camadas de uma aplicação">
          <div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="layer layer-back"><Database size={32} /><span>dados</span></div>
          <div className="layer layer-middle"><Braces size={42} /><span>api & lógica</span></div>
          <div className="layer layer-front"><Code2 size={42} /><span>interface</span></div>
          <span className="art-label label-top">01 / EXPERIÊNCIA</span><span className="art-label label-bottom">02 / ENGENHARIA</span>
          <span className="art-coordinate">&lt; construir com propósito /&gt;</span>
        </div>
        <a className="scroll-cue" href="#sobre"><ArrowDown size={15} /> EXPLORE O PORTFÓLIO</a>
      </section>
      <div className="stack-strip"><span>Interfaces intuitivas</span><span className="accent">✳</span><span>APIs bem estruturadas</span><span className="accent">✳</span><span>Software de qualidade</span><span className="accent">✳</span><span>Integração entre sistemas</span></div>
      <section className="section container about" id="sobre">
        <div><p className="eyebrow">01 / SOBRE MIM</p><h2>Visão do todo.<br /><span className="muted">Cuidado em cada camada.</span></h2></div>
        <div className="about-copy"><p>Sou desenvolvedor Full Stack com experiência em aplicações web, APIs REST e integração entre sistemas. Minha atuação conecta o frontend com React e Next.js ao backend com Python e C#.</p><p>Trabalho com microsserviços, arquitetura hexagonal, bancos relacionais e não relacionais. Valorizo código claro, testes automatizados e soluções que possam evoluir com o produto.</p><div className="location"><span className="status-dot" /> Moreno, Pernambuco · Brasil</div></div>
      </section>
      <section className="section container" id="tecnologias"><div className="section-heading"><div><p className="eyebrow">02 / TECNOLOGIAS</p><h2>Ferramentas para<br />transformar ideias.</h2></div><p className="heading-note">Do primeiro componente<br />à integração entre serviços.</p></div><div className="skills-grid">{skills.map(({ icon: Icon, title, text, items }) => <article className="skill-card" key={title}><Icon className="skill-icon" size={25} /><h3>{title}</h3><p>{text}</p><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>
      <section className="section container" id="experiencia"><p className="eyebrow">03 / TRAJETÓRIA</p><h2>Experiência que<br /><span className="muted">conecta as pontas.</span></h2><div className="experience"><div className="experience-date">2021 — 2026<span>EXPERIÊNCIA PROFISSIONAL</span></div><div><div className="job-heading"><h3>Desenvolvedor Full Stack</h3><span>BSA Tech</span></div><p>Desenvolvimento e manutenção de aplicações web e APIs, com foco em performance, escalabilidade e boas práticas de engenharia de software.</p><ul><li>APIs RESTful com FastAPI, Django e .NET, com integração entre serviços.</li><li>Microsserviços, arquitetura hexagonal e mensageria com RabbitMQ.</li><li>Interfaces com React, Next.js e TypeScript.</li><li>Containers Docker, testes com Pytest e otimização de performance.</li></ul><div className="experience-impact"><strong>Entrega em destaque: geração de adapters com um comando</strong><p>Criei templates estabilizados para novas integrações de operadores e provedores, agilizando o trabalho do time, padronizando o código e evitando a reprodução de bugs conhecidos das bases anteriores.</p><a href="#projetos">Conheça a entrega <ArrowUpRight size={15} /></a></div></div></div><div className="education"><div><span className="eyebrow">FORMAÇÃO / 2020 — 2025</span><h3>Análise e Desenvolvimento de Sistemas</h3><p>UNINABUCO · Centro Universitário Joaquim Nabuco</p></div><div><span className="eyebrow">FORMAÇÃO / 2018 — 2020</span><h3>Técnico em Informática para Internet</h3><p>IFPE · Campus Jaboatão</p></div></div></section>
      <section className="section container" id="projetos">
        <div className="section-heading"><div><p className="eyebrow">04 / PROJETOS</p><h2>Onde as ideias<br />ganham forma.</h2></div></div>
        <article className="case-study" aria-labelledby="integration-title">
          <div className="case-heading"><span className="eyebrow">BSA TECH / INTEGRAÇÃO DE SISTEMAS</span><span className="case-status">Projeto em andamento</span></div>
          <h3 id="integration-title">Novos adapters.<br /><span className="accent">Um único comando.</span></h3>
          <p className="case-intro">Automação e padronização de integrações entre operadores e provedores de jogos de iGaming.</p>
          <div className="tags"><span>Python</span><span>FastAPI</span><span>Django</span><span>Arquitetura hexagonal</span><span>Automação</span></div>
          <div className="case-details">
            <div><h4>O desafio</h4><p>As integrações de clientes que adotavam as APIs da plataforma eram criadas copiando adaptações anteriores. O processo exigia ajustes manuais e podia reproduzir bugs de implementações antigas nas novas integrações.</p></div>
            <div><h4>Minha contribuição</h4><p>Desenvolvi templates para operadores e provedores a partir de uma versão estabilizada, incorporando as correções existentes. Automatizei a geração dos adapters: com um comando e os dados da nova integração, o time passou a gerar a estrutura e grande parte da implementação necessária.</p></div>
          </div>
          <div className="case-results" aria-label="Resultados da entrega">
            <div><strong>Um comando</strong><p>Para gerar a base dos novos adapters e agilizar o desenvolvimento do time.</p></div>
            <div><strong>Base estabilizada</strong><p>Os bugs conhecidos das adaptações antigas deixaram de reaparecer nas integrações geradas.</p></div>
            <div><strong>Código padronizado</strong><p>Organização consistente de pastas e código nas novas adaptações.</p></div>
          </div>
          <p className="case-context">A plataforma mantém as regras de negócio em uma biblioteca Python, os adaptadores em FastAPI e um backoffice Django para análise de dados e correções operacionais.</p>
        </article>
      </section>
      <section className="contact container" id="contato"><p className="eyebrow">05 / PRÓXIMO PASSO</p><h2>Vamos construir<br /><span className="accent">algo juntos?</span></h2><p>Para conversar sobre oportunidades e conhecer melhor meu trabalho, entre em contato.</p><a className="email-link" href="mailto:tiagoaugustofront@gmail.com"><Mail size={22} /><span>tiagoaugustofront@gmail.com</span><ArrowUpRight size={24} /></a></section>
    </main><footer className="footer container"><a className="brand" href="#inicio">TASS<span>.</span></a><p>© {new Date().getFullYear()} Tiago Augusto</p><span>Feito com React & TypeScript</span></footer>
  </>
}
