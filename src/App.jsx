import { useEffect, useRef, useState } from 'react'
import { profile, heroStack, whatIDo, now, skills, projects } from './data'

const chip = 'rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-neutral-300'
const btnWhite = 'inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-neutral-200'
const btnLine = 'inline-flex items-center rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10'


function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ${on ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>{children}</div>
}

function Card({ children, className = '', ...rest }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return <div onMouseMove={move} className={`card ${className}`} {...rest}>{children}</div>
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
)

function useShots(shots) {
  const [ok, setOk] = useState([])
  const key = (shots || []).join()
  useEffect(() => {
    let live = true
    Promise.all((shots || []).map((src) => new Promise((res) => { const im = new Image(); im.onload = () => res(src); im.onerror = () => res(null); im.src = src }))).then((a) => { if (live) setOk(a.filter(Boolean)) })
    return () => { live = false }
  }, [key])
  return ok
}

function Media({ p, shots }) {
  if (shots.length) {
    return (
      <div className="aspect-video overflow-hidden border-b border-white/10">
        <img src={shots[0]} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      </div>
    )
  }
  const initials = p.title.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <div className="relative grid aspect-video place-items-center overflow-hidden border-b border-white/10">
      <div className="tiles absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,72,61,.5),transparent_65%)]" />
      <span className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/20 bg-black/40 text-3xl font-bold backdrop-blur transition-transform duration-500 group-hover:scale-110">{initials}</span>
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <h2 className="mb-10 text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  )
}

function Badge({ status }) {
  const tone = status === 'In progress' ? 'border-amber-400/40 text-amber-300' : status === 'Live' ? 'border-emerald-400/40 text-emerald-300' : 'border-white/25 text-neutral-200'
  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${tone}`}>{status}</span>
}

function Gallery({ project, shots }) {
  return (
    <div className="flex gap-4 overflow-x-auto p-6 pt-0">
      {shots.map((src, i) => (
        <div key={src} className="aspect-[9/19] w-36 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black/40 transition-transform duration-300 hover:-translate-y-2 sm:w-40">
          <img src={src} alt={`${project.title} screen ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}

function Project({ p, i, open }) {
  const href = p.live || p.github
  const shots = useShots(p.shots)
  const gallery = p.phone && shots.length > 0
  return (
    <Reveal delay={(i % 2) * 120} className={gallery ? 'md:col-span-2' : ''}>
      <Card className="group flex h-full cursor-pointer flex-col" role="button" tabIndex={0} onClick={() => open(p)} onKeyDown={(e) => e.key === 'Enter' && open(p)}>
        {!gallery && <Media p={p} shots={shots} />}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-neutral-500"><span>{String(i + 1).padStart(2, '0')}</span><span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-neutral-300">{p.tag}</span></div>
              <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            </div>
            {href && <a href={href} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"><Arrow /></a>}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Badge status={p.status} />
            {p.note && <span className="text-sm text-neutral-400">{p.note}</span>}
          </div>
          <p className="mt-3 leading-relaxed text-neutral-300">{p.tagline}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className={chip}>{t}</li>)}</ul>
          <span className="mt-5 inline-block text-sm font-medium text-accent">View details</span>
        </div>
        {gallery && <Gallery project={p} shots={shots} />}
      </Card>
    </Reveal>
  )
}

