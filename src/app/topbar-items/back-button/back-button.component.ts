import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'im-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  constructor(private _location: Location, private route: Router) {
    
  }

  isHome() {
    
    if (this.route.url === "/")
      return true;
    
    return false;
  }

  return() {
    this._location.back();
  }

}
