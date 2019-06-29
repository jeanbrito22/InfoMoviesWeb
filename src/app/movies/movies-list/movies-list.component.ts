import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { LoadingIndicatorService } from 'src/app/loading/loading-indicator.service';
import { Movies } from './movies';


@Component({
  selector: 'im-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})


export class MoviesListComponent implements OnInit, OnDestroy {

  movies: Movies[] = [];
  filter: string = "";
  loading: boolean = false;
  debounce = new Subject<string>();

  constructor(private activatedRoute: ActivatedRoute,
              private loadingIndicatorService: LoadingIndicatorService) {}
  
  ngOnInit() {

    this.loadingIndicatorService.onLoadingChanged.subscribe(isLoading => this.loading = isLoading);
    this.movies = this.activatedRoute.snapshot.data['movies']['results'];
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);

  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

}
