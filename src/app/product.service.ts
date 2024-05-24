import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  addProduct(productData: any) {
    return this.http.post(this.apiUrl, productData);
  }
  getAllProducts():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
