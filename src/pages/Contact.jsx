import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import GradientBlobs from '../components/ui/GradientBlobs'
import Reveal from '../components/ui/Reveal'

const info = [
  { icon: Mail, label: 'Email', value: 'hello@pxlutions.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 214-0198' },
  { icon: MapPin, label: 'Studio', value: 'Austin, TX — remote-first' },
]

const budgets = ['< $25k', '$25k – $75k', '$75k – $150k', '$150k+']

const initialForm = { name: '', email: '', company: '', budget: budgets[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Tell us a bit more about your project (10+ characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm(initialForm)
    }, 1100)
  }

  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32">
      <GradientBlobs />
      <div className="container-px relative z-10">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-2xl text-4xl font-medium text-fg md:text-6xl md:leading-[1.05]">
              Let's talk about your <span className="text-gradient">next build</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
              Share a few details and a founder will reply within one business day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {info.map((item) => (
              <div key={item.label} className="card flex items-center gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-fg/[0.06] text-accent">
                  <item.icon size={19} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-mist">{item.label}</p>
                  <p className="text-sm font-medium text-fg">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="card p-6">
              <p className="text-sm font-medium text-fg">Prefer async?</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Send a project brief to <span className="text-accent">hello@pxlutions.com</span> and
                we'll come back with a scoped proposal within 3 business days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="card relative overflow-hidden p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                  >
                    <CheckCircle2 size={44} className="text-accent" />
                    <h3 className="text-xl font-semibold text-fg">Message sent</h3>
                    <p className="max-w-sm text-sm text-mist">
                      Thanks for reaching out — we'll be in touch within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn-outline mt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        value={form.name}
                        onChange={update('name')}
                        error={errors.name}
                        placeholder="Jamie Rivera"
                      />
                      <Field
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        error={errors.email}
                        placeholder="jamie@company.com"
                      />
                    </div>

                    <Field
                      label="Company"
                      value={form.company}
                      onChange={update('company')}
                      placeholder="Acme Inc. (optional)"
                    />

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-mist">
                        Estimated budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setForm((f) => ({ ...f, budget: b }))}
                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                              form.budget === b
                                ? 'border-cyan/60 bg-cyan/10 text-accent'
                                : 'border-line text-mist hover:text-fg'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium uppercase tracking-wider text-mist">
                        Project details
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="What are you building, and what does success look like?"
                        className={`resize-none rounded-xl border bg-fg/[0.05] px-4 py-3 text-sm text-fg placeholder:text-fg/30 outline-none transition-colors focus:border-cyan/60 ${
                          errors.message ? 'border-red-400/60' : 'border-line'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary mt-2 w-full disabled:opacity-60"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                      {status !== 'sending' && <ArrowUpRight size={16} />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, error, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium uppercase tracking-wider text-mist">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`rounded-xl border bg-fg/[0.05] px-4 py-3 text-sm text-fg placeholder:text-fg/30 outline-none transition-colors focus:border-cyan/60 ${
          error ? 'border-red-400/60' : 'border-line'
        }`}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
