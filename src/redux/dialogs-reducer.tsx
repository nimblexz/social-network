import {DialogsPageType} from "./store";
import {ActionType} from "./profile-reducer";


export type AddNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export type AddSendMessageType = ReturnType<typeof sendMessageAC>
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageBody: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Ignat'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Dasha'},
        {id: 6, name: 'Victor '}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Privet'},
        {id: 3, message: 'Shalom'}
    ],
    newMessageBody: ''
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':

            return {...state, newMessageBody: action.newMessageBody}

        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            return {...state, messages: [...state.messages, {id: 7, message: body}], newMessageBody: ''}
        default:
            return state
    }


}