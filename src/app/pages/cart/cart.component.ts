import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Subscription } from 'rxjs';

declare var bootstrap: any; // สำหรับใช้ Bootstrap JavaScript

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  private cartSubscription: Subscription = Subscription.EMPTY;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
      this.cartSubscription = this.cartService.currentCartItems.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    // เมื่อ component ถูกทำลายให้ unsubscribe
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  confirmCart() {
    // ปิด offcanvas
    const offcanvasElement = document.getElementById('offcanvasRight');
    if (offcanvasElement) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
      this.cartService.clearCart();
    }

    // แสดง success modal หลังจาก offcanvas ปิดแล้ว (รอ 300ms)
    setTimeout(() => {
      const successModalElement = document.getElementById('successModal');
      if (successModalElement) {
        const successModal = new bootstrap.Modal(successModalElement);
        successModal.show();
      }
    }, 300);

    // TODO: เพิ่มโค้ดสำหรับส่งข้อมูลไปยัง backend ตรงนี้
    console.log('Cart confirmed:', this.cartItems);
    console.log('Total price:', this.totalPrice);
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
}