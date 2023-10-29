import { all } from "redux-saga/effects";
import { addNewUserWatcher, loginUserWatcher, logoutUserWatcher } from "./userSaga";

export function* rootWatcher() {
   yield all([
      addNewUserWatcher(),
      loginUserWatcher(),
      logoutUserWatcher(),
   ])
}