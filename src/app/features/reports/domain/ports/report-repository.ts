import { Observable } from 'rxjs';
import { Report } from '../models/report';

export abstract class ReportRepository {
  abstract getAll(): Observable<Report[]>;
  abstract generate(tipo: string): Observable<Report>;
}
