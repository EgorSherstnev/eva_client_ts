import { all } from "redux-saga/effects";
import { addNewUserWatcher } from "./userSaga";

export function* rootWatcher() {
   yield all([
      addNewUserWatcher
   ])
}