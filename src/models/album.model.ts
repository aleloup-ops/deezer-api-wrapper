import { Artist } from './artist.model';

export interface Album {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    coverMail: string;
    coverMedium: string;
    coverBig: string;
    coverXl: string;
    genreId: number;
    genres: string;
    label: string;
    nbTracks: number;
    duration: number;
    fans: number;
    releaseDate: string;
    recordType: string;
    available: boolean;
    alternative: Album;
    tracklist: string;
    explicitLyrics: boolean;
    explicitContentLyrics: number;
    explicitContentCover: number;
    contributors: any[];
    artist: Artist;
    type: string;
}
