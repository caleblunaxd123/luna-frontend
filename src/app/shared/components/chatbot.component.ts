import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje { tipo: 'bot' | 'user'; texto: string; opciones?: string[]; }

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  abierto   = false;
  mensajes: Mensaje[] = [];
  input     = '';
  paso      = 0;
  enviando  = false;
  finalizado = false;

  // Datos recopilados del usuario
  datos: Record<string, string> = {};

  // Flujo de conversación — cotizador automático
  private flujo = [
    { clave: 'nombre',      pregunta: '¡Hola! Soy el asistente de Luna IT Solutions 👋\n¿Cómo te llamas?' },
    { clave: 'proyecto',    pregunta: '¡Mucho gusto, {nombre}! ¿Qué tipo de proyecto necesitas?',
      opciones: ['Sistema web / ERP', 'App móvil', 'API / Backend', 'Ecommerce', 'Consultoría', 'Otro'] },
    { clave: 'descripcion', pregunta: 'Perfecto. Cuéntame brevemente qué necesitas hacer con tu {proyecto}:' },
    { clave: 'plazo',       pregunta: '¿Para cuándo lo necesitas?',
      opciones: ['Lo antes posible', '1 mes', '2-3 meses', 'Sin prisa'] },
    { clave: 'presupuesto', pregunta: '¿Tienes un presupuesto aproximado en mente?',
      opciones: ['Menos de $300', '$300 – $800', '$800 – $2,000', 'Más de $2,000', 'No lo sé aún'] },
    { clave: 'contacto',    pregunta: '¡Genial! Para enviarte la cotización detallada, ¿cuál es tu email o WhatsApp?' },
  ];

  ngOnInit() {
    // Abrir automáticamente después de 8 segundos
    setTimeout(() => { if (!this.abierto) this.mostrarBurbuja = true; }, 8000);
  }

  mostrarBurbuja = false;

  toggleChat() {
    this.abierto = !this.abierto;
    this.mostrarBurbuja = false;
    if (this.abierto && this.mensajes.length === 0) {
      setTimeout(() => this.preguntarPaso(), 400);
    }
  }

  private preguntarPaso() {
    if (this.paso >= this.flujo.length) { this.mostrarCotizacion(); return; }
    const f = this.flujo[this.paso];
    let texto = f.pregunta;
    // Reemplazar variables
    Object.entries(this.datos).forEach(([k, v]) => { texto = texto.replace(`{${k}}`, v); });
    this.agregarMensaje('bot', texto, f.opciones);
  }

  agregarMensaje(tipo: 'bot' | 'user', texto: string, opciones?: string[]) {
    this.mensajes.push({ tipo, texto, opciones });
    setTimeout(() => {
      const el = document.querySelector('.chat-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }

  seleccionarOpcion(opcion: string) {
    this.agregarMensaje('user', opcion);
    this.datos[this.flujo[this.paso].clave] = opcion;
    this.paso++;
    setTimeout(() => this.preguntarPaso(), 600);
  }

  enviarInput() {
    const texto = this.input.trim();
    if (!texto) return;
    this.input = '';
    this.agregarMensaje('user', texto);
    this.datos[this.flujo[this.paso]?.clave ?? 'extra'] = texto;
    this.paso++;
    setTimeout(() => this.preguntarPaso(), 600);
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); this.enviarInput(); }
  }

  private mostrarCotizacion() {
    const rango = this.calcularRango();
    const cotizacion =
      `✅ ¡Gracias ${this.datos['nombre']}!\n\n` +
      `📋 Resumen de tu proyecto:\n` +
      `• Tipo: ${this.datos['proyecto']}\n` +
      `• Plazo: ${this.datos['plazo']}\n\n` +
      `💰 Estimado: **${rango}**\n\n` +
      `Caleb te contactará en menos de 2 horas a: ${this.datos['contacto']} con la cotización detallada y próximos pasos.`;

    this.agregarMensaje('bot', cotizacion);

    // Enviar a Netlify Forms automáticamente
    this.enviarANetlify();

    setTimeout(() => {
      this.agregarMensaje('bot',
        '¿Quieres hablar ahora mismo?',
        ['💬 WhatsApp directo', '📧 Espero el email', '🔄 Nueva consulta']);
      this.finalizado = true;
    }, 1200);
  }

  private calcularRango(): string {
    const p = this.datos['presupuesto'] ?? '';
    const t = this.datos['proyecto']   ?? '';
    if (p.includes('Más de $2,000')) return '$2,000 – $8,000 USD';
    if (p.includes('$800')) return '$800 – $2,000 USD';
    if (p.includes('$300')) return '$300 – $800 USD';
    if (p.includes('Menos')) return '$150 – $400 USD';
    // Estimar por tipo si no indicó presupuesto
    if (t.includes('ERP') || t.includes('web')) return '$500 – $2,000 USD';
    if (t.includes('móvil'))  return '$800 – $3,000 USD';
    if (t.includes('API'))    return '$300 – $1,200 USD';
    if (t.includes('Ecommer'))return '$700 – $2,500 USD';
    return '$300 – $1,500 USD';
  }

  private async enviarANetlify() {
    try {
      const resumen = Object.entries(this.datos)
        .map(([k, v]) => `${k}: ${v}`).join('\n');
      const body = new URLSearchParams({
        'form-name': 'chatbot-cotizacion',
        nombre:   this.datos['nombre']   ?? '',
        contacto: this.datos['contacto'] ?? '',
        proyecto: this.datos['proyecto'] ?? '',
        resumen
      });
      await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
    } catch { }
  }

  formatear(texto: string): string {
    return texto
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  accionFinal(opcion: string) {
    if (opcion.includes('WhatsApp')) {
      const msg = encodeURIComponent(`Hola Caleb, acabo de usar el chatbot. Proyecto: ${this.datos['proyecto']}`);
      window.open(`https://wa.me/51922307301?text=${msg}`, '_blank');
    } else if (opcion.includes('Nueva')) {
      this.mensajes = []; this.paso = 0; this.datos = {}; this.finalizado = false;
      setTimeout(() => this.preguntarPaso(), 300);
    }
  }
}
