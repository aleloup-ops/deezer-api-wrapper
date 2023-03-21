import axiosInstance from '../config/axios.instance';
import MockAdapter from 'axios-mock-adapter';
import { DeezerApiError } from '../utils';
import { DeezerArtists } from '../services/artist.service';

const mockAxios = new MockAdapter(axiosInstance);
const deezerArtists = new DeezerArtists();
const artistId = 123;

describe('DeezerArtists.getTopTracks', () => {
    afterEach(() => {
        mockAxios.reset();
    });

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
    const mockResponse = {
        data: {
            data: testData,
            next: `https://api.deezer.com/artist/${artistId}/top?index=25`,
        },
    };

    it('should return the top tracks for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/top?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.data.next).reply(200, { data: testData, next: null });

        // Act
        const result = await deezerArtists.getTopTracks(artistId);

        // Assert
        expect(result).toEqual(testData);
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

    const testData = [
        {
            id: 294609352,
            title: 'Homework (25th Anniversary Edition)',
            link: 'https://www.deezer.com/album/294609352',
            cover: 'https://api.deezer.com/album/294609352/image',
            cover_small:
                'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/56x56-000000-80-0-0.jpg',
            cover_medium:
                'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/250x250-000000-80-0-0.jpg',
            cover_big:
                'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/500x500-000000-80-0-0.jpg',
            cover_xl:
                'https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/1000x1000-000000-80-0-0.jpg',
            md5_image: '117dcf85bdf0851347403796521d1e9d',
            genre_id: 113,
            fans: 9099,
            release_date: '1997-01-20',
            record_type: 'album',
            tracklist: 'https://api.deezer.com/album/294609352/tracks',
            explicit_lyrics: false,
            type: 'album',
        },
    ];
    const mockResponse = {
        data: {
            data: testData,
            next: `https://api.deezer.com/artist/${artistId}/albums?index=25`,
        },
    };

    it('should return albums for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/albums?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.data.next).reply(200, { data: testData, next: null });

        // Act
        const result = await deezerArtists.getAlbums(artistId);

        // Assert
        expect(result).toEqual(testData);
    });

    // it('should throw an error if the artist does not exist', async () => {
    // });

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

    const testData = [
        {
            id: 123,
            name: 'User1',
            lastname: '',
            firstname: '',
            email: 'user@gmail.com',
            status: 2,
            birthday: '0000-00-00',
            inscription_date: '2015-01-25',
            gender: '',
            link: 'ddd',
            picture: 'ddd',
            picture_small: 'ee',
            picture_medium: 'dd',
            picture_big: 'dd',
            picture_xl: 'dd',
            country: 'FR',
            lang: 'en',
            is_kid: false,
            explicit_content_level: 'explicit_display',
            explicit_content_levels_available: ['explicit_display', 'explicit_no_recommendation', 'explicit_hide'],
            tracklist: 'dd',
            type: 'user',
        },
    ];
    const mockResponse = {
        data: testData,
    };

    it('should return fans for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/fans?access_token=`).reply(200, mockResponse);

        // Act
        const result = await deezerArtists.getFans(artistId);

        // Assert
        expect(result).toEqual(testData);
    });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/fans?access_token=`).reply(500);

        await expect(deezerArtists.getFans(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting albums for artist ${artistId}: ${errorMessage}`),
        );
    });
});

