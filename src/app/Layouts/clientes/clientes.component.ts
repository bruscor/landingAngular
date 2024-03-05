import { Component } from '@angular/core';
import { Clients } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  arrayClients: Clients[] = [
    {
      href: 'https://www.instagram.com/jirosushi.ba/',
      img: '../../../assets/img/Logos/jiroSushi.webp',
      alt: 'Logo jiro suhsi',
    },
    {
      href: 'https://www.instagram.com/bonafidearg/',
      img: '../../../assets/img/Logos/bonafide.webp',
      alt: 'Logo Bonafide',
    },
    {
      href: 'https://www.instagram.com/chininhelados/',
      img: '../../../assets/img/Logos/chinin.webp',
      alt: 'Logo chinin helados',
    },
    {
      href: 'https://www.instagram.com/gridohelados/',
      img: '../../../assets/img/Logos/grido.webp',
      alt: 'Logo Grido Helados',
    },
    {
      href: 'https://www.instagram.com/seituhelados/',
      img: '../../../assets/img/Logos/seitu.webp',
      alt: 'Logo Seitu helados',
    },
    {
      href: 'https://www.instagram.com/mercadosoho/',
      img: '../../../assets/img/Logos/mercadoSoho.webp',
      alt: 'Logo Mercado soho',
    },
    {
      href: 'https://www.instagram.com/cafecito.tcs/',
      img: '../../../assets/img/Logos/cafecito.webp',
      alt: 'Logo Cafecito tiny coffee shop',
    },
    {
      href: 'https://www.instagram.com/bodegafincasavina/',
      img: '../../../assets/img/Logos/finca.webp',
      alt: 'Logo Bodega finca savina',
    },
    {
      href: 'https://www.instagram.com/hoppinessclub/',
      img: '../../../assets/img/Logos/hoppiness.webp',
      alt: 'Logo Hoppiness club',
    },
    {
      href: 'https://www.instagram.com/majamorenaempanadas/',
      img: '../../../assets/img/Logos/majaMorena.webp',
      alt: 'Logo Maja morena empanadas',
    },
    {
      href: 'https://www.instagram.com/pokeandrollba/',
      img: '../../../assets/img/Logos/poke.webp',
      alt: 'Logo Poké & roll',
    },
    {
      href: 'https://www.instagram.com/ahorason13/',
      img: '../../../assets/img/Logos/ahoraSon.webp',
      alt: 'Logo ahora son 13',
    },
    {
      href: 'https://www.instagram.com/restaurantelglobo/',
      img: '../../../assets/img/Logos/elGlobo.webp',
      alt: 'Logo El globo restaurant',
    },
    {
      href: 'https://www.instagram.com/estacion_de_milanesas/',
      img: '../../../assets/img/Logos/estacion.webp',
      alt: 'Logo estacion de milanesas',
    },
    {
      href: 'https://www.instagram.com/civettarossa/',
      img: '../../../assets/img/Logos/civeta.webp',
      alt: 'Logo civetta rossa',
    },
    {
      href: 'https://www.instagram.com/cruzespacio/',
      img: '../../../assets/img/Logos/cruz.webp',
      alt: 'Logo Cruz Espacio',
    },
    {
      href: 'https://www.instagram.com/panaderia_independencia/',
      img: '../../../assets/img/Logos/independencia.webp',
      alt: 'Logo Panaderia independencia',
    },
    {
      href: 'https://www.instagram.com/open.playa/',
      img: '../../../assets/img/Logos/openPlaya.webp',
      alt: 'Logo open playa',
    },
    {
      href: 'https://www.instagram.com/chescohelados/',
      img: '../../../assets/img/Logos/chesco.webp',
      alt: 'Logo chesco helados',
    },
  ];

  constructor() {
    const clonedClients = [...this.arrayClients];
    this.arrayClients = this.arrayClients.concat(clonedClients);
  }
}
