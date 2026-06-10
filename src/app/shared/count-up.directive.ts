import { Directive, ElementRef, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * appCountUp — animates a number from 0 to [appCountUp] when it enters the viewport.
 * Optional [suffix]/[prefix]/[decimals]. SSR-safe (renders final value on server).
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements OnInit {
  @Input('appCountUp') target = 0;
  @Input() suffix = '';
  @Input() prefix = '';
  @Input() decimals = 0;
  @Input() duration = 1600;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private render(v: number) {
    this.el.nativeElement.textContent =
      this.prefix + v.toLocaleString('en-US', {
        minimumFractionDigits: this.decimals,
        maximumFractionDigits: this.decimals
      }) + this.suffix;
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      this.render(this.target);
      return;
    }
    this.render(0);

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        this.animate();
      });
    }, { threshold: 0.4 });

    io.observe(this.el.nativeElement);
  }

  private animate() {
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      this.render(this.target * eased);
      if (p < 1) requestAnimationFrame(step);
      else this.render(this.target);
    };
    requestAnimationFrame(step);
  }
}
