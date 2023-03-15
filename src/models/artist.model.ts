export class Artist {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: number;
    nb_fan: number;
    radio: boolean;
    tracklist: string;

    constructor(
        id: number,
        name: string,
        link: string,
        share: string,
        picture: string,
        picture_small: string,
        picture_medium: string,
        picture_big: string,
        picture_xl: string,
        nb_album: number,
        nb_fan: number,
        radio: boolean,
        tracklist: string,
    ) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.share = share;
        this.picture = picture;
        this.picture_small = picture_small;
        this.picture_medium = picture_medium;
        this.picture_big = picture_big;
        this.picture_xl = picture_xl;
        this.nb_album = nb_album;
        this.nb_fan = nb_fan;
        this.radio = radio;
        this.tracklist = tracklist;
    }
}
