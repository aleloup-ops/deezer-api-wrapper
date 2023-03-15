import { Artist } from './artist.model';

export class Album {
    id: number;
    title: string;
    upc: string;
    link: string;
    share: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    genre_id: number;
    genres: string;
    label: string;
    nb_tracks: number;
    duration: number;
    fans: number;
    release_date: string;
    record_type: string;
    available: boolean;
    alternative: Album;
    tracklist: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
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
        cover_small: string,
        cover_medium: string,
        cover_big: string,
        cover_xl: string,
        genre_id: number,
        genres: string,
        label: string,
        nb_tracks: number,
        duration: number,
        fans: number,
        release_date: string,
        record_type: string,
        available: boolean,
        alternative: Album,
        tracklist: string,
        explicit_lyrics: boolean,
        explicit_content_lyrics: number,
        explicit_content_cover: number,
        contributors: any[],
        artist: Artist,
        type: string,
    ) {
        this.id = id;
        this.title = title;
        this.upc = upc;
        this.link = link;
        this.share = share;
        this.cover = cover;
        this.cover_small = cover_small;
        this.cover_medium = cover_medium;
        this.cover_big = cover_big;
        this.cover_xl = cover_xl;
        this.genre_id = genre_id;
        this.genres = genres;
        this.label = label;
        this.nb_tracks = nb_tracks;
        this.duration = duration;
        this.fans = fans;
        this.release_date = release_date;
        this.record_type = record_type;
        this.available = available;
        this.alternative = alternative;
        this.tracklist = tracklist;
        this.explicit_lyrics = explicit_lyrics;
        this.explicit_content_lyrics = explicit_content_lyrics;
        this.explicit_content_cover = explicit_content_cover;
        this.contributors = contributors;
        this.artist = artist;
        this.type = type;
    }
}
