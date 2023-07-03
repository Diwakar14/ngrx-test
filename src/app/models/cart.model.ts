import { Product } from './product.model';

export interface CartProduct extends Product {
  quantity: number;
}

export interface Cart {
  cartId: string;
  products: ReadonlyArray<CartProduct>;
}
