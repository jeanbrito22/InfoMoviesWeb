import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/app/movie/movie';

@Pipe({name: 'filterByDescriptionOrTitle'})

export class FilterByDescriptionOrTitle implements PipeTransform {
    transform(movies: Movie[], filterString: string) {
        let query = filterString.trim().toLowerCase();
        if (query){
            return  movies.filter((movie: Movie) => movie.overview.toLowerCase().includes(query) || movie.title.toLocaleLowerCase().includes(query));
        }

        return movies;
        
    }
}