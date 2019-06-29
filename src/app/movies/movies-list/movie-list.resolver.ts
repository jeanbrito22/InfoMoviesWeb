import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/movie/movie';
import { AppMovieApiConfig } from 'src/app/app-movie-api-config';
import { HttpClientService } from 'src/app/services/http-client.service';

const KEY = AppMovieApiConfig.getApiKey();
const LANGUAGE: string = AppMovieApiConfig.getLanguage();
const PAGE: number = AppMovieApiConfig.getMovieListPage();
const API_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=${LANGUAGE}&page=${PAGE}&with_genres=`;

@Injectable({ providedIn: 'root' })

export class MovieListResolver implements Resolve<Observable<Movie[]>> {
    

    movies: Movie[] = [];

    constructor(private httpClientService: HttpClientService<Movie>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {

        const genreId = route.params.genreId;
        return this.httpClientService.getData(API_MOVIES, genreId);
    }

}
