import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}/`);
  }
  getProductsByCategory(categoryId: number, minPrice?: number, maxPrice?: number, sort?: string): Observable<Product[]> {
    let params = '';
    if (minPrice) params += `?min_price=${minPrice}`;
    if (maxPrice) params += `${params ? '&' : '?'}max_price=${maxPrice}`;
    if (sort) params += `${params ? '&' : '?'}sort=${sort}`;
    
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products/${params}`);
}
}