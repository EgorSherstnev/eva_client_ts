import {
   SET_IS_AUTH,
   SET_USER,
} from '../actions/types';
import { IUser } from '../models/IUser';

const initialState = {
   isAuth: false,
   user: {} as IUser,
};

export default function authReducer(state = initialState, action: any) {
   switch (action.type) {
      case SET_IS_AUTH:
         return { ...state, isAuth:action.payload };
      case SET_USER:
         return { ...state, user:action.payload };
      default:
         return state;
   }
}
