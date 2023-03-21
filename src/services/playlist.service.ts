import axiosInstance from '../config/axios.instance';
import { Artist, Playlist, Track, User } from '../models';
import { DeezerApiError, getAccessToken } from '../utils';

export class DeezerPlaylists {
    public async getPlaylists(): Promise<Playlist[]> {
        try {
            const response = await axiosInstance.get(`user/me/playlists?access_token=${getAccessToken()}`);
            const playlistsData: any[] = response.data.data;
            let playlists: Playlist[] = [];

            try {
                playlists = playlistsData.map((data) => {
                    const { creator, ...playlist } = data;
                    return { creator: creator as Artist, ...playlist } as Playlist;
                });
            } catch (error) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
            }
            return playlists;
        } catch (error) {
            throw new DeezerApiError("Failed to fetch user's playlists : " + (error as Error).message);
        }
    }

    public async getTracklist(playlistId: number): Promise<Track[]> {
        let tracks: Track[] = [];

        try {
            // Initial request
            const url = `playlist/${playlistId}/tracks?access_token=${getAccessToken()}`;
            let response = await axiosInstance.get(url);

            const tracksData: any[] = response.data.data.data;

            // Add initial tracks to the array
            tracks = tracksData.map((track: any) => {
                const { artist, ...trackData } = track;
                return { artist: artist as Artist, ...trackData } as Track;
            });

            // Keep making requests until there is no more "next" key in the response
            while (response.data.next) {
                try {
                    // Make the next request
                    response = await axiosInstance.get(response.data.next);

                    // Add the new tracks to the array
                    tracks.push(...response.data.data);
                } catch (error) {
                    throw new DeezerApiError(
                        `Error getting next page of tracks for playlist ${playlistId}: ${(error as Error).message}`,
                    );
                }
            }
        } catch (error) {
            throw new DeezerApiError(`Error getting tracklist for playlist ${playlistId}: ${(error as Error).message}`);
        }
        return tracks;
    }

    public async getPlaylistFans(playlistId: number): Promise<User[]> {
        try {
            const response = await axiosInstance.get(`playlist/${playlistId}/fans?access_token=${getAccessToken()}`);
            const fans: User[] = response.data.data;
            return fans;
        } catch (error) {
            throw new DeezerApiError(
                `Failed to fetch fans for playlist with ID ${playlistId}. Error: ${(error as Error).message}`,
            );
        }
    }

    public async addTrackToPlaylist(playlistId: number, trackId: number[]): Promise<string> {
        try {
            const response = await axiosInstance.post(
                `playlist/${playlistId}/tracks?access_token=${getAccessToken()}&songs=${trackId}`,
            );
            const status = response.data.message;
            return status;
        } catch (error) {
            throw new DeezerApiError(`Error adding track to playlist ${playlistId}: ${(error as Error).message}`);
        }
    }

    public async removeTrackFromPlaylist(playlistId: number, trackId: number[]): Promise<string> {
        try {
            const response = await axiosInstance.delete(
                `playlist/${playlistId}/tracks?access_token=${getAccessToken()}&songs=${trackId}`,
            );
            const status = response.data.message;
            return status;
        } catch (error) {
            throw new DeezerApiError(`Error removing track from playlist ${playlistId}: ${(error as Error).message}`);
        }
    }
}
