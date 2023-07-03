import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from 'src/environments/env';

@Injectable({
  providedIn: 'root',
})
export class SpacecraftService {
  constructor(private httpClient: HttpClient) {}

  getSpaceCraft() {
    return this.httpClient.get(Env.baseUrl + 'spacecraft/');
  }
}
