import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cartItems = new BehaviorSubject<any[]>([]);  // เก็บสินค้าในตะกร้า
  currentCartItems = this.cartItems.asObservable();  // ให้สามารถ subscribe เพื่อดูข้อมูลสินค้าในตะกร้า
  private cartVisible = new Subject<boolean>();
    cartVisible$ = this.cartVisible.asObservable(); // Observable สำหรับการติดตามสถานะการเปิด/ปิดตะกร้า
  
    // ฟังก์ชันสำหรับเปิด/ปิดตะกร้า
    toggleCart() {
      this.cartVisible.next(true);  // เปลี่ยนสถานะเป็นเปิดตะกร้า
    }
  
    closeCart() {
      this.cartVisible.next(false); // เปลี่ยนสถานะเป็นปิดตะกร้า
    }
  // ฟังก์ชันเพิ่มสินค้าลงในตะกร้า
  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(i => i.name === item.name);
    
    if (existingItem) {
      existingItem.quantity++;  // ถ้ามีสินค้าแล้ว ให้เพิ่มจำนวน
    } else {
      currentItems.push(item);  // ถ้ายังไม่มีสินค้าในตะกร้า ให้เพิ่มใหม่
    }

    this.cartItems.next([...currentItems]);
  }

  clearCart() {
    this.cartItems.next([]);  // รีเซ็ตตะกร้าเป็นอาร์เรย์ว่าง
  }

  confirmCart() {
    const cartData = this.cartItems.value;
    console.log('Order confirmed:', cartData);  // แสดงข้อมูลใน console

    // เคลียร์ตะกร้าหลังการยืนยัน
    console.log('Order confirmed:', cartData);
    this.clearCart();
  }
}

