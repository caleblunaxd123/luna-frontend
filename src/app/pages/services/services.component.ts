// pages/services/services.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  category: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="services-page">
      <!-- Hero Section -->
      <section class="services-hero">
        <div class="container">
          <div class="hero-content">
            <h1>Nuestros Servicios</h1>
            <p>Soluciones tecnológicas integrales para hacer crecer tu negocio</p>
            <div class="hero-badges">
              <div class="badge">
                <i class="fas fa-medal"></i>
                <span>+5 años experiencia</span>
              </div>
              <div class="badge">
                <i class="fas fa-users"></i>
                <span>+30 clientes satisfechos</span>
              </div>
              <div class="badge">
                <i class="fas fa-project-diagram"></i>
                <span>+50 proyectos completados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Categories -->
      <section class="categories-section">
        <div class="container">
          <div class="section-header">
            <h2>Categorías de Servicios</h2>
            <p>Explora nuestras especialidades tecnológicas</p>
          </div>

          <div class="categories-filter">
            <button
              class="category-btn"
              [class.active]="selectedCategory === 'all'"
              (click)="filterByCategory('all')">
              Todos
            </button>
            <button
              *ngFor="let category of categories"
              class="category-btn"
              [class.active]="selectedCategory === category"
              (click)="filterByCategory(category)">
              {{ getCategoryDisplayName(category) }}
            </button>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of filteredServices; trackBy: trackByService">
              <div class="service-header">
                <div class="service-icon">
                  <i [class]="service.icon"></i>
                </div>
                <div class="service-category-badge">{{ getCategoryDisplayName(service.category) }}</div>
              </div>

              <div class="service-content">
                <h3>{{ service.name }}</h3>
                <p class="service-description">{{ service.description }}</p>

                <div class="service-features">
                  <h4>¿Qué incluye?</h4>
                  <ul>
                    <li *ngFor="let feature of service.features">
                      <i class="fas fa-check"></i>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="service-footer">
                <div class="service-price" *ngIf="service.price">
                  <span class="price-label">Desde</span>
                  <span class="price-amount">{{ service.price }}</span>
                </div>
                <div class="service-actions">
                  <button class="btn-primary" (click)="requestQuote(service)">
                    <i class="fas fa-calculator"></i>
                    Cotizar
                  </button>
                  <button class="btn-secondary" (click)="learnMore(service)">
                    <i class="fas fa-info-circle"></i>
                    Más Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process-section">
        <div class="container">
          <div class="section-header">
            <h2>Nuestro Proceso de Trabajo</h2>
            <p>Un enfoque sistemático para garantizar el éxito de tu proyecto</p>
          </div>

          <div class="process-steps">
            <div class="process-step" *ngFor="let step of processSteps; let i = index">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-content">
                <div class="step-icon">
                  <i [class]="step.icon"></i>
                </div>
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="section-header">
            <h2>Preguntas Frecuentes</h2>
            <p>Resolvemos tus dudas sobre nuestros servicios</p>
          </div>

          <div class="faq-container">
            <div class="faq-item" *ngFor="let faq of faqs">
              <div class="faq-question" (click)="toggleFaq(faq)">
                <h4>{{ faq.question }}</h4>
                <i class="fas fa-chevron-down" [class.rotate]="faq.isOpen"></i>
              </div>
              <div class="faq-answer" [class.open]="faq.isOpen">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="tit">¿Listo para Comenzar tu Proyecto?</h2>
            <p>Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos</p>
            <div class="cta-buttons">
              <button class="btn-cta" routerLink="/contacto">
                <i class="fas fa-comments"></i>
                Contactar Ahora
              </button>
              <button class="btn-cta-secondary" (click)="scheduleCall()">
                <i class="fas fa-calendar"></i>
                Agendar Llamada
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .tit{
      color: white;
      text-align: center;
    }
    .services-page {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .services-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 4rem 0;
      color: white;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero-content p {
      font-size: 1.2rem;
      opacity: 0.9;
      margin-bottom: 2rem;
    }

    .hero-badges {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      backdrop-filter: blur(10px);
    }

    .badge i {
      color: #ffd700;
    }

    /* Categories Section */
    .categories-section {
      padding: 3rem 0;
      background: #f8f9fa;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .section-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    .categories-filter {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .category-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #e1e8ed;
      background: white;
      color: #555;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .category-btn:hover,
    .category-btn.active {
      background: #3498db;
      color: white;
      border-color: #3498db;
    }

    /* Services Section */
    .services-section {
      padding: 4rem 0;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .service-card {
      background: white;
      border-radius: 16px;
      padding: 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      overflow: hidden;
      border: 1px solid #e1e8ed;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .service-header {
      padding: 2rem;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
    }

    .service-category-badge {
      background: #3498db;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .service-content {
      padding: 2rem;
    }

    .service-content h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    .service-description {
      color: #7f8c8d;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .service-features h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .service-features ul {
      list-style: none;
      padding: 0;
    }

    .service-features li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
      color: #555;
    }

    .service-features i {
      color: #27ae60;
      font-size: 0.8rem;
    }

    .service-footer {
      padding: 1.5rem 2rem;
      background: #f8f9fa;
      border-top: 1px solid #e1e8ed;
    }

    .service-price {
      margin-bottom: 1rem;
      text-align: center;
    }

    .price-label {
      color: #7f8c8d;
      font-size: 0.9rem;
      display: block;
    }

    .price-amount {
      color: #27ae60;
      font-size: 1.5rem;
      font-weight: 700;
    }

    .service-actions {
      display: flex;
      gap: 1rem;
    }

    .btn-primary,
    .btn-secondary {
      flex: 1;
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .btn-primary {
      background: #3498db;
      color: white;
    }

    .btn-primary:hover {
      background: #2980b9;
    }

    .btn-secondary {
      background: transparent;
      color: #3498db;
      border: 2px solid #3498db;
    }

    .btn-secondary:hover {
      background: #3498db;
      color: white;
    }

    /* Process Section */
    .process-section {
      padding: 4rem 0;
      background: #f8f9fa;
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .process-step {
      text-align: center;
      position: relative;
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0 auto 1rem;
    }

    .step-icon {
      width: 60px;
      height: 60px;
      background: rgba(52, 152, 219, 0.1);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3498db;
      font-size: 1.5rem;
      margin: 0 auto 1rem;
    }

    .step-content h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .step-content p {
      color: #7f8c8d;
      line-height: 1.6;
    }

    /* FAQ Section */
    .faq-section {
      padding: 4rem 0;
    }

    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      border: 1px solid #e1e8ed;
      border-radius: 8px;
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .faq-question {
      padding: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8f9fa;
      transition: background 0.3s ease;
    }

    .faq-question:hover {
      background: #e9ecef;
    }

    .faq-question h4 {
      color: #2c3e50;
      margin: 0;
    }

    .faq-question i {
      color: #7f8c8d;
      transition: transform 0.3s ease;
    }

    .faq-question i.rotate {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .faq-answer.open {
      max-height: 200px;
    }

    .faq-answer p {
      padding: 1.5rem;
      margin: 0;
      color: #555;
      line-height: 1.6;
    }

    /* CTA Section */
    .cta-section {
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

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-cta,
    .btn-cta-secondary {
      padding: 1rem 2rem;
      border: none;
      border-radius: 25px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-cta {
      background: #ff6b6b;
      color: white;
    }

    .btn-cta:hover {
      background: #ff5252;
      transform: translateY(-2px);
    }

    .btn-cta-secondary {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-cta-secondary:hover {
      background: white;
      color: #2c3e50;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .hero-badges {
        flex-direction: column;
        align-items: center;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .service-actions {
        flex-direction: column;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .container {
        padding: 0 1rem;
      }
    }

    @media (max-width: 480px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .service-card {
        margin: 0 0.5rem;
      }
    }
  `]
})
export class ServicesComponent implements OnInit {
  selectedCategory = 'all';
  filteredServices: Service[] = [];

  categories = ['development', 'consulting', 'cloud', 'support'];

  services: Service[] = [
    {
      id: 1,
      name: 'Desarrollo Web Personalizado',
      description: 'Creamos aplicaciones web modernas y escalables usando las últimas tecnologías como Angular, React y .NET Core.',
      icon: 'fas fa-laptop-code',
      category: 'development',
      features: [
        'Diseño responsive y mobile-first',
        'Arquitectura escalable y mantenible',
        'Integración con APIs y bases de datos',
        'SEO optimizado desde el desarrollo',
        'Panel de administración incluido'
      ],
      price: '$3,500'
    },
    {
      id: 2,
      name: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas e híbridas para iOS y Android con la mejor experiencia de usuario.',
      icon: 'fas fa-mobile-alt',
      category: 'development',
      features: [
        'Apps nativas para iOS y Android',
        'Desarrollo híbrido con React Native',
        'Integración con servicios cloud',
        'Push notifications',
        'Analytics y métricas integradas'
      ],
      price: '$5,000'
    },
    {
      id: 3,
      name: 'Consultoría en Arquitectura IT',
      description: 'Analizamos y diseñamos la arquitectura tecnológica ideal para tu empresa y proyectos.',
      icon: 'fas fa-sitemap',
      category: 'consulting',
      features: [
        'Auditoría de infraestructura actual',
        'Diseño de arquitectura escalable',
        'Selección de tecnologías apropiadas',
        'Plan de implementación detallado',
        'Documentación técnica completa'
      ]
    },
    {
      id: 4,
      name: 'Migración a la Nube',
      description: 'Te ayudamos a migrar tus sistemas a plataformas cloud como Azure, AWS o Google Cloud.',
      icon: 'fas fa-cloud',
      category: 'cloud',
      features: [
        'Evaluación de costos y beneficios',
        'Plan de migración sin interrupciones',
        'Configuración de servicios cloud',
        'Capacitación del equipo técnico',
        'Monitoreo y optimización continua'
      ],
      price: '$4,200'
    },
    {
      id: 5,
      name: 'Automatización de Procesos',
      description: 'Automatizamos procesos empresariales para aumentar la eficiencia y reducir errores.',
      icon: 'fas fa-robot',
      category: 'consulting',
      features: [
        'Análisis de procesos actuales',
        'Desarrollo de bots y scripts',
        'Integración entre sistemas',
        'Interfaz de monitoreo',
        'Reportes automáticos'
      ]
    },
    {
      id: 6,
      name: 'Soporte Técnico 24/7',
      description: 'Brindamos soporte técnico continuo para mantener tus sistemas funcionando óptimamente.',
      icon: 'fas fa-headset',
      category: 'support',
      features: [
        'Soporte 24/7 vía múltiples canales',
        'Monitoreo proactivo de sistemas',
        'Actualizaciones de seguridad',
        'Backup automático y recuperación',
        'Reportes mensuales de rendimiento'
      ],
      price: '$800/mes'
    }
  ];

  processSteps = [
    {
      title: 'Análisis y Planificación',
      description: 'Entendemos tus necesidades y objetivos para crear un plan detallado.',
      icon: 'fas fa-search'
    },
    {
      title: 'Diseño y Prototipado',
      description: 'Creamos prototipos y diseños que reflejen la visión de tu proyecto.',
      icon: 'fas fa-pencil-ruler'
    },
    {
      title: 'Desarrollo e Implementación',
      description: 'Desarrollamos la solución usando las mejores prácticas y tecnologías.',
      icon: 'fas fa-code'
    },
    {
      title: 'Testing y Lanzamiento',
      description: 'Realizamos pruebas exhaustivas antes del lanzamiento en producción.',
      icon: 'fas fa-rocket'
    },
    {
      title: 'Mantenimiento y Soporte',
      description: 'Brindamos soporte continuo y mantenimiento para garantizar el éxito.',
      icon: 'fas fa-cogs'
    }
  ];

  faqs = [
    {
      question: '¿Pueden trabajar con tecnologías específicas que ya usamos?',
      answer: 'Absolutamente. Nos adaptamos a las tecnologías que ya manejas o recomendamos las más apropiadas según tu proyecto.',
      isOpen: false
    },
    {
      question: '¿Ofrecen capacitación para nuestro equipo?',
      answer: 'Sí, incluimos capacitación básica para tu equipo y documentación completa. También ofrecemos cursos especializados.',
      isOpen: false
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredServices = this.services;
  }

  trackByService(index: number, service: Service): number {
    return service.id;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredServices = this.services;
    } else {
      this.filteredServices = this.services.filter(service => service.category === category);
    }
  }

  getCategoryDisplayName(category: string): string {
    const categoryNames: { [key: string]: string } = {
      'development': 'Desarrollo',
      'consulting': 'Consultoría',
      'cloud': 'Nube',
      'support': 'Soporte'
    };
    return categoryNames[category] || category;
  }

  requestQuote(service: Service): void {
    // Navegar a contacto con el servicio preseleccionado
    console.log('Cotizar servicio:', service.name);
    // Aquí puedes implementar la navegación a contacto con parámetros
    // this.router.navigate(['/contacto'], { queryParams: { service: service.id } });
  }

  learnMore(service: Service): void {
    // Mostrar modal con más información o navegar a página de detalles
    console.log('Más información sobre:', service.name);
    // Implementar modal o navegación a página de detalles
  }

  scheduleCall(): void {
    // Implementar scheduling de llamada
    console.log('Agendar llamada');
    // Podría abrir Calendly, modal de contacto, etc.
  }

  toggleFaq(faq: any): void {
    faq.isOpen = !faq.isOpen;
  }
}

