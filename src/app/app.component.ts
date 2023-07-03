import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Store } from '@ngrx/store';
import { ProductAPIAction } from './state/product.action';
import { productSelector } from './state/product.selector';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo';
}
