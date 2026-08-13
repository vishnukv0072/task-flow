import { Component } from '@angular/core';

import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [FeaturePlaceholderComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {}
