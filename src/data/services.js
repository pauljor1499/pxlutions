import {
  Code2,
  Smartphone,
  PenTool,
  Cloud,
  Bot,
  ShieldCheck,
} from 'lucide-react'

export const services = [
  {
    icon: Code2,
    title: 'Web Development',
    slug: 'web-development',
    summary: 'Fast, scalable web apps and marketing sites built on modern frameworks.',
    details:
      'We design and ship production-grade web platforms — from marketing sites to complex SaaS dashboards — using React, Next.js, and modern tooling. Every build is performance-budgeted, accessible, and engineered for long-term maintainability.',
    points: ['React & Next.js', 'API & headless CMS integration', 'Performance & Core Web Vitals', 'Progressive web apps'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    slug: 'mobile-development',
    summary: 'Native-feel iOS & Android apps from a single, well-architected codebase.',
    details:
      'From concept to App Store, we build cross-platform mobile products with React Native and native modules where it counts, backed by CI/CD pipelines that get releases out fast and safely.',
    points: ['React Native & native modules', 'Offline-first architecture', 'Push, payments & auth', 'App Store & Play Store delivery'],
  },
  {
    icon: PenTool,
    title: 'UI / UX Design',
    slug: 'ui-ux-design',
    summary: 'Interfaces that feel inevitable — research-led, systemized, and on-brand.',
    details:
      'Our design team pairs user research with rigorous design systems, delivering interfaces that reduce friction and reinforce your brand at every pixel — handed off design-token-ready for engineering.',
    points: ['Product research & flows', 'Design systems & tokens', 'Prototyping & usability testing', 'Motion & interaction design'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    summary: 'Infrastructure that scales quietly, with deploys you can trust.',
    details:
      'We architect cloud infrastructure on AWS, GCP, and Azure with infrastructure-as-code, observability, and zero-downtime deployment pipelines — so your team ships without fear.',
    points: ['AWS / GCP / Azure', 'Terraform & IaC', 'CI/CD pipelines', 'Monitoring & observability'],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    slug: 'ai-automation',
    summary: 'Practical AI features and workflow automation that pay for themselves.',
    details:
      'From LLM-powered product features to internal workflow automation, we integrate AI where it creates measurable leverage — grounded in evaluation, cost control, and real user need.',
    points: ['LLM product integration', 'RAG & data pipelines', 'Workflow & process automation', 'Model evaluation & guardrails'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    summary: 'Security built into the pipeline, not bolted on at the end.',
    details:
      'We harden applications and infrastructure with threat modeling, secure code review, and continuous vulnerability scanning — helping you ship fast without shipping risk.',
    points: ['Threat modeling', 'Secure code review', 'Pen testing coordination', 'Compliance readiness'],
  },
]
