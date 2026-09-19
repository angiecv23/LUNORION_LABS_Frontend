import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClientHttpService } from '../../data-access/api/client-http.service';
import { Client } from '../../domain/models/client';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [],
  templateUrl: './clients-list.html',
  styleUrl: './clients-list.scss'
})
export class ClientsList implements OnInit {
  private clientService = inject(ClientHttpService);
  private router = inject(Router);

  clients: Client[] = [];
  filteredClients: Client[] = [];

  searchTerm = '';
  statusFilter = '';

  isLoading = false;
  loadError = false;

  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.isLoading = true;
    this.loadError = false;

    this.clientService.getAll().subscribe({
      next: clients => {
        this.clients = clients;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.clients = [];
        this.filteredClients = [];
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredClients = this.clients.filter(client => {
      const matchesSearch =
        !search ||
        `${client.nombres} ${client.apellidos}`.toLowerCase().includes(search) ||
        client.numeroDocumento.toLowerCase().includes(search) ||
        client.telefono.toLowerCase().includes(search);

      const matchesStatus =
        !this.statusFilter ||
        (this.statusFilter === 'active' && client.activo) ||
        (this.statusFilter === 'inactive' && !client.activo);

      return matchesSearch && matchesStatus;
    });

    this.currentPage = 1;
  }

  get paginatedClients(): Client[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredClients.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredClients.length / this.pageSize));
  }

  get totalClients(): number {
    return this.clients.length;
  }

  get activeClients(): number {
    return this.clients.filter(client => client.activo).length;
  }

  get inactiveClients(): number {
    return this.clients.filter(client => !client.activo).length;
  }

  get startRecord(): number {
    if (this.filteredClients.length === 0) {
      return 0;
    }

    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.filteredClients.length
    );
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  openCreateClient(): void {
    this.router.navigate(['/dashboard/clients/new']);
  }

  openClientDetails(id: string): void {
    this.router.navigate(['/dashboard/clients', id]);
  }

  openEditClient(id: string): void {
    this.router.navigate(['/dashboard/clients', id, 'edit']);
  }
}