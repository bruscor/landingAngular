import { Component, EventEmitter, Input } from '@angular/core';
import { Faqs } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css'],
})
export class AcordeonComponent {
  @Input({ required: true }) indexSelect!: number;
  @Input({ required: true }) faq!: Faqs;
}
