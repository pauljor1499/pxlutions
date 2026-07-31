import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.78.12 3.07.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 3h3.1l-6.77 7.74L23.2 21h-6.23l-4.88-6.38L6.5 21H3.4l7.24-8.28L2.8 3h6.38l4.4 5.83L18.9 3Zm-1.09 16.17h1.72L7.28 4.74H5.43l12.38 14.43Z" />
  </svg>
)

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', to: '/services#web-development' },
      { label: 'Mobile Apps', to: '/services#mobile-development' },
      { label: 'UI / UX Design', to: '/services#ui-ux-design' },
      { label: 'Cloud & DevOps', to: '/services#cloud-devops' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-soft">
      <div className="container-px grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-sm font-bold text-accent">
              PX
            </span>
            <span className="font-display text-lg font-semibold text-fg">PXLutions</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            A software company designing and engineering digital products — web, mobile, cloud,
            and AI — for teams who need to move fast without breaking things.
          </p>
          <div className="flex gap-3 pt-2">
            {[GithubIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-mist transition-all hover:border-cyan/50 hover:text-accent"
                aria-label="social link"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-fg/80">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-mist transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-px flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-xs text-mist md:flex-row">
        <p>© {new Date().getFullYear()} PXLutions. All rights reserved.</p>
        <Link to="/contact" className="inline-flex items-center gap-1 text-accent hover:underline">
          Let's build something <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  )
}
