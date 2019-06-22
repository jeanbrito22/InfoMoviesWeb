export class AppApiKey {


    private apiKey: string

    constructor() {
        this.apiKey = "c09b1eae1c4e4ddc2fa403f1a9fe1dd0";
    }

    getApiKey(): string {
        return this.apiKey;
    }
}