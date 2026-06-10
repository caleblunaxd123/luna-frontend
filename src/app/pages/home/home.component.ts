import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, FooterComponent, RevealDirective, CountUpDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /* ── Líneas de negocio ───────────────────────────────── */
  lineas = [
    {
      icon: '🤖', tint: 'violet',
      titulo: 'Empleados Digitales IA',
      desc: 'Agentes autónomos que ejecutan tareas reales de tu operación: atienden, venden, gestionan y dan seguimiento. 24/7, sin descanso.',
      bullets: ['Ventas y atención al cliente', 'Soporte y cobranza', 'RRHH y administración'],
    },
    {
      icon: '✨', tint: 'cyan',
      titulo: 'Aplicaciones Inteligentes',
      desc: 'CRM, ERP y plataformas SaaS con IA integrada desde el diseño. No software con IA encima: software que piensa.',
      bullets: ['CRM / ERP con IA', 'Plataformas SaaS a medida', 'Apps web y móviles'],
    },
    {
      icon: '⚙️', tint: 'pink',
      titulo: 'Automatización Empresarial',
      desc: 'Conectamos procesos completos de punta a punta. Lo que hoy toma horas, lo ejecuta un flujo autónomo en segundos.',
      bullets: ['Correo → IA → Acción', 'WhatsApp → CRM → Seguimiento', 'Documentos → Extracción → Reportes'],
    },
    {
      icon: '📊', tint: 'green',
      titulo: 'Dashboards Ejecutivos',
      desc: 'Paneles que no solo muestran datos: los analizan, detectan riesgos y responden tus preguntas en lenguaje natural.',
      bullets: ['Análisis de indicadores', 'Detección de riesgos', 'Recomendaciones por IA'],
    },
  ];

  /* ── ¿Qué puede automatizar tu empresa? (interactivo) ── */
  areas = [
    {
      key: 'Atención',  icon: '💬',
      problema: 'El equipo responde las mismas consultas todo el día y los clientes esperan horas.',
      automatizacion: 'Un agente IA responde al instante en WhatsApp, web y correo, escala solo lo complejo.',
      resultado: 'Respuesta en segundos · 80% de consultas resueltas sin intervención humana.',
    },
    {
      key: 'Ventas', icon: '🎯',
      problema: 'Leads que llegan de noche o fin de semana se enfrían antes de que alguien los contacte.',
      automatizacion: 'El agente califica, responde y agenda reuniones automáticamente, registra todo en el CRM.',
      resultado: 'Cero leads perdidos · +35% de conversión en el primer contacto.',
    },
    {
      key: 'Cobranza', icon: '💳',
      problema: 'Seguimiento manual de pagos vencidos: tedioso, irregular y siempre tarde.',
      automatizacion: 'Recordatorios inteligentes por etapas, tono adaptado al cliente y conciliación automática.',
      resultado: 'Reducción de mora · 40% menos días de cobro promedio.',
    },
    {
      key: 'RRHH', icon: '👥',
      problema: 'Filtrar CVs y responder preguntas internas consume horas del equipo de Recursos Humanos.',
      automatizacion: 'IA preselecciona candidatos, agenda entrevistas y responde dudas de empleados 24/7.',
      resultado: 'Contratación 3x más rápida · equipo enfocado en lo estratégico.',
    },
    {
      key: 'Contabilidad', icon: '🧾',
      problema: 'Digitar facturas y comprobantes a mano genera errores y retrasa los cierres.',
      automatizacion: 'La IA lee documentos, extrae datos y los carga clasificados a tu sistema contable.',
      resultado: '90% menos digitación · cierres contables sin cuellos de botella.',
    },
    {
      key: 'Operaciones', icon: '🔄',
      problema: 'Tareas repetitivas entre sistemas que nadie quiere hacer y que frenan todo lo demás.',
      automatizacion: 'Flujos que conectan tus apps y mueven la información sola, con reglas y validaciones.',
      resultado: 'Procesos 24/7 · el equipo deja de operar y empieza a decidir.',
    },
  ];
  areaActiva = 0;

  /* ── Empleados Digitales (tarjetas) ──────────────────── */
  agentes = [
    {
      nombre: 'Agente de Ventas IA', icon: '🎯', tint: 'violet',
      funciones: ['Califica y responde leads al instante', 'Agenda reuniones automáticamente', 'Registra y actualiza el CRM'],
      integra: ['WhatsApp', 'CRM', 'Calendario'],
    },
    {
      nombre: 'Agente de Soporte IA', icon: '💬', tint: 'cyan',
      funciones: ['Atiende consultas 24/7', 'Resuelve con tu base de conocimiento', 'Escala solo los casos complejos'],
      integra: ['Web', 'Email', 'Help Desk'],
    },
    {
      nombre: 'Agente Administrativo IA', icon: '🗂️', tint: 'pink',
      funciones: ['Procesa documentos y formularios', 'Genera reportes automáticos', 'Organiza y clasifica información'],
      integra: ['Drive', 'ERP', 'Sheets'],
    },
    {
      nombre: 'Agente de RRHH IA', icon: '👥', tint: 'green',
      funciones: ['Preselecciona candidatos', 'Responde dudas de empleados', 'Coordina entrevistas'],
      integra: ['Email', 'Calendario', 'ATS'],
    },
    {
      nombre: 'Agente Financiero IA', icon: '💳', tint: 'amber',
      funciones: ['Seguimiento de cobranza', 'Concilia pagos automáticamente', 'Alerta sobre riesgos y vencimientos'],
      integra: ['Banca', 'ERP', 'WhatsApp'],
    },
  ];

  /* ── Casos de uso reales (antes / después) ───────────── */
  casos = [
    {
      sector: 'Logística', icon: '🚚',
      antes: '5 horas diarias clasificando y respondiendo correos de solicitudes.',
      despues: 'La IA clasifica cada solicitud, responde y crea la tarea automáticamente.',
      metric: 90, sufijo: '%', kpi: 'menos tiempo operativo',
    },
    {
      sector: 'Retail', icon: '🛍️',
      antes: 'Consultas de stock y pedidos saturando al equipo en horas pico.',
      despues: 'Un empleado digital atiende en WhatsApp, consulta inventario y toma pedidos.',
      metric: 24, sufijo: '/7', kpi: 'atención sin pausas',
    },
    {
      sector: 'Servicios', icon: '🧑‍💼',
      antes: 'Leads de la web sin responder hasta el día siguiente.',
      despues: 'Respuesta y agendamiento automático en menos de un minuto, día y noche.',
      metric: 35, sufijo: '%', kpi: 'más conversión',
    },
    {
      sector: 'Finanzas', icon: '🏦',
      antes: 'Cobranza manual irregular y cierres contables siempre atrasados.',
      despues: 'Recordatorios inteligentes y lectura automática de comprobantes.',
      metric: 40, sufijo: '%', kpi: 'menos días de cobro',
    },
  ];

  /* ── ¿Por qué Luna IT Solutions? ─────────────────────── */
  diferenciadores = [
    { icon: '🧠', t: 'No hacemos software tradicional', d: 'Diseñamos sistemas inteligentes que toman decisiones, no solo formularios que guardan datos.' },
    { icon: '🤖', t: 'Construimos agentes especializados', d: 'Empleados digitales entrenados para tu operación real, no chatbots genéricos.' },
    { icon: '🔌', t: 'IA integrada desde el inicio', d: 'La inteligencia es el núcleo de cada solución, no un parche que se añade al final.' },
    { icon: '📈', t: 'Nos enfocamos en resultados', d: 'Medimos en horas ahorradas, costos reducidos y procesos que se ejecutan solos.' },
    { icon: '🚀', t: 'Pensamos en escalabilidad', d: 'Sistemas que crecen contigo sin que tu equipo crezca al mismo ritmo.' },
    { icon: '🇵🇪', t: 'Hechos para Latinoamérica', d: 'Entendemos el contexto, los canales y los procesos de las empresas de la región.' },
  ];

  /* ── Proceso de implementación ───────────────────────── */
  proceso = [
    { n: '01', t: 'Diagnóstico', d: 'Analizamos tus procesos y detectamos dónde la IA genera más valor.' },
    { n: '02', t: 'Diseño de la solución', d: 'Definimos los agentes, automatizaciones e integraciones necesarias.' },
    { n: '03', t: 'Construcción', d: 'Desarrollamos e integramos con tus herramientas actuales.' },
    { n: '04', t: 'Despliegue y mejora', d: 'Lanzamos, medimos resultados y el sistema sigue aprendiendo.' },
  ];

  /* ── Integraciones (marquee) ─────────────────────────── */
  integraciones = ['WhatsApp', 'Gmail', 'CRM', 'ERP', 'SQL Server', 'Slack', 'Sheets', 'Stripe', 'Calendar', 'Drive', 'Telegram', 'APIs REST'];
}
