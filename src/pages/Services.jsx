import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import GradientBlobs from '../components/ui/GradientBlobs'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="relative pt-20 pb-16 md:pt-28">
        <GradientBlobs />
        <div className="container-px relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl text-4xl font-medium text-fg md:text-6xl md:leading-[1.05]">
              Every capability your <span className="text-gradient">product</span> needs to launch and scale
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
              We embed senior engineers and designers into your team, or run the whole build
              ourselves — whichever gets you to launch faster.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-px flex flex-col gap-24">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-10 md:grid-cols-2 md:items-center"
            >
              <Reveal className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-fg/[0.06] text-accent">
                  <service.icon size={26} />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-fg md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mist">{service.details}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-fg/85">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-accent">
                        <Check size={12} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  Discuss this service <ArrowUpRight size={15} />
                </Link>
              </Reveal>

              <Reveal delay={0.1} className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="card glow-border relative flex aspect-[4/3] items-center justify-center overflow-hidden p-10">
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-40 ${i % 2 === 1 ? 'glow-panel-coral' : 'glow-panel'}`}
                  />
                  <service.icon size={96} className="relative text-accent/70" strokeWidth={1} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-px">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-ink-soft p-12 text-center md:p-20">
            <div className="glow-cta pointer-events-none absolute inset-0 opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-medium text-fg md:text-5xl">
                Not sure which service fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist">
                Tell us where you're stuck and we'll recommend the right path — no obligation.
              </p>
              <Link to="/contact" className="btn-primary mt-8 inline-flex">
                Talk to our team
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
