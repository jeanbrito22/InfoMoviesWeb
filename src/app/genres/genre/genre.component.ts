import { Component, Input } from '@angular/core';

@Component({
  selector: 'im-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent{


  @Input() genreId = '';
  
  constructor() {} 

}
