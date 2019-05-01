import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'im-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnChanges {

  @Input() movies = [];

  rows = [];

  constructor() { }

  groupColumns(movies) {
    
    const newRows = [];

    for (let i = 0; i < movies.length; i = i + 4) {
      
      newRows.push( movies.slice(i, i + 4));
    }

    return newRows;

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.movies) {
      this.rows = this.groupColumns(this.movies)
    } 
  }

}
