// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Luna IT Solutions — Empleados Digitales y Automatización con IA'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Soluciones IA — Empleados Digitales y Automatización | Luna IT Solutions'
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Casos de Uso Reales de Automatización con IA | Luna IT Solutions'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Solicitar Diagnóstico de Automatización Gratuito | Luna IT Solutions'
  },

  // Redirecciones para SEO y rutas antiguas
  { path: 'home',        redirectTo: '', pathMatch: 'full' },
  { path: 'soluciones',  redirectTo: 'servicios',  pathMatch: 'full' },
  { path: 'services',    redirectTo: 'servicios',  pathMatch: 'full' },
  { path: 'casos',       redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'portfolio',   redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'contact',     redirectTo: 'contacto',   pathMatch: 'full' },

  // Wildcard — siempre al final
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
