import { Component } from '@angular/core';

interface Redes {
  id: number;
  href: string;
  icon: string;
  title: string;
  text: string;
}

interface FormElements {
  id: number;
  icon: string;
  text: string;
}

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
})
export class RedesComponent {
  subTitle = 'Canales de comunicación';
  title = 'Síguenos en nuestras redes sociales';
  description = 'Encuéntranos aquí y contáctanos.';

  arrayRedes: Redes[] = [];
  arrayForm: FormElements[] = [];

  ngOnInit(): void {
    this.arrayRedes = [
      {
        id: 1,
        href: 'https://www.instagram.com/nucleoit/',
        icon: 'fab fa-instagram',
        title: 'Instagram',
        text: 'Novedades + Presentaciones',
      },
      {
        id: 4,
        href: 'https://www.facebook.com/nucleoit',
        icon: 'fab fa-facebook',
        title: 'Facebook',
        text: 'Novedades ',
      },
      {
        id: 2,
        href: 'https://www.youtube.com/nucleoit',
        icon: 'fab fa-youtube',
        title: 'Youtube',
        text: 'Videos de presentación + Tutoriales',
      },
      {
        id: 3,
        href: 'https://www.linkedin.com/company/n%C3%BAcleo-it/',
        icon: 'fab fa-linkedin',
        title: 'Linkedin',
        text: 'Búsquedas laborales + Contenido',
      },
    ];

    this.arrayForm = [
      {
        id: 1,
        icon: 'fa-solid fa-phone',
        text: 'Bs. As.: 11 5263-0039',
      },
      {
        id: 2,
        icon: 'fa-solid fa-phone',
        text: 'Rosario: 341 208-0039',
      },
      {
        id: 3,
        icon: 'fa-solid fa-phone',
        text: 'Córdoba: 351 700-0039',
      },
      {
        id: 4,
        icon: 'fa-brands fa-whatsapp',
        text: '(549) 11-3277-7917',
      },
      {
        id: 5,
        icon: 'fa-solid fa-envelope',
        text: 'info@nucleoit.com.ar',
      },
    ];
  }
}
