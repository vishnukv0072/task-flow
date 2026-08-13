import { Component } from '@angular/core';

import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [FeaturePlaceholderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {}
