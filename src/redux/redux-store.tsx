import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer
})
export let store = createStore(reducer,applyMiddleware(thunk))
export type ReducerType=typeof reducer
export type AppStateType=ReturnType<ReducerType>
export type StateType=ReturnType<typeof store.getState>


//export type AppStateType=ReturnType<typeof reducers>



