import axiosInstance from '../config/axios.instance';
import { Album, Artist, Playlist, Track, User } from '../models';
import { getAccessToken, setAccessToken, DeezerApiError } from '../utils';

export class DeezerArtists {
    public getTopTracks = async (artistId: number): Promise<Track[]> => {
        let tracks: Track[] = [];
        try {
            // Initial request
            const url = `/artist/${artistId}/top?access_token=${getAccessToken()}`;
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
        let albums: Album[] = [];
        try {
            // Initial request
            const url = `/artist/${artistId}/albums?access_token=${getAccessToken()}`;
            let response = await axiosInstance.get(url);

            const albumsData: any[] = response.data.data.data;

            // Add initial albums to the array
            albums = albumsData.map((album: any) => {
                const { artist, ...albumData } = album;
                return { artist: artist as Artist, ...albumData } as Album;
            });

            // Keep making requests until there is no more "next" key in the response
            while (response.data.next) {
                try {
                    // Make the next request
                    response = await axiosInstance.get(response.data.next);

                    // Add the new albums to the array
                    albums.push(...response.data.data);
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
            console.log(response.data.data)
            const fansData: any[] = response.data.data;
            let fans: User[] = [];

            try {
                fans = fansData.map((data) => {
                    const { ...fans } = data;
                    return { ...fans } as User;
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
          console.log(response.data)
          const artistsData: any[] = response.data.data.data;
          let artists: Artist[] = [];

          try {
              artists = artistsData.map((data) => {
                  const { ...artists } = data;
                  return { ...artists } as Artist;
              });
          } catch (error) {
              throw new DeezerApiError('Invalid data format returned from Deezer API : ' + (error as Error).message);
          }
          return artists;
      } catch (error) {
          throw new DeezerApiError(`Error getting related artists for artist ${artistId}: ${(error as Error).message}`);
      }
  }

  public async getRadio(artistId: number): Promise<Track[]> {
    try {
        const response = await axiosInstance.get(`/artist/${artistId}/radio?access_token=${getAccessToken()}`);
        console.log(response.data)
        const tracksData: any[] = response.data.data.data;
        let tracks: Track[] = [];

        try {
            tracks = tracksData.map((data) => {
                const { ...tracks } = data;
                return { ...tracks } as Track;
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
      let playlists: Playlist[] = [];
      try {
          // Initial request
          const url = `/artist/${artistId}/playlists?access_token=${getAccessToken()}`;
          let response = await axiosInstance.get(url);

          const playlistsData: any[] = response.data.data.data;

          // Add initial playlists to the array
          playlists = playlistsData.map((playlist: any) => {
              const { creator, ...playlistData } = playlist;
              return { creator: creator as Artist, ...playlistData } as Playlist;
          });

          // Keep making requests until there is no more "next" key in the response
          while (response.data.next) {
              try {
                  // Make the next request
                  response = await axiosInstance.get(response.data.next);

                  // Add the new playlists to the array
                  playlists.push(...response.data.data);
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
