import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react'
import GradientBlobs from '../components/ui/GradientBlobs'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import StatCounter from '../components/ui/StatCounter'
import Marquee from '../components/ui/Marquee'
import { services } from '../data/services'

const stack = [
  'React', 'Next.js', 'React Native', 'Node.js', 'TypeScript', 'AWS', 'Terraform', 'PostgreSQL', 'OpenAI', 'Docker',
]

const process = [
  { step: '01', title: 'Discover', text: 'We dig into your goals, users, and constraints before writing a line of code.' },
  { step: '02', title: 'Design', text: 'Prototypes and design systems validated with real users, fast.' },
  { step: '03', title: 'Build', text: 'Agile delivery in weekly increments, with CI/CD from day one.' },
  { step: '04', title: 'Scale', text: 'We stay on to monitor, optimize, and grow what we shipped.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32">
        <GradientBlobs />
        <div className="container-px relative z-10 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            <Sparkles size={13} />
            Digital engineering studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-4xl font-medium text-fg sm:text-5xl md:text-7xl md:leading-[1.05]"
          >
Where innovation turns <span className="text-gradient">pixels</span> into <span className="text-gradient">solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg"
          >
            PXLutions is a software company designing, engineering, and shipping web, mobile,
            cloud, and AI products for teams who need to move fast without breaking things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/contact" className="btn-primary">
              Start a project
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={stack} />

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we do"
            title="Full-stack digital services, under one roof"
            description="From first pixel to production infrastructure, our teams cover the entire lifecycle of your product."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  to={`/services#${service.slug}`}
                  className="card glow-border group flex h-full flex-col gap-4 p-7 transition-colors hover:border-cyan/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-fg/[0.06] text-accent transition-transform duration-300 group-hover:scale-110">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-fg">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-mist">{service.summary}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-line bg-surface/70 py-20">
        <div className="container-px grid grid-cols-2 gap-10 md:grid-cols-4">
          <StatCounter value={120} suffix="+" label="Products shipped" />
          <StatCounter value={45} suffix="+" label="Clients worldwide" />
          <StatCounter value={98} suffix="%" label="Client retention" />
          <StatCounter value={9} suffix="yrs" label="In business" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum"
            description="No black boxes. You see progress every week, from kickoff to launch."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} className="bg-ink-soft p-8">
                <span className="font-display text-sm font-semibold text-accent">{item.step}</span>
                <h3 className="mt-4 text-lg font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-6 md:py-10">
        <div className="container-px">
          <Reveal className="card glow-border relative overflow-hidden p-10 md:p-16">
            <div className="glow-violet pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full opacity-20 blur-[90px]" />
            <p className="relative max-w-3xl text-xl font-medium leading-relaxed text-fg md:text-2xl">
              "PXLutions rebuilt our platform from the ground up in three months. Deploys went
              from a weekly ritual of dread to something we barely think about anymore."
            </p>
            <div className="relative mt-8 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan/40 to-cyan/5" />
              <div>
                <p className="text-sm font-semibold text-fg">Maria Santos</p>
                <p className="text-xs text-mist">VP Engineering, Northline Retail</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-ink-soft p-12 text-center md:p-20">
            <div className="glow-cta pointer-events-none absolute inset-0 opacity-30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-medium text-fg md:text-5xl">
                Have a product in mind? Let's ship it.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist">
                Tell us about your project and we'll get back to you within one business day.
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
