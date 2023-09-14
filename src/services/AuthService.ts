import { $api } from "../http";

export default class AuthService {
    static async login(email: string, password: string) {
        return $api.post('api/user/login', {email, password})
    }

    static async registration(userName: string, company: string, email: string, password: string) {
        return $api.post('api/user/registration', {userName, company, email, password, role: 'USER'})
    }

    static async logout() {
        return $api.post('api/user/logout')
    }
}