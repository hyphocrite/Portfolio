import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  site,
  about,
  skills,
  projects,
  socialLinks,
  terminalLines,
} from './data.js';

gsap.registerPlugin(ScrollTrigger);

// ─── Icons (inline SVGs) ───────────────────────────────────────────────────

const icons = {
  python: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><path d="M12 2c-3 0-5 1.5-5 4v2h5"/><path d="M12 22c3 0 5-1.5 5-4v-2h-5"/><path d="M7 10h10v4H7z"/><path d="M9 6h.01M15 18h.01"/></svg>`,
  javascript: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4M15 11v6"/></svg>`,
  tailwind: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M4 8c2-4 6-4 8 0s6 4 8 0M4 16c2-4 6-4 8 0s6 4 8 0"/></svg>`,
  flutter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M4 14l6-6 4 4 6-6"/><path d="M14 4h6v6"/><path d="M4 20l8-8"/></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M8.5 15.5 10 12M15.5 15.5 14 12M7 19h10"/></svg>`,
  linux: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9.5 15c1 1.5 4 1.5 5 0"/></svg>`,
  algorithm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 15l3-4 3 2 4-6"/></svg>`,
  ml: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.021C22 6.484 17.522 2 12 2z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
  external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-6 w-6" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  leaf: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
};

// ─── Theme ───────────────────────────────────────────────────────────────────

const THEME_KEY = 'jp-portfolio-theme';

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const icon = theme === 'dark' ? icons.sun : icons.moon;
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  ['theme-toggle', 'theme-toggle-mobile'].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.innerHTML = icon;
      btn.setAttribute('aria-label', label);
    }
  });
}

function initTheme() {
  applyTheme(getPreferredTheme());
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);
}

// ─── Mobile nav ──────────────────────────────────────────────────────────────

function initMobileNav() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const links = menu?.querySelectorAll('a') ?? [];

  if (btn) btn.innerHTML = icons.menu;

  const close = () => {
    menu?.classList.add('hidden');
    btn?.setAttribute('aria-expanded', 'false');
    btn && (btn.innerHTML = icons.menu);
  };

  const open = () => {
    menu?.classList.remove('hidden');
    btn?.setAttribute('aria-expanded', 'true');
    btn && (btn.innerHTML = icons.close);
  };

  btn?.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });

  links.forEach((link) => link.addEventListener('click', close));
}

// ─── Navbar scroll blur ──────────────────────────────────────────────────────

function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('shadow-sm', window.scrollY > 24);
    nav.classList.toggle('border-b', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Render dynamic content ──────────────────────────────────────────────────

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (skill, i) => `
    <article class="skill-card card p-6 reveal" data-index="${i}">
      <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl" style="background: color-mix(in srgb, var(--accent) 20%, transparent); color: var(--primary);">
        ${icons[skill.icon] ?? icons.algorithm}
      </div>
      <h3 class="mb-2 font-semibold" style="color: var(--text);">${skill.name}</h3>
      <p class="text-sm leading-relaxed" style="color: var(--text-muted);">${skill.description}</p>
    </article>
  `,
    )
    .join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project, i) => `
    <article class="project-card card flex flex-col p-6 reveal" data-index="${i}">
      <div class="mb-3 flex items-start justify-between gap-3">
        <h3 class="text-lg font-semibold" style="color: var(--text);">${project.title}</h3>
        <span class="font-mono text-xs" style="color: var(--accent);">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <p class="mb-5 flex-1 text-sm leading-relaxed" style="color: var(--text-muted);">${project.description}</p>
      <div class="mb-5 flex flex-wrap gap-2">
        ${project.tech.map((t) => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
      <div class="flex flex-wrap gap-3">
        ${
          project.github
            ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary !px-4 !py-2 text-xs gap-1.5">
            ${icons.github} GitHub
          </a>`
            : `<span class="inline-flex items-center rounded-2xl px-4 py-2 text-xs font-mono gap-1.5" style="color: var(--text-muted); border: 1px dashed var(--border);">${icons.github} Repo coming soon</span>`
        }
        ${
          project.live
            ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn-primary !px-4 !py-2 text-xs gap-1.5">
            ${icons.external} Live Demo
          </a>`
            : `<span class="inline-flex items-center rounded-2xl px-4 py-2 text-xs font-mono" style="color: var(--text-muted); border: 1px dashed var(--border);">Demo coming soon</span>`
        }
      </div>
    </article>
  `,
    )
    .join('');
}