describe('DeezerArtists.getRelatedArtists', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    const testData = [
        {
            id: 13358,
            name: 'Kavinsky',
            link: 'https://www.deezer.com/artist/13358',
            picture: 'https://api.deezer.com/artist/13358/image',
            picture_small:
                'https://e-cdns-images.dzcdn.net/images/artist/109f6a90627dbcf043def392d50b0c72/56x56-000000-80-0-0.jpg',
            picture_medium:
                'https://e-cdns-images.dzcdn.net/images/artist/109f6a90627dbcf043def392d50b0c72/250x250-000000-80-0-0.jpg',
            picture_big:
                'https://e-cdns-images.dzcdn.net/images/artist/109f6a90627dbcf043def392d50b0c72/500x500-000000-80-0-0.jpg',
            picture_xl:
                'https://e-cdns-images.dzcdn.net/images/artist/109f6a90627dbcf043def392d50b0c72/1000x1000-000000-80-0-0.jpg',
            nb_album: 10,
            nb_fan: 405166,
            radio: true,
            tracklist: 'https://api.deezer.com/artist/13358/top?limit=50',
            type: 'artist',
        },
    ];

    const mockResponse = {
        data: {
            data: testData,
            total: 1,
        },
    };

    it('should return related artists for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/related?access_token=`).reply(200, mockResponse);

        // Act
        const result = await deezerArtists.getRelatedArtists(artistId);

        // Assert
        expect(result).toEqual(testData);
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

    const testData = [
        {
            id: 694457472,
            readable: true,
            title: 'Elévation',
            title_short: 'Elévation',
            title_version: '',
            duration: 155,
            rank: 691531,
            explicit_lyrics: false,
            explicit_content_lyrics: 0,
            explicit_content_cover: 0,
            preview: 'https://cdns-preview-7.dzcdn.net/stream/c-7dbc3e1dfdb07828920aa7923cedfebd-6.mp3',
            md5_image: '9bf95ee2b2e8cc8b9aafb261062ca5e3',
            artist: {
                id: 13682095,
                name: 'Vladimir Cauchemar',
                picture: 'https://api.deezer.com/artist/13682095/image',
                picture_small:
                    'https://e-cdns-images.dzcdn.net/images/artist/5f1198512184f52169888a2678b78c4e/56x56-000000-80-0-0.jpg',
                picture_medium:
                    'https://e-cdns-images.dzcdn.net/images/artist/5f1198512184f52169888a2678b78c4e/250x250-000000-80-0-0.jpg',
                picture_big:
                    'https://e-cdns-images.dzcdn.net/images/artist/5f1198512184f52169888a2678b78c4e/500x500-000000-80-0-0.jpg',
                picture_xl:
                    'https://e-cdns-images.dzcdn.net/images/artist/5f1198512184f52169888a2678b78c4e/1000x1000-000000-80-0-0.jpg',
                tracklist: 'https://api.deezer.com/artist/13682095/top?limit=50',
                type: 'artist',
            },
            album: {
                id: 99907442,
                title: 'Elévation',
                cover: 'https://api.deezer.com/album/99907442/image',
                cover_small:
                    'https://e-cdns-images.dzcdn.net/images/cover/9bf95ee2b2e8cc8b9aafb261062ca5e3/56x56-000000-80-0-0.jpg',
                cover_medium:
                    'https://e-cdns-images.dzcdn.net/images/cover/9bf95ee2b2e8cc8b9aafb261062ca5e3/250x250-000000-80-0-0.jpg',
                cover_big:
                    'https://e-cdns-images.dzcdn.net/images/cover/9bf95ee2b2e8cc8b9aafb261062ca5e3/500x500-000000-80-0-0.jpg',
                cover_xl:
                    'https://e-cdns-images.dzcdn.net/images/cover/9bf95ee2b2e8cc8b9aafb261062ca5e3/1000x1000-000000-80-0-0.jpg',
                md5_image: '9bf95ee2b2e8cc8b9aafb261062ca5e3',
                tracklist: 'https://api.deezer.com/album/99907442/tracks',
                type: 'album',
            },
            type: 'track',
        },
    ];

    const mockResponse = {
        data: {
            data: testData,
        },
    };

    it('should return related artists for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/radio?access_token=`).reply(200, mockResponse);

        // Act
        const result = await deezerArtists.getRadio(artistId);

        // Assert
        expect(result).toEqual(testData);
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

    const testData = [
        {
            id: 1386208615,
            title: 'Pop Party',
            public: true,
            link: 'https://www.deezer.com/playlist/1386208615',
            picture: 'https://api.deezer.com/playlist/1386208615/image',
            picture_small:
                'https://e-cdns-images.dzcdn.net/images/playlist/504266feba28e27e4f95ef85e890225b/56x56-000000-80-0-0.jpg',
            picture_medium:
                'https://e-cdns-images.dzcdn.net/images/playlist/504266feba28e27e4f95ef85e890225b/250x250-000000-80-0-0.jpg',
            picture_big:
                'https://e-cdns-images.dzcdn.net/images/playlist/504266feba28e27e4f95ef85e890225b/500x500-000000-80-0-0.jpg',
            picture_xl:
                'https://e-cdns-images.dzcdn.net/images/playlist/504266feba28e27e4f95ef85e890225b/1000x1000-000000-80-0-0.jpg',
            checksum: 'f1ef90bfd2f3bd5ac7fe0f6c5fca837b',
            tracklist: 'https://api.deezer.com/playlist/1386208615/tracks',
            creation_date: '2015-09-23 11:08:49',
            md5_image: '504266feba28e27e4f95ef85e890225b',
            picture_type: 'playlist',
            user: {
                id: 753546365,
                name: 'Fábio - Deezer Pop Editor',
                tracklist: 'https://api.deezer.com/user/753546365/flow',
                type: 'user',
            },
            type: 'playlist',
        },
    ];
    const mockResponse = {
        data: {
            data: testData,
            total: 1,
            next: `https://api.deezer.com/artist/${artistId}/playlists?index=10`,
        },
    };

    it('should return playlists for the given artist', async () => {
        mockAxios.onGet(`/artist/${artistId}/playlists?access_token=`).reply(200, mockResponse);
        mockAxios.onGet(mockResponse.data.next).reply(200, { data: testData, next: null });

        // Act
        const result = await deezerArtists.getPlaylists(artistId);

        // Assert
        expect(result).toEqual(testData);
    });

    // it('should throw an error if the artist does not exist', async () => {
    // });

    it('should throw an error if the request fails', async () => {
        const errorMessage = 'Request failed with status code 500';
        mockAxios.onGet(`/artist/${artistId}/playlists?access_token=`).reply(500);

        await expect(deezerArtists.getPlaylists(artistId)).rejects.toThrowError(
            new DeezerApiError(`Error getting playlists for artist ${artistId}: ${errorMessage}`),
        );
    });
});
