/**
 * Portfolio content — edit this file to update projects and social links
 * without touching layout code.
 */

export const site = {
  name: 'John Philip S. Paller',
  shortName: 'John Philip',
  logo: 'JP.',
  tagline:
    'BSIT student focused on networking & backend development — I like building the part of the app nobody sees.',
  email: 'johnphilip.paller@example.com',
  year: 2026,
};

export const about = {
  bio: `I'm a BSIT student at Davao del Norte State College (DNSC) with a strong lean toward networking and systems — but I'm comfortable working across the stack when a project needs it. I gravitate toward backend work: the logic, data flow, and algorithms that keep everything running smoothly under the hood, rather than chasing flashy UI for its own sake.`,
  interests: [
    'Network Infrastructure',
    'Backend APIs',
    'Linux & CLI',
    'Algorithms',
    'Automation',
    'Machine Learning',
  ],
};

export const skills = [
  {
    name: 'Python',
    description: 'Scripts, APIs, automation, and ML pipelines',
    icon: 'python',
  },
  {
    name: 'JavaScript',
    description: 'Node-style logic, tooling, and web fundamentals',
    icon: 'javascript',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first styling with clean, responsive layouts',
    icon: 'tailwind',
  },
  {
    name: 'Flutter',
    description: 'Cross-platform mobile apps with solid architecture',
    icon: 'flutter',
  },
  {
    name: 'Networking',
    description: 'TCP/IP, routing, VLANs, Cisco & MikroTik basics',
    icon: 'network',
  },
  {
    name: 'Linux',
    description: 'Shell scripting, server admin, and system tooling',
    icon: 'linux',
  },
  {
    name: 'Algorithms & DS',
    description: 'Problem-solving with efficient structures and complexity in mind',
    icon: 'algorithm',
  },
  {
    name: 'Machine Learning',
    description: 'Classifiers, feature engineering, and model evaluation',
    icon: 'ml',
  },
];

export const projects = [
  {
    id: 'chainscore',
    title: 'ChainScore',
    description:
      'AI-assisted cooperative credit scoring platform with a React/TypeScript frontend and Flask + PostgreSQL backend — includes JWT auth, OCR income parsing, and model-driven risk scoring for loan officers.',
    tech: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Python', 'Tailwind CSS'],
    github: 'https://github.com/hyphocrite/Chainscore',
    live: null,
  },
  {
    id: 'geofencing-qrapp',
    title: 'GeoFence Monitor',
    description:
      'A Flutter mobile app for campus geofencing and QR-based check-ins — tracks zone entry/exit, monitors attendance events, and lets admins manage geofence areas from a clean Material 3 UI.',
    tech: ['Flutter', 'Dart', 'Material 3', 'Geofencing', 'QR'],
    github: 'https://github.com/hyphocrite/Geofencing',
    live: null,
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hyphocrite',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johnphilippaller',
    icon: 'linkedin',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/johnphilip.paller.1/',
    icon: 'facebook',
  },
  {
    name: 'Email',
    url: 'mailto:johnphilip.paller@example.com',
    icon: 'email',
  },
];

export const terminalLines = [
  { prompt: '> whoami', output: 'john_philip_paller' },
  { prompt: '> status', output: 'building cool things, one function at a time' },
  { prompt: '> focus', output: 'networking · backend · algorithms' },
  { prompt: '> stack', output: 'python · js · linux · flutter' },
];
