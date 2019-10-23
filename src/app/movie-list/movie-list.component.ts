import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie-service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Observable<Movie[]>;
  config: any;

  constructor(
      private movieService: MovieService,
      private route: ActivatedRoute,
      private router: Router,
      private cartService: CartService
  ) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 8
      };

      this.route.queryParamMap
        .pipe(map(params => params.get('page')))
        .subscribe(page => this.config.currentPage = page);
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  pageChange(newPage: number) {
    this.router.navigate(['movies'], { queryParams: { page: newPage } });
  }

  onMovieSearch(value) {
    this.movies = this.movies
      .pipe(
        map(x => {
          return x.filter(y => y.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
        })
      );
  }

  clearFilter(e): void {
    this.movies = this.movieService.getMovies();
  }
}

