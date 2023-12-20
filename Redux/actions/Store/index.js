import { userReducer } from "../Reducer";
import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
const persistConfig = {key: "root", storage};
const persistedReducer = persistReducer(
persistConfig, combineReducers({
    user: userReducer
})
);
export const store = createStore(persistedReducer, applyMiddleware());
export const persistManager = persistStore(store);
