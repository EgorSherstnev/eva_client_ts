import { IUserLogin, IUserRegistration } from "../models/IUser";
import {
   LOGIN_ERROR,
   REGISTRATION_ERROR,
   SET_IS_AUTH,
   SET_USER,
   USER_CHECK_AUTH,
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

export const checkAuthUser = () => ({
   type: USER_CHECK_AUTH
})

/*--------ERRORS-------------*/

export const loginError = (errorMessage: string) => ({
   type:LOGIN_ERROR,
   payload: errorMessage,
})

export const registrationError = (errorMessage: string) => ({
   type:REGISTRATION_ERROR,
   payload: errorMessage,
})