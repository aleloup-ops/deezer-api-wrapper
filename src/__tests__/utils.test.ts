import { setAccessToken, getAccessToken, DeezerApiError } from '../utils';

describe('getAccessToken', () => {
    it('should return an empty string if no access token is set', () => {
        expect(getAccessToken()).toBe('');
    });
});

describe('setAccessToken', () => {
    it('should return the access token if it is set', () => {
        setAccessToken('test');
        expect(getAccessToken()).toBe('test');
    });
});