function renderSocial() {
  const row = document.getElementById('social-links');
  if (!row) return;

  row.innerHTML = socialLinks
    .map(
      (link) => `
    <a href="${link.url}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">
      ${icons[link.icon]}
    </a>
  `,
    )
    .join('');
}

function renderInterests() {
  const row = document.getElementById('interest-tags');
  if (!row) return;

  row.innerHTML = about.interests.map((tag) => `<span class="tag-pill gap-1.5">${icons.leaf} ${tag}</span>`).join('');
}

// ─── Terminal typing animation ───────────────────────────────────────────────

function initTerminal() {
  const output = document.getElementById('terminal-output');
  if (!output || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (output) {
      output.innerHTML = terminalLines
        .map((l) => `<div class="mb-1"><span style="color: var(--accent);">${l.prompt}</span><br/><span style="color: var(--text);">${l.output}</span></div>`)
        .join('');
    }
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let phase = 'prompt'; // prompt | output | pause
  let currentLine = '';
  const displayed = [];

  const typeSpeed = 45;
  const pauseAfterLine = 1800;
  const pauseBetweenCycles = 2500;

  function render() {
    const history = displayed
      .map(
        (l) =>
          `<div class="mb-2"><span style="color: var(--accent);">${l.prompt}</span><br/><span style="color: var(--text);">${l.output}</span></div>`,
      )
      .join('');

    const line = terminalLines[lineIndex];
  let active = '';
    if (phase === 'prompt') {
      active = `<div><span style="color: var(--accent);">${currentLine}</span><span class="terminal-cursor"></span></div>`;
    } else if (phase === 'output') {
      active = `<div class="mb-1"><span style="color: var(--accent);">${line.prompt}</span><br/><span style="color: var(--text);">${currentLine}</span><span class="terminal-cursor"></span></div>`;
    }

    output.innerHTML = history + active;
  }

  function tick() {
    const line = terminalLines[lineIndex];

    if (phase === 'prompt') {
      if (charIndex < line.prompt.length) {
        currentLine += line.prompt[charIndex++];
        render();
        setTimeout(tick, typeSpeed);
      } else {
        phase = 'output';
        charIndex = 0;
        currentLine = '';
        setTimeout(tick, 300);
      }
    } else if (phase === 'output') {
      if (charIndex < line.output.length) {
        currentLine += line.output[charIndex++];
        render();
        setTimeout(tick, typeSpeed);
      } else {
        displayed.push({ prompt: line.prompt, output: line.output });
        if (displayed.length > 3) displayed.shift();
        phase = 'pause';
        setTimeout(() => {
          lineIndex = (lineIndex + 1) % terminalLines.length;
          if (lineIndex === 0) {
            displayed.length = 0;
            setTimeout(() => {
              phase = 'prompt';
              charIndex = 0;
              currentLine = '';
              tick();
            }, pauseBetweenCycles);
          } else {
            phase = 'prompt';
            charIndex = 0;
            currentLine = '';
            tick();
          }
        }, pauseAfterLine);
      }
    }
  }

  tick();
}

// ─── GSAP scroll animations ──────────────────────────────────────────────────

function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.utils.toArray('.reveal-section').forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 32,
      duration: 0.5,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray('#skills-grid .skill-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 24,
      duration: 0.4,
      delay: i * 0.06,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray('#projects-grid .project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 28,
      duration: 0.45,
      delay: i * 0.08,
      ease: 'power2.out',
    });
  });

  gsap.from('#hero-content', {
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: 'power2.out',
    delay: 0.15,
  });

  gsap.from('#hero-terminal', {
    opacity: 0,
    x: 24,
    duration: 0.7,
    ease: 'power2.out',
    delay: 0.35,
  });
}

// ─── Init ────────────────────────────────────────────────────────────────────

function init() {
  document.title = `${site.name} — Portfolio`;

  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = String(site.year);

  renderSkills();
  renderProjects();
  renderSocial();
  renderInterests();
  initTheme();
  initMobileNav();
  initNavbarScroll();
  initTerminal();
  initScrollAnimations();
}

document.addEventListener('DOMContentLoaded', init);
