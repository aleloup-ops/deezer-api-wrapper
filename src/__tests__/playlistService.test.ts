import { DeezerPlaylists } from '../services/playlist.service';
import axiosInstance from '../config/axios.instance';
import MockAdapter from 'axios-mock-adapter';
import { DeezerApiError } from '../utils';

import * as userData from './testDatas/userData.json';
import * as trackData from './testDatas/trackData.json';
import * as playlistData from './testDatas/playlistData.json';

const mockAxios = new MockAdapter(axiosInstance);
const deezerPlaylist = new DeezerPlaylists();

describe('DeezerPlaylist.getPlaylists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const mockAccessToken = 'my-mock-access-token';

    // mock the access token function to return our mock access token
    jest.mock('../utils/credentials', () => {
        return {
            getAccessToken: jest.fn(() => {
                return mockAccessToken;
            }),
        };
    });

    it('should return an array of playlists', async () => {
        mockAxios.onGet(`user/me/playlists?access_token=`).reply(200, {
            data: playlistData.playlistTestData,
        });

        const playlists = await deezerPlaylist.getPlaylists();

        expect(playlists).toHaveLength(1);
        expect(playlists[0]).toHaveProperty('id', playlistData.playlistTestData[0].id);
        expect(playlists[0]).toHaveProperty('title', playlistData.playlistTestData[0].title);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/playlists?access_token=`).reply(200, {
            data: {
                wrong_data: '1',
            },
        });

        await expect(deezerPlaylist.getPlaylists()).rejects.toThrowError(
            new DeezerApiError(`Failed to fetch user's playlists : Invalid playlists data`),
        );
    });

    it('should throw a DeezerApiError if Deezer API returns invalid data', async () => {
        mockAxios
            .onGet(`user/me/playlists?access_token=`, {
                params: { access_token: mockAccessToken },
            })
            .reply(200, {
                data: { sdd: {}, eee: {} },
            });

        await expect(deezerPlaylist.getPlaylists()).rejects.toThrow(Error);
    });

    it('should throw a DeezerApiError if there is an error with the Deezer API request', async () => {
        const errorMessage = 'Request failed with status code 404';

        mockAxios
            .onGet(`user/me/playlists?access_token=`, {
                params: { access_token: mockAccessToken },
            })
            .reply(500, {
                error: {
                    message: errorMessage,
                },
            });

        await expect(deezerPlaylist.getPlaylists()).rejects.toThrow(
            `Failed to fetch user's playlists : ${errorMessage}`,
        );
    });
});

describe('DeezerPlaylists.getTracklist', () => {
    it('should return a list of tracks from the Deezer API', async () => {
        // Arrange
        const mockPlaylistId = 12345;
        const mockResponse = {
            data: {
                data: trackData.trackTestData,
                next: 'https://api.deezer.com/playlist/12345/tracks?index=25',
            },
        };

        // create a new instance of the mock adapter

        // set up the mock request/response
        mockAxios.onGet(`playlist/${mockPlaylistId}/tracks?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.data.next).reply(200, { data: trackData.trackTestData, next: null });

        // Act
        const result = await deezerPlaylist.getTracklist(mockPlaylistId);

        // Assert
        expect(result).toEqual([trackData.trackTestResult[0], trackData.trackTestResult[0]]);
    });
});

describe('DeezerPlaylists.getPlaylistFans', () => {
    const playlistId = 9248377662;

    afterEach(() => {
        mockAxios.reset();
    });

    it('should return the fans of the specified playlist', async () => {
        mockAxios.onGet(`playlist/${playlistId}/fans?access_token=`).reply(200, { data: userData.userTestData });

        const fans = await deezerPlaylist.getPlaylistFans(playlistId);

        expect(fans).toEqual(userData.userTestResult);
    });

    it('should throw a DeezerApiError if an error occurs while fetching fans', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`playlist/${playlistId}/fans?access_token=`).reply(500);

        await expect(deezerPlaylist.getPlaylistFans(playlistId)).rejects.toThrowError(
            new DeezerApiError(`Failed to fetch fans for playlist with ID ${playlistId}. Error: ${errorMessage}`),
        );
    });
});

describe('DeezerPlaylists.addTrackToPlaylist', () => {
    const playlistId = 9248377662;

    afterEach(() => {
        mockAxios.reset();
    });

    it('should add a track to the specified playlist', async () => {
        const successMessage = 'The track was added to the playlist successfully';

        mockAxios
            .onPost(`playlist/${playlistId}/tracks?access_token=&songs=12345`)
            .reply(200, { message: successMessage });

        const message = await deezerPlaylist.addTrackToPlaylist(playlistId, [12345]);

        expect(message).toEqual(successMessage);
    });

    it('should add multiple track to the specified playlist', async () => {
        const successMessage = 'The tracks were added to the playlist successfully';

        mockAxios
            .onPost(`playlist/${playlistId}/tracks?access_token=&songs=12345,67890`)
            .reply(200, { message: successMessage });

        const message = await deezerPlaylist.addTrackToPlaylist(playlistId, [12345, 67890]);

        expect(message).toEqual(successMessage);
    });

    it('should throw a DeezerApiError if an error occurs while adding a track to the playlist', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onPost(`playlist/${playlistId}/tracks?access_token=&songs=12345`).reply(500);

        await expect(deezerPlaylist.addTrackToPlaylist(playlistId, [12345])).rejects.toThrowError(
            new DeezerApiError(`Error adding track to playlist ${playlistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerPlaylists.removeTrackFromPlaylist', () => {
    const playlistId = 9248377662;

    afterEach(() => {
        mockAxios.reset();
    });

    it('should remove a track to the specified playlist', async () => {
        const successMessage = 'The track was removed to the playlist successfully';

        mockAxios
            .onDelete(`playlist/${playlistId}/tracks?access_token=&songs=12345`)
            .reply(200, { message: successMessage });

        const message = await deezerPlaylist.removeTrackFromPlaylist(playlistId, [12345]);

        expect(message).toEqual(successMessage);
    });

    it('should remove multiple track to the specified playlist', async () => {
        const successMessage = 'The tracks were removed to the playlist successfully';

        mockAxios
            .onDelete(`playlist/${playlistId}/tracks?access_token=&songs=12345,67890`)
            .reply(200, { message: successMessage });

        const message = await deezerPlaylist.removeTrackFromPlaylist(playlistId, [12345, 67890]);

        expect(message).toEqual(successMessage);
    });

    it('should throw a DeezerApiError if an error occurs while adding a track to the playlist', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onDelete(`playlist/${playlistId}/tracks?access_token=&songs=12345`).reply(500);

        await expect(deezerPlaylist.removeTrackFromPlaylist(playlistId, [12345])).rejects.toThrowError(
            new DeezerApiError(`Error removing track from playlist ${playlistId}: ${errorMessage}`),
        );
    });
});
