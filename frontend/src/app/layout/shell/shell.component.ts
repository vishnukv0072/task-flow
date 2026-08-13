import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  standalone: true,
  selector: "app-shell",
  imports: [CommonModule, RouterOutlet, TopbarComponent, SidebarComponent],
  templateUrl: "./shell.component.html",
  styleUrl: "./shell.component.scss"
})
export class ShellComponent {
  private readonly sidebarOpenSignal = signal<boolean>(true);
  readonly sidebarOpen = this.sidebarOpenSignal.asReadonly();

  private readonly unreadNotificationsSignal = signal<number>(0);
  readonly unreadNotifications = this.unreadNotificationsSignal.asReadonly();

  readonly pageTitle = signal<string>("TaskFlow");

  toggleSidebar(): void {
    const next = !this.sidebarOpenSignal();
    this.sidebarOpenSignal.set(next);

    try {
      localStorage.setItem("tf.sidebarOpen", next ? "1" : "0");
    } catch {
      // ignore storage errors in browser-only shell setup
    }
  }

  constructor() {
    try {
      const stored = localStorage.getItem("tf.sidebarOpen");
      if (stored === "0") {
        this.sidebarOpenSignal.set(false);
      }
    } catch {
      // ignore storage errors in browser-only shell setup
    }
  }
}
