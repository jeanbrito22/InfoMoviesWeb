import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class ShareGenreNameService {
    
    private data: string = "";

    setData(data: string){
        this.data = data;
    }

    getData() {
        return this.data;  
    }



}

