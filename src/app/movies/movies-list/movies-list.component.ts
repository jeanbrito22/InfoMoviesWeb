import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';
import { AppComponent } from 'src/app/app.component';

const API_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=c09b1eae1c4e4ddc2fa403f1a9fe1dd0&with_genres='

@Component({
  selector: 'nyo-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent extends AppComponent implements OnInit {

  movies: Movies[] = [];

  ngOnInit() {

    const genreId = this.activatedRoute.snapshot.params.genreId;
    this.appService.getHttpGetParameters(API_MOVIES, genreId).subscribe(
      movies => this.movies = movies['results'],
      error => this.movies.push('Post request failed')
    );
  }

}

