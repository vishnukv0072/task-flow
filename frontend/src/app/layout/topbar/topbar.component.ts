import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-topbar",
  imports: [CommonModule, RouterLink],
  templateUrl: "./topbar.component.html",
  styleUrl: "./topbar.component.scss"
})
export class TopbarComponent {
  @Input() pageTitle = "TaskFlow";
  @Input() unread = 0;
  @Output() toggleSidebar = new EventEmitter<void>();

  emitToggle(): void {
    this.toggleSidebar.emit();
  }
}
