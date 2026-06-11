import { Component, HostListener, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /** true cuando el header flota sobre un hero oscuro (home) */
  @Input() onDark = false;
  scrolled  = false;
  menuOpen  = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 50; }
}
