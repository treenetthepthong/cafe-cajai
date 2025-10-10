import { Component,ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@ViewChild(CartComponent) cartComponent!: CartComponent;

  toggleCart() {
    const offcanvasElement = document.getElementById('offcanvasRight');
    if (offcanvasElement) {
      // @ts-ignore: Assume bootstrap is loaded globally
      const offcanvas = new (window as any).bootstrap.Offcanvas(offcanvasElement);
      offcanvas.toggle();
    }
  }
}
