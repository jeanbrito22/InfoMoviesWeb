import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class HttpClientService<I>{

    constructor(private _http: HttpClient) {}

    getData(...urlRequest:string[]) {

        return this._http.get<I[]>(urlRequest.join(""));
    }

}