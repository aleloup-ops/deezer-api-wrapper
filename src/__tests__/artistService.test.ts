import axiosInstance from '../config/axios.instance';
import MockAdapter from 'axios-mock-adapter';
import { DeezerApiError } from '../utils';
import { DeezerArtists } from '../services/artist.service';
import { Artist } from '../models';

import * as albumData from './testDatas/albumData.json';
import * as userData from './testDatas/userData.json';
import * as trackData from './testDatas/trackData.json';
import * as artistData from './testDatas/artistData.json';
import * as playlistData from './testDatas/playlistData.json';

const mockAxios = new MockAdapter(axiosInstance);
const deezerArtists = new DeezerArtists();
const artistId = 123;

describe('DeezerArtists.getTopTracks', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const mockResponse = {
        data: trackData.trackTestData,
        next: `https://api.deezer.com/artist/${artistId}/top?index=25`,
    };

    it('should return the top tracks for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/top?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.next).reply(200, { data: trackData.trackTestData, next: null });

        // Act
        const result = await deezerArtists.getTopTracks(artistId);

        // Assert
        expect(result).toEqual([trackData.trackTestResult[0], trackData.trackTestResult[0]]);
    });

    // it('should throw an error if the artist does not exist', async () => {
    // });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/top?access_token=`).reply(500);

        await expect(deezerArtists.getTopTracks(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting top tracks for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getAlbums', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const mockResponse = {
        data: albumData.albumTestData,
        next: `https://api.deezer.com/artist/${artistId}/albums?index=25`,
    };

    it('should return albums for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/albums?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.next).reply(200, { data: albumData.albumTestData, next: null });

        // Act
        const result = await deezerArtists.getAlbums(artistId);

        // Assert
        expect(result).toEqual([albumData.albumTestResult[0], albumData.albumTestResult[0]]);
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/albums?access_token=`).reply(500);

        await expect(deezerArtists.getAlbums(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting albums for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getFans', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return fans for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/fans?access_token=`).reply(200, {
            data: userData.userTestData,
        });

        // Act
        const result = await deezerArtists.getFans(artistId);

        // Assert
        expect(result).toEqual(userData.userTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`/artist/${artistId}/fans?access_token=`).reply(200, {
            data: {
                wrong_data: 'wrong_data',
            },
        });
        // Assert
        await expect(deezerArtists.getFans(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting fans for artist ${artistId}: Invalid fans data`),
        );
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/fans?access_token=`).reply(500);

        await expect(deezerArtists.getFans(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting fans for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getRelatedArtists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const mockResponse = {
        data: artistData.artistTestData,
        total: 1,
    };

    it('should return related artists for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/related?access_token=`).reply(200, mockResponse);

        // Act
        const result = await deezerArtists.getRelatedArtists(artistId);

        // Assert
        expect(result).toEqual(artistData.artistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`/artist/${artistId}/related?access_token=`).reply(200, {
            data: {
                wrong_data: 'wrong_data',
            },
        });
        // Assert
        await expect(deezerArtists.getRelatedArtists(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting related artists for artist ${artistId}: Invalid artists data`),
        );
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/related?access_token=`).reply(500);

        await expect(deezerArtists.getRelatedArtists(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting related artists for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getRadio', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return related radio tracks for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/radio?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        // Act
        const result = await deezerArtists.getRadio(artistId);

        // Assert
        expect(result).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`/artist/${artistId}/radio?access_token=`).reply(200, {
            data: {
                wrong_data: 'wrong_data',
            },
        });
        // Assert
        await expect(deezerArtists.getRadio(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting radio for artist ${artistId}: Invalid tracks data`),
        );
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/radio?access_token=`).reply(500);

        await expect(deezerArtists.getRadio(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting radio for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getPlaylists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const mockResponse = {
        data: playlistData.playlistTestData,
        total: 1,
        next: `https://api.deezer.com/artist/${artistId}/playlists?index=10`,
    };

    it('should return playlists for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/playlists?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.next).reply(200, { data: playlistData.playlistTestData, next: null });

        // Act
        const result = await deezerArtists.getPlaylists(artistId);

        // Assert
        expect(result).toEqual([playlistData.playlistTestResult[0], playlistData.playlistTestResult[0]]);
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/playlists?access_token=`).reply(500);

        await expect(deezerArtists.getPlaylists(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists for artist ${artistId}: ${errorMessage}`),
        );
    });
});
