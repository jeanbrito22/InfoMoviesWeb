import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { GenreListComponent } from './genres/genre-list/genre-list.component';

const routes: Routes = [
  {path: 'genre/:genreId', component: MoviesListComponent},
  {path: 'movie/:movieId', component: MovieComponent},
  { path: '', component: GenreListComponent},
  {path: '**', component: GenreListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
