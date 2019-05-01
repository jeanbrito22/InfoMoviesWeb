import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviePhotoComponent } from './movie/movie-photo/movie-photo.component';
import { MovieTitleComponent } from './movie/movie-title/movie-title.component';
import { LoadingModule } from '../loading/loading.module';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [MovieComponent, MoviePhotoComponent, MoviesListComponent, MovieTitleComponent, MoviesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  exports: [
    MoviePhotoComponent,
    MovieTitleComponent

  ]
})
export class MoviesModule { }
