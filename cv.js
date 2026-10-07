/* ============================================================
   cv.js — Interactions & animations
   ============================================================ */

// ---- Dynamic copyright year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Scroll-reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .timeline__item, .project-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ---- Skill bar animation ----
// Triggers once the skill section scrolls into view
const skillSection = document.getElementById('skills');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill-bar__fill').forEach(bar => {
        bar.style.transform = 'scaleX(1)';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (skillSection) skillObserver.observe(skillSection);

// ---- Active nav highlight (optional top navbar if added later) ----
// Placeholder for future nav link scroll-spy

