import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GenreComponent } from './genre/genre.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [GenreComponent, GenreListComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ]
})
export class GenresModule { }
