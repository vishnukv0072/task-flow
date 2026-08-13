import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem { label: string; path: string; icon?: string }

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar" [class.open]="open" aria-label="Primary navigation">
      <div class="brand">
        <a routerLink="/dashboard" class="logo">TaskFlow</a>
      </div>

      <nav class="nav" role="navigation" aria-label="Primary">
        <a *ngFor="let it of nav" routerLinkActive="active" [routerLink]="it.path" class="nav-item" (click)="$onNavClick()">
          <span class="icon" aria-hidden="true">{{ it.icon }}</span>
          <span class="label">{{ it.label }}</span>
        </a>
      </nav>

      <div class="sidebar-footer">v0.1</div>
    </aside>
  `,
  styles: [
    `
    .sidebar { background: #0f172a; color: #fff; padding: 1rem; display: flex; flex-direction: column; gap: 1rem; min-height: 100vh; }
    .sidebar .brand { font-weight: 700; font-size: 1.125rem; }
    .logo { color: inherit; text-decoration: none; }
    .nav { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 1rem; }
    .nav-item { display: flex; align-items: center; gap: 0.75rem; color: rgba(255,255,255,0.9); padding: 0.5rem; border-radius: 6px; text-decoration: none; }
    .nav-item:hover, .nav-item.active { background: rgba(255,255,255,0.06); }
    .icon { width: 28px; display: inline-flex; align-items: center; justify-content: center; }
    .label { font-size: 0.95rem; }
    .sidebar-footer { margin-top: auto; font-size: 0.8rem; color: rgba(255,255,255,0.6); }

    @media (max-width: 880px) {
      .sidebar { position: fixed; inset: 0 50% 0 0; width: 280px; transform: translateX(-100%); transition: transform 0.2s ease; z-index: 40; }
      .sidebar.open { transform: translateX(0%); }
    }
    `
  ]
})
export class SidebarComponent {
  @Input() open = true;
  @Output() toggle = new EventEmitter<void>();

  nav: NavItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { label: 'Tasks', path: '/tasks', icon: '✅' },
    { label: 'Projects', path: '/projects', icon: '📁' },
    { label: 'Calendar', path: '/calendar', icon: '📅' },
    { label: 'Notifications', path: '/notifications', icon: '🔔' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
    { label: 'Billing', path: '/billing', icon: '💳' }
  ];

  $onNavClick(){ if (window.innerWidth < 880) this.toggle.emit(); }
}
