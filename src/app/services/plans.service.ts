import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environments/environments';
import { Planes } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  constructor(private http: HttpClient) {}

  getPlans(): Observable<{ plans: Planes[] }> {
    return this.http.get<{ plans: Planes[] }>(
      environment.API_DB_URL + environment.URL_PLANS,
    );
  }
}
