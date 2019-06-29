import { KEY } from "./movie-api-key";

export class AppMovieApiConfig {
    
    private static _apiKey: string = KEY;
    private static language: string = "en-US";


    static getApiKey(): string {
        return AppMovieApiConfig._apiKey;
    }

    static setLanguage(language: string): void {
        AppMovieApiConfig.language = language;
    }

    static getLanguage(): string {
        return AppMovieApiConfig.language;
    } 
    
}