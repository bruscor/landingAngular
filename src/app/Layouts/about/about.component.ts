import { Component } from '@angular/core';

export interface Elements {
  id: number;
  icon: string;
  text: string;
  includes?: boolean;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  imgAbout = '../../../assets/img/Images/moviles.webp';
  aboutBubles = '../../../assets/img/Images/about_s4_bubble.webp';
  aboutWave = '../../../assets/img/Images/about_s4_wave.webp';
  aboutLines = '../assets/img/Images/about_s4_lines.png';
  title = 'Registra los pedidos de los meseros';
  subTitle = 'Diseño móvil para meseros';
  description =
    'Es una manera práctica y rápida para que los meseros puedan registrar los pedidos de los clientes desde las mesas, sin necesidad de ir a un computador fijo.';
  arrayElements: Elements[] = [];
  ngOnInit() {
    this.arrayElements = [
      {
        id: 1,
        icon: 'fas fa-tag',
        text: 'Lo puedes utilizar en cualquier dispositivo ',
      },
      {
        id: 2,
        icon: 'fas fa-sync',
        text: 'Sincronización inmediata con el sistema',
      },
      {
        id: 3,
        icon: 'fas fa-text-width',
        text: 'Abre, adiciona y cierra mesas desde un mismo lugar',
      },
    ];
  }
}
