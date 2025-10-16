import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products');
  }

    // ค้นหาสินค้าตามคำค้นหา
  searchProducts(query: string): Observable<Product[]> {
    // ส่งคำค้นหาผ่าน query string ไปยัง Backend
    return this.http.get<Product[]>(`${this.apiUrl}?query=${query}`);
  }
  

}
