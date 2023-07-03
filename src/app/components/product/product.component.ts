import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { cartAction } from 'src/app/state/cart.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: any;
  count = 0;

  constructor(private store: Store) {}

  addToCart(product: Product) {
    let newProduct = { ...product, quantity: ++this.count };
    this.store.dispatch(cartAction.addToCart({ product: newProduct }));
  }

  updateCart(product: Product, action: string) {
    if (action === 'add') {
      this.count++;
    } else {
      this.count--;
    }
    this.store.dispatch(
      cartAction.updateCart({ productId: product.id, quantity: this.count })
    );
  }
}
