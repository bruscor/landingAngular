import { Component } from '@angular/core';
import { Elements } from '../about/about.component';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.css'],
})
export class About2Component {
  imgAbout = '../../../assets/img/Images/tablet.webp';
  aboutBubles = '../assets/img/Images/about_s4_bubble2.webp';
  title = 'Monitor de cocina';
  subTitle = 'Comandas virtuales';
  description =
    'Con un dispositivo en la cocina, los cocineros pueden encargarse de todo sin interrumpir las tareas. Al ingresar y organizar las comandas directamente en pantalla, recibirán los pedidos sin necesidad de imprimirlos.';
  arrayElements: Elements[] = [];
  ngOnInit() {
    this.arrayElements = [
      {
        id: 1,
        icon: 'fa-solid fa-print',
        text: 'Ahorra en papel y cuida el medio ambiente',
      },
      {
        id: 2,
        icon: 'fa-solid fa-laptop',
        text: 'Controla el estado de los pedidos',
      },
      {
        id: 3,
        icon: 'fa-solid fa-bell',
        text: 'Notifica a los meseros cuando la comida esta lista',
      },
    ];
  }
}
