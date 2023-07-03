import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient
      .get<Array<Product>>('https://dummyjson.com/products')
      .pipe(map((item: any) => item.products));
  }
}
