import { Component, Input } from '@angular/core';
import { environment } from 'src/app/Environments/environments';

interface optionsHero {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() isFreeTrailMode: boolean = true;

  imgHero = '../../../assets/img/Images/devices.webp';
  imgHero2 = '../../../assets/img/Images/header_4_bubble.webp';
  imgHero3 = '../assets/img/Images/header_4_wave.webp';
  subTitle = 'Súmate a la revolución gastronómica';
  title = 'Núcleo Check el software gastronómico que esperabas';
  description = `Puedes usarlo en cualquier dispositivo con internet y tiene todo lo que necesitas. Es la solución práctica que aplican los gastronómicos de habla hispana.`;
  freeTrailDescription =
    'Realiza una prueba gratuita de 14 días o recibe una demostración online con nuestros asesores sin compromiso.';
  noFreeTrailDescription =
    'Recibe una demostración online con nuestros asesores sin compromiso.';
  month!: string;
  year!: string;
  linkCalendly = environment.LINK_CALENDLY;
  linkFreeTrail = environment.LINL_FREE_TRAIL;

  constructor() {}
}
