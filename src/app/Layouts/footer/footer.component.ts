import { Component, Input, effect } from '@angular/core';
import { FormElements } from 'src/app/interfaces/interfaces';
import { LocationService } from 'src/app/services/location.service';

const optionLocations: { [key: string]: string } = {
  cordoba: 'córdoba',
  'buenos aires': 'mar del plata',
  mendoza: 'mendoza',
  'santa fe': 'rosario',
  tucumán: 'tucumán',
  'ciudad autónoma de buenos aires': 'buenos aires',
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  subTitle = 'Núcleo Check';
  title = '¿Listo para descubrirnos?';
  description = 'Contacta con nuestros asesores comerciales.';
  imgHero3 = '../assets/img/Images/header_4_wave.webp';
  imgLogo = '../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
  imgFullLogo = '../../../assets/img/Nucleo-img/logoNucleoIT.webp';
  arrayForm: FormElements[] = [];
  arrayLiFooter: FormElements[] = [];
  element: any;
  position?: string;

  constructor(private locationServices: LocationService) {
    this.getCurrentPosition();
  }

  ngOnInit(): void {
    this.arrayForm = [
      {
        id: 4,
        icon: 'fa-brands fa-whatsapp',
        text: 'WhatsApp: 11 3277-7917',
        href: 'https://api.whatsapp.com/send?phone=5491132777917',
      },
      {
        id: 1,
        icon: 'fa-solid fa-phone',
        text: 'Buenos Aires: 11 5263-0039',
        href: 'tel:+5491152630039',
      },
      {
        id: 3,
        icon: 'fa-solid fa-phone',
        text: 'Córdoba: 351 700-0039',
        href: 'tel:+5493517000039',
      },
      {
        id: 6,
        icon: 'fa-solid fa-phone',
        text: 'Mendoza: 261 352-0039',
        href: 'tel:+5492613520039',
      },
      {
        id: 2,
        icon: 'fa-solid fa-phone',
        text: 'Rosario: 341 208-0039',
        href: 'tel:+5493412080039',
      },
      {
        id: 7,
        icon: 'fa-solid fa-phone',
        text: 'Tucumán: 381 596-0039',
        href: 'tel:+543815960039',
      },
      {
        id: 8,
        icon: 'fa-solid fa-phone',
        text: 'Mar del Plata: 223 630-0039',
        href: 'tel:+5492236300039',
      },
      {
        id: 5,
        icon: 'fa-solid fa-envelope',
        text: 'Mail: info@nucleoit.com.ar',
        href: 'mailto:info@nucleoit.com.ar',
      },
      {
        id: 9,
        icon: 'fa-solid fa-location-dot',
        text: 'Direccion: Lavalle 1783 7°B, CABA',
        href: null,
      },
    ];

    this.arrayLiFooter = [
      {
        href: '#features',
        text: 'Características',
      },
      {
        href: '#integraciones',
        text: 'Intergaciones',
      },
      {
        href: '#precios',
        text: 'Precios',
      },
      {
        href: '#faq',
        text: 'Faq',
      },
    ];
  }

  async getCurrentPosition() {
    await this.locationServices.getUserLocation();
    let filteredElements: FormElements[] = [];
    this.position = this.locationServices.userLocation;
    let location = optionLocations[this.position!.toLowerCase()];

    if (this.position && location) {
      filteredElements = this.arrayForm.filter((element) => {
        return (
          element.text.toLowerCase().includes(location as string) ||
          element.text.includes('WhatsApp') ||
          element.text.includes('Mail') ||
          element.text.includes('Direccion') ||
          element.text.includes('Buenos Aires')
        );
      });
    }

    if (filteredElements.length > 0) this.arrayForm = filteredElements;
  }
}
