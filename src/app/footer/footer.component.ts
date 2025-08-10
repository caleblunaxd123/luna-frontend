// footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface FooterLink {
  name: string;
  route: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="footer">
      <!-- Main Footer -->
      <div class="footer-main">
        <div class="container">
          <div class="footer-grid">
            <!-- Company Info -->
            <div class="footer-section">
              <div class="footer-logo">
                <div class="logo-icon">
                  <i class="fas fa-moon"></i>
                </div>
                <span class="logo-text">Luna IT Solutions</span>
              </div>
              <p class="company-description">
                Transformamos ideas en soluciones tecnológicas innovadoras.
                Especialistas en desarrollo de software, consultoría IT y
                transformación digital.
              </p>
              <div class="contact-info">
                <div class="contact-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Lima, Perú</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-phone"></i>
                  <span>+51 999 888 777</span>
                </div>
                <div class="contact-item">
                  <i class="fas fa-envelope"></i>
                  <span>info&#64;lunait.pe</span>
                </div>
              </div>
            </div>

            <!-- Services -->
            <div class="footer-section">
              <h4 class="footer-title">Servicios</h4>
              <ul class="footer-links">
                <li *ngFor="let service of services">
                  <a [routerLink]="service.route">
                    <i [class]="service.icon" *ngIf="service.icon"></i>
                    {{ service.name }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Company -->
            <div class="footer-section">
              <h4 class="footer-title">Empresa</h4>
              <ul class="footer-links">
                <li *ngFor="let link of companyLinks">
                  <a [routerLink]="link.route">
                    <i [class]="link.icon" *ngIf="link.icon"></i>
                    {{ link.name }}
                  </a>
                </li>
              </ul>
            </div>

            <!-- Newsletter & Social -->
            <div class="footer-section">
              <h4 class="footer-title">Mantente Conectado</h4>
              <p class="newsletter-text">
                Suscríbete a nuestro newsletter para recibir las últimas
                noticias sobre tecnología y nuestros servicios.
              </p>

              <!-- Newsletter Form -->
              <form class="newsletter-form" (ngSubmit)="onSubscribe()" #newsletterForm="ngForm">
                <div class="input-group">
                  <input
                    type="email"
                    placeholder="Tu email"
                    [(ngModel)]="newsletterEmail"
                    name="email"
                    required
                    email
                    class="newsletter-input">
                  <button type="submit" class="newsletter-btn" [disabled]="!newsletterForm.valid">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>

              <!-- Social Links -->
              <div class="social-links">
                <a *ngFor="let social of socialLinks"
                   [href]="social.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="social-link"
                   [style.background]="social.color"
                   [title]="social.name">
                  <i [class]="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>&copy; {{ currentYear }} Luna IT Solutions. Todos los derechos reservados.</p>
            </div>
            <div class="footer-bottom-links">
              <a routerLink="/privacidad">Política de Privacidad</a>
              <a routerLink="/terminos">Términos de Servicio</a>
              <a routerLink="/cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      margin-top: auto;
    }
    .footer-title{
      color: white;
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Main Footer */
    .footer-main {
      padding: 4rem 0 2rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
    }

    .footer-section h4 {
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    /* Company Info */
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .logo-text {
      font-size: 1.3rem;
      font-weight: 700;
    }

    .company-description {
      line-height: 1.7;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .contact-item i {
      width: 16px;
      color: #3498db;
    }

    /* Footer Links */
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .footer-links a:hover {
      color: #3498db;
      padding-left: 0.5rem;
    }

    .footer-links i {
      width: 16px;
      font-size: 0.9rem;
    }

    /* Newsletter */
    .newsletter-text {
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .newsletter-form {
      margin-bottom: 2rem;
    }

    .input-group {
      display: flex;
      border-radius: 25px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .newsletter-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      background: transparent;
      color: white;
      outline: none;
    }

    .newsletter-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .newsletter-btn {
      padding: 0.75rem 1rem;
      background: #3498db;
      border: none;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .newsletter-btn:hover:not(:disabled) {
      background: #2980b9;
    }

    .newsletter-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Social Links */
    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    /* Footer Bottom */
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 0;
      background: rgba(0, 0, 0, 0.2);
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    .copyright p {
      margin: 0;
      color: rgba(255, 255, 255, 0.7);
    }

    .footer-bottom-links {
      display: flex;
      gap: 2rem;
    }

    .footer-bottom-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #3498db;
    }

    .tech-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }

    .tech-badge i {
      color: #e74c3c;
      animation: heartbeat 2s infinite;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-main {
        padding: 3rem 0 2rem;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .footer-bottom-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }

      .container {
        padding: 0 1rem;
      }
    }

    @media (max-width: 480px) {
      .social-links {
        justify-content: center;
      }

      .footer-logo {
        justify-content: center;
        text-align: center;
      }

      .contact-info {
        text-align: center;
      }

      .footer-links {
        text-align: center;
      }

      .newsletter-text {
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';

  services: FooterLink[] = [
    { name: 'Desarrollo Web', route: '/servicios', icon: 'fas fa-laptop-code' },
    { name: 'Aplicaciones Móviles', route: '/servicios', icon: 'fas fa-mobile-alt' },
    { name: 'Consultoría IT', route: '/servicios', icon: 'fas fa-lightbulb' },
    { name: 'Cloud Solutions', route: '/servicios', icon: 'fas fa-cloud' },
    { name: 'Soporte Técnico', route: '/servicios', icon: 'fas fa-headset' }
  ];

  companyLinks: FooterLink[] = [
    { name: 'Sobre Nosotros', route: '/nosotros', icon: 'fas fa-users' },
    { name: 'Nuestro Equipo', route: '/equipo', icon: 'fas fa-user-friends' },
    { name: 'Portafolio', route: '/portafolio', icon: 'fas fa-briefcase' },
    { name: 'Blog', route: '/blog', icon: 'fas fa-blog' },
    { name: 'Contacto', route: '/contacto', icon: 'fas fa-envelope' }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/luna-it-solutions',
      icon: 'fab fa-linkedin-in',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/luna-it-solutions',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/lunait_pe',
      icon: 'fab fa-twitter',
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1HcKPSAeJL/',
      icon: 'fab fa-facebook-f',
      color: '#4267B2'
    },
    {
      name: 'Instagram',
      url: 'https://www.facebook.com/share/1HcKPSAeJL/',
      icon: 'fab fa-instagram',
      color: '#E4405F'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/c/lunaitsolutions',
      icon: 'fab fa-youtube',
      color: '#FF0000'
    }
  ];

  onSubscribe() {
    if (this.newsletterEmail && this.validateEmail(this.newsletterEmail)) {
      // Aquí conectarás con tu API para suscribir al newsletter
      console.log('Suscribiendo email:', this.newsletterEmail);

      // Simular llamada a API
      // this.apiService.subscribeNewsletter(this.newsletterEmail).subscribe(
      //   response => {
      //     this.showSuccessMessage();
      //     this.newsletterEmail = '';
      //   },
      //   error => {
      //     this.showErrorMessage();
      //   }
      // );

      // Por ahora solo limpiar el campo y mostrar mensaje
      this.newsletterEmail = '';
      this.showSuccessMessage();
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private showSuccessMessage() {
    // Podrías usar un servicio de notificaciones aquí
    alert('¡Gracias por suscribirte! Te mantendremos informado sobre nuestras novedades.');
  }

  private showErrorMessage() {
    alert('Hubo un error al procesar tu suscripción. Por favor, inténtalo de nuevo.');
  }
}
