import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieTitleComponent } from './movie/movie-title/movie-title.component';
import { LoadingModule } from '../loading/loading.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviePhotoComponent } from './movie/movie-photo/movie-photo.component';
import { ExcerptAlt } from './movie/movie-photo/excerpt-alt.pipe';
import { FilterByDescriptionOrTitle } from './movies-list/filter-by-description-or-title.pipe';



@NgModule({
  declarations: [MovieComponent, MoviesListComponent, MovieTitleComponent,
                 MoviesListComponent, MoviePhotoComponent, ExcerptAlt, FilterByDescriptionOrTitle ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  exports: [
    MovieTitleComponent, MoviePhotoComponent

  ]
})
export class MoviesModule { }
