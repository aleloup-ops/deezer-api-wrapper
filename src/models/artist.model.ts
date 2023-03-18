export class Artist {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    pictureSmall: string;
    pictureMedium: string;
    pictureBig: string;
    pictureXl: string;
    nbAlbum: number;
    nbFan: number;
    radio: boolean;
    tracklist: string;

    constructor(
        id: number,
        name: string,
        link: string,
        share: string,
        picture: string,
        pictureSmall: string,
        pictureMedium: string,
        pictureBig: string,
        pictureXl: string,
        nbAlbum: number,
        nbFan: number,
        radio: boolean,
        tracklist: string,
    ) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.share = share;
        this.picture = picture;
        this.pictureSmall = pictureSmall;
        this.pictureMedium = pictureMedium;
        this.pictureBig = pictureBig;
        this.pictureXl = pictureXl;
        this.nbAlbum = nbAlbum;
        this.nbFan = nbFan;
        this.radio = radio;
        this.tracklist = tracklist;
    }
}
