import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class HtttpRequestService<K>{

    constructor(private _http: HttpClient) {}

    makeRequest(...urlRequest:string[]) {

        return this._http.get<K[]>(urlRequest.join(""));
    }

}