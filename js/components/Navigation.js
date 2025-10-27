// Navigation Component
export class Navigation {
  constructor() {
    this.nav = null;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
      <div class="nav__container">
        <a href="#home" class="nav__logo">PlanetCo</a>
        <ul class="nav__menu">
          <li><a href="#home" class="nav__link">Home</a></li>
          <li><a href="#projects" class="nav__link">Projects</a></li>
          <li><a href="#about" class="nav__link">About</a></li>
          <li><a href="#contact" class="nav__link">Contact</a></li>
        </ul>
      </div>
    `;

    document.body.prepend(nav);
    this.nav = nav;
  }

  attachEventListeners() {
    // Smooth scroll
    const links = this.nav.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this.nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      } else {
        this.nav.style.boxShadow = 'none';
      }
    });
  }
}
