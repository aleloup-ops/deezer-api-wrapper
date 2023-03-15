import { deezerApiWrapper, getPlaylist } from '../index';
test('deezerApiWrapper', () => {
    expect(deezerApiWrapper('Carl')).toBe('Hello Carl');
});

test('getPlaylist', () => {
    expect(getPlaylist('Carl')).toBe('Hello Carl');
});
