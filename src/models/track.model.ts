import { Album } from './album.model';
import { Artist } from './artist.model';

export class Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    unseen: boolean;
    isrc: string;
    link: string;
    share: string;
    duration: number;
    track_position: number;
    disk_number: number;
    rank: number;
    release_date: string;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    bpm: number;
    gain: number;
    available_countries: string[];
    alternative: Track;
    contributors: any[];
    md5_image: string;
    artist: Artist;
    album: Album;

    constructor(
        id: number,
        readable: boolean,
        title: string,
        title_short: string,
        title_version: string,
        unseen: boolean,
        isrc: string,
        link: string,
        share: string,
        duration: number,
        track_position: number,
        disk_number: number,
        rank: number,
        release_date: string,
        explicit_lyrics: boolean,
        explicit_content_lyrics: number,
        explicit_content_cover: number,
        preview: string,
        bpm: number,
        gain: number,
        available_countries: string[],
        alternative: Track,
        contributors: any[],
        md5_image: string,
        artist: Artist,
        album: Album,
    ) {
        this.id = id;
        this.readable = readable;
        this.title = title;
        this.title_short = title_short;
        this.title_version = title_version;
        this.unseen = unseen;
        this.isrc = isrc;
        this.link = link;
        this.share = share;
        this.duration = duration;
        this.track_position = track_position;
        this.disk_number = disk_number;
        this.rank = rank;
        this.release_date = release_date;
        this.explicit_lyrics = explicit_lyrics;
        this.explicit_content_lyrics = explicit_content_lyrics;
        this.explicit_content_cover = explicit_content_cover;
        this.preview = preview;
        this.bpm = bpm;
        this.gain = gain;
        this.available_countries = available_countries;
        this.alternative = alternative;
        this.contributors = contributors;
        this.md5_image = md5_image;
        this.artist = artist;
        this.album = album;
    }
}
