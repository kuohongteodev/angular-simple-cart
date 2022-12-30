import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cart.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  ngOnInit(): void {}

  onSubmit() {
    this.items = this.cart.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  constructor(private cart: CartService, private formBuilder: FormBuilder) {}
}
