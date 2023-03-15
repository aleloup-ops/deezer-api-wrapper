import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios.instance';
import { setAccessToken, getAccessToken } from '../utils/credentials';

export class DeezerAuth {
    public createAccessToken = (appId: string, secretId: string, code: string) => {
        const query: string = `app_id=${appId}&secret=${secretId}&code=${code}`;

        return axiosInstance
            .get(`oauth/access_token.php?${query}`)
            .then((response: AxiosResponse) => {
                const expiresIn: number = parseInt(response.data.split('&')[1].split('=')[1], 10);
                const access_token: string = response.data.split('&')[0].split('=')[1];
                setAccessToken(access_token);
                return getAccessToken();
            })
            .catch((error: any) => {
                return error;
            });
    };

    public generateAuthenticationLink = (appId: string, redirectUri: string, perm?: string) => {
        const query: string = `app_id=${appId}&redirect_uri=${redirectUri}&perms=${perm}`;

        return `https://connect.deezer.com/oauth/auth.php?${query}`;
    };
}
