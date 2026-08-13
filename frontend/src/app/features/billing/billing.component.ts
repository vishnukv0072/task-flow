import { Component } from '@angular/core';
import { FeaturePlaceholderComponent } from '../placeholder.component';

@Component({
  standalone: true,
  selector: 'app-billing',
  imports: [FeaturePlaceholderComponent],
  template: `<app-feature-placeholder title="Billing"></app-feature-placeholder>`
})
export class BillingComponent {}
