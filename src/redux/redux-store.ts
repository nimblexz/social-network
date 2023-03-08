import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

export let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form:formReducer

})
export let store = createStore(reducer,applyMiddleware(thunk))
export type AppStateType=ReturnType<typeof reducer>







