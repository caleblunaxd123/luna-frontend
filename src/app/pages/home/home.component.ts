import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { LunaCoreComponent } from '../../shared/components/luna-core.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';
import { ParallaxDirective } from '../../shared/parallax.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule, HeaderComponent, FooterComponent, LunaCoreComponent,
    RevealDirective, CountUpDirective, ParallaxDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /* Chips de agentes flotando alrededor del Luna Core (hero) */
  orbitChips = [
    { icon: '🎯', label: 'Ventas',  estado: 'respondiendo', tint: 'blue',   pos: 'c1' },
    { icon: '💬', label: 'Soporte', estado: '3 chats',      tint: 'violet', pos: 'c2' },
    { icon: '💳', label: 'Cobranza', estado: 'conciliando',  tint: 'cyan',   pos: 'c3' },
  ];

  /* "Luna Core" — qué orquesta */
  corePoints = [
    { icon: '🧩', t: 'Orquesta agentes', d: 'Un solo cerebro coordina a todos tus empleados digitales.' },
    { icon: '🔗', t: 'Conecta tus apps', d: 'WhatsApp, correo, CRM, ERP y más, trabajando como uno solo.' },
    { icon: '🌙', t: 'Nunca se apaga', d: 'Mientras tu equipo descansa, Luna sigue ejecutando procesos.' },
  ];

  /* Líneas de negocio */
  lineas = [
    { icon: '🤖', tint: 'violet', titulo: 'Empleados Digitales IA',
      desc: 'Agentes autónomos que atienden, venden, gestionan y dan seguimiento. 24/7, sin descanso.',
      bullets: ['Ventas y atención', 'Soporte y cobranza', 'Marketing y contenido'],
      demo: 'https://reportes.lunaitsolution.com/demo-marketing.html', demoLabel: 'Probar Agente de Marketing' },
    { icon: '✨', tint: 'blue', titulo: 'Aplicaciones Inteligentes',
      desc: 'CRM, ERP y plataformas SaaS con IA integrada desde el diseño. Software que piensa.',
      bullets: ['CRM / ERP con IA', 'Plataformas SaaS', 'Apps web y móviles'],
      demo: null, demoLabel: '' },
    { icon: '⚙️', tint: 'cyan', titulo: 'Automatización Empresarial',
      desc: 'Procesos completos de punta a punta. Lo que toma horas, se ejecuta en segundos.',
      bullets: ['Correo → IA → Acción', 'WhatsApp → CRM → Seguimiento', 'Documentos → Reportes'],
      demo: null, demoLabel: '' },
    { icon: '📊', tint: 'pink', titulo: 'Dashboards Ejecutivos',
      desc: 'Paneles que analizan indicadores, detectan riesgos y responden en lenguaje natural.',
      bullets: ['Análisis de indicadores', 'Detección de riesgos', 'Recomendaciones por IA'],
      demo: null, demoLabel: '' },
  ];

  /* ¿Qué puede automatizar tu empresa? (interactivo) */
  areas = [
    { key: 'Atención',  icon: '💬',
      problema: 'El equipo responde las mismas consultas todo el día y los clientes esperan horas.',
      automatizacion: 'Un agente IA responde al instante en WhatsApp, web y correo, y escala solo lo complejo.',
      resultado: 'Respuesta en segundos · 80% de consultas resueltas sin intervención humana.' },
    { key: 'Ventas', icon: '🎯',
      problema: 'Leads que llegan de noche o fin de semana se enfrían antes de que alguien los contacte.',
      automatizacion: 'El agente califica, responde y agenda reuniones automáticamente, y lo registra en el CRM.',
      resultado: 'Cero leads perdidos · +35% de conversión en el primer contacto.' },
    { key: 'Cobranza', icon: '💳',
      problema: 'Seguimiento manual de pagos vencidos: tedioso, irregular y siempre tarde.',
      automatizacion: 'Recordatorios inteligentes por etapas, tono adaptado al cliente y conciliación automática.',
      resultado: 'Reducción de mora · 40% menos días de cobro promedio.' },
    { key: 'RRHH', icon: '👥',
      problema: 'Filtrar CVs y responder preguntas internas consume horas del equipo de RRHH.',
      automatizacion: 'La IA preselecciona candidatos, agenda entrevistas y responde dudas de empleados 24/7.',
      resultado: 'Contratación 3x más rápida · equipo enfocado en lo estratégico.' },
    { key: 'Contabilidad', icon: '🧾',
      problema: 'Digitar facturas y comprobantes a mano genera errores y retrasa los cierres.',
      automatizacion: 'La IA lee documentos, extrae datos y los carga clasificados a tu sistema contable.',
      resultado: '90% menos digitación · cierres contables sin cuellos de botella.' },
    { key: 'Operaciones', icon: '🔄',
      problema: 'Tareas repetitivas entre sistemas que nadie quiere hacer y que frenan todo lo demás.',
      automatizacion: 'Flujos que conectan tus apps y mueven la información sola, con reglas y validaciones.',
      resultado: 'Procesos 24/7 · el equipo deja de operar y empieza a decidir.' },
  ];
  areaActiva = 0;

  /* Empleados Digitales — como productos */
  agentes = [
    { nombre: 'Agente de Ventas', rol: 'Califica, responde y agenda', icon: '🎯', tint: 'blue',
      procesos: 1280, hoy: 'leads atendidos hoy',
      funciones: ['Responde leads al instante', 'Agenda reuniones y nutre el CRM'],
      integra: ['WhatsApp', 'CRM', 'Calendario'] },
    { nombre: 'Agente de Soporte', rol: 'Atiende y resuelve 24/7', icon: '💬', tint: 'violet',
      procesos: 3420, hoy: 'tickets resueltos hoy',
      funciones: ['Resuelve con tu base de conocimiento', 'Escala solo los casos complejos'],
      integra: ['Web', 'Email', 'Help Desk'] },
    { nombre: 'Agente Administrativo', rol: 'Procesa y organiza', icon: '🗂️', tint: 'cyan',
      procesos: 940, hoy: 'documentos procesados',
      funciones: ['Procesa documentos y formularios', 'Genera reportes automáticos'],
      integra: ['Drive', 'ERP', 'Sheets'] },
    { nombre: 'Agente Financiero', rol: 'Cobra y concilia', icon: '💳', tint: 'green',
      procesos: 760, hoy: 'pagos conciliados',
      funciones: ['Seguimiento de cobranza por etapas', 'Concilia pagos y alerta vencimientos'],
      integra: ['Banca', 'ERP', 'WhatsApp'] },
    { nombre: 'Agente de RRHH', rol: 'Filtra y coordina', icon: '👥', tint: 'pink',
      procesos: 410, hoy: 'candidatos evaluados',
      funciones: ['Preselecciona candidatos', 'Coordina entrevistas y responde dudas'],
      integra: ['Email', 'Calendario', 'ATS'] },
  ];

  /* Resultados de negocio (sección clara) */
  resultados = [
    { valor: 85, sufijo: '%', titulo: 'menos tiempo operativo', desc: 'En procesos que antes eran 100% manuales.' },
    { valor: 300, sufijo: '+', titulo: 'horas recuperadas al mes', desc: 'Que tu equipo dedica a crecer, no a operar.' },
    { valor: 24, sufijo: '/7', titulo: 'atención automática', desc: 'Sin turnos, sin pausas, sin días libres.' },
    { valor: 3, sufijo: 'x', titulo: 'más productividad', desc: 'El mismo equipo, multiplicado por la IA.' },
  ];

  /* Actividad nocturna — storytelling */
  noche = [
    { hora: '22:00', icon: '🎯', t: 'Responde y agenda leads que llegan tarde' },
    { hora: '01:00', icon: '🧾', t: 'Lee comprobantes y arma reportes' },
    { hora: '04:00', icon: '💳', t: 'Envía recordatorios de cobranza' },
    { hora: '07:00', icon: '📊', t: 'Tu dashboard ya está listo al despertar' },
  ];

  /* Casos de uso reales */
  casos = [
    { sector: 'Logística', icon: '🚚',
      antes: '5 horas diarias clasificando y respondiendo correos de solicitudes.',
      despues: 'La IA clasifica cada solicitud, responde y crea la tarea automáticamente.',
      metric: 90, sufijo: '%', kpi: 'menos tiempo operativo' },
    { sector: 'Retail', icon: '🛍️',
      antes: 'Consultas de stock y pedidos saturando al equipo en horas pico.',
      despues: 'Un empleado digital atiende en WhatsApp, consulta inventario y toma pedidos.',
      metric: 24, sufijo: '/7', kpi: 'atención sin pausas' },
    { sector: 'Servicios', icon: '🧑‍💼',
      antes: 'Leads de la web sin responder hasta el día siguiente.',
      despues: 'Respuesta y agendamiento automático en menos de un minuto, día y noche.',
      metric: 35, sufijo: '%', kpi: 'más conversión' },
    { sector: 'Finanzas', icon: '🏦',
      antes: 'Cobranza manual irregular y cierres contables siempre atrasados.',
      despues: 'Recordatorios inteligentes y lectura automática de comprobantes.',
      metric: 40, sufijo: '%', kpi: 'menos días de cobro' },
  ];

  /* ¿Por qué Luna? */
  diferenciadores = [
    { icon: '🧠', t: 'No hacemos software tradicional', d: 'Diseñamos sistemas que deciden, no formularios que guardan datos.' },
    { icon: '🤖', t: 'Construimos agentes especializados', d: 'Empleados digitales entrenados para tu operación, no chatbots genéricos.' },
    { icon: '🔌', t: 'IA integrada desde el inicio', d: 'La inteligencia es el núcleo de cada solución, no un parche final.' },
    { icon: '📈', t: 'Medimos en resultados', d: 'Horas ahorradas, costos reducidos y procesos que se ejecutan solos.' },
    { icon: '🚀', t: 'Pensamos en escalabilidad', d: 'Sistemas que crecen contigo sin que tu equipo crezca al mismo ritmo.' },
    { icon: '🌙', t: 'Trabajamos mientras descansas', d: 'Tu operación no se detiene cuando termina el horario de oficina.' },
  ];

  /* Proceso */
  proceso = [
    { n: '01', t: 'Diagnóstico', d: 'Analizamos tus procesos y detectamos dónde la IA genera más valor.' },
    { n: '02', t: 'Diseño', d: 'Definimos los agentes, automatizaciones e integraciones necesarias.' },
    { n: '03', t: 'Construcción', d: 'Desarrollamos e integramos con las herramientas que ya usas.' },
    { n: '04', t: 'Despliegue y mejora', d: 'Lanzamos, medimos resultados y el sistema sigue aprendiendo.' },
  ];

  integraciones = ['WhatsApp', 'Gmail', 'CRM', 'ERP', 'SQL Server', 'Slack', 'Sheets', 'Stripe', 'Calendar', 'Drive', 'Telegram', 'APIs REST'];
}
