import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-gral',
  templateUrl: './button-gral.component.html',
  styleUrls: ['./button-gral.component.css'],
})
export class ButtonGralComponent {
  @Input() textButton?: string;
  @Input() typeButton: string = 'primary';
}
