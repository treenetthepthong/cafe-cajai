import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';


@Component({
  selector: 'app-drinks',
  standalone: false,
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    // ดึงข้อมูลหมวดหมู่ทั้งหมด
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    // ดึงข้อมูลสินค้าในหมวดหมู่ DRIN
    this.categoryService.getProductsByCategory('DRIN').subscribe(data => {
      console.log('Products data:', data);  // ตรวจสอบข้อมูลที่ได้รับ
      this.products = data;
    });
  }

  // ฟังก์ชันในการหาชื่อหมวดหมู่จาก category_code
  getCategoryName(categoryCode: string): string {
    const category = this.categories.find(c => c.category_code === categoryCode);
    return category ? category.category_name : 'Unknown';
  }
}