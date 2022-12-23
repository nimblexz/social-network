import React from "react";


type SetUserDataActionType = ReturnType<typeof setUserData>
type ActionType = SetUserDataActionType

export const setUserData = (email: string, id: string, login: string) => {
    debugger
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


export const authReducer = (state: authType = initialState, action: ActionType): authType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            debugger
            return {
                ...state,data:action.data,isAuth:true

            }

        default:
            return state
    }
}