import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppApiKey } from 'src/app/app-api-key';
import { Movies } from './movies';

const myApiKey: AppApiKey = new AppApiKey();

const API_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey.getApiKey()}&with_genres=`;

@Component({
  selector: 'nyo-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent extends AppComponent implements OnInit {

  movies: Movies[] = [];

  
  ngOnInit() {

    const genreId = this.activatedRoute.snapshot.params.genreId;
    
    this.httpRequestService.makeRequest(API_MOVIES, genreId).subscribe(
      
      movies => { this.movies = movies['results']; console.log(this.movies)},
      
      error => console.log(error)
    );

  }

}

