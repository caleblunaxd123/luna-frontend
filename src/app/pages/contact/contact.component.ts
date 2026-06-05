import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  enviado  = false;
  enviando = false;

  form = { nombre: '', email: '', telefono: '', tipo: '', presupuesto: '', mensaje: '' };

  async enviar() {
    if (!this.form.nombre || !this.form.email || !this.form.mensaje) return;
    this.enviando = true;
    await new Promise(r => setTimeout(r, 1200));
    this.enviando = false;
    this.enviado  = true;
  }
}
