import axiosInstance from '../config/axios.instance';
import { User, Album, Track } from '../models';
import { DeezerApiError, generateAlbum, generateTrack, generateUser, getAccessToken } from '../utils';

export class DeezerAlbums {
    public AddToFavourite = async (albumId: number[]): Promise<any> => {
        try {
            const response = await axiosInstance.post(
                `user/me/albums?access_token=${getAccessToken()}&album_id=${albumId}`,
            );
            return response.status;
        } catch (error) {
            throw new DeezerApiError(`Error adding album to favourite: ${(error as Error).message}`);
        }
    };

    public removeFromFavourite = async (albumId: number[]): Promise<any> => {
        try {
            const response = await axiosInstance.delete(
                `user/me/albums?access_token=${getAccessToken()}&album_id=${albumId}`,
            );
            return response.status;
        } catch (error) {
            throw new DeezerApiError(`Error removing album from favourite: ${(error as Error).message}`);
        }
    };

    public getFans = async (albumId: number): Promise<User[]> => {
        try {
            const response = await axiosInstance.get(`albums/${albumId}/fans?access_token=${getAccessToken()}`);
            const fansData: any[] = response.data.data;
            const fans: User[] = [];

            try {
                fansData.map((data) => {
                    fans.push(generateUser(data));
                });
            } catch (error) {
                throw new DeezerApiError(`Invalid fans data`);
            }
            return fans;
        } catch (error) {
            throw new DeezerApiError(`Error getting fans: ${(error as Error).message}`);
        }
    };

    public getTracks = async (albumId: number): Promise<Track[]> => {
        try {
            const response = await axiosInstance.get(`album/${albumId}/tracks?access_token=${getAccessToken()}`);
            const tracksData: any[] = response.data.data;
            const tracks: Track[] = [];
            try {
                tracksData.map((data) => {
                    tracks.push(generateTrack(data));
                });
            } catch (error) {
                throw new DeezerApiError(`Invalid tracks data`);
            }
            return tracks;
        } catch (error) {
            throw new DeezerApiError(`Error getting tracks: ${(error as Error).message}`);
        }
    };
}
