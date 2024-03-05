import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  subTitle = 'Descubre Núcleo Check';
  title =
    'Ingresa a la mejor solución para los negocios gastronómicos de habla hispana';
  description =
    'Obtén una demostración personalizada y gratuita en vivo de nuestros asesores, sin compromiso alguno.';
  month!: string;
  year!: string;
  linkCalendly!: string;

  constructor() {
    this.month = new Date().toLocaleString('default', { month: 'long' });
    this.year = new Date().getFullYear().toString();
    this.linkCalendly = `https://calendly.com/nucleoit/demostracion-online?month=${this.year}-${this.month}`;
  }
}
