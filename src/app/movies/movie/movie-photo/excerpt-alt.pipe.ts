import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'excerptAlt' })

export class ExcerptAlt implements PipeTransform {

    transform(description: string, sliceNumber: number) {
        let spaceQt = description.split(" ").length - 1;
        let excerpt = description.slice(0, sliceNumber + spaceQt - 3) + "...";
        return excerpt;
    }

}