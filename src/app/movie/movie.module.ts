import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MoviesModule } from '../movies/movies.module';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [MovieComponent, MovieDescriptionComponent],
  imports: [
    CommonModule, LoadingModule, MoviesModule 
  ]
})
export class MovieModule { }
