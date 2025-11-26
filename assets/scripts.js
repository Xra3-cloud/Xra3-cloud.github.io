// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Animate skill cards on scroll
function revealSkills() {
  const skills = document.querySelectorAll('.skill-card');
  const trigger = window.innerHeight * 0.9;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < trigger) skill.classList.add('active');
  });
}
window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);
