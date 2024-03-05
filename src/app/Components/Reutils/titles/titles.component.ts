import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent {

  @Input() subTitle?: string;
  @Input() title?: string;
  @Input() description?: string;

}
