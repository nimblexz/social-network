import {PostType} from "./store";
import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";
import {AppStateType} from "./redux-store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeTextActionType = ReturnType<typeof changeNewTextAC>
export type ProfilePageType = {
    posts: Array<PostType>
    message: string

}
export type ActionType = AddPostActionType | ChangeTextActionType | AddNewMessageBodyType | AddSendMessageType


export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        message: postMessage
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
    ]
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

        default:
            return state
    }
}