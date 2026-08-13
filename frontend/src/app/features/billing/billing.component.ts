import { Component } from '@angular/core';

import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-billing',
  imports: [FeaturePlaceholderComponent],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {}
