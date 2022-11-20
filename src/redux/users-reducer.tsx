import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";
import {AddPostActionType, ChangeTextActionType} from "./profile-reducer";

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersACActionType = ReturnType<typeof setUsersAC>
export type ActionType =
    AddPostActionType
    | ChangeTextActionType
    | AddNewMessageBodyType
    | AddSendMessageType
    | FollowActionType
    | UnfollowActionType
    | SetUsersACActionType


export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID: userID

    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID: userID

    } as const
}
export const setUsersAC = (Users:UsersType[]) => {
    return {
        type: 'SET-USERS',
        users:Users


    } as const
}
export type UsersType = {
    id: number
    fullName: string
    status: string
    location: { city: string, country: string }
    followed: boolean
    photourl:string
}
export type UsersPageType = {
    users: UsersType[]
}
const initialState: UsersPageType = {
    users: [

    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case "SET-USERS":

            return {...state,users:[...state.users,...action.users]}
        default:
            return state
    }
}