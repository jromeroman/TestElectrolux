import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IProducts {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProdutsService {
  constructor(private _http: HttpClient) {}
  public getProducts(): Observable<IProducts> {
    return this._http.get<IProducts>('http://localhost:3000/products');
  }
  public updateProduct(product: IProducts) {
    return this._http.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  public removeProduct(id: string) {
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }
  public addProduct(product: IProducts) {
    return this._http.post(`http://localhost:3000/products`, product);
  }
  public getProductById(id: string): Observable<IProducts> {
    return this._http.get<IProducts>(`http://localhost:3000/products/${id}`);
  }
}
