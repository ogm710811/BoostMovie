import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CartComponent } from './shopping-cart/cart.component';


const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/movie/:id', component: MovieDetailComponent },
  { path: 'movies/shopping-cart', component: CartComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
