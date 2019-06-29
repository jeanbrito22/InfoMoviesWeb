import { Component, Input } from '@angular/core';

@Component({
  selector: 'im-movie-photo',
  templateUrl: './movie-photo.component.html',
  styleUrls: ['./movie-photo.component.css']
})
export class MoviePhotoComponent {

  @Input() url: string = "";
  @Input() description: string = "";
  

}
