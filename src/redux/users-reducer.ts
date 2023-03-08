import {AddSendMessageType} from "./dialogs-reducer";
import {AddPostActionType, ChangeTextActionType} from "./profile-reducer";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";


export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersACActionType = ReturnType<typeof setUsers>
export type ToggleIsFollowingACActionType = ReturnType<typeof SetIsFollowing>
export type setTotalUsersACActionType = ReturnType<typeof setTotalUsersCount>
export type SetCurrentPageACActionType = ReturnType<typeof setCurrentPage>
export type ToggleIsFetchingACActionType = ReturnType<typeof SetIsFetching>
export type ActionType =
    AddPostActionType
    | ChangeTextActionType
    | AddSendMessageType
    | FollowActionType
    | UnfollowActionType
    | SetUsersACActionType
    | SetCurrentPageACActionType
    | setTotalUsersACActionType
    | ToggleIsFetchingACActionType
    | ToggleIsFollowingACActionType


export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID
    } as const
}
export const SetIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching

    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage

    } as const
}
export const setTotalUsersCount = (totalcount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalcount

    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID

    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const SetIsFollowing = (id: number, toggle: boolean) => {
    return {
        type: 'TOGGLE-FOLLOW',
        id,
        toggle
    } as const
}

export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(SetIsFetching(true))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(setCurrentPage(page))
    dispatch(SetIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch, id: number, apiMethod: any, actionCreator: any) => {
    dispatch(SetIsFollowing(id, true))
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(SetIsFollowing(id, false))
}
export const followed = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI)
    followUnfollowFlow(dispatch, id, apiMethod, follow)
}
export const unfollowed = (id: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    followUnfollowFlow(dispatch, id, apiMethod, unfollow)
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
    isFollowing: number[]
}
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userID,'id',{followed:true})
                /*users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)*/
            }
        case "UNFOLLOW":
            return {
                ...state,
                users:updateObjectInArray(state.users,action.userID,'id',{followed:false})
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalcount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-FOLLOW":
            return {
                ...state,
                isFollowing: action.toggle ? [...state.isFollowing, action.id] : state.isFollowing.filter(id => id !== action.id)
            }
        default:
            return state
    }
}