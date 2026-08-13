import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Calendar"></app-feature-placeholder>`
})
export class CalendarComponent {}
