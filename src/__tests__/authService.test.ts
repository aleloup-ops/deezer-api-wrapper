import axiosInstance from '../config/axios.instance';
import MockAdapter from 'axios-mock-adapter';
import { DeezerAuth } from '../services/auth.service';

const mockAxios = new MockAdapter(axiosInstance);

const appId: string = '123456';
const secretId: string = '123456';
const code: string = '123456';
const redirectUri: string = 'http://localhost:3000';

describe('DeezerAuth.createAccessToken', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return an access token', async () => {
        const token: string = '123456';

        mockAxios
            .onGet(`oauth/access_token.php?app_id=${appId}&secret=${secretId}&code=${code}&output=json`)
            .reply(200, {
                access_token: token,
            });

        const deezerAuth = new DeezerAuth();
        const accessToken = await deezerAuth.createAccessToken(appId, secretId, code);

        expect(accessToken).toBe(token);
    });
});

describe('DeezerAuth.generateAuthenticationLink', () => {
    it('should return a Deezer authentication link', () => {
        const deezerAuth = new DeezerAuth();
        const link = deezerAuth.generateAuthenticationLink(appId, redirectUri);

        expect(link).toBe(
            `https://connect.deezer.com/oauth/auth.php?app_id=${appId}&redirect_uri=${redirectUri}&response_type=token&scope=basic_access,email,listening_history,manage_library,delete_library,manage_community`,
        );
    });
});
