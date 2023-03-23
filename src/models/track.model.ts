import { Album } from './album.model';
import { Artist } from './artist.model';

export class Track {
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
    timeAdd: number;
    artist: Artist;
    album: Album;
    type: string;

    constructor(
        id: number,
        readable: boolean,
        title: string,
        titleShort: string,
        titleVersion: string,
        link: string,
        duration: number,
        rank: number,
        explicitLyrics: boolean,
        explicitContentLyrics: number,
        explicitContentCover: number,
        preview: string,
        md5Image: string,
        timeAdd: number,
        artist: Artist,
        album: Album,
        type: string,
    ) {
        this.id = id;
        this.readable = readable;
        this.title = title;
        this.titleShort = titleShort;
        this.titleVersion = titleVersion;
        this.link = link;
        this.duration = duration;
        this.rank = rank;
        this.explicitLyrics = explicitLyrics;
        this.explicitContentLyrics = explicitContentLyrics;
        this.explicitContentCover = explicitContentCover;
        this.preview = preview;
        this.md5Image = md5Image;
        this.timeAdd = timeAdd;
        this.artist = artist;
        this.album = album;
        this.type = type;
    }
}
