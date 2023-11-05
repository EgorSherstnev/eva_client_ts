import { AxiosResponse } from "axios";
import { $api } from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {

        return $api.post<AuthResponse>('api/user/login', {email, password})
    }

    static async registration(userName: string, company: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        console.log("User in service: ", userName, company, email, password)
        return $api.post<AuthResponse>('api/user/registration', {userName, company, email, password, role: 'USER'})
    }

    static async logout():Promise<void> {
        return $api.post('api/user/logout')
    }
} 