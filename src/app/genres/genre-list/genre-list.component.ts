import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ShareGenreNameService } from 'src/app/services/share-genre-name.service';
import { LoadingIndicatorService } from 'src/app/loading/loading-indicator.service';



@Component({
  selector: 'im-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})

export class GenreListComponent implements OnInit {


  constructor(private shareGenreNameService: ShareGenreNameService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  genres = [];
  rows = [];
  currentGenreName: string = "";


  ngOnInit() {
    this.rows = this.groupColumns(this.activatedRoute.snapshot.data['genres']['genres']);
  }
  
  getGenreName(genreId: string, genreName: string) {
    this.currentGenreName = genreName;
    this.shareGenreNameService.setData(this.currentGenreName);
    this.router.navigate(['genre', genreId]);
  }

  groupColumns(genres) {
    
    const newRows = [];
    
    for (let i = 0; i < genres.length; i = i + 4) {
      newRows.push( genres.slice(i, i + 4));
    }
    return newRows;
  }

}
