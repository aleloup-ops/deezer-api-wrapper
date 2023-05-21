import { DeezerAlbums } from '../services';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../config/axios.instance';

import * as albumData from './testDatas/albumData.json';
import * as userData from './testDatas/userData.json';
import * as trackData from './testDatas/trackData.json';
import { DeezerApiError } from '../utils';

const deezerAlbums = new DeezerAlbums();
const mockAxios = new MockAdapter(axiosInstance);
const albumId = 123;

describe('DeezerAlbums.AddToFavourite', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return 200', async () => {
        mockAxios.onPost(`user/me/albums?access_token=&album_id=${albumId}`).reply(200, {
            status: 200,
        });

        const response = await deezerAlbums.AddToFavourite([albumId]);
        expect(response).toBe(200);
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onPost(`user/me/albums?access_token=&album_id=${albumId}`).reply(500, {
            errorMessage,
        });

        await expect(deezerAlbums.AddToFavourite([albumId])).rejects.toThrowError(
            new DeezerApiError(`Error adding album to favourite: ${errorMessage}`),
        );
    });
});

describe('DeezerAlbums.removeFromFavourite', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return 200', async () => {
        mockAxios.onDelete(`user/me/albums?access_token=&album_id=${albumId}`).reply(200, {
            status: 200,
        });

        const response = await deezerAlbums.removeFromFavourite([albumId]);
        expect(response).toBe(200);
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onDelete(`user/me/albums?access_token=&album_id=${albumId}`).reply(500, {
            errorMessage,
        });

        await expect(deezerAlbums.removeFromFavourite([albumId])).rejects.toThrowError(
            new DeezerApiError(`Error removing album from favourite: ${errorMessage}`),
        );
    });
});

describe('DeezerAlbums.getFans', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of users', async () => {
        mockAxios.onGet(`albums/${albumId}/fans?access_token=`).reply(200, {
            data: userData.userTestData,
        });

        const response = await deezerAlbums.getFans(albumId);
        expect(response).toEqual(userData.userTestResult);
    });

    it('shoud detect invalid data', async () => {
        mockAxios.onGet(`albums/${albumId}/fans?access_token=`).reply(200, {
            data: {
                wrong_data: 'wrong_data',
            },
        });

        await expect(deezerAlbums.getFans(albumId)).rejects.toThrowError(
            new DeezerApiError('Error getting fans: Invalid fans data'),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`albums/${albumId}/fans?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerAlbums.getFans(albumId)).rejects.toThrowError(
            new DeezerApiError(`Error getting fans: ${errorMessage}`),
        );
    });
});

describe('DeezerAlbums.getTracks', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`album/${albumId}/tracks?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerAlbums.getTracks(albumId);
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`album/${albumId}/tracks?access_token=`).reply(200, {
            data: {
                wrong_data: 'wrong_data',
            },
        });

        await expect(deezerAlbums.getTracks(albumId)).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`album/${albumId}/tracks?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerAlbums.getTracks(albumId)).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks: ${errorMessage}`),
        );
    });
});
