import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  soluciones = [
    {
      icon: '🤖', tint: 'violet',
      titulo: 'Empleados Digitales IA',
      desc: 'Agentes autónomos que ejecutan tareas reales de tu operación las 24 horas, los 7 días.',
      features: ['Ventas y atención al cliente', 'Soporte técnico y cobranza', 'Recursos Humanos y administración', 'Aprenden de tu negocio', 'Escalan a humanos cuando es necesario'],
      tags: ['WhatsApp', 'CRM', 'Email'],
    },
    {
      icon: '✨', tint: 'cyan',
      titulo: 'Aplicaciones Inteligentes',
      desc: 'Plataformas con IA integrada desde el diseño, no como un parche al final.',
      features: ['CRM con IA', 'ERP con IA', 'Plataformas SaaS inteligentes', 'Apps web y móviles', 'Sistemas de gestión con IA'],
      tags: ['Angular', '.NET', 'IA'],
    },
    {
      icon: '⚙️', tint: 'pink',
      titulo: 'Automatización Empresarial',
      desc: 'Conectamos procesos completos de punta a punta para que se ejecuten solos.',
      features: ['Correo → IA → Clasificación → Acción', 'WhatsApp → IA → CRM → Seguimiento', 'Documentos → IA → Extracción → Reportes', 'Reglas y validaciones', 'Integración con tus apps'],
      tags: ['Workflows', 'APIs', 'Webhooks'],
    },
    {
      icon: '📊', tint: 'green',
      titulo: 'Dashboards Ejecutivos Inteligentes',
      desc: 'Paneles que analizan indicadores, detectan riesgos y responden preguntas con IA.',
      features: ['Análisis de indicadores', 'Detección de riesgos', 'Recomendaciones automáticas', 'Preguntas en lenguaje natural', 'Tiempo real'],
      tags: ['BI', 'IA', 'Tiempo real'],
    },
  ];

  beneficios = [
    { icon: '⏱️', t: 'Recupera horas', d: 'Tu equipo deja de operar tareas repetitivas y se enfoca en decidir.' },
    { icon: '💸', t: 'Reduce costos', d: 'Procesos autónomos que escalan sin aumentar la nómina al mismo ritmo.' },
    { icon: '🌙', t: 'Opera 24/7', d: 'Tus sistemas atienden, venden y gestionan incluso mientras duermes.' },
    { icon: '📈', t: 'Escala sin fricción', d: 'Más volumen sin más caos: la IA absorbe la carga operativa.' },
    { icon: '🎯', t: 'Cero leads perdidos', d: 'Respuesta inmediata en todos tus canales, a toda hora.' },
    { icon: '🔒', t: 'Bajo tu control', d: 'Reglas claras, trazabilidad y escalamiento a humanos cuando importa.' },
  ];

  proceso = [
    { n: '01', t: 'Diagnóstico', d: 'Analizamos tus procesos y detectamos dónde la IA genera más valor.' },
    { n: '02', t: 'Diseño de la solución', d: 'Definimos agentes, automatizaciones e integraciones necesarias.' },
    { n: '03', t: 'Construcción', d: 'Desarrollamos e integramos con las herramientas que ya usas.' },
    { n: '04', t: 'Despliegue y mejora', d: 'Lanzamos, medimos resultados y el sistema sigue aprendiendo.' },
  ];
}
