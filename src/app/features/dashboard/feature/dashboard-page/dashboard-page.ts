import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../../../shared/ui/layout/sidebar/sidebar';
import { TopNavbar } from '../../../../shared/ui/layout/top-navbar/top-navbar';
import { NavigationService } from '../../../../core/navigation/navigation.service';
import { LayoutService } from '../../../../core/layout/layout.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterModule, Sidebar, TopNavbar],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.scss'],
})
export class DashboardPage {
  protected readonly nav = inject(NavigationService);
  protected readonly layout = inject(LayoutService);
}
