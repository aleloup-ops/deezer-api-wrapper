import axiosInstance from '../config/axios.instance';
import { Album, Artist, Playlist, Track, User } from '../models';
import {
    getAccessToken,
    setAccessToken,
    DeezerApiError,
    generatePlaylist,
    generateTrack,
    generateArtist,
    generateUser,
    generateAlbum,
} from '../utils';

export class DeezerArtists {
    public getTopTracks = async (artistId: number): Promise<Track[]> => {
        const tracks: Track[] = [];
        try {
            // Initial request
            const url = `/artist/${artistId}/top?access_token=${getAccessToken()}`;
            let response = await axiosInstance.get(url);

            const tracksData: any[] = response.data.data.data;

            // Add initial tracks to the array
            tracksData.map((track: any) => {
                tracks.push(generateTrack(track));
            });

            // Keep making requests until there is no more "next" key in the response
            while (response.data.next) {
                try {
                    // Make the next request
                    response = await axiosInstance.get(response.data.next);

                    // Add the new tracks to the array
                    response.data.data.map((track: any) => {
                        tracks.push(generateTrack(track));
                    });
                } catch (error) {
                    throw new DeezerApiError(
                        `Error getting next page of tracks for artist ${artistId}: ${(error as Error).message}`,
                    );
                }
            }
        } catch (error) {
            throw new DeezerApiError(`Error getting top tracks for artist ${artistId}: ${(error as Error).message}`);
        }
        return tracks;
    };

    public getAlbums = async (artistId: number): Promise<Album[]> => {
        const albums: Album[] = [];
        try {
            // Initial request
            const url = `/artist/${artistId}/albums?access_token=${getAccessToken()}`;
            let response = await axiosInstance.get(url);

            const albumsData: any[] = response.data.data.data;

            // Add initial albums to the array
            albumsData.map((album: any) => {
                albums.push(generateAlbum(album));
            });

            // Keep making requests until there is no more "next" key in the response
            while (response.data.next) {
                try {
                    // Make the next request
                    response = await axiosInstance.get(response.data.next);

                    // Add the new albums to the array
                    response.data.data.map((album: any) => {
                        albums.push(generateAlbum(album));
                    });
                } catch (error) {
                    throw new DeezerApiError(
                        `Error getting next page of albums for artist ${artistId}: ${(error as Error).message}`,
                    );
                }
            }
        } catch (error) {
            throw new DeezerApiError(`Error getting albums for artist ${artistId}: ${(error as Error).message}`);
        }
        return albums;
    };

    public async getFans(artistId: number): Promise<User[]> {
        try {
            const response = await axiosInstance.get(`/artist/${artistId}/fans?access_token=${getAccessToken()}`);
            const fansData: any[] = response.data.data;
            const fans: User[] = [];

            try {
                fansData.map((data) => {
                    fans.push(generateUser(data));
                });
            } catch (error) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
            }
            return fans;
        } catch (error) {
            throw new DeezerApiError(`Error getting albums for artist ${artistId}: ${(error as Error).message}`);
        }
    }

    public async getRelatedArtists(artistId: number): Promise<Artist[]> {
        try {
            const response = await axiosInstance.get(`/artist/${artistId}/related?access_token=${getAccessToken()}`);
            const artistsData: any[] = response.data.data.data;
            const artists: Artist[] = [];

            try {
                artistsData.map((data) => {
                    artists.push(generateArtist(data));
                });
            } catch (error) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
            }
            return artists;
        } catch (error) {
            throw new DeezerApiError(
                `Error getting related artists for artist ${artistId}: ${(error as Error).message}`,
            );
        }
    }

    public async getRadio(artistId: number): Promise<Track[]> {
        try {
            const response = await axiosInstance.get(`/artist/${artistId}/radio?access_token=${getAccessToken()}`);
            const tracksData: any[] = response.data.data.data;
            const tracks: Track[] = [];

            try {
                tracksData.map((data) => {
                    tracks.push(generateTrack(data));
                });
            } catch (error) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
            }
            return tracks;
        } catch (error) {
            throw new DeezerApiError(`Error getting radio for artist ${artistId}: ${(error as Error).message}`);
        }
    }

    public getPlaylists = async (artistId: number): Promise<Playlist[]> => {
        const playlists: Playlist[] = [];
        try {
            // Initial request
            const url = `/artist/${artistId}/playlists?access_token=${getAccessToken()}`;
            let response = await axiosInstance.get(url);

            const playlistsData: any[] = response.data.data.data;

            // Add initial playlists to the array
            playlistsData.map((playlist: any) => {
                playlists.push(generatePlaylist(playlist));
            });

            // Keep making requests until there is no more "next" key in the response
            while (response.data.next) {
                try {
                    // Make the next request
                    response = await axiosInstance.get(response.data.next);

                    // Add the new playlists to the array
                    playlists.push(generatePlaylist(response.data.data));
                } catch (error) {
                    throw new DeezerApiError(
                        `Error getting next page of playlists for artist ${artistId}: ${(error as Error).message}`,
                    );
                }
            }
        } catch (error) {
            throw new DeezerApiError(`Error getting playlists for artist ${artistId}: ${(error as Error).message}`);
        }
        return playlists;
    };
}
