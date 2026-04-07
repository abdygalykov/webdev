import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  minPrice: number | null = null;
  maxPrice: number | null = null;
  sortOrder: string = 'asc';

  selectCategory(categoryId: number): void {
      this.selectedCategoryId = categoryId;
      this.loadProducts();
  }

  loadProducts(): void {
      if (this.selectedCategoryId === null) return;
      this.productService.getProductsByCategory(
          this.selectedCategoryId,
          this.minPrice ?? undefined,
          this.maxPrice ?? undefined,
          this.sortOrder
      ).subscribe(data => {
          this.filteredProducts = data;
      });
  }

  applyFilter(): void {
      this.loadProducts();
  }

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.productService.getProductsByCategory(categoryId).subscribe(data => {
      this.filteredProducts = data;
    });
  }
}