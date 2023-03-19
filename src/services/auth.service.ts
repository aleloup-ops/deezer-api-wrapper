import { AxiosResponse } from 'axios';
import axiosInstance from '../config/axios.instance';
import { DeezerApiError, getAccessToken, setAccessToken } from '../utils';

export class DeezerAuth {
    public async createAccessToken(appId: string, secretId: string, code: string) {
        const query: string = `app_id=${appId}&secret=${secretId}&code=${code}&output=json`;

        const response = await axiosInstance.get(`oauth/access_token.php?${query}`, {
            baseURL: 'https://connect.deezer.com/',
        });
        const accessToken: string = response.data.access_token;
        setAccessToken(accessToken);
        return getAccessToken();
    }

    public generateAuthenticationLink = (appId: string, redirectUri: string, responseType?: string, perm?: string) => {
        const scope: string[] = [
            'basic_access',
            'email',
            'listening_history',
            'manage_library',
            'delete_library',
            'manage_community',
        ];
        const query: string = `app_id=${appId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope.join(
            ',',
        )}`;

        return encodeURI(`https://connect.deezer.com/oauth/auth.php?${query}`);
    };
}
