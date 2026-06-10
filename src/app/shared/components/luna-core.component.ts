import { Component, Input } from '@angular/core';

/**
 * Luna Core — elemento de marca de Luna IT Solutions.
 * Un núcleo lunar que orquesta agentes en órbita con datos en movimiento continuo.
 * Representa: "la inteligencia que trabaja mientras tú descansas".
 * SVG + SMIL puro → sin JavaScript, seguro para SSR/prerender.
 */
@Component({
  selector: 'app-luna-core',
  standalone: true,
  template: `
  <svg class="luna-core" [class.compact]="compact" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="lcGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="#8b7dff" stop-opacity=".55"/>
        <stop offset="45%" stop-color="#3b82f6" stop-opacity=".22"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="lcMoon" cx="38%" cy="35%" r="75%">
        <stop offset="0%"  stop-color="#ffffff"/>
        <stop offset="55%" stop-color="#cdd7ff"/>
        <stop offset="100%" stop-color="#8b7dff"/>
      </radialGradient>
      <linearGradient id="lcRing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0"  stop-color="#3b82f6"/>
        <stop offset=".5" stop-color="#8b7dff"/>
        <stop offset="1"  stop-color="#38e1f0"/>
      </linearGradient>
      <filter id="lcSoft" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="6"/>
      </filter>
    </defs>

    <!-- ambient glow -->
    <circle cx="220" cy="220" r="120" fill="url(#lcGlow)"/>

    <!-- twinkling stars -->
    <g fill="#cdd7ff">
      <circle class="star s1" cx="70"  cy="90"  r="2"/>
      <circle class="star s2" cx="370" cy="120" r="1.6"/>
      <circle class="star s3" cx="350" cy="330" r="2.2"/>
      <circle class="star s1" cx="95"  cy="320" r="1.6"/>
      <circle class="star s2" cx="220" cy="44"  r="1.8"/>
      <circle class="star s3" cx="44"  cy="210" r="1.5"/>
      <circle class="star s2" cx="400" cy="230" r="1.5"/>
    </g>

    <!-- orbit A -->
    <g transform="rotate(8 220 220)">
      <path id="lcOrbitA" class="orbit-line"
        d="M70,220 a150,62 0 1,0 300,0 a150,62 0 1,0 -300,0"/>
      <g class="node">
        <circle class="halo" r="11" fill="#3b82f6"/>
        <circle r="5.5" fill="#bcd4ff"/>
        <animateMotion dur="13s" repeatCount="indefinite" rotate="auto">
          <mpath href="#lcOrbitA"/>
        </animateMotion>
      </g>
    </g>

    <!-- orbit B -->
    <g transform="rotate(64 220 220)">
      <path id="lcOrbitB" class="orbit-line"
        d="M100,220 a120,150 0 1,0 240,0 a120,150 0 1,0 -240,0"/>
      <g class="node">
        <circle class="halo" r="11" fill="#8b7dff"/>
        <circle r="5.5" fill="#e0dbff"/>
        <animateMotion dur="17s" begin="-6s" repeatCount="indefinite" rotate="auto">
          <mpath href="#lcOrbitB"/>
        </animateMotion>
      </g>
    </g>

    <!-- orbit C -->
    <g transform="rotate(-38 220 220)">
      <path id="lcOrbitC" class="orbit-line"
        d="M55,220 a165,92 0 1,0 330,0 a165,92 0 1,0 -330,0"/>
      <g class="node">
        <circle class="halo" r="11" fill="#38e1f0"/>
        <circle r="5.5" fill="#c9f6fb"/>
        <animateMotion dur="20s" begin="-9s" repeatCount="indefinite" rotate="auto">
          <mpath href="#lcOrbitC"/>
        </animateMotion>
      </g>
    </g>

    <!-- ping rings -->
    <circle cx="220" cy="220" r="40" fill="none" stroke="#8b7dff" stroke-width="1.5" opacity="0">
      <animate attributeName="r" values="40;110" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".5;0" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="220" r="40" fill="none" stroke="#38e1f0" stroke-width="1.5" opacity="0">
      <animate attributeName="r" values="40;110" dur="4s" begin="-2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".5;0" dur="4s" begin="-2s" repeatCount="indefinite"/>
    </circle>

    <!-- core: glowing moon -->
    <circle cx="220" cy="220" r="42" fill="#8b7dff" opacity=".5" filter="url(#lcSoft)"/>
    <path class="moon" filter="url(#lcSoft)" fill="url(#lcMoon)"
      d="M220,184 a36,36 0 1,0 0,72 a30,30 0 1,1 0,-72 z"/>
  </svg>
  `,
  styles: [`
    :host { display: block; line-height: 0; }
    .luna-core { width: 100%; height: auto; overflow: visible; }
    .orbit-line {
      fill: none; stroke: url(#lcRing); stroke-width: 1.4; opacity: .5;
      stroke-dasharray: 5 9; animation: dashFlow 6s linear infinite;
    }
    .node .halo { opacity: .35; }
    .moon { animation: pulse 4s ease-in-out infinite; }
    .star { animation: twinkle 3.2s ease-in-out infinite; }
    .star.s2 { animation-duration: 4.4s; animation-delay: .6s; }
    .star.s3 { animation-duration: 2.6s; animation-delay: 1.1s; }
    @keyframes dashFlow { to { stroke-dashoffset: -200; } }
    @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .72; } }
    @keyframes twinkle { 0%,100% { opacity: .2; } 50% { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .orbit-line, .moon, .star { animation: none; }
      .node animateMotion { display: none; }
    }
  `]
})
export class LunaCoreComponent {
  @Input() compact = false;
}
