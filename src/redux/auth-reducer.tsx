import {authAPI} from "../api/api";


type SetUserDataActionType = ReturnType<typeof setUserData>
type ActionType = SetUserDataActionType

export const setUserData = (email: string | null, id: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
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


export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data
            dispatch(setUserData(email, id, login, true))
        }
    })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}
export const authReducer = (state: authType = initialState, action: ActionType): authType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state, ...action.payload
            }

        default:
            return state
    }
}
