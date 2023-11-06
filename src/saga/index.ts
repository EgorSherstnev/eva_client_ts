import { all } from "redux-saga/effects";
import { 
   addNewUserWatcher, 
   checkAuthWatcher, 
   loginUserWatcher, 
   logoutUserWatcher 
} from "./userSaga";

export function* rootWatcher() {
   yield all([
      addNewUserWatcher(),
      loginUserWatcher(),
      logoutUserWatcher(),
      checkAuthWatcher(),
   ])
}