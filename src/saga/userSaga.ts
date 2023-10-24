import {
   put,
   takeEvery,
   call
} from "redux-saga/effects"
import { registration } from "../http/userAPI";
import { setUser } from "../actions";
import { IAction } from "../models/IAction";
import { IUserRegistration } from "../models/IUser";
import { USER_REGISTRATION } from "../actions/types";

function* addNewUserWorker(action: IAction): Generator<any, void, any> {
   try {
      console.log('action.payload in saga: ',action.payload)
      const {userName, company, email, password} = action.payload as IUserRegistration;;
      console.log("Received user in saga: ",userName, company, email, password);
      const data = yield call(registration, userName, company, email, password);
      console.log("Received data from server:", data);
      yield put(setUser(data))
   } catch (error) {
      console.error("Error when adding a user:", error)
   }
}


export function* addNewUserWatcher() {
   yield takeEvery(USER_REGISTRATION, addNewUserWorker)
}