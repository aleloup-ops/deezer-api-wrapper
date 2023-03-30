import axiosInstance from '../config/axios.instance';
import { Artist, Playlist, Track, User } from '../models';
import { DeezerApiError, generatePlaylist, generateTrack, generateUser, getAccessToken } from '../utils';

export class DeezerPlaylists {
    public async getPlaylists(): Promise<Playlist[]> {
        const accessToken = getAccessToken();
        try {
            const response = await axiosInstance.get(`user/me/playlists?access_token=${accessToken}`);
            const playlistsData: any[] = response.data.data;
            const playlists: Playlist[] = [];

            try {
                playlistsData.map((data) => {
                    playlists.push(generatePlaylist(data));
                });
            } catch (error) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
            }

            if (!Array.isArray(playlists)) {
                throw new DeezerApiError('Invalid data format returned from Deezer API : ');
            }
            return playlists;
        } catch (error) {
            throw new DeezerApiError("Failed to fetch user's playlists : " + (error as Error).message);
        }
    }

    public async getTracklist(playlistId: number): Promise<Track[]> {
        const tracks: Track[] = [];

        try {
            // Initial request
            const url = `playlist/${playlistId}/tracks?access_token=${getAccessToken()}`;
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
                    tracks.push(generateTrack(response.data.data));
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
            const fansData: any[] = response.data.data;
            const fans: User[] = [];
            fansData.map((data) => {
                fans.push(generateUser(data));
            });
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
