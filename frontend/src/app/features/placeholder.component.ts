import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-feature-placeholder',
  imports: [CommonModule],
  template: `
    <section class="placeholder">
      <h2>{{ title }}</h2>
      <p>This is a placeholder page for {{ title }}.</p>
    </section>
  `,
  styles: [
    `
    .placeholder { max-width: 900px; margin: 0 auto; }
    `
  ]
})
export class FeaturePlaceholderComponent { @Input() title = 'Feature'; }
