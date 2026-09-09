import { Injectable, signal } from '@angular/core';
import { Report } from '../../domain/models/report';

@Injectable({ providedIn: 'root' })
export class ReportStore {
  readonly reports = signal<Report[]>([]);
  readonly selectedReport = signal<Report | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  setReports(reports: Report[]): void {
    this.reports.set(reports);
  }

  setSelectedReport(report: Report | null): void {
    this.selectedReport.set(report);
  }

  setLoading(value: boolean): void {
    this.loading.set(value);
  }

  setError(error: string | null): void {
    this.error.set(error);
  }
}
