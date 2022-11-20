import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer
})
export let store = createStore(reducers)
export type ReducerType=typeof reducers
export type AppStateType=ReturnType<ReducerType>
export type StateType=ReturnType<typeof store.getState>



//export type AppStateType=ReturnType<typeof reducers>



