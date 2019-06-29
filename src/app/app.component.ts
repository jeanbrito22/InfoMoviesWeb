import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from './loading/loading-indicator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loading: boolean = false;
  
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  
  ngOnInit() {
    this.loadingIndicatorService.onLoadingChanged.subscribe(isLoading => this.loading = isLoading);  
  }
  
}
