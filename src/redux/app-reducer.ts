import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";

type appType = {
    initialized: boolean
}
type setInitializedActionType = ReturnType<typeof initializedSuccess>
type ActionType = setInitializedActionType
const initialState: appType = {
    initialized: false
}
export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED'
    } as const
}
export const initializeApp = () => async (dispatch: Dispatch<any>) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}
export const appReducer = (state: appType = initialState, action: ActionType): appType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state, initialized: true
            }
        default:
            return state
    }
}