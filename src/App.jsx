import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const leadership = [
  ['Nimish Nijhawan', 'President & Founder', 'nimish.jpeg', 'Nimish founded IGNIS to expand access to STEM and introduce robotics to students who may not have otherwise explored the field. He leads technical development, team operations, fundraising, and the robotics training program.', 'nn102597@student.musd.org'],
  ['Ayan Bera', 'Vice President', 'AayanBera.jpeg', 'Ayan is a co-founder who has competed on two FRC teams and previously participated in and coached VEX Robotics. He helps guide the team and build an inclusive, ambitious culture.', 'ab108910@student.musd.org'],
  ['Evan Soh', 'Secretary', 'Evan.png', 'Evan brings VEX experience to IGNIS and supports the mechanical subteam while managing meeting minutes and attendance.', 'es93515@student.musd.org'],
  ['Tijan Noah White', 'Treasurer', 'Tijan.png', 'Tijan combines his growing experience in Python and Java with a passion for machines. He oversees purchase paperwork and fundraising while contributing to code.', 'tw110624@student.musd.org'],
  ['Pranav Thirumala', 'Technical Lead — Mechanical', 'Pranav.png', 'Pranav has experience with FRC Team 254 and FTC. He leads mechanical and electrical development, bringing competition-tested engineering experience to the team.', 'pt90559@student.musd.org'],
  ['Ahsan Ahmed', 'Technical Lead — Software', 'Ahsan.png', 'Ahsan leads software development, autonomous robotics, code architecture, and system integration while mentoring team members and overseeing electrical work.', 'aa103869@student.musd.org'],
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
      <footer className="site-footer"><span>IGNIS ROBOTICS / TEAM 12034</span><span>Build boldly. Learn endlessly.</span></footer>
    </div>
  )
}

function Eyebrow({ children }) { return <div className="eyebrow"><i />{children}</div> }
function ArrowLink({ to, children, dark = false }) { return <Link className={`arrow-link ${dark ? 'dark' : ''}`} to={to}>{children}<span>↗</span></Link> }
function PageIntro({ eyebrow, title, copy }) { return <section className="page-intro"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{copy && <p>{copy}</p>}</section> }

