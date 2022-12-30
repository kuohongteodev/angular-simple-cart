import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { ShippingFee } from '../products';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<ShippingFee[]>;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cart.getShippingPrices();
  }
}
