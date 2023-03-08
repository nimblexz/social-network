import {AddSendMessageType} from "./dialogs-reducer";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeTextActionType = ReturnType<typeof changeNewTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setUserStatusActionType = ReturnType<typeof setUserStatus>

export type PostType = {
    id: number
    message: string
    likes: number
}
export type ProfilePageType = {
    status: string;
    posts: Array<PostType>
    message: string
    profile: null | number

}
export type ActionType =
    AddPostActionType
    | ChangeTextActionType
    | AddSendMessageType
    | setUserProfileActionType
    | setUserStatusActionType


export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        status
    } as const
}


export const changeNewTextAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message
    } as const
}

const initialState: ProfilePageType = {
    message: '',
    posts: [
        {id: 1, message: 'poka', likes: 2},
        {id: 2, message: 'privet', likes: 6}
    ],
    profile: null,
    status: ''
}
export const getUserProfile = (userID: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userID: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userID)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likes: 72
            }
            return {...state, posts: [...state.posts, newPost], message: ''}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}