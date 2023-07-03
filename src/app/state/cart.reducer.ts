import { createReducer, on } from '@ngrx/store';
import { cartAction } from './cart.action';
import { Cart } from '../models/cart.model';

export const initialCartState: Readonly<Cart> = { cartId: '', products: [] };
export const cartReducer = createReducer(
  initialCartState,
  on(cartAction.getAllItems, (_state, { cart }) => _state),
  on(cartAction.addToCart, (_state, { product }) => {
    return {
      ..._state,
      products: [..._state.products, product],
    };
  }),
  on(cartAction.removeFromCart, (_state, { productId }) => {
    let products = [..._state.products];
    let index = products.findIndex((p) => p.id == productId);
    products = products.splice(index, 1);
    return {
      ..._state,
      products: products,
    };
  }),
  on(cartAction.updateCart, (_state, { productId, quantity }) => {
    let newCart: Cart = JSON.parse(JSON.stringify(_state));
    let index = newCart.products.findIndex((p) => p.id == productId);
    newCart.products[index].quantity = quantity;
    return newCart;
  })
);
