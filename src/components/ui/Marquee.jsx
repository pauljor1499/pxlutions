export default function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden border-y border-line py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-16">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-lg font-medium tracking-wide text-fg/30 transition-colors hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
