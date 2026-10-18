import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const leadership = [
  ['Nimish Nijhawan', 'President & Founder', 'nimish.jpeg', 'Started out in middle school with two years of Botball, then FTC and FRC. He founded IGNIS to open robotics up to students who had never been given a shot at it. He leads technical development and team operations, and runs fundraising and the fall training program for new members.', 'nn102597@student.musd.org'],
  ['Ayan Bera', 'Vice President', 'AayanBera.jpeg', 'Co-founder, and previously a member of two separate FRC teams. Did VEX in middle school, then went on to coach VEX at ICC.', 'ab108910@student.musd.org'],
  ['Evan Soh', 'Secretary', 'Evan.png', 'Was on a VEX team his freshman year. Works with the mechanical subteam, and keeps track of meeting minutes and attendance.', 'es93515@student.musd.org'],
  ['Tijan Noah White', 'Treasurer', 'Tijan.png', 'Started learning Python in 2023 and switched to Java in late 2025. Handles purchase paperwork and fundraising, and helps out with code.', 'tw110624@student.musd.org'],
  ['Pranav Thirumala', 'Technical Lead — Mechanical', 'Pranav.png', 'Came up through FRC Team 254, the Cheesy Poofs — 2nd in the world his freshman year, and qualified for worlds his sophomore year. After moving from Bellarmine to Milpitas his junior year he joined the FTC team. Leads the mechanical and electrical subteams.', 'pt90559@student.musd.org'],
  ['Ahsan Ahmed', 'Technical Lead — Software', 'Ahsan.png', 'A year of Botball, which is where he picked up autonomous programming and structured coding under competition constraints. Works on independent projects outside of competitions. Leads robot code, code architecture, and system integration, and keeps an eye on the electrical side.', 'aa103869@student.musd.org'],
]

const navItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/sponsors', 'Sponsors'],
  ['/our-team', 'Our Team'],
  ['/contact', 'Contact'],
]

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="IGNIS Robotics home">
          <img src="./images/Team logo.png" alt="IGNIS Robotics logo" />
          <span><strong>IGNIS</strong><small>FRC TEAM 12034</small></span>
        </Link>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-nav">
          <span /><span /><span /><b className="sr-only">Toggle navigation</b>
        </button>
        <nav id="site-nav" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          {navItems.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
          <Link className="nav-cta" to="/contact">Join the team <span>↗</span></Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer"><span>IGNIS ROBOTICS / TEAM 12034</span></footer>
    </div>
  )
}

function Eyebrow({ children }) { return <div className="eyebrow"><i />{children}</div> }
function ArrowLink({ to, children, dark = false }) { return <Link className={`arrow-link ${dark ? 'dark' : ''}`} to={to}>{children}<span>↗</span></Link> }
function PageIntro({ eyebrow, title, copy }) { return <section className="page-intro"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{copy && <p>{copy}</p>}</section> }

