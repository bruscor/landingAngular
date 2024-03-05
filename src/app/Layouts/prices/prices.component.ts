import { Component, signal, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Discount, Planes } from 'src/app/interfaces/interfaces';
import { DiscountsService } from 'src/app/services/discounts.service';
import { LocationService } from 'src/app/services/location.service';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  @Input() isFreeTrailMode: boolean = true;
  arrayPrices$ = new BehaviorSubject<Planes[]>([]);
  arrayDiscounts$!: Discount[];
  currency!: string;
  loading: boolean = true;

  subTitle = 'Planes Núcleo Check';
  title!: string;
  description =
    'Debajo puedes elegir algún otro plan que se adapte a tus necesidades.';
  checkedInput = signal(0);

  constructor(
    private _plansServices: PlansService,
    private _discountsService: DiscountsService,
    private _locationService: LocationService,
  ) {}

  ngOnInit(): void {
    this.getCurrency().then(() => {
      this._plansServices.getPlans().subscribe(({ plans }) => {
        if (plans) {
          this.loading = false;
          this.arrayPrices$.next(plans);
          this.title = `Optimiza la gestión de tu negocio desde ${
            this.currency
          }$ ${this.arrayPrices$.value[0].prices[
            this.currency
          ].toLocaleString()}. \n Incluye facturación electrónica y pedidos ilimitados`;
        }
      });

      this._discountsService.getDiscounts().subscribe(({ discounts }) => {
        this.arrayDiscounts$ = discounts;
      });
    });
  }

  async getCurrency() {
    await this._locationService.getUserLocation();
    this.currency = this._locationService.userCurrency;
  }

  changeCheckbox(value: number) {
    this.checkedInput.set(value);
  }
}
