import { Album } from './album.model';
import { Artist } from './artist.model';

export interface Track {
    id: number;
    readable: boolean;
    title: string;
    titleShort: string;
    titleVersion: string;
    link: string;
    duration: number;
    rank: number;
    explicitLyrics: boolean;
    explicitContentLyrics: number;
    explicitContentCover: number;
    preview: string;
    md5Image: string;
    artist: Artist;
    album: Album;
    type: string;
}
