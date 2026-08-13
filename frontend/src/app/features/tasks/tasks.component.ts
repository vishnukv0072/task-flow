import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Tasks"></app-feature-placeholder>`
})
export class TasksComponent {}
