import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from './movie';
import { AppMovieApiConfig } from '../app-movie-api-config';
import { HttpClientService } from '../services/http-client.service';


const KEY: string = AppMovieApiConfig.getApiKey();
const LANGUAGE = AppMovieApiConfig.getLanguage();
const URL_BASE_API = 'https://api.themoviedb.org/3/movie/';
const PARAMS_API = `?api_key=${KEY}&language=${LANGUAGE}`;


@Injectable( {providedIn: 'root' })
export class MovieResolver implements Resolve<Observable<Movie[]>> {

    constructor(private httpClientService: HttpClientService<Movie>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
        const movieId = route.params.movieId;
        return this.httpClientService.getData(URL_BASE_API, movieId, PARAMS_API);
    }
}