// Home Page
import { ProjectCard } from '../components/ProjectCard.js';
import { projects } from '../data/projects.js';

export class HomePage {
  constructor() {
    this.init();
  }

  init() {
    this.renderHero();
    this.renderProjects();
    this.renderFooter();
  }

  renderHero() {
    const hero = document.createElement('section');
    hero.id = 'home';
    hero.className = 'hero';
    hero.innerHTML = `
      <div class="hero__content">
        <h1 class="headline-large hero__headline">Building the future of AI</h1>
        <p class="body-large hero__subheadline">
          We create innovative AI solutions and modern web applications that drive digital transformation.
        </p>
        <div class="hero__cta">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    `;
    document.getElementById('app').appendChild(hero);
  }

  renderProjects() {
    const section = document.createElement('section');
    section.id = 'projects';
    section.className = 'projects';

    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
      <div class="projects__header">
        <h2 class="headline-medium">Our Work</h2>
        <p class="body-large" style="margin-top: 1rem;">
          Explore our latest projects and innovations
        </p>
      </div>
    `;

    const grid = document.createElement('div');
    grid.className = 'projects__grid';

    projects.forEach((project, index) => {
      const card = new ProjectCard(project);
      const cardElement = card.render();
      cardElement.style.animationDelay = `${index * 0.1}s`;
      grid.appendChild(cardElement);
    });

    container.appendChild(grid);
    section.appendChild(container);
    document.getElementById('app').appendChild(section);
  }

  renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="footer__container">
        <p class="footer__text">© 2024 PlanetCo. All rights reserved.</p>
        
      </div>
    `;
    document.getElementById('app').appendChild(footer);
  }
}
