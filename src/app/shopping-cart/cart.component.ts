import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { Movie } from '../models/movie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  movieList: Movie[] = [];
  editField: number;

  get displayTotalAmount(): number {
    let totalAmount = 0;
    this.movieList.forEach(m => {
      totalAmount = totalAmount + Number(m.price * m.quantity);
    });
    return totalAmount;
  }

  constructor(
      private cartService: CartService,
      private router: Router
  ) { }

  ngOnInit() {
    this.movieList = this.cartService.uniqueMoviesToShoppingCart;
  }

  updateQuantity(id: string, property: string, event: any) {
    if (id && property && event) {
      this.editField = event.target.textContent;
      this.movieList.forEach(m => {
        if (m.id === id) {
          m.quantity = Number(this.editField);
        }
      });
    }
  }

  remove(id: any) {
    this.movieList.splice(id, 1);
  }

  checkOutAlert(): void {
    if (confirm(`You are going to check out $${this.displayTotalAmount}` )) {
      this.router.navigate(['/']);
    }
  }
}
