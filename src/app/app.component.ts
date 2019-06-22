import { Component } from '@angular/core';
import { LoadingIndicatorService } from './loading/loading-indicator.service';
import { HtttpRequestService } from './services/http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareGenreNameService } from './services/share-genre-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  protected loading: boolean = false;
  
  constructor(protected loadingIndicatorService: LoadingIndicatorService, protected activatedRoute?: ActivatedRoute, protected router?: Router,
              protected httpRequestService?: HtttpRequestService<any>, protected shareGenreNameService?: ShareGenreNameService) { 
                
    // change isLoading status whenever notified
    loadingIndicatorService.onLoadingChanged.subscribe(isLoading => this.loading = isLoading);
  }
  
}
