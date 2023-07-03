import { createAction, createActionGroup, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ProductAction = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ productId: string }>(),
    'Remove Product': props<{ productId: string }>(),
  },
});

export const ProductAPIAction = createActionGroup({
  source: 'Product API',
  events: {
    'Retrieve Products': props<{ products: ReadonlyArray<Product> }>(),
  },
});

export const EmptyAction = createAction('[Empty Action]');
