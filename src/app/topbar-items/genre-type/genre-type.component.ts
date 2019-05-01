import { Component, AfterContentChecked } from '@angular/core';
import { GenreNameService } from 'src/app/services/genre-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'im-genre-type',
  templateUrl: './genre-type.component.html',
  styleUrls: ['./genre-type.component.css']
})
export class GenreTypeComponent implements AfterContentChecked  {


  genreName = "";

  constructor(private router: Router, private genreNameService: GenreNameService){}

  ngAfterContentChecked() {
    this.genreNameService.dataString$.subscribe(
      data => {
        if(this.genreName !== data){
          this.genreName = data;
        }
        console.log(this.genreName);
      });
  }



}
