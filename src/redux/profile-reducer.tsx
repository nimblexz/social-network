import {PostType} from "./store";
import {AddNewMessageBodyType, AddSendMessageType} from "./dialogs-reducer";

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

export const profileReducer = (state:ProfilePageType,action:ActionType): ProfilePageType => {

    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: 3,
            message: action.message,
            likes: 72
        }
        state.posts.push(newPost)
        state.message = ''
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.message = action.message
    }

    return state
}