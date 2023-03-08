import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";


type SetUserDataActionType = ReturnType<typeof setUserData>
type ActionType = SetUserDataActionType

export const setUserData = (email: string | null, id: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'social-network/auth/SET-USER-DATA',
        payload: {
            email,
            id,
            login,
            isAuth
        }
    } as const
}
type authType = {
    email: any
    id: any
    login: any
    isAuth: boolean
}
const initialState: authType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setUserData(email, id, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const authReducer = (state: authType = initialState, action: ActionType): authType => {

    switch (action.type) {
        case 'social-network/auth/SET-USER-DATA':
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}
