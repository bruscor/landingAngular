import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { environment } from 'src/app/Environments/environments';
import { Buttons, Elements } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isFreeTrailMode: boolean = true;

  arrayElements: Elements[] = [];
  imgLogo = '../../../assets/img/Nucleo-img/Nucleo_Check_Logovariables-02.png';
  isOpen = false;
  scrollPosition: number = 0;
  linkCalendly = environment.LINK_CALENDLY;
  linkFreeTrail = environment.LINL_FREE_TRAIL;
  linkNucleoCheck = environment.LINK_NUCLEO_CHECK;

  constructor(private cdr: ChangeDetectorRef) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.arrayElements = [
      {
        id: 2,
        text: 'Características',
        href: '#features',
      },
      {
        id: 4,
        text: 'Integraciones',
        href: '#integraciones',
      },
      {
        id: 6,
        text: 'Precios',
        href: '#precios',
      },
      {
        id: 7,
        text: 'Faq',
        href: '#faq',
      },
    ];

    window.addEventListener('scroll', () => {
      this.scrollPosition = window.scrollY;
      this.cdr.detectChanges(); // Detect changes to update the view
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
