import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ReportRepository } from '../../domain/ports/report-repository';
import { Report } from '../../domain/models/report';

@Injectable()
export class ReportHttpService implements ReportRepository {
  private readonly apiUrl = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

  generate(tipo: string): Observable<Report> {
    return this.http.post<Report>(`${this.apiUrl}/generate`, { tipo });
  }
}
