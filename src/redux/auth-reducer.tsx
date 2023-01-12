import React from "react";
import {authAPI} from "../api/api";


type SetUserDataActionType = ReturnType<typeof setUserData>
type ActionType = SetUserDataActionType

export const setUserData = (email: string, id: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            email,
            id,
            login
        }

    } as const
}
type authType = {
    data: {
        email: any
        id: any
        login: any
    },
    isAuth:boolean
}
const initialState: authType = {
    data: {
        email: null,
        id: null,
        login: null
    },
    isAuth:false
}


export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data
            dispatch(setUserData(email, id, login))
        }
    })
}
export const authReducer = (state: authType = initialState, action: ActionType): authType => {

    switch (action.type) {
        case 'SET-USER-DATA':

            return {
                ...state,data:action.data,isAuth:true

            }

        default:
            return state
    }
}
