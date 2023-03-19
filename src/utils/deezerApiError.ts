export class DeezerApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DeezerApiError';
    }
}
