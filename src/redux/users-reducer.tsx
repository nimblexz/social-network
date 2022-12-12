import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";
import {AddPostActionType, ChangeTextActionType} from "./profile-reducer";

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersACActionType = ReturnType<typeof setUsers>
export type setTotalUsersACActionType = ReturnType<typeof setTotalUsersCount>
export type SetCurrentPageACActionType = ReturnType<typeof setCurrentPage>
export type ToggleIsFetchingACActionType = ReturnType<typeof SetIsFetching>
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
    | ToggleIsFetchingACActionType


export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID: userID

    } as const
}
export const SetIsFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching

    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage

    } as const
}
export const setTotalUsersCount = (totalcount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalcount: totalcount

    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID: userID

    } as const
}
export const setUsers = (Users: UsersType[]) => {
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
    isFetching: boolean
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, totalUsersCount: action.totalcount}
        case "TOGGLE-IS-FETCHING":
            return {...state,isFetching:action.isFetching}

        default:
            return state
    }
}