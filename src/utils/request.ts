import axios, { AxiosResponse } from "axios";

export class Request {
    private static _makeRequest(method: string, url: string, data?: any): Promise<AxiosResponse> {
        return axios.request({
            method,
            url,
            data
        });
    }

    public static async get(url: string) {
        const response = await this._makeRequest('GET', url);
        return response.data;
    }

    public static async post(url: string, data: any) {
        const response = await this._makeRequest('POST', url, data);
        return response.data;
    }
}
