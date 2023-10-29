import { IUserLogin, IUserRegistration } from "../models/IUser";
import {
   SET_IS_AUTH,
   SET_USER,
   USER_LOGIN,
   USER_LOGOUT,
   USER_REGISTRATION
} from "./types"

export const setIsAuth = (bool: any) => ({
   type: SET_IS_AUTH,
   payload: bool,
});

export const setUser = (user: any) => ({
   type: SET_USER,
   payload: user,
})

/*--------SAGA-------------*/

export const createUser = (user:IUserRegistration) => ({
   type: USER_REGISTRATION,
   payload: user,
})

export const loginUser = (user:IUserLogin) => ({
   type: USER_LOGIN,
   payload: user,
})

export const logoutUser = () => ({
   type: USER_LOGOUT
})