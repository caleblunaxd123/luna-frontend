import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  servicios = [
    { icon: '💻', bg: 'linear-gradient(135deg,#ede9fe,#f5f3ff)',
      titulo: 'Sistemas Web a Medida',
      desc: 'ERP, CRM, inventarios, facturación SUNAT, portales empresariales. Código limpio, documentado y escalable.',
      features: ['Angular 19 + .NET 8', 'Clean Architecture', 'SQL Server + ADO.NET', 'JWT + roles + permisos', 'Documentación técnica completa'],
      tags: ['Angular 19', '.NET 8', 'SQL Server'], desde: '$500 USD' },
    { icon: '📱', bg: 'linear-gradient(135deg,#d1fae5,#ecfdf5)',
      titulo: 'Apps Móviles',
      desc: 'Apps iOS y Android nativas o híbridas. Conectadas a tu backend existente con APIs REST.',
      features: ['Ionic / React Native', 'Integración API REST', 'Push notifications', 'Offline mode', 'Publicación en stores'],
      tags: ['Ionic', 'React Native', 'API'], desde: '$800 USD' },
    { icon: '🔌', bg: 'linear-gradient(135deg,#dbeafe,#eff6ff)',
      titulo: 'APIs REST & Microservicios',
      desc: 'APIs robustas con autenticación JWT, documentación Swagger y arquitectura limpia.',
      features: ['Clean Architecture', 'JWT + OAuth2', 'Swagger docs', 'Rate limiting', 'Logs + monitoreo'],
      tags: ['.NET 8', 'Swagger', 'Docker'], desde: '$300 USD' },
    { icon: '🛒', bg: 'linear-gradient(135deg,#fef3c7,#fffbeb)',
      titulo: 'Ecommerce Profesional',
      desc: 'Tiendas online completas con carrito, pasarelas de pago, inventario y panel admin.',
      features: ['Stripe / PayPal / Niubiz', 'Catálogo dinámico', 'Panel admin', 'Integración SUNAT', 'Reportes de ventas'],
      tags: ['Angular', 'Stripe', '.NET 8'], desde: '$700 USD' },
    { icon: '🔧', bg: 'linear-gradient(135deg,#fce7f3,#fdf2f8)',
      titulo: 'Consultoría & Code Review',
      desc: 'Revisión de código, refactorización, migración de sistemas legados y mentoring.',
      features: ['Auditoría de código', 'Refactorización SOLID', 'Migración .NET', 'Documentación técnica', 'Capacitación al equipo'],
      tags: ['SOLID', 'Clean Code', '.NET'], desde: '$50/hr' },
    { icon: '📦', bg: 'linear-gradient(135deg,#e0f2fe,#f0f9ff)',
      titulo: 'Templates Listos',
      desc: 'Sistemas pre-desarrollados, documentados y listos para personalizar en días.',
      features: ['Código fuente completo', 'DB scripts incluidos', 'Documentación', '30 días soporte', 'Personalización disponible'],
      tags: ['Angular', '.NET 8', 'SQL'], desde: '$39 USD' },
  ];

  pasos = [
    { n: '01', t: 'Reunión inicial', d: 'Entendemos tu negocio, objetivos y requerimientos técnicos.' },
    { n: '02', t: 'Propuesta detallada', d: 'Presupuesto claro, cronograma y stack tecnológico recomendado.' },
    { n: '03', t: 'Desarrollo', d: 'Sprints de 1 semana con demo al final de cada uno.' },
    { n: '04', t: 'Testing QA', d: 'Pruebas funcionales, de carga y de seguridad antes del deploy.' },
    { n: '05', t: 'Entrega + soporte', d: 'Deploy en producción, capacitación y 30 días de soporte.' },
  ];

  techs = [
    { i: '⚡', n: 'Angular 19' }, { i: '🔷', n: '.NET 8'       },
    { i: '🗄️', n: 'SQL Server' }, { i: '🐳', n: 'Docker'       },
    { i: '☁️', n: 'Azure'      }, { i: '📱', n: 'Ionic'        },
    { i: '🔐', n: 'JWT / Auth' }, { i: '📊', n: 'Power BI'     },
    { i: '🔴', n: 'Redis'      }, { i: '🐇', n: 'RabbitMQ'     },
    { i: '📬', n: 'SignalR'    }, { i: '🧪', n: 'xUnit / Jest' },
  ];
}
