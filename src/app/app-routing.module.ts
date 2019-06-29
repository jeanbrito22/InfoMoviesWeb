import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieResolver } from './movie/movie.resolver';
import { MovieComponent } from './movie/movie.component';
import { TopbarComponent } from './topbar-items/topbar/topbar.component';
import { GenreListResolver } from './genres/genre-list/genre-list.resolver';
import { MovieListResolver } from './movies/movies-list/movie-list.resolver';
import { GenreListComponent } from './genres/genre-list/genre-list.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';


const routes: Routes = [

  {path: '', component: GenreListComponent, resolve: {genres: GenreListResolver} },
  {path: 'genre/:genreId', component: MoviesListComponent, resolve: { movies: MovieListResolver} },
  {path: 'movie/:movieId', component: MovieComponent, resolve: { movie: MovieResolver } },
  {path: '', component: TopbarComponent, outlet: 'topbar'},
  {path: '**', redirectTo: '', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
