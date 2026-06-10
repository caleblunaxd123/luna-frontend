import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * appParallax — desplaza el elemento suavemente al hacer scroll.
 * [appParallax]="0.15" → factor de velocidad (px de scroll * factor).
 * Solo se activa en navegador (SSR/prerender-safe) y respeta reduced-motion.
 */
@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input('appParallax') speed = 0.12;

  private baseTop = 0;
  private ticking = false;
  private onScroll = () => this.requestTick();

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    this.baseTop = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.update();
  }

  private requestTick() {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => { this.update(); this.ticking = false; });
  }

  private update() {
    const delta = (window.scrollY - this.baseTop) * this.speed;
    this.el.nativeElement.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) window.removeEventListener('scroll', this.onScroll);
  }
}
