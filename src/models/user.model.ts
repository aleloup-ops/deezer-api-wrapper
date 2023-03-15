export class User {
    id: number;
    name: string;
    lastname: string;
    firstname: string;
    email: string;
    status: number;
    birthday: string;
    inscription_date: string;
    gender: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    country: string;
    lang: string;
    is_kid: boolean;
    explicit_content_level: number;
    explicit_content_levels_available: number[];
    tracklist: string;

    constructor(
        id: number,
        name: string,
        lastname: string,
        firstname: string,
        email: string,
        status: number,
        birthday: string,
        inscription_date: string,
        gender: string,
        link: string,
        picture: string,
        picture_small: string,
        picture_medium: string,
        picture_big: string,
        picture_xl: string,
        country: string,
        lang: string,
        is_kid: boolean,
        explicit_content_level: number,
        explicit_content_levels_available: number[],
        tracklist: string,
    ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.status = status;
        this.birthday = birthday;
        this.inscription_date = inscription_date;
        this.gender = gender;
        this.link = link;
        this.picture = picture;
        this.picture_small = picture_small;
        this.picture_medium = picture_medium;
        this.picture_big = picture_big;
        this.picture_xl = picture_xl;
        this.country = country;
        this.lang = lang;
        this.is_kid = is_kid;
        this.explicit_content_level = explicit_content_level;
        this.explicit_content_levels_available = explicit_content_levels_available;
        this.tracklist = tracklist;
    }
}
