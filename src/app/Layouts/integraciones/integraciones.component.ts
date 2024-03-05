import { Component } from '@angular/core';

interface Apps {
  id: number;
  src: string;
}

@Component({
  selector: 'app-integraciones',
  templateUrl: './integraciones.component.html',
  styleUrls: ['./integraciones.component.css'],
})
export class IntegracionesComponent {
  backInteg = '../assets/img/Images/intg_back.webp';
  arrayApps: Apps[] = [];
  title = 'Integrado con las aplicaciones más usadas';
  subTitle = 'Todos los pedidos en un solo lugar';
  description =
    'Se integra a la perfección con aplicaciones de delivery y métodos de pago.';

  ngOnInit() {
    this.arrayApps = [
      {
        id: 6,
        src: '../assets/img/Images/cd.webp',
      },
      {
        id: 3,
        src: '../assets/img/Images/mp.webp',
      },
      {
        id: 1,
        src: '../assets/img/Images/peya.webp',
      },
      {
        id: 7,
        src: '../assets/img/Images/alax.webp',
      },
      {
        id: 2,
        src: '../assets/img/Images/rappi.webp',
      },
      {
        id: 4,
        src: '../assets/img/Images/masDeli.webp',
      },
      {
        id: 5,
        src: '../assets/img/Images/uber.webp',
      },
    ];
  }
}
