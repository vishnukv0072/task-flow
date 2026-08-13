import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Notifications"></app-feature-placeholder>`
})
export class NotificationsComponent {}