function Modal({ p, onClose }) {
  const shots = useShots(p.shots)
  const gallery = p.phone && shots.length > 0
  useEffect(() => {
    const key = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [])
  const H = ({ children }) => <h4 className="mb-3 mt-8 text-lg font-semibold">{children}</h4>
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()} className="rise relative w-full max-w-3xl overflow-hidden rounded-t-3xl border border-white/10 bg-[#1a1212] sm:rounded-3xl">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 backdrop-blur transition-colors hover:bg-white hover:text-black">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
        <div className="max-h-[92vh] overflow-y-auto">
        {gallery ? <div className="pt-14"><Gallery project={p} shots={shots} /></div> : <Media p={p} shots={shots} />}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold sm:text-3xl">{p.title}</h3>
            <Badge status={p.status} />
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-neutral-300">{p.tag}</span>
          </div>
          {p.note && <p className="mt-2 text-sm text-neutral-400">{p.note}</p>}
          <H>About this project</H>
          <p className="leading-relaxed text-neutral-300">{p.overview}</p>
          {p.sample && <p className="mt-3 text-sm text-neutral-400">{p.sample}</p>}
          <H>What you can do</H>
          <ul className="space-y-2">{p.features.map((f) => <li key={f} className="flex gap-3 text-neutral-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{f}</li>)}</ul>
          <H>How it works</H>
          <ol className="space-y-3">{p.how.map((h, n) => <li key={h} className="flex gap-3 text-neutral-300"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-white">{n + 1}</span>{h}</li>)}</ol>
          <H>My role</H>
          <p className="leading-relaxed text-neutral-300">{p.role}</p>
          <H>Built with</H>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{p.stack.map(([name, why]) => <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-medium">{name}</p><p className="mt-1 text-sm text-neutral-400">{why}</p></div>)}</div>
          {(p.live || p.github) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={btnWhite}>Live demo</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={btnLine}>View code on GitHub</a>}
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

function Copy({ text, label = 'Copy', className = 'rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10' }) {
  const [ok, setOk] = useState(false)
  const copy = () => navigator.clipboard.writeText(text).then(() => { setOk(true); setTimeout(() => setOk(false), 1500) })
  return <button onClick={copy} className={className}>{ok ? 'Copied' : label}</button>
}

function Row({ label, children }) {
  return (
    <li className="flex items-center justify-between gap-4 py-3">
      <span className="text-neutral-400">{label}</span>
      <span className="flex items-center gap-3 text-right">{children}</span>
    </li>
  )
}

export default function App() {
  const [sel, setSel] = useState(null)
  return (
    <>
      <header className="sticky top-0 z-20 px-4 pt-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm backdrop-blur-md">
          <a href="#top" className="flex items-center gap-2.5 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent/60 bg-accent/15 font-mono text-xs font-bold text-accent shadow-[0_0_18px_rgba(229,72,61,.45)]">&lt;/&gt;</span>
            {profile.handle}
          </a>
          <div className="hidden gap-6 text-neutral-300 sm:flex">
            {['about', 'skills', 'projects'].map((s) => <a key={s} href={`#${s}`} className="capitalize hover:text-white">{s}</a>)}
          </div>
          <a href="#contact" className="rounded-md bg-white px-4 py-1.5 font-semibold text-black hover:bg-neutral-200">Let's talk</a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-10 pt-16 md:grid-cols-2 md:pt-24">
          <div className="rise">
            <h1 className="text-[2.4rem] font-normal leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Building <b className="font-semibold">fast, scalable</b> web and mobile <b className="font-semibold">applications</b>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-neutral-300">{profile.title} working with React, Next.js, React Native and Node.js. {profile.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className={btnWhite}>Let's talk</a>
              <a href="#projects" className={btnLine}>View projects</a>
              <a href="/Muhammad-Ali-CV.pdf" download="Muhammad-Ali-CV.pdf" className={btnLine}>Download CV</a>
            </div>
          </div>
          <div className="rise relative mx-auto aspect-[4/5] w-full max-w-md" style={{ animationDelay: '.3s', animationDuration: '1.1s' }}>
            <div className="drift absolute inset-0">
              <div className="tiles absolute -inset-x-6 -inset-y-12 sm:-inset-12" />
              <div className="absolute -inset-x-6 -inset-y-12 sm:-inset-12 bg-[radial-gradient(closest-side_at_52%_44%,rgba(255,170,150,.45),rgba(229,72,61,.3)_50%,transparent)]" />
              <img src="/me.webp" alt="Muhammad Ali" width="1788" height="2232" decoding="async" fetchpriority="high" className="photo-fade absolute inset-0 h-full w-full object-cover object-top" />
            </div>
          </div>
        </section>

        <div className="overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="marquee flex w-max gap-14 text-xl font-medium text-neutral-500">
            {[...heroStack, ...heroStack, ...heroStack, ...heroStack].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>

        <Section id="about" title="About me">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">{profile.about}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {whatIDo.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}><Card className="h-full p-6">
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{w.text}</p>
              </Card></Reveal>
            ))}
          </div>
          <Reveal className="mt-4"><Card className="p-6">
            <h3 className="mb-4 text-lg font-semibold">What I'm doing right now</h3>
            <ul className="space-y-3">
              {now.map((n) => <li key={n} className="flex gap-3 text-neutral-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{n}</li>)}
            </ul>
          </Card></Reveal>
        </Section>

        <Section id="skills" title="Skills and tools">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={(i % 3) * 100}><Card className="h-full p-6">
                <h3 className="mb-4 font-semibold">{g.group}</h3>
                <ul className="flex flex-wrap gap-2">{g.items.map((it) => <li key={it} className={chip}>{it}</li>)}</ul>
              </Card></Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured projects">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{projects.map((p, i) => <Project key={p.title} p={p} i={i} open={setSel} />)}</div>
        </Section>

        <Section id="contact" title="Let's work together">
          <Reveal>
            <Card className="p-6 sm:p-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                  <p className="text-lg text-neutral-300">Have a project or an opportunity in mind? Send me a message.</p>
                  <p className="mt-6 break-all text-xl font-semibold sm:text-2xl">{profile.email}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={`mailto:${profile.email}`} className={btnWhite}>Send email</a>
                    <Copy text={profile.email} label="Copy email" className={btnLine} />
                  </div>
                </div>
                <ul className="divide-y divide-white/10 text-sm">
                  <Row label="Phone">{profile.phone}<Copy text={profile.phone} /></Row>
                  <Row label="WhatsApp"><a href="https://wa.me/923198390955" target="_blank" rel="noreferrer" className="hover:text-white hover:underline">Message me</a></Row>
                  <Row label="GitHub"><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">@{profile.handle}</a></Row>
                  <Row label="LinkedIn"><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">@{profile.handle}</a></Row>
                  <Row label="Resume"><a href="/Muhammad-Ali-CV.pdf" download="Muhammad-Ali-CV.pdf" className="font-medium text-white underline underline-offset-4 hover:text-accent">Download CV</a></Row>
                </ul>
              </div>
            </Card>
          </Reveal>
        </Section>
      </main>
      {sel && <Modal p={sel} onClose={() => setSel(null)} />}
      <footer className="py-8 text-center text-sm text-neutral-500">© 2026 {profile.name}, {profile.handle}</footer>
    </>
  )
}
