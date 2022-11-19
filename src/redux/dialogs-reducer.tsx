import {DialogsPageType} from "./store";
import {ActionType, ProfilePageType} from "./profile-reducer";


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
export const dialogsReducer = (state:DialogsPageType=initialState, action:ActionType): DialogsPageType => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        let statecopy={...state}
        statecopy.newMessageBody = action.newMessageBody
        return statecopy
    } else if (action.type === 'SEND-MESSAGE') {
        let statecopy={...state}
        statecopy.messages=[...state.messages]
        let body = statecopy.newMessageBody
        statecopy.newMessageBody = ''
        statecopy.messages.push({id: 7, message: body})
        return statecopy
    }


    return state
}