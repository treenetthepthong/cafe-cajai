import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  [x: string]: any;
  query: string = '';  // คำค้นหาจากผู้ใช้
  products: any[] = [];  // รายการสินค้าที่ได้จากการค้นหา

  constructor(private productService: ProductService, private cartService: CartService) { }

  // ฟังก์ชันค้นหาสินค้า
  search(): void {
    
    if (this.query) {
      this.productService.searchProducts(this.query).subscribe((data) => {
        this.products = data;  // แสดงผลลัพธ์จากการค้นหา
      }, (error) => {
        console.error('Error fetching products', error);  // จัดการข้อผิดพลาด
      });
    }
  }
   addToCart(product: any) {
    this.cartService.addToCart({ ...product, quantity: 1 });
  }

  clearSearch(): void {
    this.query = '';  // รีเซ็ตค่า query เมื่อกดลบ
    this.products = [];  // ล้างผลลัพธ์การค้นหา
  }
}