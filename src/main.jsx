import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Menu, ShieldCheck, Sparkles, Wrench, Droplets, Paintbrush, CarFront, Instagram, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import './styles.css'

const CONFIG = {
  brand: 'AUTOMOTIVE STUDIO',
  whatsapp: '5511999999999', // TROQUE pelo WhatsApp comercial, com DDI e DDD, somente números
  instagram: 'https://instagram.com/', // TROQUE pelo Instagram da empresa
  city: 'São Paulo · SP', // TROQUE pela cidade/região atendida
}

const services = [
  { number: '01', title: 'Polimento técnico', desc: 'Recupere a profundidade do brilho e realce a aparência da pintura.', details: ['Correção de imperfeições conforme avaliação', 'Refino do acabamento', 'Brilho e aspecto renovados'], icon: Paintbrush, image: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c4f3a5?auto=format&fit=crop&w=1200&q=85' },
  { number: '02', title: 'Vitrificação e proteção', desc: 'Uma camada de proteção para valorizar a pintura e facilitar a manutenção.', details: ['Proteção cerâmica conforme o pacote', 'Repelência à água e sujeira', 'Orientação de manutenção'], icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85' },
  { number: '03', title: 'Detalhamento automotivo', desc: 'Atenção aos detalhes, por dentro e por fora, com cuidado em cada etapa.', details: ['Limpeza cuidadosa de superfícies', 'Acabamento interno e externo', 'Processo adaptado ao veículo'], icon: Sparkles, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85' },
  { number: '04', title: 'PPF e proteção de áreas', desc: 'Soluções para ajudar a preservar áreas da pintura contra marcas do uso.', details: ['Avaliação das áreas de aplicação', 'Opções conforme o veículo', 'Orientação sobre cuidados'], icon: CarFront, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85' },
]
const wa = (message) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [service, setService] = React.useState('Polimento técnico')
  const [name, setName] = React.useState('')
  const [vehicle, setVehicle] = React.useState('')
  const [details, setDetails] = React.useState('')
  const submit = (e) => {
    e.preventDefault()
    window.open(wa(`Olá! Gostaria de solicitar um orçamento.\\nNome: ${name || 'Não informado'}\\nVeículo: ${vehicle || 'Não informado'}\\nServiço: ${service}\\nDetalhes: ${details || 'Gostaria de receber orientação.'}`), '_blank', 'noopener,noreferrer')
  }
  return <div>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Automotive Studio início"><span>AUTO</span><b>MOTIVE</b><i>STUDIO</i></a>
      <button className="menu-button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}><Menu size={29}/></button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a className="nav-cta" href="#orcamento" onClick={() => setMenuOpen(false)}>Solicitar orçamento <ArrowUpRight size={16}/></a>
      </nav>
    </header>
    <main>
      <section className="hero" id="inicio">
        <div className="hero-image"></div><div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse"></span> CUIDADO AUTOMOTIVO EM OUTRO NÍVEL</div>
          <h1>Seu carro merece<br/><em>um novo padrão.</em></h1>
          <p>Precisão nos detalhes. Cuidado em cada etapa. Soluções para valorizar a aparência do seu veículo.</p>
          <div className="hero-actions"><a className="button button-light" href="#orcamento">Solicitar orçamento <ArrowUpRight size={18}/></a><a className="button button-outline" href="#servicos">Conhecer serviços <ArrowDownRight size={18}/></a></div>
          <div className="hero-foot"><span><Sparkles size={17}/> Estética e precisão</span><span><ShieldCheck size={17}/> Cuidado e transparência</span></div>
        </div>
        <div className="hero-index">01 <span>—</span> 04</div>
      </section>
      <section className="intro section" id="sobre">
        <div className="section-index">01</div><div className="intro-main"><div className="eyebrow muted">SOBRE O STUDIO</div><h2>Mais do que cuidar de carros.<br/><em>Valorizar cada detalhe.</em></h2></div>
        <div className="intro-copy"><p className="lead">Cada veículo exige atenção, cuidado e uma abordagem adequada.</p><p>Conheça uma experiência de estética automotiva focada em acabamento, transparência no atendimento e soluções alinhadas às necessidades do seu carro.</p><a className="text-link" href="#orcamento">Converse com um especialista <ArrowUpRight size={17}/></a></div>
      </section>
      <section className="services section" id="servicos">
        <div className="section-heading"><div className="section-index">02</div><div><div className="eyebrow muted">SERVIÇOS</div><h2>Soluções para cuidar<br/>do seu veículo.</h2></div><p>O cuidado certo começa com uma avaliação. Escolha um serviço para conversar sobre as possibilidades para o seu carro.</p></div>
        <div className="service-grid">{services.map((s) => {const Icon = s.icon; return <article className="service-card" key={s.number}>
          <div className="service-photo" style={{backgroundImage:`linear-gradient(180deg, transparent 35%, rgba(17,26,36,.85)), url("${s.image}")`}}><span>{s.number}</span><Icon size={23}/></div>
          <div className="service-body"><h3>{s.title}</h3><p>{s.desc}</p><div className="service-details">{s.details.map(d=><span key={d}><CheckCircle2 size={16}/>{d}</span>)}</div><a className="text-link" href={wa(`Olá! Gostaria de saber mais sobre ${s.title.toLowerCase()} e solicitar uma avaliação.`)} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowUpRight size={17}/></a></div>
        </article>})}</div>
      </section>
      <section className="feature">
        <div className="feature-photo"></div><div className="feature-content"><div className="eyebrow"><span className="pulse"></span> CUIDADO EM CADA DETALHE</div><h2>O acabamento faz<br/>toda a diferença.</h2><p>Um atendimento cuidadoso começa entendendo o veículo, o resultado desejado e a solução mais adequada para cada situação.</p><a className="button button-light" href="#orcamento">Avaliar meu veículo <ArrowUpRight size={18}/></a></div>
      </section>
      <section className="process section" id="processo"><div className="section-heading"><div className="section-index">03</div><div><div className="eyebrow muted">NOSSO PROCESSO</div><h2>Simples do primeiro<br/>contato à entrega.</h2></div></div>
        <div className="process-grid"><div><span>01</span><h3>Conte o que precisa</h3><p>Envie os dados do veículo e o serviço que deseja conhecer.</p></div><div><span>02</span><h3>Avaliação e orientação</h3><p>Entenda as opções recomendadas para o seu objetivo.</p></div><div><span>03</span><h3>Orçamento transparente</h3><p>Receba as informações e combine os próximos passos.</p></div></div>
      </section>
      <section className="quote-section" id="orcamento"><div className="quote-bg"></div><div className="quote-copy"><div className="eyebrow"><span className="pulse"></span> PRÓXIMO PASSO</div><h2>Seu carro.<br/><em>Seu próximo padrão.</em></h2><p>Conte um pouco sobre o veículo e vamos conversar sobre a melhor solução.</p><div className="contact-lines"><span><MapPin size={17}/>{CONFIG.city}</span><span><Clock size={17}/> Atendimento sob consulta</span></div></div>
        <form className="quote-form" onSubmit={submit}><div className="form-top"><span>FALE COM A EQUIPE</span><ArrowUpRight size={20}/></div><label>Seu nome<input value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos te chamar?"/></label><label>Modelo do veículo<input value={vehicle} onChange={e=>setVehicle(e.target.value)} placeholder="Ex.: BMW 320i, Honda Civic..."/></label><label>Serviço de interesse<select value={service} onChange={e=>setService(e.target.value)}>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>O que você gostaria de fazer?<textarea value={details} onChange={e=>setDetails(e.target.value)} placeholder="Conte brevemente o que procura..." rows="3"/></label><button className="button button-light submit" type="submit">Continuar no WhatsApp <ArrowUpRight size={18}/></button><small>Seus dados serão usados apenas para iniciar a conversa de orçamento.</small></form>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#inicio"><span>AUTO</span><b>MOTIVE</b><i>STUDIO</i></a><p>Detalhes que valorizam. Cuidado que se percebe.</p><div className="footer-links"><a href={CONFIG.instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a><a href={wa('Olá! Gostaria de conhecer os serviços e solicitar um orçamento.')} target="_blank" rel="noreferrer"><Phone size={17}/> WhatsApp</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Automotive Studio · Site demonstrativo</span><span>Desenvolvido por <b>Pietro DEV7</b></span></div></footer>
    <a className="floating-wa" href={wa('Olá! Gostaria de conhecer os serviços e solicitar um orçamento.')} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp"><Phone size={23}/><span>Orçamento via WhatsApp</span></a>
  </div>
}
createRoot(document.getElementById('root')).render(<App />)
