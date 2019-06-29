import { KEY } from "./movie-api-key";

export class AppMovieApiConfig {
    
    private static _apiKey: string = KEY;
    private static language: string = "pt-BR";
    private static movieListPage = 1;


    static getApiKey(): string {
        return AppMovieApiConfig._apiKey;
    }

    static setLanguage(language: string): void {
        AppMovieApiConfig.language = language;
    }

    static getLanguage(): string {
        return AppMovieApiConfig.language;
    }
    
    static setMovieListPage(pageNumber: number): void {
        AppMovieApiConfig.movieListPage = pageNumber;
    }

    static getMovieListPage(): number {
        return AppMovieApiConfig.movieListPage;  
    }
    
}