import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartVisible = new Subject<boolean>();
  cartVisible$ = this.cartVisible.asObservable(); // Observable สำหรับการติดตามสถานะการเปิด/ปิดตะกร้า

  // ฟังก์ชันสำหรับเปิด/ปิดตะกร้า
  toggleCart() {
    this.cartVisible.next(true);  // เปลี่ยนสถานะเป็นเปิดตะกร้า
  }

  closeCart() {
    this.cartVisible.next(false); // เปลี่ยนสถานะเป็นปิดตะกร้า
  }
}
