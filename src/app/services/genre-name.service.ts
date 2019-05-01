import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class GenreNameService {
    
    sharingData = { name: ""};

    private dataStringSource = new Subject<string>();

    dataString$ = this.dataStringSource.asObservable();

    constructor(private http: HttpClient) { }

    public saveData(value){
        //console.log("save data function called " + value + this.sharingData.name);
        this.sharingData.name = value;
        this.dataStringSource.next(this.sharingData.name);
    }



}
