import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-discount',
  templateUrl: './select-discount.component.html',
  styleUrls: ['./select-discount.component.css'],
})
export class SelectDiscountComponent {
  @Input() discount!: number;
}
