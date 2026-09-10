import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarItem } from './sidebar-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})

export class Sidebar {
  items = input<SidebarItem[]>([]);
  backgroundColor = input('var(--surface-container)');
  primaryColor = input('var(--primary)');
  title = input('Lunorion Labs');
  logoUrl = input('https://res.cloudinary.com/dp1vgjhsq/image/upload/v1789017515/L-LOGO_qsquwu.png');
  permissions = input<string[]>([]);
  collapsed = signal(false);
  logout = output<void>();

  visibleItems = computed(() =>
    this.items().filter(
      item =>
        !item.permission ||
        this.permissions().includes(item.permission)
    )
  );

  toggleSidebar() {
    this.collapsed.set(!this.collapsed());
  }

  onLogout() {
    this.logout.emit();
  }
}
