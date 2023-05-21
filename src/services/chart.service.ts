import axiosInstance from '../config/axios.instance';
import { Album, Artist, Playlist, Track } from '../models';
import { DeezerApiError, extractAlbumsData, extractArtistsData, extractPlaylistsData, extractTracksData, getAccessToken } from '../utils';

export class DeezerChart {
  public async getTopTracks(): Promise<Track[]> {
    try {
        const response = await axiosInstance.get(`charts/0/tracks?access_token=${getAccessToken()}`);
        return extractTracksData(response.data.data, `Invalid tracks data`);
    } catch (error) {
        throw new DeezerApiError(`Error getting tracks charts: ${(error as Error).message}`);
    }
  }

  public async getTopAlbums(): Promise<Album[]> {
    try {
      const response = await axiosInstance.get(`charts/0/albums?access_token=${getAccessToken()}`);
      return extractAlbumsData(response.data.data, `Invalid albums data`);
    } catch (error) {
      throw new DeezerApiError(`Error getting albums charts: ${(error as Error).message}`);
    }
  }

  public async getTopArtists(): Promise<Artist[]> {
    try {
      const response = await axiosInstance.get(`charts/0/artists?access_token=${getAccessToken()}`);
      return extractArtistsData(response.data.data, `Invalid artists data`);
    } catch (error) {
      throw new DeezerApiError(`Error getting artists charts: ${(error as Error).message}`);
    }
  }

  public async getTopPlaylists(): Promise<Playlist[]> {
    try {
      const response = await axiosInstance.get(`charts/0/playlists?access_token=${getAccessToken()}`);
      return extractPlaylistsData(response.data.data, `Invalid playlists data`);
    } catch (error) {
      throw new DeezerApiError(`Error getting playlists charts: ${(error as Error).message}`);
    }
  }
}