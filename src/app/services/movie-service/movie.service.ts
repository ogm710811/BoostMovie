import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { MOVIES } from '../../models/mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.getMovies()
      .pipe(
        map(movies => movies.filter( movie => movie.id === movieId)[0])
      );
  }
}
