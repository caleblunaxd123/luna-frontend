// pages/portfolio/portfolio.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  client: string;
  year: string;
  projectUrl?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="portfolio-page">
      <!-- Hero Section -->
      <section class="portfolio-hero">
        <div class="container">
          <div class="hero-content">
            <h1>Nuestro Portafolio</h1>
            <p>Conoce algunos de nuestros proyectos más destacados y casos de éxito</p>
            <div class="hero-stats">
              <div class="stat">
                <span class="number">{{ projects.length }}+</span>
                <span class="label">Proyectos</span>
              </div>
              <div class="stat">
                <span class="number">{{ getClientsCount() }}+</span>
                <span class="label">Clientes</span>
              </div>
              <div class="stat">
                <span class="number">100%</span>
                <span class="label">Satisfacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="filter-section">
        <div class="container">
          <div class="filter-buttons">
            <button
              class="filter-btn"
              [class.active]="selectedCategory === 'all'"
              (click)="filterProjects('all')">
              Todos
            </button>
            <button
              *ngFor="let category of categories"
              class="filter-btn"
              [class.active]="selectedCategory === category"
              (click)="filterProjects(category)">
              {{ getCategoryName(category) }}
            </button>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="projects-section">
        <div class="container">
          <div class="projects-grid">
            <div
              class="project-card"
              *ngFor="let project of filteredProjects; trackBy: trackByProject">

              <div class="project-image">
                <img [src]="project.imageUrl" [alt]="project.title">
                <div class="project-overlay">
                  <div class="overlay-content">
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.category }}</p>
                    <a
                      [href]="project.projectUrl"
                      target="_blank"
                      class="view-btn"
                      *ngIf="project.projectUrl">
                      <i class="fas fa-external-link-alt"></i>
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div class="project-content">
                <div class="project-meta">
                  <span class="project-category">{{ getCategoryName(project.category) }}</span>
                  <span class="project-year">{{ project.year }}</span>
                </div>

                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <p class="project-client"><strong>Cliente:</strong> {{ project.client }}</p>

                <div class="project-technologies">
                  <span
                    class="tech-tag"
                    *ngFor="let tech of project.technologies.slice(0, 3)">
                    {{ tech }}
                  </span>
                  <span
                    class="tech-more"
                    *ngIf="project.technologies.length > 3">
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div class="empty-state" *ngIf="filteredProjects.length === 0">
            <i class="fas fa-search"></i>
            <h3>No se encontraron proyectos</h3>
            <p>No hay proyectos en la categoría seleccionada</p>
            <button class="btn-primary" (click)="filterProjects('all')">
              Ver todos los proyectos
            </button>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2 class="tit">¿Quieres que tu proyecto sea el próximo?</h2>
            <p>Trabajemos juntos para crear algo increíble</p>
            <a class="btn-cta" routerLink="/contacto">
              <i class="fas fa-rocket"></i>
              Comenzar Proyecto
            </a>
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
    .portfolio-page {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .portfolio-hero {
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
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .stat {
      text-align: center;
    }

    .stat .number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffd700;
      margin-bottom: 0.5rem;
    }

    .stat .label {
      font-size: 1rem;
      opacity: 0.9;
    }

    /* Filter Section */
    .filter-section {
      padding: 3rem 0;
      background: #f8f9fa;
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.75rem 1.5rem;
      border: 2px solid #e1e8ed;
      background: white;
      color: #555;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: #3498db;
      color: white;
      border-color: #3498db;
    }

    /* Projects Section */
    .projects-section {
      padding: 4rem 0;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .overlay-content {
      text-align: center;
      color: white;
      padding: 1rem;
    }

    .overlay-content h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .overlay-content p {
      margin-bottom: 1rem;
      opacity: 0.9;
    }

    .view-btn {
      background: #3498db;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }

    .view-btn:hover {
      background: #2980b9;
      transform: translateY(-2px);
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .project-category {
      background: #3498db;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .project-year {
      color: #7f8c8d;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .project-title {
      color: #2c3e50;
      margin-bottom: 0.75rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    .project-description {
      color: #555;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .project-client {
      color: #7f8c8d;
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: #f8f9fa;
      color: #555;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
      border: 1px solid #e1e8ed;
    }

    .tech-more {
      background: #e9ecef;
      color: #6c757d;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-style: italic;
    }

    /* Empty State */
    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: #7f8c8d;
    }

    .empty-state i {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .empty-state h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .btn-primary {
      background: #3498db;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 1rem;
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

    .btn-cta {
      background: #ff6b6b;
      color: white;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
    }

    .btn-cta:hover {
      background: #ff5252;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .container {
        padding: 0 1rem;
      }

      .filter-buttons {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .project-card {
        margin: 0 0.5rem;
      }
    }
  `]
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'all';
  filteredProjects: Project[] = [];
  categories = ['web', 'mobile', 'consulting', 'cloud'];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma de comercio electrónico completa con panel de administración y pasarela de pagos.',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechStore SAC',
      year: '2024',
      projectUrl: 'https://demo-ecommerce.com'
    },
    {
      id: 2,
      title: 'App de Gestión Empresarial',
      description: 'Aplicación móvil para gestión de inventarios y ventas en tiempo real.',
      category: 'mobile',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      client: 'Distribuidora Lima',
      year: '2024'
    },
    {
      id: 3,
      title: 'Migración a la Nube',
      description: 'Migración completa de infraestructura legacy a Azure con mejora del 300% en performance.',
      category: 'cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      technologies: ['Azure', 'Docker', 'Kubernetes', '.NET Core'],
      client: 'Financiera Perú',
      year: '2023'
    },
    {
      id: 4,
      title: 'Sistema de Gestión Hospitalaria',
      description: 'Plataforma web completa para gestión de pacientes, citas y expedientes médicos.',
      category: 'web',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR'],
      client: 'Clínica San Juan',
      year: '2023'
    },
    {
      id: 5,
      title: 'Consultoría Digital',
      description: 'Transformación digital completa incluyendo automatización de procesos y capacitación.',
      category: 'consulting',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      technologies: ['Power Automate', 'SharePoint', 'Power BI'],
      client: 'Grupo Industrial',
      year: '2023'
    },
    {
      id: 6,
      title: 'App de Delivery',
      description: 'Aplicación móvil para pedidos de comida con tracking en tiempo real.',
      category: 'mobile',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Node.js', 'Google Maps', 'Firebase'],
      client: 'FoodExpress',
      year: '2024'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredProjects = this.projects;
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getCategoryName(category: string): string {
    const categoryNames: { [key: string]: string } = {
      'web': 'Desarrollo Web',
      'mobile': 'Apps Móviles',
      'consulting': 'Consultoría',
      'cloud': 'Nube'
    };
    return categoryNames[category] || category;
  }

  getClientsCount(): number {
    const uniqueClients = new Set(this.projects.map(project => project.client));
    return uniqueClients.size;
  }
}
