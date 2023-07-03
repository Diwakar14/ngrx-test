import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductAPIAction } from 'src/app/state/product.action';
import { productSelector } from 'src/app/state/product.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products$: Observable<ReadonlyArray<Product>> =
    this.store.select(productSelector);

  constructor(private productService: ProductService, private store: Store) {}

  ngOnInit(): void {
    // this.getProducts();
    this.store.dispatch({ type: '[Products Page] Load Products' });
  }

  getProducts() {
    this.productService.getAllProducts().subscribe({
      next: (value: any) => {
        this.store.dispatch(
          ProductAPIAction.retrieveProducts({ products: value })
        );
      },
    });
  }
}
