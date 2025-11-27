// Smooth scrolling already via CSS scroll-behavior

// Rotate hero titles
let titles = document.querySelectorAll('.rotating-titles span');
let current = 0;
titles[current].classList.add('active');
setInterval(() => {
  titles[current].classList.remove('active');
  current = (current + 1) % titles.length;
  titles[current].classList.add('active');
}, 2000);

// Animate skill bars and cards on scroll
function revealElements() {
  const skills = document.querySelectorAll('.skill-card');
  const timeline = document.querySelectorAll('.timeline-item');
  const trigger = window.innerHeight * 0.9;
  
  skills.forEach(skill => {
    const top = skill.getBoundingClientRect().top;
    if(top < trigger) {
      skill.classList.add('active');
      const fill = skill.querySelector('.skill-fill');
      fill.style.width = fill.style.width || fill.getAttribute('style').replace('width:','');
    }
  });
  
  timeline.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < trigger) item.classList.add('active');
  });
}
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
