import {
   put,
   takeEvery,
   call
} from "redux-saga/effects"
import { loginError, setIsAuth, setUser } from "../actions";
import { IAction } from "../models/IAction";
import { IUser, IUserLogin, IUserRegistration } from "../models/IUser";
import { USER_CHECK_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTRATION } from "../actions/types";
import AuthService from "../services/AuthService";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

function* addNewUserWorker(action: IAction): Generator<any, void, any> {
   try {
      console.log('action.payload in saga: ',action.payload)
      const {userName, company, email, password} = action.payload as IUserRegistration;
      console.log("Received user in saga: ",userName, company, email, password);
      const response = yield call(AuthService.registration, userName, company, email, password);
      console.log("Received data from server:", response);
      localStorage.setItem('token', response.data.accessToken)
      yield put(setIsAuth(true));
      yield put(setUser(response.data.user));
   } catch (error: any) {
      console.error("Error when adding a user:", error.response?.data?.message)
   }
}

function* loginUserWorker(action: IAction): Generator<any, void, any> {
   try {
      console.log('action payload in saga: ', action.payload)
      const {email, password} = action.payload as IUserLogin;
      console.log("Received user in saga: ", email, password);
      const response = yield call(AuthService.login, email, password);
      console.log("Received data from server:", response);
      localStorage.setItem('token', response.data.accessToken)
      yield put(setIsAuth(true));
      yield put(setUser(response.data.user));
      return response;
   } catch (error: any) {
      console.error("Error when login a user:", error.response?.data?.message)
      yield put(loginError(error.response?.data?.message));
      throw error;
   }
}

function* logoutUserWorker(): Generator<any, void, any> {
   try {
      const response = yield call(AuthService.logout);
      localStorage.removeItem('token')
      yield put(setIsAuth(false));
      yield put(setUser({} as IUser));
   } catch (error: any) {
      console.error("Error when logout a user:", error.response?.data?.message)
   }
}

function* checkAuthWorker() {
   try {
      const response: AxiosResponse<AuthResponse> = yield call(axios.get, `${process.env.REACT_APP_API_URL}api/user/refresh`, {withCredentials: true})
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      yield put(setIsAuth(true));
      yield put(setUser(response.data.user));
   } catch (error: any) {
      console.log(error.response?.data?.message)
   }
}

export function* addNewUserWatcher() {
   yield takeEvery(USER_REGISTRATION, addNewUserWorker)
}

export function* loginUserWatcher() {
   yield takeEvery(USER_LOGIN, loginUserWorker)
}

export function* logoutUserWatcher() {
   yield takeEvery(USER_LOGOUT, logoutUserWorker)
}

export function* checkAuthWatcher() {
   yield takeEvery(USER_CHECK_AUTH, checkAuthWorker)
}