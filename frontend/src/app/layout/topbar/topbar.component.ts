import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-topbar',
  imports: [CommonModule, RouterLink],
  template: `
    <header class="topbar">
      <button class="menu-btn" aria-label="Toggle navigation" (click)="$emitToggle()">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/></svg>
      </button>

      <div class="title" role="heading" aria-level="1">{{ pageTitle() || 'TaskFlow' }}</div>

      <div class="top-actions">
        <a routerLink="/notifications" class="notif" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z"/></svg>
          <span *ngIf="unread>0" class="badge" aria-hidden="true">{{ unread }}</span>
        </a>

        <div class="avatar" title="Account">
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z"/></svg>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
    .topbar {
      height: 64px;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.06);
      background: #fff;
      flex: 0 0 auto;
    }
    .menu-btn {
      border: 0; background: transparent; padding: 0.25rem; border-radius: 6px;
    }
    .menu-btn:focus { outline: 2px solid #0366d6; }
    .title { font-weight: 600; font-size: 1.125rem; }
    .top-actions { margin-left: auto; display: flex; align-items: center; gap: 0.75rem; }
    .notif { position: relative; display: inline-flex; align-items: center; padding: 0.25rem; color: inherit; text-decoration: none; }
    .badge { position: absolute; top: -6px; right: -6px; background: #e11d48; color: white; font-size: 0.75rem; padding: 0.125rem 0.35rem; border-radius: 999px; }
    .avatar { width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 6px; background: #f3f4f6; }

    @media (max-width: 880px) { .title { font-size: 1rem; } }
    `
  ]
})
export class TopbarComponent {
  @Input() pageTitle = (() => 'TaskFlow') as any;
  @Input() unread = 0;
  @Output() toggleSidebar = new EventEmitter<void>();

  $emitToggle(){ this.toggleSidebar.emit(); }
}
