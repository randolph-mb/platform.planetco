// Main Application
import { Navigation } from './components/Navigation.js';
import { HomePage } from './pages/HomePage.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Initialize navigation
    new Navigation();

    // Render home page
    new HomePage();

    // Add any global event listeners or initialization here
    this.initializeAnimations();
  }

  initializeAnimations() {
    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
