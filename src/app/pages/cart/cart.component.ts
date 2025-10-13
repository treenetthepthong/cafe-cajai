import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Subscription } from 'rxjs';

declare var bootstrap: any; // ใช้ instance ของ Bootstrap ที่โหลดผ่าน angular.json

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  private cartSubscription: Subscription = Subscription.EMPTY;

  // กัน SSR: ใช้ document/window เฉพาะตอนรันบน browser
  private readonly isBrowser = typeof window !== 'undefined';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.currentCartItems.subscribe(items => {
      this.cartItems = items;
    });

    // ผูก event ให้ offcanvas: ปิดทางไหนก็ล้าง backdrop
    if (this.isBrowser) {
      const offcanvasEl = document.getElementById('offcanvasRight');
      if (offcanvasEl) {
        if (typeof bootstrap !== 'undefined') {
          bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl, { backdrop: true });
        }
        offcanvasEl.addEventListener('hidden.bs.offcanvas', this.cleanupBackdrops);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) this.cartSubscription.unsubscribe();

    if (this.isBrowser) {
      const offcanvasEl = document.getElementById('offcanvasRight');
      if (offcanvasEl) {
        offcanvasEl.removeEventListener('hidden.bs.offcanvas', this.cleanupBackdrops);
      }
      this.cleanupBackdrops();
    }
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // เรียกจากปุ่ม CONFIRM
  confirmCart() {
    if (!this.isBrowser) return;

    const offcanvasEl = document.getElementById('offcanvasRight');
    if (!offcanvasEl) return;

    const onHidden = () => {
      offcanvasEl.removeEventListener('hidden.bs.offcanvas', onHidden);

      // ลบ backdrop ให้ชัวร์ทุกครั้ง
      this.cleanupBackdrops();

      // เคลียร์ตะกร้า
      this.cartService.clearCart();

      // เปิด success modal
      const successModalEl = document.getElementById('successModal');
      if (successModalEl && typeof bootstrap !== 'undefined') {
        const successModal = new bootstrap.Modal(successModalEl, { backdrop: true });
        successModal.show();
      }

      console.log('Cart confirmed:', this.cartItems);
      console.log('Total price:', this.totalPrice);
    };

    offcanvasEl.addEventListener('hidden.bs.offcanvas', onHidden);

    if (typeof bootstrap !== 'undefined') {
      const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      offcanvas.hide();
    } else {
      // เผื่อกรณี bootstrap ยังไม่พร้อม
      this.cleanupBackdrops();
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // ---- helper ----
  private cleanupBackdrops = () => {
    if (!this.isBrowser) return;

    document.querySelectorAll('.offcanvas-backdrop').forEach(b => b.remove());
    document.body.classList.remove('offcanvas-backdrop', 'show');
    document.body.style.overflow = '';
  };
}
