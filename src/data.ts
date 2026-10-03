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
  role: 'Lead Frontend & UI Engineer',
  location: 'Rome, Italy',
  intro:
    'Lead Frontend & UI Engineer with over 10 years of experience building scalable design systems, multi-platform component libraries and modern web architectures.',
  bio: [
    'I have a proven track record of leading design system implementations and driving WCAG accessibility standards across both web and mobile applications.',
    'I bridge design and engineering to deliver consistent, accessible and high-craft digital products — from Figma tokens to production components.',
  ],
  // Phrases highlighted as tags in the first bio paragraph
  bioHighlights: ['design system', 'WCAG accessibility'],
  yearsOfExperience: '10+',
  languages: [
    { code: 'IT', name: 'Italian', level: 'Native' },
    { code: 'EN', name: 'English', level: 'Professional working proficiency [B2]' },
  ],
  email: 'dibartolomeo.patrizio@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/p-db' },
    { label: 'Behance', href: 'https://www.behance.net/patriziodibartolomeo' },
  ],
}

export const experiences: Experience[] = [
  {
    role: 'Lead Frontend & UI Engineer',
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
  },
  {
    year: '2008',
    title: 'Interactive Key Award',
    text: 'Best Advergame for NBC Universal / Steel TV.',
  },
]
