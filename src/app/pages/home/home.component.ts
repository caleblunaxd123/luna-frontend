// pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
          <div class="container">
            <div class="hero-text">
              <h1 class="hero-title">
                <span class="highlight">Luna IT Solutions</span><br>
                Transformamos Ideas en Realidad Digital
              </h1>
              <p class="hero-subtitle">
                Somos una consultora tecnológica especializada en desarrollo de software,
                arquitectura de sistemas y transformación digital para empresas en crecimiento.
              </p>
              <div class="hero-actions">
                <a class="btn-primary" routerLink="/contacto">
                  <i class="fas fa-rocket"></i>
                  Comienza tu proyecto
                </a>
                <a class="btn-secondary" routerLink="/servicios">
                  <i class="fas fa-play"></i>
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-intro">
        <div class="container">
          <div class="section-header">
            <h2>¿Qué Hacemos?</h2>
            <p>Ofrecemos soluciones tecnológicas integrales para empresas modernas</p>
          </div>
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-icon">
                <i [class]="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a routerLink="/servicios" class="service-link">
                Ver más <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" *ngFor="let stat of stats">
              <i [class]="stat.icon"></i>
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>¿Listo para Transformar tu Negocio?</h2>
            <p>Conversemos sobre tu próximo proyecto tecnológico</p>
            <a class="btn-cta" routerLink="/contacto">
              <i class="fas fa-comments"></i>
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      width: 100%;
      text-align: center;
      color: white;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .highlight {
      background: linear-gradient(45deg, #ffd700, #ff6b6b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2.5rem;
      line-height: 1.6;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .btn-primary {
      background: #ff6b6b;
      color: white;
    }

    .btn-primary:hover {
      background: #ff5252;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Services Section */
    .services-intro {
      padding: 6rem 0;
      background: #f8f9fa;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .section-header p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-10px);
    }

    .service-icon {
      margin-bottom: 1.5rem;
    }

    .service-card i {
      font-size: 3.5rem;
      color: #3498db;
    }

    .service-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    .service-card p {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .service-link {
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .service-link:hover {
      color: #2980b9;
    }

    /* Stats Section */
    .stats {
      background: #2c3e50;
      padding: 4rem 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .stat-item {
      text-align: center;
      color: white;
    }

    .stat-item i {
      font-size: 3rem;
      color: #3498db;
      margin-bottom: 1rem;
    }

    .stat-number {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.9);
    }

    /* CTA Section */
    .cta {
      background: linear-gradient(135deg, #2c3e50, #34495e);
      padding: 4rem 0;
      text-align: center;
      color: white;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .btn-cta {
      background: #ff6b6b;
      color: white;
      border: none;
      padding: 1.2rem 3rem;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    .btn-cta:hover {
      background: #ff5252;
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .container {
        padding: 0 1rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .btn-primary, .btn-secondary {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {
  services = [
    {
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y escalables con las últimas tecnologías.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Consultoría IT',
      description: 'Estrategias tecnológicas para optimizar y hacer crecer tu negocio.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Cloud Solutions',
      description: 'Migración y optimización de servicios en la nube.',
      icon: 'fas fa-cloud'
    }
  ];

  stats = [
    { number: '50+', label: 'Proyectos Completados', icon: 'fas fa-project-diagram' },
    { number: '30+', label: 'Clientes Satisfechos', icon: 'fas fa-users' },
    { number: '5+', label: 'Años de Experiencia', icon: 'fas fa-calendar-alt' },
    { number: '24/7', label: 'Soporte Técnico', icon: 'fas fa-headset' }
  ];
}
