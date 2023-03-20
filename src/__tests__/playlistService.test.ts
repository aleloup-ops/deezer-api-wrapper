import { DeezerPlaylists } from '../services/playlist.service';
import axiosInstance from '../config/axios.instance';
import MockAdapter from 'axios-mock-adapter';
import { DeezerApiError, getAccessToken, setAccessToken } from '../utils';

const mockAxios = new MockAdapter(axiosInstance);
const deezerPlaylist = new DeezerPlaylists();

describe('DeezerPlaylist.getPlaylists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const testPlaylists = [
        {
            id: 9248387402,
            title: 'Playlist 1',
            duration: 4507,
            public: true,
            is_loved_track: false,
            collaborative: false,
            nb_tracks: 22,
            fans: 0,
            link: 'https://www.deezer.com/playlist/9248387402',
            picture: 'https://api.deezer.com/playlist/9248387402/image',
            picture_small:
                'https://e-cdns-images.dzcdn.net/images/cover/a3579ac7cad97e6e0ad577057e69b604-3455d2d7101ec09f01103c2e4104a81c-6986cd7fa20ca76fe5871a9d0ee8b821-328aac1ce6ae25238b6c2b3ef8035d05/56x56-000000-80-0-0.jpg',
            picture_medium:
                'https://e-cdns-images.dzcdn.net/images/cover/a3579ac7cad97e6e0ad577057e69b604-3455d2d7101ec09f01103c2e4104a81c-6986cd7fa20ca76fe5871a9d0ee8b821-328aac1ce6ae25238b6c2b3ef8035d05/250x250-000000-80-0-0.jpg',
            picture_big:
                'https://e-cdns-images.dzcdn.net/images/cover/a3579ac7cad97e6e0ad577057e69b604-3455d2d7101ec09f01103c2e4104a81c-6986cd7fa20ca76fe5871a9d0ee8b821-328aac1ce6ae25238b6c2b3ef8035d05/500x500-000000-80-0-0.jpg',
            picture_xl:
                'https://e-cdns-images.dzcdn.net/images/cover/a3579ac7cad97e6e0ad577057e69b604-3455d2d7101ec09f01103c2e4104a81c-6986cd7fa20ca76fe5871a9d0ee8b821-328aac1ce6ae25238b6c2b3ef8035d05/1000x1000-000000-80-0-0.jpg',
            checksum: 'c49e2e65a7915d40825fe13933095672',
            tracklist: 'https://api.deezer.com/playlist/9248387402/tracks',
            creation_date: '2021-07-06 22:15:46',
            md5_image:
                'a3579ac7cad97e6e0ad577057e69b604-3455d2d7101ec09f01103c2e4104a81c-6986cd7fa20ca76fe5871a9d0ee8b821-328aac1ce6ae25238b6c2b3ef8035d05',
            picture_type: 'cover',
            time_add: 1625609874,
            time_mod: 1679235817,
            creator: {
                id: 647587021,
                name: 'Shaymin',
                tracklist: 'https://api.deezer.com/user/647587021/flow',
                type: 'user',
            },
            type: 'playlist',
        },
    ];

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
            data: testPlaylists,
        });

        const playlists = await deezerPlaylist.getPlaylists();

        expect(playlists).toHaveLength(1);
        expect(playlists[0]).toHaveProperty('id', 9248387402);
        expect(playlists[0]).toHaveProperty('title', 'Playlist 1');
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
    const testData = [
        {
            id: 140398635,
            readable: true,
            title: 'Ma meilleure amie',
            title_short: 'Ma meilleure amie',
            title_version: '',
            link: 'https://www.deezer.com/track/140398635',
            duration: 200,
            rank: 838610,
            explicit_lyrics: true,
            explicit_content_lyrics: 1,
            explicit_content_cover: 1,
            preview: 'https://cdns-preview-9.dzcdn.net/stream/c-977cf480bc0dff154737ed5ddcc602d6-7.mp3',
            md5_image: '3a7a77f8e3dc44f85a0371d195eac355',
            time_add: 1625602438,
            artist: {
                id: 5175734,
                name: 'Vald',
                link: 'https://www.deezer.com/artist/5175734',
                picture: 'https://api.deezer.com/artist/5175734/image',
                picture_small:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/56x56-000000-80-0-0.jpg',
                picture_medium:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/250x250-000000-80-0-0.jpg',
                picture_big:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/500x500-000000-80-0-0.jpg',
                picture_xl:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/1000x1000-000000-80-0-0.jpg',
                tracklist: 'https://api.deezer.com/artist/5175734/top?limit=50',
                type: 'artist',
            },
            album: {
                id: 15116725,
                title: 'Agartha',
                cover: 'https://api.deezer.com/album/15116725/image',
                cover_small:
                    'https://e-cdns-images.dzcdn.net/images/cover/3a7a77f8e3dc44f85a0371d195eac355/56x56-000000-80-0-0.jpg',
                cover_medium:
                    'https://e-cdns-images.dzcdn.net/images/cover/3a7a77f8e3dc44f85a0371d195eac355/250x250-000000-80-0-0.jpg',
                cover_big:
                    'https://e-cdns-images.dzcdn.net/images/cover/3a7a77f8e3dc44f85a0371d195eac355/500x500-000000-80-0-0.jpg',
                cover_xl:
                    'https://e-cdns-images.dzcdn.net/images/cover/3a7a77f8e3dc44f85a0371d195eac355/1000x1000-000000-80-0-0.jpg',
                md5_image: '3a7a77f8e3dc44f85a0371d195eac355',
                tracklist: 'https://api.deezer.com/album/15116725/tracks',
                type: 'album',
            },
            type: 'track',
        },
        {
            id: 752853442,
            readable: true,
            title: 'Journal perso II',
            title_short: 'Journal perso II',
            title_version: '',
            link: 'https://www.deezer.com/track/752853442',
            duration: 213,
            rank: 570893,
            explicit_lyrics: true,
            explicit_content_lyrics: 1,
            explicit_content_cover: 0,
            preview: 'https://cdns-preview-5.dzcdn.net/stream/c-5f5282f761ce196b1c4ebfb978987883-5.mp3',
            md5_image: '97c9cce088f5c27eef2acfc84ffab39f',
            time_add: 1625602439,
            artist: {
                id: 5175734,
                name: 'Vald',
                link: 'https://www.deezer.com/artist/5175734',
                picture: 'https://api.deezer.com/artist/5175734/image',
                picture_small:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/56x56-000000-80-0-0.jpg',
                picture_medium:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/250x250-000000-80-0-0.jpg',
                picture_big:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/500x500-000000-80-0-0.jpg',
                picture_xl:
                    'https://e-cdns-images.dzcdn.net/images/artist/c846082faf7dadf93c8c7b48190c97b6/1000x1000-000000-80-0-0.jpg',
                tracklist: 'https://api.deezer.com/artist/5175734/top?limit=50',
                type: 'artist',
            },
            album: {
                id: 110813842,
                title: 'Journal perso II',
                cover: 'https://api.deezer.com/album/110813842/image',
                cover_small:
                    'https://e-cdns-images.dzcdn.net/images/cover/97c9cce088f5c27eef2acfc84ffab39f/56x56-000000-80-0-0.jpg',
                cover_medium:
                    'https://e-cdns-images.dzcdn.net/images/cover/97c9cce088f5c27eef2acfc84ffab39f/250x250-000000-80-0-0.jpg',
                cover_big:
                    'https://e-cdns-images.dzcdn.net/images/cover/97c9cce088f5c27eef2acfc84ffab39f/500x500-000000-80-0-0.jpg',
                cover_xl:
                    'https://e-cdns-images.dzcdn.net/images/cover/97c9cce088f5c27eef2acfc84ffab39f/1000x1000-000000-80-0-0.jpg',
                md5_image: '97c9cce088f5c27eef2acfc84ffab39f',
                tracklist: 'https://api.deezer.com/album/110813842/tracks',
                type: 'album',
            },
            type: 'track',
        },
    ];

    it('should return a list of tracks from the Deezer API', async () => {
        // Arrange
        const mockPlaylistId = 12345;
        const mockResponse = {
            data: {
                data: testData,
                next: 'https://api.deezer.com/playlist/12345/tracks?index=25',
            },
        };

        // create a new instance of the mock adapter

        // set up the mock request/response
        mockAxios.onGet(`playlist/${mockPlaylistId}/tracks?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.data.next).reply(200, { data: testData, next: null });

        // Act
        const result = await deezerPlaylist.getTracklist(mockPlaylistId);

        // Assert
        expect(result).toEqual(testData);
    });
});

describe('DeezerPlaylists.getPlaylistFans', () => {
    const playlistId = 9248377662;

    afterEach(() => {
        mockAxios.reset();
    });

    it('should return the fans of the specified playlist', async () => {
        const testFans = [
            {
                id: 1,
                name: 'JohnDoe123',
                lastname: 'Doe',
                firstname: 'John',
                email: 'john.doe@gmail.com',
                status: 1,
                birthday: '01-01-2000',
                inscriptionDate: '01-01-2000',
                gender: 'male',
                link: 'https://www.deezer.com/profile/1',
                picture: 'https://api.deezer.com/user/1/image',
                pictureSmall: 'https://api.deezer.com/user/1/image',
                pictureMedium: 'https://api.deezer.com/user/1/image',
                pictureBig: 'https://api.deezer.com/user/1/image',
                pictureXl: 'https://api.deezer.com/user/1/image',
                country: 'US',
                lang: 'en',
                isKid: false,
                explicitContentLevel: 1,
                explicitContentLevelsAvailable: [1, 2],
                tracklist: 'https://api.deezer.com/user/1/flow',
            },
        ];

        mockAxios.onGet(`playlist/${playlistId}/fans?access_token=`).reply(200, { data: testFans });

        const fans = await deezerPlaylist.getPlaylistFans(playlistId);

        expect(fans).toEqual(testFans);
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