import {ActionType, AddPostActionType, ChangeTextActionType, profileReducer} from "./profile-reducer";
import {AddNewMessageBodyType, AddSendMessageType, dialogsReducer} from "./dialogs-reducer";

export type StoreType = {
    _state: StateType
    changeNewText: (newText: string) => void
    onChange: (state: StateType) => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action:ActionType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            message: '',
            posts: [
                {id: 1, message: 'poka', likes: 2},
                {id: 2, message: 'privet', likes: 6}
            ]

        },
        dialogsPage: {
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

    },
    changeNewText(newText: string) {
        this._state.profilePage.message = newText
        this.onChange(store._state)
    },
    onChange() {
        console.log('State changed')
    },
    subscribe(callback: (state: StateType) => void) {
        this.onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,  action )
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this.onChange(this._state)
    }
}


export type PostType = {
    id: number
    message: string
    likes: number
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}


export type ProfilePageType = {
    posts: Array<PostType>
    message: string


}
export type DialogsStateType = {
    dialogsPage: DialogsPageType
    _state: StateType
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}






