import axiosInstance from '../config/axios.instance';
import { Playlist, Track } from '../models';
import { getAccessToken } from '../utils/credentials';

export class DeezerPlaylists {
    public async getPlaylists(): Promise<Promise<Playlist[]> | any> {
        const accessToken = getAccessToken();
        const response = await axiosInstance.get(`user/me/playlists?access_token=${accessToken}`);
        const playlistsData: any[] = response.data.data;
        const playlists: Playlist[] = playlistsData.map(
            (playlist: any) =>
                new Playlist(
                    playlist.id,
                    playlist.title,
                    playlist.duration,
                    playlist.public,
                    playlist.is_loved_track,
                    playlist.collaborative,
                    playlist.nb_tracks,
                    playlist.fans,
                    playlist.link,
                    playlist.picture,
                    playlist.picture_small,
                    playlist.picture_medium,
                    playlist.picture_big,
                    playlist.picture_xl,
                    playlist.checksum,
                    playlist.tracklist,
                    playlist.creation_date,
                    playlist.md5_image,
                    playlist.picture_type,
                    playlist.time_add,
                    playlist.time_mod,
                    playlist.creator,
                    playlist.type,
                ),
        );
        return playlists;
    }

    public async getTracklist(playlistId: number): Promise<Track[]> {
        const tracks: Track[] = [];

        // Initial request
        const url = `https://api.deezer.com/playlist/${playlistId}/tracks?access_token=${getAccessToken()}`;
        let response = await axiosInstance.get(url);

        // Add initial tracks to the array
        tracks.push(...response.data.data);

        // Keep making requests until there is no more "next" key in the response
        while (response.data.next) {
            // Make the next request
            response = await axiosInstance.get(response.data.next);

            // Add the new tracks to the array
            tracks.push(...response.data.data);
        }

        return tracks;
    }
}
