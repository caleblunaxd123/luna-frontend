import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  techs = [
    { i: '⚡', n: 'Angular 19' }, { i: '🔷', n: '.NET 8'     },
    { i: '🗄️', n: 'SQL Server' }, { i: '🐳', n: 'Docker'     },
    { i: '☁️', n: 'AWS / Azure'}, { i: '📱', n: 'Ionic'      },
    { i: '🔐', n: 'JWT / Auth' }, { i: '📊', n: 'Power BI'   },
  ];

  servicios = [
    {
      icon: '💻', bg: 'linear-gradient(135deg,#ede9fe,#f5f3ff)',
      titulo: 'Desarrollo Web a Medida',
      desc: 'Sistemas web completos con Angular + .NET 8. ERP, CRM, inventarios, facturación SUNAT, portales.',
      tags: ['Angular 19', '.NET 8', 'SQL Server'],
      desde: '$500 USD'
    },
    {
      icon: '📱', bg: 'linear-gradient(135deg,#d1fae5,#ecfdf5)',
      titulo: 'Apps Móviles',
      desc: 'Aplicaciones iOS y Android con Ionic o React Native. Conectadas a tu backend existente.',
      tags: ['Ionic', 'React Native', 'API REST'],
      desde: '$800 USD'
    },
    {
      icon: '🏗️', bg: 'linear-gradient(135deg,#dbeafe,#eff6ff)',
      titulo: 'API REST & Microservicios',
      desc: 'APIs robustas con Clean Architecture, JWT, Swagger y documentación completa.',
      tags: ['.NET 8', 'Clean Arch', 'Swagger'],
      desde: '$300 USD'
    },
    {
      icon: '🛒', bg: 'linear-gradient(135deg,#fef3c7,#fffbeb)',
      titulo: 'Ecommerce Profesional',
      desc: 'Tiendas online con carrito, pagos, gestión de productos e inventario integrado.',
      tags: ['Angular', 'Stripe', 'PayPal'],
      desde: '$700 USD'
    },
    {
      icon: '🔧', bg: 'linear-gradient(135deg,#fce7f3,#fdf2f8)',
      titulo: 'Consultoría & Code Review',
      desc: 'Revisión de arquitectura, optimización, refactorización y mentoring a equipos.',
      tags: ['Arquitectura', 'SOLID', 'Clean Code'],
      desde: '$50/hr'
    },
    {
      icon: '📦', bg: 'linear-gradient(135deg,#e0f2fe,#f0f9ff)',
      titulo: 'Templates Listos para Usar',
      desc: 'Sistemas pre-desarrollados que puedes personalizar e implementar en días, no meses.',
      tags: ['Angular', '.NET', 'Documentado'],
      desde: '$39 USD'
    },
  ];

  portfolio = [
    {
      icon: '📊', gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
      nombre: 'Sistema ERP PYME', tipo: 'Sistema Empresarial',
      desc: 'ERP completo con módulos de ventas, inventario, RRHH y contabilidad.',
      stack: ['Angular 19', '.NET 8', 'SQL Server']
    },
    {
      icon: '🏥', gradient: 'linear-gradient(135deg,#06b6d4,#0891b2)',
      nombre: 'Sistema Clínica Médica', tipo: 'Salud',
      desc: 'Historia clínica digital, agendamiento, recetas y facturación para clínicas.',
      stack: ['Angular', '.NET', 'PDF Reports']
    },
    {
      icon: '🛍️', gradient: 'linear-gradient(135deg,#10b981,#059669)',
      nombre: 'Ecommerce B2B', tipo: 'Comercio',
      desc: 'Plataforma de ventas B2B con catálogo, pedidos y integración ERP.',
      stack: ['Angular', 'Stripe', '.NET 8']
    },
    {
      icon: '📋', gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
      nombre: 'CRM Inmobiliaria', tipo: 'CRM',
      desc: 'Gestión de propiedades, clientes, visitas y comisiones de ventas.',
      stack: ['Angular', '.NET', 'SQL Server']
    },
    {
      icon: '🚚', gradient: 'linear-gradient(135deg,#ef4444,#dc2626)',
      nombre: 'Sistema Logística', tipo: 'Logística',
      desc: 'Tracking de entregas, gestión de rutas y dashboard de conductores.',
      stack: ['Angular', 'SignalR', '.NET 8']
    },
    {
      icon: '📚', gradient: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
      nombre: 'Plataforma LMS', tipo: 'Educación',
      desc: 'LMS con cursos en video, evaluaciones, certificados y progreso.',
      stack: ['Angular', '.NET', 'Video API']
    },
  ];

  porQue = [
    { i: '⚡', t: 'Entrega rápida',      d: 'Proyectos simples en 2-3 semanas. Sin demoras.' },
    { i: '🏗️', t: 'Arquitectura sólida', d: 'Clean Architecture, SOLID, código documentado.' },
    { i: '🔒', t: 'Seguridad incluida',  d: 'JWT, roles, HTTPS, validaciones en todas las capas.' },
    { i: '📞', t: 'Soporte post-entrega', d: '30 días de soporte gratuito en cada proyecto.' },
    { i: '💰', t: 'Precios justos',      d: 'Calidad de empresa grande, precio de freelancer.' },
    { i: '📄', t: 'Documentación total', d: 'Manual de usuario, técnico y código comentado.' },
  ];

  testimonials = [
    { n: 'Carlos Mendoza', empresa: 'CEO — Distribuidora Lima', c: '#6366f1',
      t: 'Entregaron nuestro sistema de inventario en 3 semanas. Cero bugs al lanzamiento.' },
    { n: 'Ana Torres', empresa: 'Gerente TI — Clínica San Marcos', c: '#10b981',
      t: 'El mejor desarrollador con quien hemos trabajado. Código limpio y bien documentado.' },
    { n: 'Luis García', empresa: 'Fundador — StartupPE', c: '#06b6d4',
      t: 'Nuestra plataforma SaaS está funcionando perfecto. Muy profesional y puntual.' },
  ];

  planes = [
    {
      nombre: 'Starter', precio: 300, featured: false,
      desc: 'Para proyectos pequeños o landing pages profesionales.',
      features: ['Hasta 5 páginas/módulos', 'Diseño responsivo', 'Formulario de contacto', 'Deploy incluido', '2 semanas entrega']
    },
    {
      nombre: 'Professional', precio: 800, featured: true,
      desc: 'Para sistemas web completos con backend y base de datos.',
      features: ['Módulos ilimitados', 'API REST completa', 'Base de datos SQL Server', 'Dashboard admin', 'Auth JWT + roles', '30 días soporte', '4 semanas entrega']
    },
    {
      nombre: 'Enterprise', precio: 2000, featured: false,
      desc: 'Para empresas que necesitan soluciones a medida complejas.',
      features: ['Todo lo de Professional', 'Microservicios / Docker', 'Integración ERP/Sunat', 'Capacitación al equipo', 'SLA garantizado', 'Soporte 3 meses']
    },
  ];
}
