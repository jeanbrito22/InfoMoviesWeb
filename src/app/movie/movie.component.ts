import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

const URL_BASE_API = 'https://api.themoviedb.org/3/movie/';
const PARAMS_API = '?api_key=c09b1eae1c4e4ddc2fa403f1a9fe1dd0&language=en-US'

@Component({
  selector: 'im-movie-page',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent extends AppComponent implements OnInit {


  movie = {title: "", image: "", overview: "" };

  
  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params.movieId;
    
    this.appService.getHttpGetParameters(URL_BASE_API, movieId, PARAMS_API).subscribe(
      movie => {
        this.movie.title = movie['title'];
        this.movie.image = movie['poster_path'];
        this.movie.overview = movie['overview'];
      }
        
    );
  
  }

}
