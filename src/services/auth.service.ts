import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios.instance';
import { setAccessToken, getAccessToken } from '../utils/credentials';

export class DeezerAuth {
    public async createAccessToken(appId: string, secretId: string, code: string) {
        const query: string = `app_id=${appId}&secret=${secretId}&code=${code}`;

        const response = await axiosInstance.get(`oauth/access_token.php?${query}`, {
            baseURL: 'https://connect.deezer.com/',
        });
        const accessToken: string = response.data.split('&')[0].split('=')[1];
        setAccessToken(accessToken);
        return getAccessToken();
    }

    public generateAuthenticationLink = (appId: string, redirectUri: string, perm?: string) => {
        const query: string = `app_id=${appId}&redirect_uri=${redirectUri}&perms=${perm}`;

        return `https://connect.deezer.com/oauth/auth.php?${query}`;
    };
}
