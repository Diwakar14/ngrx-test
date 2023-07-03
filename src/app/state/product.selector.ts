import { createFeatureSelector } from '@ngrx/store';
import { Product } from '../models/product.model';

export const productSelector =
  createFeatureSelector<ReadonlyArray<Product>>('products');
