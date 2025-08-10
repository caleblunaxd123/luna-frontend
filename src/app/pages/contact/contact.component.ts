// pages/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  action?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], // ← Agregar RouterModule
  template: `
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <div class="hero-content">
            <h1>¿Tienes un Proyecto en Mente?</h1>
            <p>Estamos aquí para ayudarte a convertir tus ideas en realidad.
               Contacta con nuestro equipo de expertos.</p>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-section">
              <div class="form-header">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>

              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                <!-- Nombre y Email -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Nombre Completo *</label>
                    <input
                      type="text"
                      id="name"
                      formControlName="name"
                      [class.error]="isFieldInvalid('name')"
                      placeholder="Tu nombre completo">
                    <div class="error-message" *ngIf="isFieldInvalid('name')">
                      <i class="fas fa-exclamation-circle"></i>
                      El nombre es requerido
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      formControlName="email"
                      [class.error]="isFieldInvalid('email')"
                      placeholder="tu@email.com">
                    <div class="error-message" *ngIf="isFieldInvalid('email')">
                      <i class="fas fa-exclamation-circle"></i>
                      <span *ngIf="contactForm.get('email')?.errors?.['required']">
                        El email es requerido
                      </span>
                      <span *ngIf="contactForm.get('email')?.errors?.['email']">
                        Ingresa un email válido
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Empresa y Teléfono -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      formControlName="company"
                      placeholder="Nombre de tu empresa">
                  </div>

                  <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      formControlName="phone"
                      placeholder="+51 999 888 777">
                  </div>
                </div>

                <!-- Tipo de Servicio -->
                <div class="form-group">
                  <label for="service">Tipo de Servicio *</label>
                  <select
                    id="service"
                    formControlName="service"
                    [class.error]="isFieldInvalid('service')">
                    <option value="">Selecciona un servicio</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="mobile-apps">Aplicaciones Móviles</option>
                    <option value="consulting">Consultoría IT</option>
                    <option value="cloud-solutions">Soluciones en la Nube</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="other">Otro</option>
                  </select>
                  <div class="error-message" *ngIf="isFieldInvalid('service')">
                    <i class="fas fa-exclamation-circle"></i>
                    Selecciona un tipo de servicio
                  </div>
                </div>

                <!-- Presupuesto -->
                <div class="form-group">
                  <label for="budget">Presupuesto Estimado</label>
                  <select id="budget" formControlName="budget">
                    <option value="">Selecciona un rango</option>
                    <option value="under-5k">Menos de $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="over-50k">Más de $50,000</option>
                  </select>
                </div>

                <!-- Mensaje -->
                <div class="form-group">
                  <label for="message">Cuéntanos sobre tu proyecto *</label>
                  <textarea
                    id="message"
                    formControlName="message"
                    [class.error]="isFieldInvalid('message')"
                    rows="5"
                    placeholder="Describe tu proyecto, objetivos y cualquier detalle relevante..."></textarea>
                  <div class="error-message" *ngIf="isFieldInvalid('message')">
                    <i class="fas fa-exclamation-circle"></i>
                    El mensaje es requerido
                  </div>
                </div>

                <!-- Checkbox de términos -->
                <div class="form-group checkbox-group">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      formControlName="acceptTerms"
                      [class.error]="isFieldInvalid('acceptTerms')">
                    <span class="checkmark"></span>
                    Acepto los <a routerLink="/terminos" target="_blank">términos y condiciones</a>
                    y <a routerLink="/privacidad" target="_blank">política de privacidad</a> *
                  </label>
                  <div class="error-message" *ngIf="isFieldInvalid('acceptTerms')">
                    <i class="fas fa-exclamation-circle"></i>
                    Debes aceptar los términos y condiciones
                  </div>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="submit-btn"
                  [disabled]="contactForm.invalid || isSubmitting"
                  [class.loading]="isSubmitting">
                  <span *ngIf="!isSubmitting">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Mensaje
                  </span>
                  <span *ngIf="isSubmitting">
                    <i class="fas fa-spinner fa-spin"></i>
                    Enviando...
                  </span>
                </button>
              </form>

              <!-- Success Message -->
              <div class="success-message" *ngIf="showSuccessMessage" (click)="closeSuccessMessage()">
                <div class="success-content">
                  <i class="fas fa-check-circle"></i>
                  <h3>¡Mensaje Enviado!</h3>
                  <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                  <button class="btn-close" (click)="closeSuccessMessage()">
                    <i class="fas fa-times"></i>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info-section">
              <div class="contact-info-card">
                <h3>Información de Contacto</h3>
                <div class="contact-methods">
                  <div class="contact-method" *ngFor="let info of contactInfos">
                    <div class="method-icon">
                      <i [class]="info.icon"></i>
                    </div>
                    <div class="method-content">
                      <h4>{{ info.title }}</h4>
                      <div class="method-details">
                        <p *ngFor="let detail of info.details">{{ detail }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Office Hours -->
                <div class="office-hours">
                  <h4><i class="fas fa-clock"></i> Horarios de Atención</h4>
                  <div class="hours-grid">
                    <div class="hours-item">
                      <span class="day">Lunes - Viernes</span>
                      <span class="time">9:00 AM - 6:00 PM</span>
                    </div>
                    <div class="hours-item">
                      <span class="day">Sábados</span>
                      <span class="time">10:00 AM - 2:00 PM</span>
                    </div>
                    <div class="hours-item">
                      <span class="day">Domingos</span>
                      <span class="time">Solo emergencias</span>
                    </div>
                  </div>
                </div>

                <!-- Quick Response -->
                <div class="quick-response">
                  <div class="response-item">
                    <i class="fas fa-reply"></i>
                    <div>
                      <strong>Respuesta Rápida</strong>
                      <span>Menos de 2 horas</span>
                    </div>
                  </div>
                  <div class="response-item">
                    <i class="fas fa-calendar-check"></i>
                    <div>
                      <strong>Reunión Inicial</strong>
                      <span>En 24-48 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="section-header">
            <h2>Preguntas Frecuentes</h2>
            <p>Resolvemos las dudas más comunes sobre nuestros servicios</p>
          </div>
          <div class="faq-grid">
            <div class="faq-item" *ngFor="let faq of faqs">
              <div class="faq-question" (click)="toggleFaq(faq)">
                <h4>{{ faq.question }}</h4>
                <i class="fas fa-chevron-down" [class.rotate]="faq.isOpen"></i>
              </div>
              <div class="faq-answer" [class.open]="faq.isOpen">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-page {
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .contact-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 4rem 0;
      color: white;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero-content p {
      font-size: 1.2rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    /* Contact Content */
    .contact-content {
      padding: 4rem 0;
      background: #f8f9fa;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
    }

    /* Form Section */
    .contact-form-section {
      background: white;
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      position: relative;
    }

    .form-header {
      margin-bottom: 2rem;
    }

    .form-header h2 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    .form-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    /* Form Styles */
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group label {
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #2c3e50;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 0.75rem 1rem;
      border: 2px solid #e1e8ed;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }

    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
      border-color: #e74c3c;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-message {
      margin-top: 0.5rem;
      color: #e74c3c;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Checkbox Styles */
    .checkbox-group {
      flex-direction: row;
      align-items: flex-start;
      gap: 0;
    }

    .checkbox-label {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      line-height: 1.5;
    }

    .checkbox-label input[type="checkbox"] {
      display: none;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid #e1e8ed;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark {
      background: #3498db;
      border-color: #3498db;
    }

    .checkbox-label input[type="checkbox"]:checked + .checkmark::after {
      content: "✓";
      color: white;
      font-weight: bold;
      font-size: 0.8rem;
    }

    .checkbox-label a {
      color: #3498db;
      text-decoration: none;
    }

    .checkbox-label a:hover {
      text-decoration: underline;
    }

    /* Submit Button */
    .submit-btn {
      background: linear-gradient(135deg, #3498db, #2980b9);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    /* Success Message */
    .success-message {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .success-content {
      background: white;
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      max-width: 400px;
      margin: 0 2rem;
    }

    .success-content i {
      font-size: 4rem;
      color: #27ae60;
      margin-bottom: 1rem;
    }

    .success-content h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .success-content p {
      color: #7f8c8d;
      margin-bottom: 2rem;
    }

    .btn-close {
      background: #3498db;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0 auto;
    }

    /* Contact Info Section */
    .contact-info-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .contact-info-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .contact-info-card h3 {
      color: #2c3e50;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-method {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
    }

    .method-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #3498db, #2980b9);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .method-content h4 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .method-details p {
      color: #7f8c8d;
      margin: 0.25rem 0;
    }

    /* Office Hours */
    .office-hours {
      border-top: 1px solid #e1e8ed;
      padding-top: 2rem;
      margin-bottom: 2rem;
    }

    .office-hours h4 {
      color: #2c3e50;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hours-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .hours-item {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
    }

    .day {
      font-weight: 600;
      color: #2c3e50;
    }

    .time {
      color: #7f8c8d;
    }

    /* Quick Response */
    .quick-response {
      border-top: 1px solid #e1e8ed;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .response-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .response-item i {
      color: #27ae60;
      font-size: 1.2rem;
    }

    .response-item strong {
      display: block;
      color: #2c3e50;
    }

    .response-item span {
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    /* FAQ Section */
    .faq-section {
      padding: 4rem 0;
      background: white;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .section-header p {
      color: #7f8c8d;
      font-size: 1.1rem;
    }

    .faq-grid {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      border: 1px solid #e1e8ed;
      border-radius: 8px;
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .faq-question {
      padding: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8f9fa;
      transition: background 0.3s ease;
    }

    .faq-question:hover {
      background: #e9ecef;
    }

    .faq-question h4 {
      color: #2c3e50;
      margin: 0;
    }

    .faq-question i {
      color: #7f8c8d;
      transition: transform 0.3s ease;
    }

    .faq-question i.rotate {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .faq-answer.open {
      max-height: 200px;
    }

    .faq-answer p {
      padding: 1.5rem;
      margin: 0;
      color: #555;
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }

      .contact-form-section {
        padding: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .container {
        padding: 0 1rem;
      }

      .contact-content {
        padding: 2rem 0;
      }
    }

    @media (max-width: 480px) {
      .hero-content h1 {
        font-size: 2rem;
      }

      .contact-form-section {
        padding: 1.5rem;
      }

      .success-content {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  contactInfos: ContactInfo[] = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: ['info@lunait.pe', 'contacto@lunait.pe']
    },
    {
      icon: 'fas fa-phone',
      title: 'Teléfono',
      details: ['+51 999 888 777', '+51 01 234 5678']
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      details: ['Lima, Perú', 'Atención presencial con cita previa']
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      details: ['+51 999 888 777', 'Respuesta inmediata']
    }
  ];

  faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto?',
      answer: 'El tiempo varía según la complejidad. Proyectos simples pueden tomar 2-4 semanas, mientras que aplicaciones complejas pueden requerir 3-6 meses.',
      isOpen: false
    },
    {
      question: '¿Ofrecen soporte después del lanzamiento?',
      answer: 'Sí, ofrecemos diferentes planes de soporte y mantenimiento. Incluimos 3 meses de soporte gratuito con cada proyecto.',
      isOpen: false
    },
    {
      question: '¿Trabajan con empresas de otros países?',
      answer: 'Absolutamente. Trabajamos con clientes de toda América Latina y tenemos experiencia en proyectos internacionales.',
      isOpen: false
    },
    {
      question: '¿Qué tecnologías utilizan?',
      answer: 'Utilizamos tecnologías modernas como Angular, React, .NET Core, Node.js, y servicios cloud como Azure y AWS.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      service: ['', Validators.required],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // Simular llamada a API
      const formData = this.contactForm.value;
      console.log('Enviando formulario:', formData);

      // Aquí conectarás con tu API
      // this.apiService.sendContactForm(formData).subscribe(
      //   response => {
      //     this.showSuccessMessage = true;
      //     this.contactForm.reset();
      //     this.isSubmitting = false;
      //   },
      //   error => {
      //     console.error('Error enviando formulario:', error);
      //     this.isSubmitting = false;
      //     // Mostrar mensaje de error
      //   }
      // );

      // Simulación temporal
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
      }, 2000);
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  closeSuccessMessage(): void {
    this.showSuccessMessage = false;
  }

  toggleFaq(faq: any): void {
    faq.isOpen = !faq.isOpen;
  }
}
