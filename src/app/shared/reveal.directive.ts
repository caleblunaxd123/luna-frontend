import { Directive, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * appReveal — adds `.in` class when the element scrolls into view.
 * SSR/prerender-safe: on the server it simply shows the element.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      node.classList.add('in');
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    io.observe(node);
  }
}
