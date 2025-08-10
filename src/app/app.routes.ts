// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio - Luna IT Solutions'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Servicios - Luna IT Solutions'
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Portafolio - Luna IT Solutions'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contacto - Luna IT Solutions'
  },

  // Redirección de rutas en inglés a español para SEO
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'services', redirectTo: 'servicios', pathMatch: 'full' },
  { path: 'portfolio', redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'contact', redirectTo: 'contacto', pathMatch: 'full' },

  // Wildcard route - siempre debe ir al final
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
