import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: "app-sidebar",
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss"
})
export class SidebarComponent {
  @Input() open = true;
  @Output() toggle = new EventEmitter<void>();

  readonly nav: NavItem[] = [
    { label: "Dashboard", path: "/dashboard", icon: "🏠" },
    { label: "Tasks", path: "/tasks", icon: "✅" },
    { label: "Projects", path: "/projects", icon: "📁" },
    { label: "Calendar", path: "/calendar", icon: "📅" },
    { label: "Notifications", path: "/notifications", icon: "🔔" },
    { label: "Settings", path: "/settings", icon: "⚙️" },
    { label: "Billing", path: "/billing", icon: "💳" }
  ];

  onNavClick(): void {
    if (window.innerWidth < 880) {
      this.toggle.emit();
    }
  }
}
