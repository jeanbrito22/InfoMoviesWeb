import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class AppService<K>{

    constructor(private _http: HttpClient) {}

    getHttpGetParameters(...urlRequest:string[]) {

        return this._http.get<K[]>(urlRequest.join(""));
    }

}