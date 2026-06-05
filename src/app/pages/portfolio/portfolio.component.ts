import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  filtroActivo = 'todos';

  filtros = [
    { key: 'todos',      label: 'Todos'          },
    { key: 'Sistema',    label: 'Sistemas'        },
    { key: 'Template',   label: 'Templates'       },
    { key: 'API',        label: 'APIs'            },
    { key: 'Ecommerce',  label: 'Ecommerce'       },
    { key: 'Consultoría',label: 'Consultoría'     },
  ];

  proyectos = [
    { nombre: 'Sistema ERP PYME', tipo: 'Sistema', icon: '🏢',
      gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
      desc: 'ERP completo: ventas, inventario, RRHH, contabilidad y facturación SUNAT.',
      stack: ['Angular 19', '.NET 8', 'SQL Server', 'ADO.NET'], precio: 1200 },
    { nombre: 'Sistema Clínica Médica', tipo: 'Sistema', icon: '🏥',
      gradient: 'linear-gradient(135deg,#06b6d4,#0891b2)',
      desc: 'Historia clínica digital, agendamiento, recetas y facturación para clínicas.',
      stack: ['Angular', '.NET 8', 'SQL Server', 'PDF'], precio: 1500 },
    { nombre: 'Ecommerce B2B Completo', tipo: 'Ecommerce', icon: '🛒',
      gradient: 'linear-gradient(135deg,#10b981,#059669)',
      desc: 'Tienda B2B con catálogo, carrito, Stripe/PayPal y panel admin.',
      stack: ['Angular', 'Stripe', '.NET 8', 'SQL Server'], precio: 1000 },
    { nombre: 'CRM Inmobiliaria', tipo: 'Sistema', icon: '🏠',
      gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
      desc: 'Propiedades, clientes, visitas, comisiones y reportes de ventas.',
      stack: ['Angular', '.NET 8', 'SQL Server'], precio: 800 },
    { nombre: 'Angular Admin Pro', tipo: 'Template', icon: '📊',
      gradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
      desc: 'Dashboard admin profesional: KPIs, CRUD, gráficos y reportes.',
      stack: ['Angular 19', 'PrimeNG', 'Chart.js'], precio: 49 },
    { nombre: 'API Clean Architecture', tipo: 'API', icon: '🔌',
      gradient: 'linear-gradient(135deg,#0f172a,#1e293b)',
      desc: 'Boilerplate .NET 8 con JWT, Clean Architecture, Swagger y ADO.NET.',
      stack: ['.NET 8', 'JWT', 'Swagger', 'SQL Server'], precio: 39 },
    { nombre: 'Sistema Logística GPS', tipo: 'Sistema', icon: '🚚',
      gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
      desc: 'Tracking de repartos, gestión de rutas y dashboard en tiempo real.',
      stack: ['Angular', 'SignalR', '.NET 8', 'Google Maps'], precio: 1200 },
    { nombre: 'LMS Educativo', tipo: 'Sistema', icon: '📚',
      gradient: 'linear-gradient(135deg,#a855f7,#9333ea)',
      desc: 'Cursos en video, evaluaciones, certificados automáticos y progreso.',
      stack: ['Angular', '.NET 8', 'SQL Server', 'Video'], precio: 900 },
    { nombre: 'SaaS Starter Kit', tipo: 'Template', icon: '🚀',
      gradient: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
      desc: 'Kit SaaS completo: auth, roles, billing Stripe y onboarding.',
      stack: ['Angular', '.NET 8', 'Stripe', 'SQL Server'], precio: 129 },
    { nombre: 'Sistema POS Retail', tipo: 'Sistema', icon: '🏪',
      gradient: 'linear-gradient(135deg,#f97316,#ea580c)',
      desc: 'Punto de venta: caja, turnos, productos, descuentos y cierre de día.',
      stack: ['Angular', '.NET 8', 'SQL Server'], precio: 800 },
    { nombre: 'Consultoría Arquitectura', tipo: 'Consultoría', icon: '🔧',
      gradient: 'linear-gradient(135deg,#475569,#334155)',
      desc: 'Code review, refactorización y migración de sistemas legados a .NET 8.',
      stack: ['Clean Architecture', 'SOLID', '.NET 8', 'Docker'], precio: 0 },
    { nombre: 'App Reservas Online', tipo: 'Sistema', icon: '📅',
      gradient: 'linear-gradient(135deg,#14b8a6,#0d9488)',
      desc: 'Reservas con calendario, notificaciones y pagos integrados.',
      stack: ['Angular', '.NET 8', 'SQL Server', 'Stripe'], precio: 700 },
  ];

  get proyectosFiltrados() {
    return this.filtroActivo === 'todos'
      ? this.proyectos
      : this.proyectos.filter(p => p.tipo === this.filtroActivo);
  }

  contarPorFiltro(key: string): number {
    return key === 'todos' ? this.proyectos.length
      : this.proyectos.filter(p => p.tipo === key).length;
  }
}
