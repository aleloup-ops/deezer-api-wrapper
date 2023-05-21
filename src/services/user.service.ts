import axiosInstance from '../config/axios.instance';
import { Playlist, Track, Album, Artist, User } from '../models';
import {
    DeezerApiError,
    extractAlbumsData,
    extractArtistsData,
    extractPlaylistsData,
    extractTracksData,
    extractUsersData,
    generateAlbum,
    generateArtist,
    generatePlaylist,
    generateTrack,
    getAccessToken,
} from '../utils';

export class DeezerUsers {
    public getFavouriteAlbums = async (): Promise<Album[]> => {
        try {
            const response = await axiosInstance.get(`user/me/albums?access_token=${getAccessToken()}`);
            const albumsData: any[] = response.data.data;

            const albums: Album[] = [];
            try {
                albumsData.map((data) => {
                    albums.push(generateAlbum(data));
                });
            } catch (error) {
                throw new DeezerApiError(`Invalid albums data`);
            }
            return albums;
        } catch (error) {
            throw new DeezerApiError(`Error getting favourite albums: ${(error as Error).message}`);
        }
    };

    public getFavouriteArtists = async (): Promise<Artist[]> => {
        try {
            const response = await axiosInstance.get(`user/me/artists?access_token=${getAccessToken()}`);
            const artistsData: any[] = response.data.data;

            const artists: Artist[] = [];
            try {
                artistsData.map((data) => {
                    artists.push(generateArtist(data));
                });
            } catch (error) {
                throw new DeezerApiError(`Invalid artists data`);
            }
            return artists;
        } catch (error) {
            throw new DeezerApiError(`Error getting favourite artists: ${(error as Error).message}`);
        }
    };

    public getTracksCharts = async (): Promise<any[]> => {
        try {
            const response = await axiosInstance.get(`user/me/charts/tracks?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting tracks charts: ${(error as Error).message}`);
        }
    };

    public getPlaylistsCharts = async (): Promise<any[]> => {
        try {
            const response = await axiosInstance.get(`user/me/charts/playlists?access_token=${getAccessToken()}`);
            return extractPlaylistsData(response.data.data, `Invalid playlists data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting playlists charts: ${(error as Error).message}`);
        }
    };

    public getAlbumsCharts = async (): Promise<any[]> => {
        try {
            const response = await axiosInstance.get(`user/me/charts/albums?access_token=${getAccessToken()}`);
            return extractAlbumsData(response.data.data, `Invalid albums data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting albums charts: ${(error as Error).message}`);
        }
    };

    public getArtistsCharts = async (): Promise<any[]> => {
        try {
            const response = await axiosInstance.get(`user/me/charts/artists?access_token=${getAccessToken()}`);
            return extractArtistsData(response.data.data, `Invalid artists data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting artists charts: ${(error as Error).message}`);
        }
    };

    public getFlow = async (): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`user/me/flow?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting flow: ${(error as Error).message}`);
        }
    };

    public getFollowings = async (): Promise<User[]> => {
        try {
            const response = await axiosInstance.get(`user/me/followings?access_token=${getAccessToken()}`);
            return extractUsersData(response.data.data, `Invalid users data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting followings: ${(error as Error).message}`);
        }
    };

    public getFollowers = async (): Promise<User[]> => {
        try {
            const response = await axiosInstance.get(`user/me/followers?access_token=${getAccessToken()}`);
            return extractUsersData(response.data.data, `Invalid users data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting followers: ${(error as Error).message}`);
        }
    };

    public getTracksHistory = async (): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`user/me/history?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting tracks history: ${(error as Error).message}`);
        }
    };

    public getPersonalSongs = async (): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`user/me/personal_songs?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting personal songs: ${(error as Error).message}`);
        }
    }

    public getPlaylists = async (): Promise<Playlist[]> => {
        try {
            const response = await axiosInstance.get(`user/me/playlists?access_token=${getAccessToken()}`);
            return extractPlaylistsData(response.data.data, `Invalid playlists data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting playlists: ${(error as Error).message}`);
        }
    }

    public getFavouriteTracks = async (): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`user/me/tracks?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting favourite tracks: ${(error as Error).message}`);
        }
    }

    public getRecommendedAlbums = async (): Promise<Album[]> => {
        try {
            console.log("ddddd")
            const response = await axiosInstance.get(`user/me/recommendations/albums?access_token=${getAccessToken()}`);
            console.log(response);
            return extractAlbumsData(response.data.data, `Invalid albums data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting recommended albums: ${(error as Error).message}`);
        }
    }

    public getRecommendedReleasedAlbums = async (): Promise<Album[]> => {
        try {
            const response = await axiosInstance.get(`user/me/recommendations/releases?access_token=${getAccessToken()}`);
            return extractAlbumsData(response.data.data, `Invalid albums data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting recommended released albums: ${(error as Error).message}`);
        }
    }

    public getRecommendedArtists = async (): Promise<Artist[]> => {
        try {
            const response = await axiosInstance.get(`user/me/recommendations/artists?access_token=${getAccessToken()}`);
            return extractArtistsData(response.data.data, `Invalid artists data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting recommended artists: ${(error as Error).message}`);
        }
    }

    public getRecommendedPlaylists = async (): Promise<Playlist[]> => {
        try {
            const response = await axiosInstance.get(`user/me/recommendations/playlists?access_token=${getAccessToken()}`);
            return extractPlaylistsData(response.data.data, `Invalid playlists data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting recommended playlists: ${(error as Error).message}`);
        }
    }

    public getRecommendedTracks = async (): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`user/me/recommendations/tracks?access_token=${getAccessToken()}`);
            return extractTracksData(response.data.data, `Invalid tracks data`);
        } catch (error) {
            throw new DeezerApiError(`Error getting recommended tracks: ${(error as Error).message}`);
        }
    }
}
