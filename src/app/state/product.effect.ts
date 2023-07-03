import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../services/product.service';
import { EMPTY, catchError, exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductAPIAction } from './product.action';
import { Store } from '@ngrx/store';
import { productSelector } from './product.selector';
import { Product } from '../models/product.model';

@Injectable()
export class ProductEffect {
  loadProducs$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Products Page] Load Products'),
      withLatestFrom(this.store.select(productSelector)),
      exhaustMap(([, products]: any) => {
        if (!products.length) {
          return this.productService.getAllProducts().pipe(
            map((products) => ProductAPIAction.retrieveProducts({ products })),
            catchError(() => EMPTY)
          );
        }
        return of();
      })
    )
  );

  constructor(
    private productService: ProductService,
    private action$: Actions,
    private store: Store
  ) {}
}
