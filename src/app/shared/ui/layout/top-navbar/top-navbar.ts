import { Component, input, signal} from '@angular/core';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { BreadcrumbItem } from '../breadcrumb/breadcrumb-item.interface';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [Breadcrumb],
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.scss']
})

export class TopNavbar {
  backgroundColor = input('var(--surface-container-low)');
  breadcrumbItems = input<BreadcrumbItem[]>([]);
  userName = input('Pancito con palta');
  userRole = input('ADMINISTRADOR');
  notifications = input(0);
  dropdownOpen = signal(false);

  toggleDropdown() {
    this.dropdownOpen.update(v => !v);
  }

  closeDropdown() {
    this.dropdownOpen.set(false);
  }
}