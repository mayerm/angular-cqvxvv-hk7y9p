import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../product-models/products';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  fullAPIUrl = environment.API_URL + environment.PRODUCT_ENTITY;
  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.fullAPIUrl);
  }
  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.fullAPIUrl}/${id}`);
  }
}
