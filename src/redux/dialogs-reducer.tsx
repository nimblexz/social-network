import {ActionType} from "./profile-reducer";
import {DialogType} from "./store";
import {MessageType} from "../components/Dialogs/Dialogs";


export type AddSendMessageType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageBody:string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageBody
    } as const
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

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
    ]
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id: 7, message: body}]}
        default:
            return state
    }


}