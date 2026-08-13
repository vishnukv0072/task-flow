import { Component } from '@angular/core';

import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-notifications',
  imports: [FeaturePlaceholderComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {}
