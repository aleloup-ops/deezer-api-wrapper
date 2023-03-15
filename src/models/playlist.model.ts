import { Track } from './track.model';
import { User } from './user.model';

export class Playlist {
    id: number;
    title: string;
    description: string;
    duration: number;
    public: boolean;
    is_loved_track: boolean;
    collaborative: boolean;
    rating: number;
    fans: number;
    release_date: string;
    available: boolean;
    tracklist: string;
    creation_date: string;
    creator: User;
    tracks: Track[];

    constructor(
        id: number,
        title: string,
        description: string,
        duration: number,
        is_public: boolean,
        is_loved_track: boolean,
        collaborative: boolean,
        rating: number,
        fans: number,
        release_date: string,
        available: boolean,
        tracklist: string,
        creation_date: string,
        creator: User,
        tracks: Track[],
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.public = is_public;
        this.is_loved_track = is_loved_track;
        this.collaborative = collaborative;
        this.rating = rating;
        this.fans = fans;
        this.release_date = release_date;
        this.available = available;
        this.tracklist = tracklist;
        this.creation_date = creation_date;
        this.creator = creator;
        this.tracks = tracks;
    }
}
