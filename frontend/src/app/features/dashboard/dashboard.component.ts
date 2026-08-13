import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <section class="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to TaskFlow. This is a placeholder dashboard.</p>

      <div class="cards">
        <div class="card">Tasks: 0</div>
        <div class="card">Projects: 0</div>
        <div class="card">Upcoming: 0</div>
      </div>
    </section>
  `,
  styles: [
    `
    .dashboard { max-width: 1100px; margin: 0 auto; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-top: 1rem; }
    .card { background: #fff; padding: 1rem; border-radius: 8px; box-shadow: 0 1px 2px rgba(16,24,40,0.03); }
    `
  ]
})
export class DashboardComponent {
  // example local signal
  private _count = signal(0);
  count = this._count.asReadonly();
}
