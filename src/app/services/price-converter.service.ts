import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface PriceResponse {
  symbol: string;
  price: string;
}
@Injectable()
export class PriceConverterService {
  constructor(private httpClient: HttpClient) {}

  convertOneToUSDT(priceInOne: number): Observable<number> {
    return this.httpClient
      .get<PriceResponse>(
        'https://api.binance.com/api/v3/ticker/price?symbol=ONEUSDT'
      )
      .pipe(
        map((priceResponse: PriceResponse) => {
          return priceInOne * Number(priceResponse.price);
        }),
        shareReplay(1)
      );
  }
}
