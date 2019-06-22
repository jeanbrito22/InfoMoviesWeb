import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SocialsComponent } from './socials/socials.component';
import { GenreTypeComponent } from './genre-type/genre-type.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopbarComponent, SocialsComponent, GenreTypeComponent, BackButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TopbarItemsModule { }
