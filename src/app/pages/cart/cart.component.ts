import { Component, OnInit } from '@angular/core';

declare var bootstrap: any; // สำหรับใช้ Bootstrap JavaScript

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems = [
    { name: 'Pistachio Croissant', price: 150, quantity: 1 },
    { name: 'Cake', price: 200, quantity: 1 }
  ];

  ngOnInit(): void {
    // สามารถเพิ่มโค้ดเริ่มต้นตรงนี้ได้ถ้าต้องการ
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