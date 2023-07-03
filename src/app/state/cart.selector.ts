import { createFeatureSelector } from '@ngrx/store';
import { Cart } from '../models/cart.model';

export const cartSelector = createFeatureSelector<Readonly<Cart>>('cart');
