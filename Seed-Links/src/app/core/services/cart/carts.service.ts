import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../../models/cart/cart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(
    private http: HttpClient
  ) { }
  
  createUrl(url: Cart){
    return this.http.post(`${environment.url_api}`, url)
  }
}
