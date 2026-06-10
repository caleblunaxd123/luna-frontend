import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { RevealDirective } from '../../shared/reveal.directive';

interface Caso {
  titulo: string; area: string; icon: string; tint: string;
  antes: string; solucion: string; resultado: string;
  metric: string; kpi: string; tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, RevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  filtroActivo = 'todos';

  filtros = [
    { key: 'todos',       label: 'Todos' },
    { key: 'Atención',    label: 'Atención' },
    { key: 'Ventas',      label: 'Ventas' },
    { key: 'Operaciones', label: 'Operaciones' },
    { key: 'Finanzas',    label: 'Finanzas' },
    { key: 'RRHH',        label: 'RRHH' },
  ];

  casos: Caso[] = [
    {
      titulo: 'Logística — clasificación de solicitudes', area: 'Operaciones', icon: '🚚', tint: 'violet',
      antes: '5 horas diarias leyendo y clasificando correos de solicitudes a mano.',
      solucion: 'Un agente IA lee cada correo, lo clasifica, responde y genera la tarea automáticamente.',
      resultado: 'El equipo dejó de operar correos y pasó a supervisar excepciones.',
      metric: '90%', kpi: 'menos tiempo operativo', tags: ['Email', 'IA', 'Workflow'],
    },
    {
      titulo: 'Retail — atención y pedidos por WhatsApp', area: 'Atención', icon: '🛍️', tint: 'cyan',
      antes: 'Consultas de stock y pedidos saturaban al equipo en horas pico.',
      solucion: 'Empleado digital que atiende en WhatsApp, consulta inventario y toma pedidos.',
      resultado: 'Atención inmediata las 24 horas, sin filas ni clientes sin respuesta.',
      metric: '24/7', kpi: 'atención sin pausas', tags: ['WhatsApp', 'Inventario'],
    },
    {
      titulo: 'Servicios — captación de leads nocturnos', area: 'Ventas', icon: '🎯', tint: 'pink',
      antes: 'Leads que llegaban de noche se respondían recién al día siguiente.',
      solucion: 'Agente de ventas que responde, califica y agenda en menos de un minuto.',
      resultado: 'Cero leads fríos: cada contacto recibe respuesta al instante.',
      metric: '+35%', kpi: 'más conversión', tags: ['CRM', 'Calendario'],
    },
    {
      titulo: 'Finanzas — cobranza automatizada', area: 'Finanzas', icon: '💳', tint: 'green',
      antes: 'Seguimiento manual e irregular de pagos vencidos, siempre tarde.',
      solucion: 'Recordatorios inteligentes por etapas y conciliación automática de pagos.',
      resultado: 'Cobranza constante y predecible sin esfuerzo del equipo.',
      metric: '40%', kpi: 'menos días de cobro', tags: ['ERP', 'WhatsApp'],
    },
    {
      titulo: 'Contabilidad — lectura de comprobantes', area: 'Operaciones', icon: '🧾', tint: 'amber',
      antes: 'Digitación manual de facturas con errores y cierres atrasados.',
      solucion: 'La IA lee documentos, extrae los datos y los carga clasificados al sistema.',
      resultado: 'Cierres contables sin cuellos de botella y con menos errores.',
      metric: '90%', kpi: 'menos digitación', tags: ['OCR', 'IA', 'ERP'],
    },
    {
      titulo: 'RRHH — preselección de candidatos', area: 'RRHH', icon: '👥', tint: 'violet',
      antes: 'Filtrar decenas de CVs por vacante consumía días del equipo.',
      solucion: 'IA preselecciona según criterios, agenda entrevistas y responde dudas.',
      resultado: 'Procesos de contratación mucho más rápidos y enfocados.',
      metric: '3x', kpi: 'más rápido contratar', tags: ['ATS', 'Email'],
    },
    {
      titulo: 'Soporte — base de conocimiento viva', area: 'Atención', icon: '💬', tint: 'cyan',
      antes: 'El soporte respondía las mismas preguntas una y otra vez.',
      solucion: 'Agente que responde con tu documentación y escala solo lo complejo.',
      resultado: 'Tickets resueltos al instante y equipo libre para casos reales.',
      metric: '80%', kpi: 'tickets autoresueltos', tags: ['Help Desk', 'IA'],
    },
    {
      titulo: 'Gerencia — dashboard que responde', area: 'Operaciones', icon: '📊', tint: 'green',
      antes: 'Reportes armados a mano que llegaban tarde y sin contexto.',
      solucion: 'Dashboard con IA que analiza, alerta riesgos y responde preguntas.',
      resultado: 'Decisiones con datos en tiempo real, sin esperar al área de TI.',
      metric: 'Tiempo real', kpi: 'visibilidad total', tags: ['BI', 'IA'],
    },
  ];

  get casosFiltrados(): Caso[] {
    return this.filtroActivo === 'todos'
      ? this.casos
      : this.casos.filter(c => c.area === this.filtroActivo);
  }

  contarPorFiltro(key: string): number {
    return key === 'todos' ? this.casos.length : this.casos.filter(c => c.area === key).length;
  }
}
