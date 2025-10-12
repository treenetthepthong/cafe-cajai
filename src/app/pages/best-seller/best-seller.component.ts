import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product.model';
import { CartService } from '../../service/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-best-seller',
  standalone: false,
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
products: Product[] = [];

constructor(private productService: ProductService, private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
  
    this.productService.getAllProducts().subscribe(data => {
      console.log('All Products:', data); // ตรวจสอบข้อมูลที่ได้รับ
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart({ ...product, quantity: 1 });
  }
  
}