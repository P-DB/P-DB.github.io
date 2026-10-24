// Edit this file to update the portfolio content.

export type Highlight = string | { title: string; text: string }

export type Experience = {
  role: string
  company: string
  url?: string
  type?: string // e.g. "Full time", "Freelance"
  start: string // "YYYY" or "YYYY-MM"
  end?: string // omit for current role
  highlights: Highlight[]
}

export const profile = {
  name: 'Patrizio Di Bartolomeo',
  logo: 'P-DB',
  role: 'Frontend & UI Developer',
  location: 'Rome, Italy',
  bio: [
    'I build design system foundations with reusable components and drive WCAG accessibility standards across web and mobile applications.',
    'I bridge design and engineering to deliver consistent, accessible and high-craft digital products — from Figma tokens to production components.',
  ],
  // Phrases highlighted as tags in the first bio paragraph
  bioHighlights: ['design system', 'WCAG accessibility'],
  yearsOfExperience: '10+',
  languages: [
    { code: 'IT', name: 'Italian', level: 'Native' },
    { code: 'EN', name: 'English', level: 'Professional working proficiency' },
  ],
  email: 'dibartolomeo.patrizio@gmail.com',
  links: [
    { label: 'Unframed', href: 'https://p-db.github.io/unframed-ui/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/p-db' },
    { label: 'Behance', href: 'https://www.behance.net/patriziodibartolomeo' },
  ],
}

export const experiences: Experience[] = [
  {
    role: 'Lead Frontend & UI Developer',
    company: 'Soldo',
    url: 'https://www.soldo.com',
    type: 'Full time',
    start: '2019',
    highlights: [
      {
        title: 'Design System Leadership',
        text: 'Spearheaded the end-to-end implementation and architecture of the company’s new Design System and multi-platform component library, significantly accelerating feature delivery and developer efficiency across product teams.',
      },
      {
        title: 'Web & Mobile Accessibility',
        text: 'Introduced and institutionalized WCAG accessibility standards across web and mobile applications, embedding semantic structures, screen reader support, keyboard navigation and contrast-compliant token systems.',
      },
      {
        title: 'Console & Mobile Reskin',
        text: 'Led the full UI reskin of the core Business Console and Mobile App, managing priorities via agile frameworks with a focus on performance, micro-interactions and high design fidelity.',
      },
      {
        title: 'Design & Engineering Bridge',
        text: 'Partnered closely with design and product teams to translate Figma design systems into scalable, maintainable production code aligned with strict UX and brand standards.',
      },
    ],
  },
  {
    role: 'Frontend / UI Developer',
    company: 'Iccrea Banca S.p.A.',
    type: 'Freelance',
    start: '2016',
    end: '2019',
    highlights: [
      'Developed user-friendly, responsive frontend interfaces for custom web applications and banking tools.',
      'Designed and built mobile UI layouts for client-facing platforms with a strong focus on usability and cross-device consistency.',
      'Collaborated with product design teams to ensure high visual fidelity and smooth design-to-code implementation.',
    ],
  },
  {
    role: 'Frontend / UI Developer',
    company: 'Independent',
    type: 'Freelance',
    start: '2012',
    end: '2019',
    highlights: [
      'Executed UI redesigns and frontend development for high-profile media clients, including Studio Universal, Diva Universal and Syfy.',
      'Built interactive web applications and engaging digital experiences, managing projects end-to-end from UI layout to final code.',
    ],
  },
  {
    role: 'Web Design Instructor',
    company: 'ABC Formazione',
    type: 'Freelance',
    start: '2014',
    end: '2016',
    highlights: [
      'Designed and delivered Web Design courses covering HTML/CSS standards, UI layout principles and custom WordPress development.',
    ],
  },
  {
    role: 'Web & Multimedia Designer / Developer',
    company: 'Various companies & clients',
    start: '2006',
    end: '2016',
    highlights: [
      {
        title: 'Clients',
        text: 'Lottomatica, Toyota Financial Services, NBC Universal Italy, Universal Channel Greece, Percorsi S.p.A., Fluilink.',
      },
      {
        title: 'Key achievements',
        text: 'Created interactive digital products, e-learning platforms and animated online content; built a foundation in visual design, usability and web technologies.',
      },
    ],
  },
]

export type Project = {
  name: string
  logoPaths: string[] // SVG path data for the project's mark, in a 32×32 box
  // One entry per paragraph; `highlights` are phrases shown as blue tags
  description: { title: string; text: string; highlights: string[] }[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Unframed',
    // Unframed's mark: a square with a U cut out of its top, and the cut-out
    // piece rising out of it (from unframed-ui apps/website Logo.tsx)
    logoPaths: ['M3 7h5v11a8 8 0 0 0 16 0V7h5v24H3z', 'M13 2h6v16a3 3 0 0 1-6 0z'],
    description: [
      {
        title: 'What it is',
        text: 'My open-source library of accessible, themeable web components, built with Lit and TypeScript. They work in React, Vue, Angular, Svelte or plain HTML, follow WAI-ARIA patterns with full keyboard support, and behave like native controls in forms.',
        highlights: ['accessible, themeable web components', 'WAI-ARIA patterns'],
      },
      {
        title: 'How to use it',
        text: 'Install them from npm, or copy a component into your project with one command and own the code. Every component is documented with live examples in Storybook.',
        highlights: ['own the code', 'live examples'],
      },
    ],
    links: [
      { label: 'Visit Unframed', href: 'https://p-db.github.io/unframed-ui/' },
      { label: 'Storybook', href: 'https://p-db.github.io/unframed-ui/storybook/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/@unframed/core' },
      { label: 'GitHub', href: 'https://github.com/P-DB/unframed-ui' },
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Frontend Development',
    items: [
      'React / React Native',
      'TypeScript',
      'JavaScript (ES6+)',
      'Web Components (Stencil.js)',
      'HTML5 / Semantic HTML',
      'CSS3 / SASS / CSS Modules',
      'Git / NPM / Modern Tooling',
    ],
  },
  {
    group: 'Design Systems & UI Engineering',
    items: [
      'Component Architecture',
      'Web & Mobile Accessibility (WCAG 2.1)',
      'Design Tokens & Semantic Systems',
      'Theming & Dark Mode',
      'Responsive & Adaptive Layouts',
      'UI Performance & Optimization',
      'Cross-Platform Consistency',
    ],
  },
  {
    group: 'Design & User Experience',
    items: [
      'Interaction Design & Micro-interactions',
      'Design-to-Code Implementation',
      'Figma Systems Integration',
      'Visual Consistency & Polish',
      'Usability & Ergonomics',
    ],
  },
  {
    group: 'Leadership & Collaboration',
    items: [
      'Technical & Team Leadership',
      'Mentoring & Code Reviews',
      'Cross-functional Collaboration',
      'Agile & Product Workflows',
    ],
  },
]

export const awards = [
  {
    year: '2011',
    title: 'PromaxBDA World Gold',
    text: 'Design Award for NBC Universal / Steel TV interactive web animation.',
    link: {
      label: 'See Human Target on Behance',
      href: 'https://www.behance.net/gallery/20127791/Steel-TV-Human-Target-Advergame',
    },
  },
  {
    year: '2008',
    title: 'Interactive Key Award',
    text: 'Best Advergame for NBC Universal / Steel TV.',
    link: {
      label: 'See Chuck on Behance',
      href: 'https://www.behance.net/gallery/20296377/Steel-TV-Chuck-Advergame',
    },
  },
]
