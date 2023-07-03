import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { cartSelector } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  totalProduct$ = this.store
    .select(cartSelector)
    .pipe(map((item) => item.products.reduce((a, b) => a + b.quantity, 0)));
  constructor(private store: Store) {}
}
