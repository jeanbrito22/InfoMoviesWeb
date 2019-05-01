import { Component } from '@angular/core';
import { LoadingIndicatorService } from './loading/loading-indicator.service';
import { AppService } from './services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreNameService } from './services/genre-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  protected loading: boolean = false;
  
  constructor(protected appService: AppService<any>,
              protected loadingIndicatorService: LoadingIndicatorService,
              protected activatedRoute?: ActivatedRoute,
              protected genreNameService?: GenreNameService,
              protected router?: Router ) { 
                
    // change isLoading status whenever notified
    loadingIndicatorService
      .onLoadingChanged
      .subscribe(isLoading => this.loading = isLoading);
  }
  
}
