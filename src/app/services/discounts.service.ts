import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discount } from '../interfaces/interfaces';
import { environment } from '../Environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscountsService {
  constructor(private htpp: HttpClient) {}

  getDiscounts(): Observable<{ discounts: Discount[] }> {
    return this.htpp.get<{ discounts: Discount[] }>(
      environment.API_DB_URL + environment.URL_DISCOUNTS,
    );
  }
}
