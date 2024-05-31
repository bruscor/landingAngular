import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../interfaces/interfaces';
import { environment } from '../Environments/environments';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings(): Observable<{ plans: Settings }> {
    return this.http.get<{ plans: Settings }>(
      environment.API_DB_URL + environment.URL_SETTINGS,
    );
  }
}
