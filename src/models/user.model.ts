export class User {
    id: number;
    name: string;
    lastname: string;
    firstname: string;
    email: string;
    status: number;
    birthday: string;
    inscriptionDate: string;
    gender: string;
    link: string;
    picture: string;
    pictureSmall: string;
    pictureMedium: string;
    pictureBig: string;
    pictureXl: string;
    country: string;
    lang: string;
    isKid: boolean;
    explicitContentLevel: number;
    explicitContentLevelsAvailable: number[];
    tracklist: string;

    constructor(
        id: number,
        name: string,
        lastname: string,
        firstname: string,
        email: string,
        status: number,
        birthday: string,
        inscriptionDate: string,
        gender: string,
        link: string,
        picture: string,
        pictureSmall: string,
        pictureMedium: string,
        pictureBig: string,
        pictureXl: string,
        country: string,
        lang: string,
        isKid: boolean,
        explicitContentLevel: number,
        explicitContentLevelsAvailable: number[],
        tracklist: string,
    ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.status = status;
        this.birthday = birthday;
        this.inscriptionDate = inscriptionDate;
        this.gender = gender;
        this.link = link;
        this.picture = picture;
        this.pictureSmall = pictureSmall;
        this.pictureMedium = pictureMedium;
        this.pictureBig = pictureBig;
        this.pictureXl = pictureXl;
        this.country = country;
        this.lang = lang;
        this.isKid = isKid;
        this.explicitContentLevel = explicitContentLevel;
        this.explicitContentLevelsAvailable = explicitContentLevelsAvailable;
        this.tracklist = tracklist;
    }
}
