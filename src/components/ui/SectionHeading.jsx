import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-medium text-white md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-mist md:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
