import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})
export class FruitCardComponent {
  @Input() fruit: any;
}
