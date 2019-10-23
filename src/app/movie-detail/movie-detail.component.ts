import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie-service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  movie: Movie;

  constructor(
      private route: ActivatedRoute,
      private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.movieId = params['id']);
    this.movieService.getMovieById(this.movieId).subscribe(movie => this.movie = movie);
  }
}