function Home() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy"><h1>Training the next generation of <em>engineers.</em></h1><p className="lede">We are a student-run FRC team at Milpitas High School. We build a competition robot each season and bring STEM to our community.</p><div className="hero-actions"><ArrowLink to="/about">Explore our mission</ArrowLink><a className="text-link" href="https://www.firstinspires.org/programs/frc/" target="_blank" rel="noreferrer">What is FRC? <span>↗</span></a></div><p className="hero-manifesto">Most of our members join with little to no robotics experience, and we welcome students at any skill level.</p></div>
      <div className="hero-art"><div className="hero-frame"><img src="./images/Frontpageimage.png" alt="IGNIS Robotics team" /></div><span className="art-label">IGNIS / 12034</span></div>
    </section>
    <section className="section-wrap feature-grid"><Feature number="01" title="Student led" copy="We are entirely student-led. Members handle CAD, code, outreach, and team operations." /><Feature number="02" title="Real engineering" copy="We build industrial-sized robots on a six-week clock. There is no time to do it twice." /><Feature number="03" title="STEM for all" copy="We train new members from scratch and mentor middle school robotics programs." /></section>
    <section className="section-wrap home-cta"><div><Eyebrow>Make an impact</Eyebrow><h2>Get in contact</h2></div><ArrowLink to="/contact" dark>Get in touch</ArrowLink></section>
  </>
}
function Feature({ number, title, copy }) { return <article className="feature-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article> }

function About() {
  return <><PageIntro eyebrow="The program" title={<>More than a robot.<br /><em>A launchpad.</em></>} copy="FIRST Robotics Competition has teams design, build, and program industrial-sized robots in six weeks." /><section className="section-wrap editorial"><InfoBlock image="./images/What-is-FRC.jpg" eyebrow="01 / The challenge" title="Engineering under pressure" copy={<>Each season, teams get a new game and just six intense weeks to create a fully functional robot. We brainstorm, model, manufacture, wire, program, test, and iterate until the machine is ready to compete.</>} /><InfoBlock image="./images/mission image.jpeg" eyebrow="02 / Our mission" title="Open the door wider" reverse copy={<>Around 60% of our members join with little to no STEM experience. They learn CAD, machining, wiring, and code from other members, and end up running the robot themselves.</>} /></section><section className="section-wrap quote-block"><blockquote>We run robotics training for new members every fall. No experience needed — you learn on a real robot.</blockquote></section></>
}
function InfoBlock({ image, eyebrow, title, copy, reverse }) { return <article className={`info-block ${reverse ? 'reverse' : ''}`}><img src={image} alt="" /><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{copy}</p></div></article> }

const sponsorTiers = [
  { tier: 'Title Sponsors', featured: true, sponsors: [{ name: 'Title sponsor logo', src: './images/Apple_Logo_White_lg.svg' }] },
  { tier: 'Core Sponsors', sponsors: [] },
  { tier: 'Gold Sponsors', sponsors: [{ name: 'Google', src: './images/Google_G_Logo.svg' }] },
  { tier: 'Silver Sponsors', sponsors: [] },
]

function Sponsors() {
  return <><PageIntro eyebrow="Sponsorship" title={<>Build the future<br /><em>with us.</em></>} copy="Sponsorship pays for robot parts, tools, registration, and travel." /><section className="section-wrap sponsor-tiers"><Eyebrow>Our sponsors</Eyebrow><h2 className="tiers-title">Our Partners</h2><div className="tier-grid">{sponsorTiers.map(({ tier, featured, sponsors }) => <article className={`tier-card${featured ? ' tier-featured' : ''}${sponsors.length ? '' : ' tier-open'}`} key={tier}><span className="tier-label">{tier}</span>{sponsors.length > 0 ? <div className="tier-logos">{sponsors.map(({ name, src }) => <img src={src} alt={name} key={src} />)}</div> : <span className="tier-sought">Sought</span>}</article>)}</div></section><section className="section-wrap sponsor-layout"><div className="sponsor-story"><h2>Why IGNIS?</h2><p>FRC is expensive. Robot parts, motors, electronics, fabrication materials, tools, registration, travel, and equipment maintenance all add up fast. Sponsorship covers that, so students can spend build season actually building.</p><div className="stat-grid"><Stat value="83%" label="of FIRST alumni pursue STEM majors by year four." /><Stat value="51%" label="of female FIRST alumni major in engineering or CS." /><Stat value="63%" label="of alumni work in a STEM field." /></div></div><aside className="sponsor-card"><Eyebrow>Partner with 12034</Eyebrow><h2>Sponsor the team</h2><p>Support robot parts, tools, registration, travel, and the people who make it all happen.</p><ArrowLink to="/contact">Start a conversation</ArrowLink><a className="resource-link" href="https://docs.google.com/document/d/1VcobJuTHBTYQPiitCKM2Ftywepp1LyxhzjxF4hCkPEA/edit?usp=sharing" target="_blank" rel="noreferrer">Download sponsor packet ↗</a></aside></section><section className="section-wrap donation"><Eyebrow>Give directly</Eyebrow><h2>Donations are processed through Hack Club.</h2><p>Hack Club is a 501(c)(3) nonprofit organization supporting our team.</p><a className="arrow-link" href="https://hcb.hackclub.com/donations/start/ignis-robotics" target="_blank" rel="noreferrer">Open donation portal</a></section></>
}
function Stat({ value, label }) { return <div><strong>{value}</strong><p>{label}</p></div> }

function Team() {
  return <><PageIntro eyebrow="Team leadership" title={<>Meet the<br /><em>leadership.</em></>} copy="Meet the students guiding IGNIS Robotics and turning our shared ambition into action." /><section className="section-wrap team-grid">{leadership.map(([name, role, photo, bio, email]) => <article className="person" key={name}><div className="person-photo"><img src={`./images/leadership/${photo}`} alt={name} /></div><div className="person-details"><Eyebrow>{role}</Eyebrow><h2>{name}</h2><p>{bio}</p><a href={`mailto:${email}`}>{email} ↗</a></div></article>)}</section><section className="section-wrap team-footer"><h2>Want to build with us?</h2><ArrowLink to="/contact">Join IGNIS</ArrowLink><a className="resource-link" href="https://docs.google.com/document/d/1gpvER9PW_hBJd7ICywIsfrkxyUFQJNKHHJ8V1G0wucE/edit?usp=sharing" target="_blank" rel="noreferrer">View full members list ↗</a></section></>
}

function Contact() { return <><PageIntro eyebrow="Say hello" title={<>Let's build<br /><em>something.</em></>} copy="Whether you want to join, sponsor, mentor, or simply learn more, we would love to hear from you." /><section className="section-wrap contact-grid"><div className="contact-panel"><img src="./images/frc-robot-sample.svg" alt="FRC robot illustration" /></div><div className="contact-details"><Eyebrow>General inquiries</Eyebrow><a className="email" href="mailto:ignisrobotics@gmail.com">ignisrobotics<br />@gmail.com</a><p>We are a student-run team and check messages regularly. We will reply as soon as possible.</p><div className="contact-actions"><ArrowLink to="/sponsors">Sponsor the team</ArrowLink><a className="resource-link" href="https://docs.google.com/forms/d/1l_R-9AmQ9DnoN7g5jBsZwCWisd5Go2GexUSvODv12KM/viewform" target="_blank" rel="noreferrer">Team sign-up form ↗</a></div><div className="socials"><a href="https://www.youtube.com/channel/UCkX5yUeLi_zcfDNouJ_GSyA" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://www.instagram.com/ignis_robotics/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section></> }
function NotFound() { return <section className="not-found section-wrap"><Eyebrow>404 / Off the field</Eyebrow><h1>This route missed the match.</h1><ArrowLink to="/">Back to home</ArrowLink></section> }

export default App
