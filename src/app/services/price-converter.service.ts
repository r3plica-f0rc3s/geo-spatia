import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PriceConverter {
  constructor(private httpClient: HttpClient) {}
}
