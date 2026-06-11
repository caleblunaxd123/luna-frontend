import { Component, Input } from '@angular/core';

/**
 * Luna Core — elemento de marca de Luna IT Solutions.
 * Un núcleo lunar que orquesta agentes en órbita con energía en movimiento continuo.
 * Representa: "la inteligencia que trabaja mientras tú descansas".
 * SVG + SMIL puro → sin JavaScript, seguro para SSR/prerender.
 */
@Component({
  selector: 'app-luna-core',
  standalone: true,
  template: `
  <svg class="luna-core" [class.compact]="compact" viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Luna Core orquestando agentes en órbita">
    <defs>
      <radialGradient id="lcGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="#9a8cff" stop-opacity=".6"/>
        <stop offset="42%" stop-color="#3b82f6" stop-opacity=".22"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="lcMoon" cx="36%" cy="32%" r="78%">
        <stop offset="0%"  stop-color="#ffffff"/>
        <stop offset="48%" stop-color="#d6deff"/>
        <stop offset="100%" stop-color="#8b7dff"/>
      </radialGradient>
      <linearGradient id="lcRing" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0"  stop-color="#3b82f6"/>
        <stop offset=".5" stop-color="#8b7dff"/>
        <stop offset="1"  stop-color="#38e1f0"/>
      </linearGradient>
      <linearGradient id="lcSweep" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0"   stop-color="#38e1f0" stop-opacity="0"/>
        <stop offset="100%" stop-color="#38e1f0" stop-opacity=".9"/>
      </linearGradient>
      <filter id="lcSoft" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="6"/>
      </filter>
    </defs>

    <!-- ambient glow -->
    <circle cx="220" cy="220" r="125" fill="url(#lcGlow)"/>

    <!-- twinkling stars -->
    <g fill="#cdd7ff">
      <circle class="star s1" cx="70"  cy="90"  r="2"/>
      <circle class="star s2" cx="370" cy="120" r="1.6"/>
      <circle class="star s3" cx="350" cy="330" r="2.2"/>
      <circle class="star s1" cx="95"  cy="320" r="1.6"/>
      <circle class="star s2" cx="220" cy="44"  r="1.8"/>
      <circle class="star s3" cx="44"  cy="210" r="1.5"/>
      <circle class="star s2" cx="400" cy="230" r="1.5"/>
      <circle class="star s1" cx="300" cy="60"  r="1.4"/>
    </g>

    <!-- static guide rings (depth) -->
    <circle cx="220" cy="220" r="168" fill="none" stroke="url(#lcRing)" stroke-width="1" opacity=".14"/>
    <circle cx="220" cy="220" r="200" fill="none" stroke="url(#lcRing)" stroke-width="1" opacity=".08"/>

    <!-- rotating energy sweep (continuous cycle) -->
    <g style="transform-origin:220px 220px">
      <circle cx="220" cy="220" r="168" fill="none" stroke="url(#lcSweep)" stroke-width="2.4"
              stroke-linecap="round" stroke-dasharray="120 936" opacity=".85"/>
      <animateTransform attributeName="transform" type="rotate" from="0 220 220" to="360 220 220" dur="9s" repeatCount="indefinite"/>
    </g>

    <!-- orbit A -->
    <g transform="rotate(8 220 220)">
      <path id="lcOrbitA" class="orbit-line"
        d="M70,220 a150,62 0 1,0 300,0 a150,62 0 1,0 -300,0"/>
      <g class="node">
        <circle class="halo" r="12" fill="#3b82f6"/>
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
        <circle class="halo" r="12" fill="#8b7dff"/>
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
        <circle class="halo" r="12" fill="#38e1f0"/>
        <circle r="5.5" fill="#c9f6fb"/>
        <animateMotion dur="20s" begin="-9s" repeatCount="indefinite" rotate="auto">
          <mpath href="#lcOrbitC"/>
        </animateMotion>
      </g>
    </g>

    <!-- ping rings -->
    <circle cx="220" cy="220" r="44" fill="none" stroke="#8b7dff" stroke-width="1.5" opacity="0">
      <animate attributeName="r" values="44;118" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".55;0" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="220" r="44" fill="none" stroke="#38e1f0" stroke-width="1.5" opacity="0">
      <animate attributeName="r" values="44;118" dur="4s" begin="-2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values=".55;0" dur="4s" begin="-2s" repeatCount="indefinite"/>
    </circle>

    <!-- core: crisp inner ring + glowing moon -->
    <circle cx="220" cy="220" r="48" fill="none" stroke="url(#lcRing)" stroke-width="1.6" opacity=".5"/>
    <circle cx="220" cy="220" r="44" fill="#8b7dff" opacity=".5" filter="url(#lcSoft)"/>
    <path class="moon" filter="url(#lcSoft)" fill="url(#lcMoon)"
      d="M220,182 a38,38 0 1,0 0,76 a32,32 0 1,1 0,-76 z"/>
    <circle class="core-spark" cx="206" cy="204" r="4" fill="#ffffff" opacity=".9"/>
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
    .moon { animation: moonPulse 4s ease-in-out infinite; transform-origin: 220px 220px; }
    .core-spark { animation: pulse 4s ease-in-out infinite; }
    .star { animation: twinkle 3.2s ease-in-out infinite; }
    .star.s2 { animation-duration: 4.4s; animation-delay: .6s; }
    .star.s3 { animation-duration: 2.6s; animation-delay: 1.1s; }
    @keyframes dashFlow { to { stroke-dashoffset: -200; } }
    @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
    @keyframes moonPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .85; transform: scale(1.03); } }
    @keyframes twinkle { 0%,100% { opacity: .2; } 50% { opacity: 1; } }
    @media (prefers-reduced-motion: reduce) {
      .orbit-line, .moon, .star, .core-spark { animation: none; }
      .node animateMotion { display: none; }
    }
  `]
})
export class LunaCoreComponent {
  @Input() compact = false;
}
