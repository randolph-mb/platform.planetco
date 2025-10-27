// ProjectCard Component
export class ProjectCard {
  constructor(project) {
    this.project = project;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-card__icon">${this.project.icon}</span>
      <h3 class="project-card__title">${this.project.title}</h3>
      <p class="project-card__description">${this.project.description}</p>
      <div class="project-card__tags">
        ${this.project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
      </div>
      ${this.project.link ? `<a href="${this.project.link}" class="project-card__link">Learn more →</a>` : ''}
    `;

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(20px)';
          setTimeout(() => {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(card);

    return card;
  }
}
