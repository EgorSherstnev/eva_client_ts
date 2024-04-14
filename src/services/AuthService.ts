import { AxiosResponse } from "axios";
import { $api } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        try {
            return await $api.post<AuthResponse>('api/user/login', { email, password });
        } catch (error:any) {
            // if (error.response && error.response.status === 404) {
            //     throw new Error(error.response?.data?.message);  // Ваша обработка ошибки 404
            // }
            throw error;  // Перебросьте другие ошибки как есть
        }
    }

    static async registration(userName: string, company: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        console.log("User in service: ", userName, company, email, password)
        return $api.post<AuthResponse>('api/user/registration', {userName, company, email, password, role: 'USER'})
    }

    static async logout():Promise<void> {
        return $api.post('api/user/logout')
    }
} 