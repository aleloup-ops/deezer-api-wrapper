import { Artist } from './artist.model';

export class Playlist {
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

    constructor(
        id: number,
        title: string,
        duration: number,
        isPublic: boolean,
        isLovedTrack: boolean,
        collaborative: boolean,
        nbTracks: number,
        fans: number,
        link: string,
        picture: string,
        pictureSmall: string,
        pictureMedium: string,
        pictureBig: string,
        pictureXl: string,
        checksum: string,
        tracklist: string,
        creationDate: string,
        md5Image: string,
        pictureType: string,
        timeAdd: number,
        timeMod: number,
        creator: Artist,
        type: string,
    ) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.public = isPublic;
        this.isLovedTrack = isLovedTrack;
        this.collaborative = collaborative;
        this.nbTracks = nbTracks;
        this.fans = fans;
        this.link = link;
        this.picture = picture;
        this.pictureSmall = pictureSmall;
        this.pictureMedium = pictureMedium;
        this.pictureBig = pictureBig;
        this.pictureXl = pictureXl;
        this.checksum = checksum;
        this.tracklist = tracklist;
        this.creationDate = creationDate;
        this.md5Image = md5Image;
        this.pictureType = pictureType;
        this.timeAdd = timeAdd;
        this.timeMod = timeMod;
        this.creator = creator;
        this.type = type;
    }
}
