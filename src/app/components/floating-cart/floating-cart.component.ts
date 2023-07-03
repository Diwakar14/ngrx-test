import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { cartSelector } from 'src/app/state/cart.selector';

@Component({
  selector: 'app-floating-cart',
  templateUrl: './floating-cart.component.html',
  styleUrls: ['./floating-cart.component.scss'],
})
export class FloatingCartComponent {
  cartProducts$ = this.store
    .select(cartSelector)
    .pipe(map((item) => item.products));

  totalAmount$ = this.store
    .select(cartSelector)
    .pipe(
      map((item) => item.products.reduce((a, b) => a + b.price * b.quantity, 0))
    );
  quantity$ = this.store
    .select(cartSelector)
    .pipe(map((item) => item.products.reduce((a, b) => a + b.quantity, 0)));
  constructor(private store: Store) {}
}
