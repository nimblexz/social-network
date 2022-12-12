import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";
import {AddPostActionType, ChangeTextActionType} from "./profile-reducer";

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersACActionType = ReturnType<typeof setUsersAC>
export type setTotalUsersACActionType = ReturnType<typeof setTotalUsersAC>
export type SetCurrentPageACActionType = ReturnType<typeof setCurrentPageAC>
export type ActionType =
    AddPostActionType
    | ChangeTextActionType
    | AddNewMessageBodyType
    | AddSendMessageType
    | FollowActionType
    | UnfollowActionType
    | SetUsersACActionType
    | SetCurrentPageACActionType
    | setTotalUsersACActionType


export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID: userID

    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage

    } as const
}
export const setTotalUsersAC = (totalcount:number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalcount: totalcount

    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID: userID

    } as const
}
export const setUsersAC = (Users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users: Users


    } as const
}
export type UsersType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    location?: { city: string, country: string }
    followed: boolean

}
export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state,totalUsersCount:action.totalcount}

        default:
            return state
    }
}