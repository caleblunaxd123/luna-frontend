import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = environment.apiBaseUrl; // p.ej. 'https://localhost:7150/api'

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceItem[]> {
    return this.http.get<ServiceItem[]>(`${this.base}/services`);
  }

  sendContact(payload: { name: string; email: string; message: string }) {
    return this.http.post(`${this.base}/contact`, payload);
  }
}
