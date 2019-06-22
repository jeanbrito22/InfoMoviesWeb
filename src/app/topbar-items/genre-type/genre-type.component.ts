import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { ShareGenreNameService } from 'src/app/services/share-genre-name.service';

@Component({
  selector: 'im-genre-type',
  templateUrl: './genre-type.component.html',
  styleUrls: ['./genre-type.component.css']
})
export class GenreTypeComponent implements AfterContentChecked  {


  genreName:string = "";

  constructor(private shareGenreNameService: ShareGenreNameService) {}

  ngAfterContentChecked() {
    this.genreName = this.shareGenreNameService.getData();
  }

}
