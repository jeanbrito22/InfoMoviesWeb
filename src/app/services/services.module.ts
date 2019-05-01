import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreNameService } from './genre-name.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    GenreNameService,
    AppService
  ]
})
export class ServicesModule { }
