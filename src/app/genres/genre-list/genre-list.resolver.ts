import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Genre } from '../genre/genre';
import { HttpClientService } from 'src/app/services/http-client.service';
import { AppMovieApiConfig } from 'src/app/app-movie-api-config';


const KEY: string = AppMovieApiConfig.getApiKey();
const LANGUAGE: string = AppMovieApiConfig.getLanguage(); //como fazer para executar esta função e só depois a função de requisição http
const API_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=${LANGUAGE}`;



@Injectable( {providedIn: 'root'})

export class GenreListResolver implements Resolve<Observable<Genre[]>> {

    constructor(private httpClientService: HttpClientService<Genre> ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Genre[]>  {
        return this.httpClientService.getData(API_GENRE);
    }
    
}