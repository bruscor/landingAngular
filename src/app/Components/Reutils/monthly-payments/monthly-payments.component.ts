import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  effect,
} from '@angular/core';
import { Planes } from 'src/app/interfaces/interfaces';
import { PricesComponent } from '../../../Layouts/prices/prices.component';
import { environment } from 'src/app/Environments/environments';

@Component({
  selector: 'app-monthly-payments',
  templateUrl: './monthly-payments.component.html',
  styleUrls: ['./monthly-payments.component.css'],
})
export class MonthlyPaymentsComponent implements AfterViewInit {
  @ViewChild('typeformContainer') typeformContainer!: ElementRef;
  @Input() plan!: Planes;
  @Input() isFreeTrailMode: boolean = true;
  @Input() currency!: string;
  checkedInput: number = 0;
  linkFreeTrail = environment.LINL_FREE_TRAIL;

  constructor(private prices: PricesComponent) {
    effect(() => (this.checkedInput = this.prices.checkedInput()));
  }

  ngAfterViewInit() {
    // Verificamos si los planes están cargados
    if (this.prices.arrayPrices$.value.length > 0) {
      this.loadTypeformScript();
    }
  }

  loadTypeformScript() {
    // cargamos el script de Typeform
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    this.typeformContainer?.nativeElement.appendChild(script);
  }

  calculatePlan(price: number) {
    if (this.checkedInput === 0)
      return `${this.currency}$ ${price.toLocaleString()}`;

    const selectedType = this.prices.arrayDiscounts$.find(
      (type) => type.discount === this.checkedInput,
    );

    if (selectedType && selectedType.discount) {
      const abono = price - (price * selectedType?.discount) / 100;
      const formattedAbono = abono.toLocaleString();
      return `${this.currency}$ ${formattedAbono}`; // Calcula el discount
    } else {
      return 0; // No hay discount si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }

  calculatePrice(price: number) {
    const selectedType = this.prices.arrayDiscounts$.find(
      (type) => type.discount === this.checkedInput,
    );
    if (selectedType && selectedType.discount) {
      const abono = price - (price * selectedType?.discount) / 100;
      const total = abono * selectedType.months;
      const formattedTotal = total.toLocaleString();
      return `${this.currency}$ ${formattedTotal} por ${selectedType.months} meses`; // Calcula el discount
    } else {
      return 0; // No hay discount si no se encuentra el tipo seleccionado o no hay precios definidos
    }
  }
}
