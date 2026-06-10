import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  abierto    = false;
  mensajes: Mensaje[] = [];
  input      = '';
  paso       = 0;
  finalizado = false;
  mostrarBurbuja = false;

  datos: Record<string, string> = {};

  // Flujo de conversación — diagnóstico de automatización
  private flujo = [
    { clave: 'nombre',  pregunta: 'Hola 👋 Soy el asistente de Luna IT Solutions.\nTe ayudo a descubrir qué puede automatizar tu empresa. ¿Cómo te llamas?' },
    { clave: 'empresa', pregunta: '¡Un gusto, {nombre}! ¿En qué área quieres ganar más tiempo?',
      opciones: ['Atención al cliente', 'Ventas', 'Cobranza', 'RRHH', 'Administración', 'Otra'] },
    { clave: 'proceso', pregunta: 'Perfecto. ¿Qué tarea repetitiva consume hoy más tiempo en {empresa}?' },
    { clave: 'volumen', pregunta: '¿Con qué frecuencia ocurre esa tarea?',
      opciones: ['Todo el día', 'Varias veces al día', 'Algunas veces por semana', 'Puntualmente'] },
    { clave: 'contacto', pregunta: '¡Genial! Para enviarte tu diagnóstico de automatización gratuito, ¿cuál es tu email o WhatsApp?' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => { if (!this.abierto) this.mostrarBurbuja = true; }, 8000);
  }

  toggleChat() {
    this.abierto = !this.abierto;
    this.mostrarBurbuja = false;
    if (this.abierto && this.mensajes.length === 0) {
      setTimeout(() => this.preguntarPaso(), 400);
    }
  }

  private preguntarPaso() {
    if (this.paso >= this.flujo.length) { this.mostrarResumen(); return; }
    const f = this.flujo[this.paso];
    let texto = f.pregunta;
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

  private mostrarResumen() {
    const resumen =
      `✅ ¡Gracias ${this.datos['nombre']}!\n\n` +
      `📋 Lo que registré:\n` +
      `• Área: ${this.datos['empresa']}\n` +
      `• Proceso: ${this.datos['proceso']}\n` +
      `• Frecuencia: ${this.datos['volumen']}\n\n` +
      `🤖 **Esto es altamente automatizable con IA.**\n` +
      `Caleb te contactará a ${this.datos['contacto']} con tu diagnóstico detallado y las oportunidades concretas para tu caso.`;

    this.agregarMensaje('bot', resumen);
    this.enviarANetlify();

    setTimeout(() => {
      this.agregarMensaje('bot',
        '¿Quieres avanzar ahora mismo?',
        ['💬 WhatsApp directo', '📧 Espero el diagnóstico', '🔄 Nueva consulta']);
      this.finalizado = true;
    }, 1200);
  }

  private async enviarANetlify() {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      const resumen = Object.entries(this.datos).map(([k, v]) => `${k}: ${v}`).join('\n');
      const body = new URLSearchParams({
        'form-name': 'chatbot-cotizacion',
        nombre:   this.datos['nombre']   ?? '',
        contacto: this.datos['contacto'] ?? '',
        proyecto: this.datos['empresa']  ?? '',
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
      const msg = encodeURIComponent(`Hola Caleb, usé el asistente. Área: ${this.datos['empresa']}, proceso: ${this.datos['proceso']}`);
      window.open(`https://wa.me/51922307301?text=${msg}`, '_blank');
    } else if (opcion.includes('Nueva')) {
      this.mensajes = []; this.paso = 0; this.datos = {}; this.finalizado = false;
      setTimeout(() => this.preguntarPaso(), 300);
    }
  }
}
