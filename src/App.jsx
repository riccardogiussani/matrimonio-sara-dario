import { useState } from 'react'
import olive from './assets/olive-branch.svg'
import calendar from './assets/sara-e-dario.ics?url'
import { programme, wedding } from './content.js'

function Icon({ name, className = '' }) {
  const shapes = {
    arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
    down: <><path d="M12 4v15M6 13l6 6 6-6" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    calendar: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4m8-4v4M4 11h16m-11 4h2m2 0h2m-6 3h2" /></>,
    rings: <><circle cx="9" cy="14" r="6" /><circle cx="16" cy="14" r="6" /><path d="m7 4 2-2 2 2-2 3-2-3Zm7 0 2-2 2 2-2 3-2-3Z" /></>,
    glasses: <><path d="m5 3 5 1-1 7a3 3 0 0 1-6-1l2-7Zm14 0-5 1 1 7a3 3 0 0 0 6-1l-2-7ZM6 13l-1 7m-3-1 6 1m10-7 1 7m-3 0 6-1" /></>,
    plate: <><circle cx="13" cy="12" r="7" /><circle cx="13" cy="12" r="4.5" /><path d="M2 3v6m3-6v6M2 6h3M3.5 9v12M23 3v18m0-18c-3 3-3 8 0 9" /></>,
    cake: <><path d="M4 14h16v7H4zm3-6h10v6H7zM2 21h20M12 4v4m0-7c-2 1-2 3 0 3s2-2 0-3ZM4 17c2 3 4-2 6 0s4-2 6 0 4 0 4 0" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M6 18 18 6" /></>,
  }
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name] || shapes.arrow}</svg>
}

function LinkButton({ href, children, secondary = false, external = false, icon = 'arrow', ...props }) {
  return <a className={'button' + (secondary ? ' button--outline' : '')} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>{children}<Icon name={icon} /></a>
}

