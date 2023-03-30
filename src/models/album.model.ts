import { Artist } from './artist.model';

export class Album {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    coverSmall: string;
    coverMedium: string;
    coverBig: string;
    coverXl: string;
    genreId: number;
    genres: string;
    label: string;
    nbTracks: number;
    duration: number;
    md5Image: string;
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

    constructor(
        id: number,
        title: string,
        upc: string,
        link: string,
        share: string,
        cover: string,
        coverSmall: string,
        coverMedium: string,
        coverBig: string,
        coverXl: string,
        genreId: number,
        genres: string,
        label: string,
        nbTracks: number,
        duration: number,
        md5Image: string,
        fans: number,
        releaseDate: string,
        recordType: string,
        available: boolean,
        alternative: Album,
        tracklist: string,
        explicitLyrics: boolean,
        explicitContentLyrics: number,
        explicitContentCover: number,
        contributors: Artist[],
        artist: Artist,
        type: string,
    ) {
        this.id = id;
        this.title = title;
        this.upc = upc;
        this.link = link;
        this.share = share;
        this.cover = cover;
        this.coverSmall = coverSmall;
        this.coverMedium = coverMedium;
        this.coverBig = coverBig;
        this.coverXl = coverXl;
        this.genreId = genreId;
        this.genres = genres;
        this.label = label;
        this.nbTracks = nbTracks;
        this.duration = duration;
        this.md5Image = md5Image;
        this.fans = fans;
        this.releaseDate = releaseDate;
        this.recordType = recordType;
        this.available = available;
        this.alternative = alternative;
        this.tracklist = tracklist;
        this.explicitLyrics = explicitLyrics;
        this.explicitContentLyrics = explicitContentLyrics;
        this.explicitContentCover = explicitContentCover;
        this.contributors = contributors;
        this.artist = artist;
        this.type = type;
    }
}
