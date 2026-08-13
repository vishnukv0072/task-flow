import { Component } from '@angular/core';

import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [FeaturePlaceholderComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {}
