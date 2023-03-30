import { Album, Artist, Playlist, Track, User } from '../models';

export const generateAlbum = (albumData: any): Album => {
    return new Album(
        albumData.id,
        albumData.title,
        albumData.upc,
        albumData.link,
        albumData.share,
        albumData.cover,
        albumData.cover_small,
        albumData.cover_medium,
        albumData.cover_big,
        albumData.cover_xl,
        albumData.genre_id,
        albumData.genres,
        albumData.label,
        albumData.nb_tracks,
        albumData.duration,
        albumData.md5_image,
        albumData.fans,
        albumData.release_date,
        albumData.record_type,
        albumData.available,
        albumData.alternative,
        albumData.tracklist,
        albumData.explicit_lyrics,
        albumData.explicit_content_lyrics,
        albumData.explicit_content_cover,
        albumData.contributors,
        albumData.artist,
        albumData.type,
    );
};

export const generateArtist = (artistData: any): Artist => {
    return new Artist(
        artistData.id,
        artistData.name,
        artistData.link,
        artistData.share,
        artistData.picture,
        artistData.picture_small,
        artistData.picture_medium,
        artistData.picture_big,
        artistData.picture_xl,
        artistData.nb_album,
        artistData.nb_fan,
        artistData.radio,
        artistData.tracklist,
    );
};

export const generatePlaylist = (playlistData: any): Playlist => {
    return new Playlist(
        playlistData.id,
        playlistData.title,
        playlistData.duration,
        playlistData.public,
        playlistData.is_loved_track,
        playlistData.collaborative,
        playlistData.nb_tracks,
        playlistData.fans,
        playlistData.link,
        playlistData.picture,
        playlistData.picture_small,
        playlistData.picture_medium,
        playlistData.picture_big,
        playlistData.picture_xl,
        playlistData.checksum,
        playlistData.tracklist,
        playlistData.creation_date,
        playlistData.md5_image,
        playlistData.picture_type,
        playlistData.time_add,
        playlistData.time_mod,
        playlistData.creator,
        playlistData.type,
    );
};

export const generateTrack = (trackData: any): Track => {
    return new Track(
        trackData.id,
        trackData.readable,
        trackData.title,
        trackData.title_short,
        trackData.title_version,
        trackData.link,
        trackData.duration,
        trackData.rank,
        trackData.explicit_lyrics,
        trackData.explicit_content_lyrics,
        trackData.explicit_content_cover,
        trackData.preview,
        trackData.md5_image,
        trackData.time_add,
        trackData.artist,
        trackData.album,
        trackData.type,
    );
};

export const generateUser = (userData: any): User => {
    return new User(
        userData.id,
        userData.name,
        userData.lastname,
        userData.firstname,
        userData.email,
        userData.status,
        userData.birthday,
        userData.inscription_date,
        userData.gender,
        userData.link,
        userData.picture,
        userData.picture_small,
        userData.picture_medium,
        userData.picture_big,
        userData.picture_xl,
        userData.country,
        userData.lang,
        userData.is_kid,
        userData.explicit_content_level,
        userData.explicit_content_levels_available,
        userData.tracklist,
        userData.type,
    );
};
