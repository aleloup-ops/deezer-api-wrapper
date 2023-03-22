export interface User {
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
}
