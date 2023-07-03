import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { ProductAPIAction } from './product.action';

export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
  initialState,
  on(ProductAPIAction.retrieveProducts, (_state, { products }) => products)
);
