import {PostType} from "./store";
import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";
import {usersAPI} from "../api/api";


export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeTextActionType = ReturnType<typeof changeNewTextAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type ProfilePageType = {
    posts: Array<PostType>
    message: string
    profile:any

}
export type ActionType = AddPostActionType | ChangeTextActionType | AddNewMessageBodyType | AddSendMessageType | setUserProfileActionType


export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        message: postMessage
    } as const
}
export const setUserProfile = (profile:any) => {
    return {
        type: 'SET-USER-PROFILE',
profile
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        message: newText
    } as const
}

const initialState: ProfilePageType = {
    message: '',
    posts: [
        {id: 1, message: 'poka', likes: 2},
        {id: 2, message: 'privet', likes: 6}
    ],
    profile:null
}
export const getUserProfile=(userID:string)=>(dispatch:any)=>{
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 3,
                message: action.message,
                likes: 72
            }
            return {...state, posts: [...state.posts, newPost], message: ''}
        case 'UPDATE-NEW-POST-TEXT':


            return {...state, message: action.message}
        case "SET-USER-PROFILE":{
            return {...state,profile:action.profile}
        }

        default:
            return state
    }
}