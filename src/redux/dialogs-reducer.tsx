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
export const dialogsReducer = (state: DialogsPageType, action:ActionType): DialogsPageType => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.newMessageBody
    } else if (action.type === 'SEND-MESSAGE') {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 7, message: body})
    }


    return state
}