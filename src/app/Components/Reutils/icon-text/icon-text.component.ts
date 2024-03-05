import { Component, Input } from '@angular/core';
import { FormElements, ItemsPlan } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css'],
})
export class IconTextComponent {
  @Input({ required: true }) element!: string;
  @Input({ required: true }) icon!: string;
}
