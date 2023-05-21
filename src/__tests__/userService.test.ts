import { DeezerUsers } from '../services/';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../config/axios.instance';

import * as albumData from './testDatas/albumData.json';
import * as userData from './testDatas/userData.json';
import * as trackData from './testDatas/trackData.json';
import * as artistData from './testDatas/artistData.json';
import * as playlistData from './testDatas/playlistData.json';
import { DeezerApiError } from '../utils';
import { after } from 'node:test';

const deezerUsers = new DeezerUsers();
const mockAxios = new MockAdapter(axiosInstance);

describe('DeezerUsers.getFavouriteAlbums', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of albums', async () => {
        mockAxios.onGet(`user/me/albums?access_token=`).reply(200, {
            data: albumData.albumTestData,
        });

        const response = await deezerUsers.getFavouriteAlbums();
        expect(response).toEqual(albumData.albumTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/albums?access_token=`).reply(200, {
            data: {
                wrong_data: '1',
            },
        });

        await expect(deezerUsers.getFavouriteAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite albums: Invalid albums data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/albums?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFavouriteAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite albums: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getFavouriteArtists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of artists', async () => {
        mockAxios.onGet(`user/me/artists?access_token=`).reply(200, {
            data: artistData.artistTestData,
        });

        const response = await deezerUsers.getFavouriteArtists();
        expect(response).toEqual(artistData.artistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/artists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getFavouriteArtists()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite artists: Invalid artists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/artists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFavouriteArtists()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite artists: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getTracksCharts', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/charts/tracks?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getTracksCharts();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/charts/tracks?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getTracksCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks charts: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/charts/tracks?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getTracksCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks charts: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getAlbumsCharts', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of albums', async () => {
        mockAxios.onGet(`user/me/charts/albums?access_token=`).reply(200, {
            data: albumData.albumTestData,
        });

        const response = await deezerUsers.getAlbumsCharts();
        expect(response).toEqual(albumData.albumTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/charts/albums?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getAlbumsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting albums charts: Invalid albums data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/charts/albums?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getAlbumsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting albums charts: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getPlaylistsCharts', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of playlists', async () => {
        mockAxios.onGet(`user/me/charts/playlists?access_token=`).reply(200, {
            data: playlistData.playlistTestData,
        });

        const response = await deezerUsers.getPlaylistsCharts();
        expect(response).toEqual(playlistData.playlistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/charts/playlists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getPlaylistsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists charts: Invalid playlists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/charts/playlists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getPlaylistsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists charts: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getArtistsCharts', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of artists', async () => {
        mockAxios.onGet(`user/me/charts/artists?access_token=`).reply(200, {
            data: artistData.artistTestData,
        });

        const response = await deezerUsers.getArtistsCharts();
        expect(response).toEqual(artistData.artistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/charts/artists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getArtistsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting artists charts: Invalid artists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/charts/artists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getArtistsCharts()).rejects.toThrowError(
            new DeezerApiError(`Error getting artists charts: ${errorMessage}`),
        );
    });
});

describe('DeezerUsers.getFlow', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/flow?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getFlow();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/flow?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getFlow()).rejects.toThrowError(
            new DeezerApiError(`Error getting flow: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/flow?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFlow()).rejects.toThrowError(
            new DeezerApiError(`Error getting flow: ${errorMessage}`),
        );
    });
});

describe('getFollowings', () => { 
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of users', async () => {
        mockAxios.onGet(`user/me/followings?access_token=`).reply(200, {
            data: userData.userTestData,
        });

        const response = await deezerUsers.getFollowings();
        expect(response).toEqual(userData.userTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/followings?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getFollowings()).rejects.toThrowError(
            new DeezerApiError(`Error getting followings: Invalid users data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/followings?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFollowings()).rejects.toThrowError(
            new DeezerApiError(`Error getting followings: ${errorMessage}`),
        );
    });
});

describe('getFollowers', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of users', async () => {
        mockAxios.onGet(`user/me/followers?access_token=`).reply(200, {
            data: userData.userTestData,
        });

        const response = await deezerUsers.getFollowers();
        expect(response).toEqual(userData.userTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/followers?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getFollowers()).rejects.toThrowError(
            new DeezerApiError(`Error getting followers: Invalid users data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/followers?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFollowers()).rejects.toThrowError(
            new DeezerApiError(`Error getting followers: ${errorMessage}`),
        );
    });
});

