import { Component, Input } from '@angular/core';

@Component({
  selector: 'im-movie-title',
  templateUrl: './movie-title.component.html',
  styleUrls: ['./movie-title.component.css']
})
export class MovieTitleComponent{


  @Input() attrClass: string = "";

  constructor() { }

}
