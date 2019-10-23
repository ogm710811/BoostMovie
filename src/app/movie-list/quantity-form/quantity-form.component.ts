import { Component, Input, ViewChild } from '@angular/core';
import { Movie } from '../../models/movie';
import { Item } from '../../models/item';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-quantity-form',
  templateUrl: './quantity-form.component.html',
  styleUrls: ['./quantity-form.component.scss']
})
export class QuantityFormComponent {
  @ViewChild('quantityForm', {static: false}) quantityForm: any;
  @Input() movie: Movie;

  constructor(private cartService: CartService) { }

  sentToCart(quantity: number, id: string) {
    const itemToCart: Item = {
      quantity: 0,
      id: ''
    };
    itemToCart.quantity = quantity;
    itemToCart.id = id;
    this.cartService.itemToCart = itemToCart;
  }
}
