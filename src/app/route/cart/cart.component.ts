import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { cartSelector } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts$ = this.store
    .select(cartSelector)
    .pipe(map((item) => item.products));

  totalAmount$ = this.store
    .select(cartSelector)
    .pipe(
      map((item) => item.products.reduce((a, b) => a + b.price * b.quantity, 0))
    );

  constructor(private store: Store) {}
}