function Botanical({ className = '' }) {
  return <img className={'botanical ' + className} src={olive} alt="" aria-hidden="true" />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <>
    <a className="skip-link" href="#contenuto">Vai al contenuto</a>
    <header className="site-header">
      <a className="monogram" href="#inizio" aria-label="Sara e Dario, torna all’inizio" onClick={closeMenu}>S<span>&</span>D<span className="monogram-dot">.</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Chiudi il menu' : 'Apri il menu'} aria-controls="navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      <nav id="navigation" aria-label="Navigazione principale" className={menuOpen ? 'navigation is-open' : 'navigation'} onKeyDown={event => { if (event.key === 'Escape') { closeMenu(); document.querySelector('.menu-toggle')?.focus() } }}>
        <a href="#programma" onClick={closeMenu}>La giornata</a>
        <a href="#luogo" onClick={closeMenu}>Il luogo</a>
        <a href="#parcheggio" onClick={closeMenu}>Come arrivare</a>
      </nav>
      <a className="header-date" href={calendar} download="sara-e-dario.ics" aria-label="1 maggio 2027, scarica l’evento per il calendario"><Icon name="calendar" /><span>01.05.2027</span></a>
    </header>

    <main id="contenuto">
      <section className="hero" id="inizio" aria-labelledby="hero-title">
        <Botanical className="hero-olive hero-olive--left" />
        <Botanical className="hero-olive hero-olive--right" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Ci sposiamo</p>
          <h1 className="couple" id="hero-title"><span>Sara</span><span className="couple-amp">&</span><span>Dario</span></h1>
          <p className="hero-invitation">La gioia è più bella<br />quando si condivide.</p>
          <div className="hero-date"><span>Sabato</span><time dateTime="2027-05-01">1 maggio 2027</time><span>Torino</span></div>
          <p className="hero-location">Sermig · Arsenale della Pace</p>
          <LinkButton href="#programma" secondary icon="down">Scopri la giornata</LinkButton>
        </div>
        <div className="hero-bottom"><span>Un giorno speciale, insieme a voi</span><span className="tiny-olive" aria-hidden="true">✦</span></div>
      </section>

      <section className="programme section-wrap" id="programma" aria-labelledby="programme-title">
        <div className="section-heading">
          <p className="eyebrow"><span className="section-number">01</span> La nostra giornata</p>
          <h2 id="programme-title">Il tempo di <em>stare insieme.</em></h2>
          <p>Quattro momenti, un unico ricordo da portare con noi.</p>
        </div>
        <ol className="timeline">
          {programme.map((item, index) => <li className="timeline-item" key={item.title}>
            <div className="timeline-icon"><Icon name={item.icon} /><span className="timeline-index" aria-hidden="true">0{index + 1}</span></div>
            <p className={'timeline-time' + (index === 3 ? ' timeline-time--later' : '')}>{index < 3 ? <time dateTime={'2027-05-01T' + item.time + ':00+02:00'}>{item.time}</time> : item.time}</p>
            <h3>{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </li>)}
        </ol>
        <p className="programme-note"><span aria-hidden="true">✧</span> Ci ritroveremo tutti all’Arsenale della Pace.</p>
      </section>

      <section className="venue" id="luogo" aria-labelledby="venue-title">
        <div className="venue-inner section-wrap">
          <div className="venue-copy">
            <p className="eyebrow"><span className="section-number">02</span> Il nostro luogo</p>
            <h2 id="venue-title">Nel cuore di Torino,<br />in un luogo di <em>pace.</em></h2>
            <p>Il nostro sì e la festa avranno la stessa casa: il Sermig, Arsenale della Pace. Vi aspettiamo qui per vivere insieme tutta la giornata.</p>
            <LinkButton href={wedding.venueMap} external icon="pin">Indicazioni per il Sermig</LinkButton>
          </div>
          <div className="venue-card">
            <div className="venue-arch"><Botanical className="venue-botanical" /><span className="venue-card-label">Torino · Borgo Dora</span><div className="venue-wordmark">Arsenale<br />della <em>Pace</em><span>Sermig</span></div><span className="venue-card-rule" /></div>
            <div className="venue-address"><Icon name="pin" /><address>{wedding.address}<br />{wedding.city}</address></div>
          </div>
        </div>
      </section>

      <section className="story section-wrap" aria-labelledby="story-title">
        <div className="story-heading"><p className="eyebrow">Una storia da conoscere</p><h2 id="story-title">Dove si costruivano armi,<br />oggi si costruisce <em>pace.</em></h2></div>
        <div className="story-text">
          <p>Un tempo era una fabbrica di armi. Il 2 agosto 1983 l’ex arsenale militare di Torino viene affidato ai giovani del Sermig: grazie al lavoro gratuito di migliaia di persone, comincia la sua trasformazione nell’Arsenale della Pace.</p>
          <p>Oggi è una casa aperta a chi è in difficoltà e un luogo di incontro, preghiera e dialogo tra culture e religioni. Uno spazio in cui i giovani possono condividere tempo e capacità, dando forma concreta alla solidarietà.</p>
          <a className="text-link" href={wedding.historyUrl} target="_blank" rel="noopener noreferrer">Scopri la sua storia sul sito del Sermig<Icon name="arrow" /></a>
          <p className="source-note">Storia e informazioni dal sito ufficiale del Sermig.</p>
        </div>
      </section>

      <section className="arrival section-wrap" id="parcheggio" aria-labelledby="arrival-title">
        <div className="arrival-card">
          <div className="arrival-heading"><p className="eyebrow"><span className="section-number">03</span> Come arrivare</p><h2 id="arrival-title">Un posto anche<br />per la vostra <em>auto.</em></h2><div className="parking-symbol" aria-hidden="true">P<svg viewBox="0 0 100 30" fill="none"><path d="M3 21c24 0 19-14 40-14s19 14 42 14m-9-9 10 9-10 6" stroke="currentColor" strokeWidth="1.4" /></svg></div></div>
          <div className="arrival-copy"><span className="small-tag">Parcheggio riservato agli invitati</span><h3>Arrivare, parcheggiare.<br />E godersi la giornata.</h3><p>Per il matrimonio ci verrà riservato il parcheggio di una scuola accanto al Sermig.</p><p>Il punto esatto è indicato nella mappa: apritela per raggiungere il parcheggio e poi proseguite verso l’Arsenale della Pace.</p><LinkButton href={wedding.parkingMap} external icon="pin">Apri la mappa del parcheggio</LinkButton></div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <Botanical className="closing-olive" />
        <p className="eyebrow">Manca solo una cosa</p>
        <h2 id="closing-title">Voi, con noi.</h2>
        <p>Vi aspettiamo per scrivere insieme<br />un ricordo bellissimo.</p>
        <LinkButton href={calendar} download="sara-e-dario.ics" secondary icon="calendar">Salva la data</LinkButton>
        <p className="closing-signature" aria-hidden="true">Sara & Dario</p>
      </section>
    </main>
    <footer className="site-footer"><a href="#inizio" className="footer-names">Sara & Dario</a><span>1 maggio 2027 · Torino</span><span>Con amore, per voi <span aria-hidden="true">♡</span></span></footer>
  </>
}

export default App
