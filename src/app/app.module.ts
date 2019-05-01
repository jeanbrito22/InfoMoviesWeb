import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LoadingModule } from './loading/loading.module';
import { GenresModule } from './genres/genres.module';
import { TopbarItemsModule } from './topbar-items/topbar-items.module';
import { MovieModule } from './movie/movie.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TopbarItemsModule,
    GenresModule,
    MoviesModule,
    MovieModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
