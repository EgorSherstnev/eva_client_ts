import { $api } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (userName: string, company: string, email: string, password: string) => {
   const {data} = await $api.post('api/user/registration', {userName, company, email, password, role: 'USER'}) //registration ROLE!!!
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}

export const login = async (email: string, password: string) => {
   const {data} = await $api.post('api/user/login', {email, password})
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}

export const check = async () => {
   const {data} = await $api.get('api/user/auth', )
   localStorage.setItem('token', data.token)
   return jwt_decode(data.token)
}

export const resetPassword = async ( email: string ) => {
   const {data} = await $api.post('api/user/reset-password', {email})
   return (data)
}

export const updatePassword = async ( password: string, activationLink: string) => {
   const { data } = await $api.post('api/user/update-password', {password, activationLink});
   return(data);
}

// export const registration = async (userName, company, email, password) => {
//    const {data} = await $host.post('api/user/registration', {userName, company, email, password, role: 'USER'}) //registration ROLE!!!
//    localStorage.setItem('token', data.token)
//    return jwt_decode(data.token)
// }

// export const login = async (email, password) => {
//    const {data} = await $host.post('api/user/login', {email, password})
//    localStorage.setItem('token', data.token)
//    return jwt_decode(data.token)
// }

// export const check = async () => {
//    const {data} = await $authHost.get('api/user/auth', )
//    localStorage.setItem('token', data.token)
//    return jwt_decode(data.token)
// }