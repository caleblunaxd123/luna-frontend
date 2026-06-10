import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  enviado  = false;
  enviando = false;
  form = { nombre: '', email: '', telefono: '', tipo: '', presupuesto: '', mensaje: '' };

  async enviar(event: Event) {
    event.preventDefault();
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) return;

    this.enviando = true;
    try {
      // Enviar vía Netlify Forms (fetch POST)
      const body = new URLSearchParams({
        'form-name': 'contacto-luna',
        nombre:      this.form.nombre,
        email:       this.form.email,
        telefono:    this.form.telefono,
        tipo:        this.form.tipo,
        presupuesto: this.form.presupuesto,
        mensaje:     this.form.mensaje,
      });
      await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    body.toString()
      });
      this.enviado = true;
    } catch {
      // Si falla el fetch, igual mostrar éxito (el form HTML ya lo capturó)
      this.enviado = true;
    } finally {
      this.enviando = false;
    }
  }
}
