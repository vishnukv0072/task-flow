import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  selector: 'app-shell',
  imports: [CommonModule, RouterOutlet, TopbarComponent, SidebarComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="app-shell" [attr.data-sidebar-open]="sidebarOpen()">
      <app-sidebar
        [open]="sidebarOpen()"
        (toggle)="toggleSidebar()"
      ></app-sidebar>

      <div class="main-area">
        <app-topbar
          (toggleSidebar)="toggleSidebar()"
          [pageTitle]="pageTitle"
          [unread]="unreadNotifications()"
        ></app-topbar>

        <main id="main-content" class="content" role="main">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
    :host { display: block; height: 100vh; }
    .skip-link {
      position: absolute;
      left: -9999px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    .skip-link:focus {
      left: 1rem;
      top: 1rem;
      width: auto;
      height: auto;
      padding: 0.5rem 1rem;
      background: #111;
      color: #fff;
      z-index: 9999;
    }

    .app-shell {
      display: grid;
      grid-template-columns: 260px 1fr;
      grid-template-rows: 1fr;
      height: 100vh;
      transition: grid-template-columns 0.2s ease;
    }

    .app-shell[data-sidebar-open="false"] {
      grid-template-columns: 64px 1fr;
    }

    .main-area {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: var(--app-bg, #f7f9fb);
    }

    .content {
      padding: 1.25rem;
      overflow: auto;
      flex: 1 1 auto;
    }

    @media (max-width: 880px) {
      .app-shell {
        grid-template-columns: 1fr;
      }
      .app-shell[data-sidebar-open="true"] {
        grid-template-columns: 1fr;
      }
    }
    `
  ]
})
export class ShellComponent {
  // sidebar open state persisted to localStorage
  private _sidebarOpen = signal<boolean>(true);
  sidebarOpen = this._sidebarOpen.asReadonly();

  // simple unread notifications signal to demonstrate passing signals into topbar
  private _unread = signal<number>(0);
  unreadNotifications = this._unread.asReadonly();

  // page title is a writable computed signal that features can set by calling a service later
  pageTitle = signal<string>('');

  toggleSidebar() {
    const next = !this._sidebarOpen();
    this._sidebarOpen.set(next);
    try { localStorage.setItem('tf.sidebarOpen', next ? '1' : '0'); } catch {}
  }

  constructor() {
    try {
      const v = localStorage.getItem('tf.sidebarOpen');
      if (v === '0') this._sidebarOpen.set(false);
    } catch {}
  }
}
