import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { MovieService } from '../movie-service/movie.service';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  moviesToShoppingCar: Movie[] = [];
  uniqueMoviesToShoppingCart: Movie[] = [];

  set itemToCart(item: Item) {
    this.movieService.getMovieById(item.id).subscribe(movie => {
      this.moviesToShoppingCar.push(movie);
      this.uniqueMoviesToShoppingCart = this.moviesToShoppingCar
        .filter((mov, index) => this.moviesToShoppingCar.indexOf(mov) === index);
    });
  }

  get numberOfItemsInCart(): number {
    return  this.uniqueMoviesToShoppingCart.reduce((total, item) => {
      return total + Number(item.quantity);
    }, 0);
  }

  constructor(private movieService: MovieService) { }
}