function Home() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy"><h1>Training the next generation of <em>engineers.</em></h1><p className="lede">We are a student-led FIRST Robotics Competition team building ambitious robots, capable people, and a more accessible future in STEM.</p><div className="hero-actions"><ArrowLink to="/about">Explore our mission</ArrowLink><a className="text-link" href="https://www.firstinspires.org/programs/frc/" target="_blank" rel="noreferrer">What is FRC? <span>↗</span></a></div><p className="hero-manifesto">We believe robotics belongs to everyone. No prior experience required, just curiosity, commitment, and the courage to build something that has never existed before.</p></div>
      <div className="hero-art"><div className="hero-frame"><img src="./images/Frontpageimage.png" alt="IGNIS Robotics team" /></div><span className="art-label">IGNIS / 12034</span></div>
    </section>
    <section className="section-wrap feature-grid"><Feature number="01" title="Student led" copy="Members take ownership of every part of the team, from CAD and code to outreach and operations." /><Feature number="02" title="Real engineering" copy="We turn concepts into industrial robots on a six-week clock, learning to iterate under real constraints." /><Feature number="03" title="STEM for all" copy="We open doors through mentorship and hands-on learning for students who are new to STEM." /></section>
    <section className="section-wrap home-cta"><div><Eyebrow>Make an impact</Eyebrow><h2>Get in contact</h2></div><ArrowLink to="/contact" dark>Get in touch</ArrowLink></section>
  </>
}
function Feature({ number, title, copy }) { return <article className="feature-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article> }

function About() {
    return <><PageIntro eyebrow="The program" title={<>More than a robot.<br /><em>A launchpad.</em></>} copy="FIRST Robotics Competition brings students together to design, build, and program industrial-sized robots while learning what it means to lead." /><section className="section-wrap editorial"><InfoBlock image="./images/What-is-FRC.jpg" eyebrow="01 / The challenge" title="Engineering under pressure" copy={<>Each season, teams get a new game and just six intense weeks to create a fully functional robot. We brainstorm, model, manufacture, wire, program, test, and iterate until the machine is ready to compete.</>} /><InfoBlock image="./images/mission image.jpeg" eyebrow="02 / Our mission" title="Open the door wider" reverse copy={<>Around 60% of our members start with little to no prior STEM experience. Through mentorship and real engineering challenges, we help students build technical confidence, find their voice, and see a future for themselves in STEM.</>} /></section><section className="section-wrap quote-block"><span>“</span><blockquote>Our mission is not just to build robots, but to spread STEM into new communities.</blockquote><p>— IGNIS Robotics</p></section></>
}
function InfoBlock({ image, eyebrow, title, copy, reverse }) { return <article className={`info-block ${reverse ? 'reverse' : ''}`}><img src={image} alt="" /><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{copy}</p></div></article> }

function Sponsors() {
  return <><PageIntro eyebrow="Powering possibility" title={<>Build the future<br /><em>with us.</em></>} copy="Your support gives students the tools, materials, and opportunities to turn curiosity into capability." /><section className="section-wrap sponsor-layout"><div className="sponsor-story"><h2>Why IGNIS?</h2><p>By sponsoring IGNIS Robotics, you invest directly in accessible STEM education and the next generation of problem-solvers. Every contribution helps students design competitive robots, practice leadership, and make innovation visible in our community.</p><div className="stat-grid"><Stat value="83%" label="of FIRST alumni pursue STEM majors by year four." /><Stat value="51%" label="of female FIRST alumni major in engineering or CS." /><Stat value="63%" label="of alumni work in a STEM field." /></div></div><aside className="sponsor-card"><Eyebrow>Partner with 12034</Eyebrow><h2>Help us make the next build season possible.</h2><p>Support robot parts, tools, registration, travel, and the people who make it all happen.</p><ArrowLink to="/contact">Start a conversation</ArrowLink><a className="resource-link" href="https://docs.google.com/document/d/1VcobJuTHBTYQPiitCKM2Ftywepp1LyxhzjxF4hCkPEA/edit?usp=sharing" target="_blank" rel="noreferrer">Download sponsor packet ↗</a></aside></section><section className="section-wrap donation"><Eyebrow>Give directly</Eyebrow><h2>Donations are processed through Hack Club.</h2><p>Hack Club is a 501(c)(3) nonprofit organization supporting our team.</p><a className="arrow-link" href="https://hcb.hackclub.com/donations/start/ignis-robotics" target="_blank" rel="noreferrer">Open donation portal</a></section></>
}
function Stat({ value, label }) { return <div><strong>{value}</strong><p>{label}</p></div> }

function Team() {
    return <><PageIntro eyebrow="Team leadership" title={<>Meet the<br /><em>leadership.</em></>} copy="Meet the students guiding IGNIS Robotics and turning our shared ambition into action." /><section className="section-wrap team-grid">{leadership.map(([name, role, photo, bio, email]) => <article className="person" key={name}><div className="person-photo"><img src={`./images/leadership/${photo}`} alt={name} /></div><div className="person-details"><Eyebrow>{role}</Eyebrow><h2>{name}</h2><p>{bio}</p><a href={`mailto:${email}`}>{email} ↗</a></div></article>)}</section><section className="section-wrap team-footer"><h2>Want to build with us?</h2><ArrowLink to="/contact">Join IGNIS</ArrowLink><a className="resource-link" href="https://docs.google.com/document/d/1gpvER9PW_hBJd7ICywIsfrkxyUFQJNKHHJ8V1G0wucE/edit?usp=sharing" target="_blank" rel="noreferrer">View full members list ↗</a></section></>
}

function Contact() { return <><PageIntro eyebrow="Say hello" title={<>Let's build<br /><em>something.</em></>} copy="Whether you want to join, sponsor, mentor, or simply learn more, we would love to hear from you." /><section className="section-wrap contact-grid"><div className="contact-panel"><img src="./images/frc-robot-sample.svg" alt="FRC robot illustration" /></div><div className="contact-details"><Eyebrow>General inquiries</Eyebrow><a className="email" href="mailto:ignisrobotics@gmail.com">ignisrobotics<br />@gmail.com</a><p>We are a student-run team and check messages regularly. We will reply as soon as possible.</p><div className="contact-actions"><ArrowLink to="/sponsors">Sponsor the team</ArrowLink><a className="resource-link" href="https://docs.google.com/forms/d/1l_R-9AmQ9DnoN7g5jBsZwCWisd5Go2GexUSvODv12KM/viewform" target="_blank" rel="noreferrer">Team sign-up form ↗</a></div><div className="socials"><a href="https://www.youtube.com/channel/UCkX5yUeLi_zcfDNouJ_GSyA" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://www.instagram.com/ignis_robotics/" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section></> }
function NotFound() { return <section className="not-found section-wrap"><Eyebrow>404 / Off the field</Eyebrow><h1>This route missed the match.</h1><ArrowLink to="/">Back to home</ArrowLink></section> }

export default App
