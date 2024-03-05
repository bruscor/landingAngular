import { Component } from '@angular/core';

interface Testimonial {
  inicial: string;
  nombre: string;
  testimonio: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  title = `Nuestros clientes cuentan cuál es su experiencia con Núcleo Check`;
  aboutWave = '../../../assets/img/Images/about_s4_wave.webp';
  subTitle = 'Testimonios';
  description = 'Contamos con las mejores referencias en Google.';
  imgTesti1 = '../assets/img/Testimonials/testi_s4_ic1.png';
  imgTesti2 = '../assets/img/Testimonials/testi_s4_ic2.png';
  imgTesti3 = '../assets/img/icons/contact_globe.svg';
  buttonHref =
    'https://www.google.com/search?q=nucleoit&oq=nucleoit&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MggIARAAGAoYHjIGCAIQRRg8MgYIAxBFGDwyBggEEEUYQTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYQdIBCDM2NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x95bcc7f01fd777c9:0xe32dbfb50020a961,1,,,,1';

  arrayTestimonials: Testimonial[] = [];

  ngOnInit(): void {
    this.arrayTestimonials = [
      {
        inicial: 'M',
        nombre: 'Marciel Vieira',
        testimonio:
          'Esta empresa que trabaja conmigo desde hace varios años es muy muy recomendables, el sistema es muy completo, y la asistencia al usuario más que acorde. He transitado estos años su trayectoria he visto los cambios que han logrado incorporar para nosotros los que usamos sus aplicaciones .',
      },
      {
        inicial: 'S',
        nombre: 'Sandra Castaneira',
        testimonio:
          'La atención y asistencia que me brindó Blanca hoy fue excelente! Casi sin conocimientos pude seguir sus indicaciones y solucioné el tema de facturación.',
      },
      {
        inicial: 'J',
        nombre: 'Julieta Maya',
        testimonio:
          'Muy buena la atención, siempre están disponibles para ayudar a resolver. El programa muy completo y al mismo tiempo fácil de usar.',
      },
    ];
  }
}
