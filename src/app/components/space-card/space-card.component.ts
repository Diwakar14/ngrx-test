import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.scss'],
})
export class SpaceCardComponent {
  @Input() spaceCraft: any;
}
