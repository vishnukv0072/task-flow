import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Settings"></app-feature-placeholder>`
})
export class SettingsComponent {}
