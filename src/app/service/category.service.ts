import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   private apiUrl = 'http://localhost:3000/api/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  getProductsByCategory(categoryCode: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${categoryCode}/products`);
  }
}
