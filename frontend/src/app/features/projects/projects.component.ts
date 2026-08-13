import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Projects"></app-feature-placeholder>`
})
export class ProjectsComponent {}
