import { createActionGroup, props } from '@ngrx/store';
import { Cart, CartProduct } from '../models/cart.model';

export const cartAction = createActionGroup({
  source: 'Cart',
  events: {
    'Get All Items': props<{ cart: Cart }>(),
    'Add To Cart': props<{ product: CartProduct }>(),
    'Remove from Cart': props<{ productId: number }>(),
    'Update Cart': props<{ productId: number; quantity: number }>(),
  },
});