describe('getTracksHistory', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/history?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getTracksHistory();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/history?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getTracksHistory()).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks history: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/history?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getTracksHistory()).rejects.toThrowError(
            new DeezerApiError(`Error getting tracks history: ${errorMessage}`),
        );
    });
});

describe('getPersonalSongs', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/personal_songs?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getPersonalSongs();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/personal_songs?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getPersonalSongs()).rejects.toThrowError(
            new DeezerApiError(`Error getting personal songs: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/personal_songs?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getPersonalSongs()).rejects.toThrowError(
            new DeezerApiError(`Error getting personal songs: ${errorMessage}`),
        );
    });
});

describe('getPlaylists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of playlists', async () => {
        mockAxios.onGet(`user/me/playlists?access_token=`).reply(200, {
            data: playlistData.playlistTestData,
        });

        const response = await deezerUsers.getPlaylists();
        expect(response).toEqual(playlistData.playlistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/playlists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getPlaylists()).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists: Invalid playlists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/playlists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getPlaylists()).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists: ${errorMessage}`),
        );
    });
});

describe('getFavouriteTracks', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/tracks?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getFavouriteTracks();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/tracks?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getFavouriteTracks()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite tracks: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/tracks?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getFavouriteTracks()).rejects.toThrowError(
            new DeezerApiError(`Error getting favourite tracks: ${errorMessage}`),
        );
    }); 
});

describe('getRecommendedAlbums', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of albums', async () => {
        mockAxios.onGet(`user/me/recommendations/albums?access_token=`).reply(200, {
            data: albumData.albumTestData,
        });

        const response = await deezerUsers.getRecommendedAlbums();
        expect(response).toEqual(albumData.albumTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/recommendations/albums?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getRecommendedAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended albums: Invalid albums data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/recommendations/albums?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getRecommendedAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended albums: ${errorMessage}`),
        );
    });
});

describe('getRecommendedArtists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of artists', async () => {
        mockAxios.onGet(`user/me/recommendations/artists?access_token=`).reply(200, {
            data: artistData.artistTestData,
        });

        const response = await deezerUsers.getRecommendedArtists();
        expect(response).toEqual(artistData.artistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/recommendations/artists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getRecommendedArtists()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended artists: Invalid artists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/recommendations/artists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getRecommendedArtists()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended artists: ${errorMessage}`),
        );
    });
});

describe('getRecommendedTracks', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of tracks', async () => {
        mockAxios.onGet(`user/me/recommendations/tracks?access_token=`).reply(200, {
            data: trackData.trackTestData,
        });

        const response = await deezerUsers.getRecommendedTracks();
        expect(response).toEqual(trackData.trackTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/recommendations/tracks?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getRecommendedTracks()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended tracks: Invalid tracks data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/recommendations/tracks?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getRecommendedTracks()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended tracks: ${errorMessage}`),
        );
    });
});

describe('getRecommendedPlaylists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of playlists', async () => {
        mockAxios.onGet(`user/me/recommendations/playlists?access_token=`).reply(200, {
            data: playlistData.playlistTestData,
        });

        const response = await deezerUsers.getRecommendedPlaylists();
        expect(response).toEqual(playlistData.playlistTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/recommendations/playlists?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getRecommendedPlaylists()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended playlists: Invalid playlists data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/recommendations/playlists?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getRecommendedPlaylists()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended playlists: ${errorMessage}`),
        );
    });
});

describe('getRecommendedReleasedAlbums', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an array of albums', async () => {
        mockAxios.onGet(`user/me/recommendations/releases?access_token=`).reply(200, {
            data: albumData.albumTestData,
        });

        const response = await deezerUsers.getRecommendedReleasedAlbums();
        expect(response).toEqual(albumData.albumTestResult);
    });

    it('should detect invalid data', async () => {
        mockAxios.onGet(`user/me/recommendations/releases?access_token=`).reply(200, {
            data: {
                '1': '1',
            },
        });

        await expect(deezerUsers.getRecommendedReleasedAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended released albums: Invalid albums data`),
        );
    });

    it('should return an error', async () => {
        const errorMessage = 'Request failed with status code 500';

        mockAxios.onGet(`user/me/recommendations/releases?access_token=`).reply(500, {
            errorMessage,
        });

        await expect(deezerUsers.getRecommendedReleasedAlbums()).rejects.toThrowError(
            new DeezerApiError(`Error getting recommended released albums: ${errorMessage}`),
        );
    });
});