// shared/components/header/header.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="navbar">
        <div class="nav-container">
          <!-- Logo -->
          <a class="nav-logo" routerLink="/">
            <div class="logo-icon">
              <i class="fas fa-moon"></i>
            </div>
            <span class="logo-text">Luna IT Solutions</span>
          </a>

          <!-- Desktop Menu -->
          <div class="nav-menu" [class.active]="isMenuOpen">
            <a class="nav-link"
               routerLink="/"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}"
               (click)="closeMenu()">
              <i class="fas fa-home"></i>
              <span>Inicio</span>
            </a>

            <a class="nav-link"
               routerLink="/servicios"
               routerLinkActive="active"
               (click)="closeMenu()">
              <i class="fas fa-cogs"></i>
              <span>Servicios</span>
            </a>

            <a class="nav-link"
               routerLink="/portafolio"
               routerLinkActive="active"
               (click)="closeMenu()">
              <i class="fas fa-briefcase"></i>
              <span>Portafolio</span>
            </a>

            <div class="nav-dropdown">
              <a class="nav-link dropdown-toggle"
                 (click)="toggleDropdown('empresa')"
                 [class.active]="isDropdownOpen.empresa">
                <i class="fas fa-building"></i>
                <span>Empresa</span>
                <i class="fas fa-chevron-down dropdown-arrow"></i>
              </a>
              <div class="dropdown-menu" [class.show]="isDropdownOpen.empresa">
                <a routerLink="/nosotros" (click)="closeMenu()">
                  <i class="fas fa-users"></i>
                  Sobre Nosotros
                </a>
                <a routerLink="/equipo" (click)="closeMenu()">
                  <i class="fas fa-user-friends"></i>
                  Nuestro Equipo
                </a>
                <a routerLink="/casos-exito" (click)="closeMenu()">
                  <i class="fas fa-trophy"></i>
                  Casos de Éxito
                </a>
                <a routerLink="/blog" (click)="closeMenu()">
                  <i class="fas fa-blog"></i>
                  Blog
                </a>
              </div>
            </div>

            <a class="nav-link"
               routerLink="/contacto"
               routerLinkActive="active"
               (click)="closeMenu()">
              <i class="fas fa-envelope"></i>
              <span>Contacto</span>
            </a>
          </div>

          <!-- CTA Button -->
          <div class="nav-cta">
            <a class="btn-quote" routerLink="/contacto">
              <i class="fas fa-calculator"></i>
              Cotizar Proyecto
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <div class="nav-toggle" (click)="toggleMenu()">
            <span class="bar" [class.active]="isMenuOpen"></span>
            <span class="bar" [class.active]="isMenuOpen"></span>
            <span class="bar" [class.active]="isMenuOpen"></span>
          </div>
        </div>
      </nav>

      <!-- Mobile Overlay -->
      <div class="mobile-overlay"
           [class.active]="isMenuOpen"
           (click)="closeMenu()"></div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .navbar {
      padding: 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    /* Logo */
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease;
    }

    .nav-logo:hover {
      transform: scale(1.05);
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
    }

    .logo-text {
      font-size: 1.3rem;
      font-weight: 700;
      color: #2c3e50;
      white-space: nowrap;
    }

    /* Navigation Menu */
    .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      text-decoration: none;
      color: #555;
      font-weight: 500;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
      white-space: nowrap;
    }

    .nav-link:hover {
      color: #3498db;
      background: rgba(52, 152, 219, 0.1);
      transform: translateY(-1px);
    }

    .nav-link.active {
      color: #3498db;
      background: rgba(52, 152, 219, 0.15);
    }

    .nav-link i {
      font-size: 0.9rem;
    }

    /* Dropdown */
    .nav-dropdown {
      position: relative;
    }

    .dropdown-toggle {
      cursor: pointer;
    }

    .dropdown-arrow {
      font-size: 0.7rem !important;
      transition: transform 0.3s ease;
    }

    .dropdown-toggle.active .dropdown-arrow {
      transform: rotate(180deg);
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background: white;
      min-width: 220px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 1001;
    }

    .dropdown-menu.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-menu a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
      color: #555;
      text-decoration: none;
      transition: all 0.3s ease;
      border-radius: 8px;
      margin: 0.25rem;
    }

    .dropdown-menu a:hover {
      background: rgba(52, 152, 219, 0.1);
      color: #3498db;
      transform: translateX(5px);
    }

    .dropdown-menu a i {
      width: 16px;
      text-align: center;
    }

    /* CTA Button */
    .nav-cta {
      display: flex;
      align-items: center;
    }

    .btn-quote {
      background: linear-gradient(135deg, #ff6b6b, #ff5252);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
      text-decoration: none;
      box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
    }

    .btn-quote:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
      background: linear-gradient(135deg, #ff5252, #f44336);
    }

    /* Mobile Menu Toggle */
    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
      padding: 0.5rem;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: #333;
      transition: all 0.3s ease;
      border-radius: 2px;
    }

    .bar.active:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .bar.active:nth-child(2) {
      opacity: 0;
    }

    .bar.active:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    /* Mobile Overlay */
    .mobile-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-container {
        padding: 0 1rem;
      }

      .nav-menu {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 300px;
        height: calc(100vh - 70px);
        background: white;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 2rem 0;
        transition: right 0.3s ease;
        box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
        overflow-y: auto;
      }

      .nav-menu.active {
        right: 0;
      }

      .nav-link {
        margin: 0 1rem;
        padding: 1rem;
        border-radius: 8px;
      }

      .nav-dropdown .dropdown-menu {
        position: static;
        box-shadow: none;
        border: none;
        background: rgba(52, 152, 219, 0.05);
        margin: 0 1rem;
        border-radius: 8px;
      }

      .nav-cta {
        display: none;
      }

      .nav-toggle {
        display: flex;
      }

      .mobile-overlay {
        display: block;
      }

      .logo-text {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .nav-container {
        height: 60px;
      }

      .nav-menu {
        top: 60px;
        height: calc(100vh - 60px);
        width: 280px;
      }

      .logo-text {
        display: none;
      }

      .logo-icon {
        width: 35px;
        height: 35px;
      }
    }

    /* Animations */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .nav-menu.active {
      animation: slideDown 0.3s ease;
    }

    /* Hide scrollbar in mobile menu */
    .nav-menu::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    /* Active link indicator */
    .nav-link.active::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: #3498db;
      border-radius: 1px;
    }

    /* Smooth hover animations */
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #3498db;
      border-radius: 1px;
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 20px;
    }

    .nav-link.active::after {
      width: 20px;
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isDropdownOpen = {
    empresa: false
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-dropdown')) {
      this.closeAllDropdowns();
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      this.closeAllDropdowns();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
    this.closeAllDropdowns();
  }

  toggleDropdown(dropdown: keyof typeof this.isDropdownOpen) {
    // Cerrar otros dropdowns
    Object.keys(this.isDropdownOpen).forEach(key => {
      if (key !== dropdown) {
        this.isDropdownOpen[key as keyof typeof this.isDropdownOpen] = false;
      }
    });

    // Toggle el dropdown actual
    this.isDropdownOpen[dropdown] = !this.isDropdownOpen[dropdown];
  }

  closeAllDropdowns() {
    Object.keys(this.isDropdownOpen).forEach(key => {
      this.isDropdownOpen[key as keyof typeof this.isDropdownOpen] = false;
    });
  }
}
