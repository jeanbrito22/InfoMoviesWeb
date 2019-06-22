import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppApiKey } from 'src/app/app-api-key';


const myApiKey: AppApiKey = new AppApiKey();

const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${myApiKey.getApiKey()}`

@Component({
  selector: 'im-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})

export class GenreListComponent extends AppComponent implements OnInit {

  genres = [];
  rows = [];
  currentGenreName: string = "";


  ngOnInit() {
    this.httpRequestService.makeRequest(API_GENRE).subscribe(
      genres => {
        this.genres = genres['genres']; 
        this.rows = this.groupColumns(this.genres);
      },
      error => console.log('Post request failed')
    );
    
  }
  
  getGenreName(genreId: string, genreName: string) {
    this.currentGenreName = genreName;
    this.shareGenreNameService.setData(this.currentGenreName);
    this.router.navigate(['genre', genreId]);
  }

  groupColumns(movies) {
    
    const newRows = [];
    
    for (let i = 0; i < movies.length; i = i + 4) {
      newRows.push( movies.slice(i, i + 4));
    }
    return newRows;
  }

}
