import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent {

  imgNavBarToo = '../../../assets/img/icons/imoj_heart.png';
  imgBg = "../../../assets/img/Backgrounds/top_nav_s4.png"

  getContactPageLink(): string {
    // Lógica para obtener el enlace de la página de contacto
    return 'page-contact-5.html';
  }

}
