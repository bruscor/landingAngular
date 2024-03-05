import { Component } from '@angular/core';
import { Faqs } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  arrayFaqs: Faqs[] = [];
  subTitle = 'Preguntas Frecuentes';
  title = '¿Tienes más preguntas sobre Núcleo Check?';
  description =
    'Si no encuentras la respuesta a tu pregunta no dudes en contactarnos.';

  indexSelect = 0;
  cutArray = 8;
  textButton = 'Ver más';
  showMore = false;

  ngOnInit(): void {
    this.arrayFaqs = [
      {
        id: 1,
        question: '¿Es seguro trabajar con un software en la nube?',
        answer:
          'Sin dudas. Trabajar en la nube es más seguro que desde un computador o PC fijo. Para dar gran excelencia en nuestro servicio, alojamos nuestro sistema en los servidores de Microsoft (Azure) en los Estados Unidos. Cuentan con los mejores protocolos de seguridad garantizados por estar online 99.99% del tiempo.',
      },
      {
        id: 2,
        question: '¿Qué pasa si me quedo sin internet en el negocio?',
        answer:
          'Puedes seguir operando, ya que todo está alojado en la nube. Puedes acceder desde cualquier dispositivo móvil (celular, tablet o laptop) que cuente con acceso a internet.',
      },
      {
        id: 3,
        question: '¿Cuento con Soporte Técnico en caso de necesitarlo?',
        answer:
          'Sí. Todos los usuarios del sistema de Núcleo Check cuentan con la atención los 365 días del año. Nuestros clientes cuentan con capacitaciones ilimitadas que brindamos para que puedan aprovechar al máximo el servicio.',
      },
      {
        id: 4,
        question: '¿El sistema se puede usar con pantallas táctiles?',
        answer:
          'Si. Este sistema fue diseñado para ser utilizado en dispositivos móviles que por lo general cuentan con pantallas táctiles como tablets y celulares. De esta manera, se agiliza el registro de los pedidos de los meseros y en las aplicaciones de delivery gastronómicas.',
      },
      {
        id: 9,
        question: '¿Hay un límite de usuarios?',
        answer:
          'No, puedes crear tantos usuarios como desees para todo el personal. sin embargo, cada plan tiene un límite de usuarios que puedan usar el sistema en simultaneo.',
      },
      {
        id: 10,
        question: '¿El sistema está pensado solo para restaurantes?',
        answer:
          'El sistema fue ideado principalmente para restaurantes, pizzerías, bares y heladerías, sin embargo, su versatilidad en cuanto a funciones lo hace muy compatible con diferentes modelos de negocios, no dudes en consultarnos si Núcleo Check es para vos.',
      },
      {
        id: 6,
        question:
          '¿Puedo tomar pedidos de Delivery y Take away más allá de los pedidos de las mesas?',
        answer:
          'Si. Con Núcleo Check Puedes tomar pedidos de delivery y take away. Los usuarios pueden tomar los pedidos de las mesas, los de delivery a domicilio y los de take away.',
      },
      {
        id: 7,
        question: '¿Cómo hago para comenzar a usar Núcleo Check?',
        answer:
          'Es simple. Te damos de alta como nuevo usuario, luego ingresas con tu usuario y contraseña para empezar a aprovechar las ventajas que Núcleo Check aporta a tu negocio.',
      },
      {
        id: 8,
        question: '¿Núcleo Check es un sistema nuevo?',
        answer:
          'Núcleo Check es la versión actualizada de un sistema que se viene desarrollando desde 2009, completamente online para facilitar el uso y las tareas de un negocio gastronómico.',
      },
      {
        id: 5,
        question:
          '¿Se puede diseñar el Plano del salón y ubicar las mesas como están en el negocio?',
        answer:
          'Es posible diseñar el plano del salón o ver las mesas una al lado de la otra. En caso de querer armar el plano del salón, se puede poner una imagen de fondo que simule el negocio y las mesas puede tener diferentes formas y tamaños según la cantidad de comensales que entren.',
      },
      {
        id: 11,
        question: '¿El sistema permite trabajar con más de una caja?',
        answer:
          'Si, Núcleo Check es multicaja, esto nos permite trabajar con varias cajas en simultaneo, ya sean compartidas o individuales por puesto de trabajo.',
      },
      {
        id: 12,
        question:
          '¿Puedo ver lo que está sucediendo en el local desde mi casa o afuera si me voy de viaje?',
        answer:
          'Si, nuestro sistema esta en la nube, esto permite que con tu usuario puedas ingresar al sistema estes donde estes sin interrumpir el trabajo del personal en el local.',
      },
    ];
  }

  toggleFaq(index: number) {
    if (this.indexSelect === index) {
      this.indexSelect = 0;
    } else this.indexSelect = index;
  }

  seeMore() {
    this.showMore = !this.showMore;

    if (this.showMore) {
      this.textButton = 'Ver menos';
      this.cutArray = this.arrayFaqs.length;
    } else {
      this.textButton = 'Ver más';
      this.cutArray = 8;
    }
  }
}
