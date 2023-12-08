import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../models/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  baseUrl = 'http://localhost:8080/api/coins';

  constructor(private httpClient: HttpClient) { }

  getAllCoins(): Observable<Coin[]> {
    return this.httpClient.get<Coin[]>(this.baseUrl);
  }

  getCoinById(id: number): Observable<Coin> {
    return this.httpClient.get<Coin>(`${this.baseUrl}/${id}`);
  }

  insertNewCoin(coin: Coin): Observable<Coin> {
    return this.httpClient.post<Coin>(this.baseUrl, coin);
  }

  updateCoin(coin: Coin): Observable<Coin> {
    return this.httpClient.put<Coin>(this.baseUrl, coin);
  }

  deleteCoin(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
