import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
   auth: authReducer,
   form: formReducer,
});

export const store = createStore(
   rootReducer, 
   applyMiddleware(sagaMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootWatcher)