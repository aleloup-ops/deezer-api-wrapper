import { Artist } from './artist.model';

export interface Playlist {
    id: number;
    title: string;
    duration: number;
    public: boolean;
    isLovedTrack: boolean;
    collaborative: boolean;
    nbTracks: number;
    fans: number;
    link: string;
    picture: string;
    pictureSmall: string;
    pictureMedium: string;
    pictureBig: string;
    pictureXl: string;
    checksum: string;
    tracklist: string;
    creationDate: string;
    md5Image: string;
    pictureType: string;
    timeAdd: number;
    timeMod: number;
    creator: Artist;
    type: string;
}
