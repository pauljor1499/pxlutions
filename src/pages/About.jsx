import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, Users, Zap, HeartHandshake } from 'lucide-react'
import GradientBlobs from '../components/ui/GradientBlobs'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import StatCounter from '../components/ui/StatCounter'

const values = [
  { icon: Target, title: 'Outcome first', text: 'We measure success by the metric you care about, not lines of code shipped.' },
  { icon: Zap, title: 'Move with speed', text: 'Weekly increments, fast feedback loops, and no six-month "big reveals".' },
  { icon: Users, title: 'Senior only', text: 'Every engineer and designer on your project has shipped production software before.' },
  { icon: HeartHandshake, title: 'Honest partnership', text: "If something's not working, you'll hear it from us first." },
]

const team = [
  { name: 'Paul Jor', role: 'Founder & CEO', bio: 'Sets the vision and still reviews every architecture doc.' },
  { name: 'Priya Nair', role: 'Co-Founder & CTO', bio: 'Owns engineering standards across every squad.' },
  { name: 'Diego Santos', role: 'Head of Design', bio: "Leads the design system and every product's first pixel." },
  { name: 'Lena Kowalski', role: 'Head of Engineering', bio: 'Keeps delivery predictable across concurrent builds.' },
  { name: 'Marcus Webb', role: 'Lead AI Engineer', bio: 'Ships the LLM and automation features that stick.' },
  { name: 'Sarah Chen', role: 'Head of Client Success', bio: 'Your first call after the contract is signed.' },
]

const timeline = [
  { year: '2017', text: 'PXLutions founded by three engineers tired of slow, risk-averse software shops.' },
  { year: '2019', text: 'Grew to a 12-person studio, shipped first enterprise cloud migration.' },
  { year: '2022', text: 'Opened dedicated mobile and AI practice areas.' },
  { year: '2026', text: 'Working with 45+ clients across fintech, retail, and health tech.' },
]

export default function About() {
  return (
    <>
      <section className="relative pt-20 pb-16 md:pt-28">
        <GradientBlobs />
        <div className="container-px relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              About PXLutions
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-4xl font-medium text-fg md:text-6xl md:leading-[1.05]">
              Engineers and designers building <span className="text-gradient">software that lasts</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
              We started PXLutions because too much client software gets over-promised,
              under-engineered, and abandoned after launch. We build differently.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface/70 py-20">
        <div className="container-px grid grid-cols-2 gap-10 md:grid-cols-4">
          <StatCounter value={120} suffix="+" label="Products shipped" />
          <StatCounter value={45} suffix="+" label="Clients worldwide" />
          <StatCounter value={30} suffix="+" label="Engineers & designers" />
          <StatCounter value={9} suffix="yrs" label="In business" />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind every engagement"
          />
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06} className="card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-fg/[0.06] text-accent">
                  <value.icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-px">
          <SectionHeading eyebrow="Our story" title="From three founders to a full-stack studio" align="left" />

          <div className="mt-14 flex flex-col">
            {timeline.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 0.08}
                className="grid grid-cols-[80px_1fr] gap-6 border-t border-line py-7 first:border-t-0 md:grid-cols-[120px_1fr]"
              >
                <span className="font-display text-xl font-semibold text-accent">{item.year}</span>
                <p className="text-base leading-relaxed text-fg/85">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Meet the team"
            title="The people building your product"
            description="A small group of senior engineers and designers, not a rotating cast of juniors."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} className="card p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan/40 to-cyan/5 text-sm font-semibold text-fg">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{member.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-px">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-ink-soft p-12 text-center md:p-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle at 50% 0%, #0af7eb, transparent 60%)' }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-medium text-fg md:text-5xl">
                Want to work with a team like ours?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist">
                We're always taking on new partners and new engineers. Reach out.
              </p>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
