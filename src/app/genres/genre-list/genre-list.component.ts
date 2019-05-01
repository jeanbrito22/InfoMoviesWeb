import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=c09b1eae1c4e4ddc2fa403f1a9fe1dd0`

@Component({
  selector: 'im-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent extends AppComponent implements OnInit {

  genres = [];
  genreName = "";
  rows = [];

  ngOnInit() {
    this.appService.getHttpGetParameters(API_GENRE).subscribe(
      genres => {
        this.genres = genres['genres']; 
        this.rows = this.groupColumns(this.genres)
      },
      error => console.log('Post request failed')
    );
  }

  getGenreName(event) {
    let value = event.target.textContent;
    console.log(value);
    this.genreNameService.saveData(value);
    this.rows = this.groupColumns(this.genres)
  }

  groupColumns(movies) {
    
    const newRows = [];
    
    for (let i = 0; i < movies.length; i = i + 4) {
      newRows.push( movies.slice(i, i + 4));
    }
    return newRows;
  }

}
