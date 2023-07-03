import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitViceService {
  constructor(private httpClient: HttpClient) {}

  getAllFruits() {
    return this.httpClient.get('https://fruityvice.com/api/fruit/all');
  }
}
