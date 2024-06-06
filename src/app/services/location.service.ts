import { Injectable } from '@angular/core';
import { environment } from '../Environments/environments';

export const currency: { [key: string]: string } = {
  AR: 'ARS',
  OTHERS: 'US',
};

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public userLocation?: string;
  public userCurrency!: string;

  constructor() {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<any> {
    return new Promise((res, rej) => {
      try {
        fetch(`${environment.API_LOCATION_URL}${environment.API_KEY_LOCATION}`)
          .then((res) => res.json())
          .then((data) => {
            res(this.getLocation(data.region, data.country_code));
          });
      } catch (error) {}
    });
  }

  async getLocation(region: string, country_code: string) {
    this.userLocation = region;
    const country: string = country_code.toUpperCase();
    this.userCurrency = currency[country]
      ? currency[country]
      : currency['OTHERS'];
  }
}
