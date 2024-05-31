import { Component, signal, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Discount, Planes } from 'src/app/interfaces/interfaces';
import { DiscountsService } from 'src/app/services/discounts.service';
import { currency, LocationService } from 'src/app/services/location.service';
import { PlansService } from 'src/app/services/plans.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent {
  @Input() isFreeTrailMode: boolean = true;
  loading: boolean = true;

  arrayPrices$ = new BehaviorSubject<Planes[]>([]);
  arrayDiscounts$!: Discount[];

  currency!: string;
  title!: string;
  subTitle = 'Planes Núcleo Check';
  description =
    'Debajo puedes elegir algún otro plan que se adapte a tus necesidades.';
  descriptionAddFE?: string;

  checkedInput = signal(0);
  priceToAddFE?: number;

  isARG!: boolean;
  constructor(
    private _plansServices: PlansService,
    private _discountsService: DiscountsService,
    private _locationService: LocationService,
    private _settingService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.getCurrency().then(() => {
      this._plansServices.getPlans().subscribe(({ plans }) => {
        if (plans) {
          this.loading = false;
          this.arrayPrices$.next(plans);
          this.generateTitle();
        }
      });

      this._discountsService.getDiscounts().subscribe(({ discounts }) => {
        this.arrayDiscounts$ = discounts;
      });

      this._settingService.getSettings().subscribe((settings: any) => {
        this.priceToAddFE = settings.plans[0].priceToAddFE;
        this.generateDescriptionAddFE();
      });
    });
  }

  generateTitle() {
    this.isARG = this.currency === 'ARS';

    if (this.isARG) {
      this.title = `Optimiza la gestión de tu negocio desde ${
        this.currency
      }$ ${this.arrayPrices$.value[0].prices[
        this.currency
      ].toLocaleString()}. \n Incluye facturación electrónica y pedidos ilimitados`;
    } else {
      this.title = `Optimiza la gestión de tu negocio desde ${
        this.currency
      }$ ${this.arrayPrices$.value[0].prices[
        this.currency
      ].toLocaleString()}. \n Incluye pedidos ilimitados`;
    }
  }

  generateDescriptionAddFE() {
    this.descriptionAddFE = `Agregá facturación electrónica a cualquier plan por ${this.currency}$${this.priceToAddFE} /mes`;
  }

  async getCurrency() {
    await this._locationService.getUserLocation();
    this.currency = this._locationService.userCurrency;
  }

  changeCheckbox(value: number) {
    this.checkedInput.set(value);
  }
}
