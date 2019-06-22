import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'encodeStringToUrl'})

export class EncodeStringToUrl implements PipeTransform {
    
    transform(genreName: string) {
        return encodeURI(genreName);
    }
}