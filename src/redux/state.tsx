export type StoreType={
    _state:StateType
    changeNewText:(newText: string)=>void
    addPost:(postMessage: string)=>void
    onChange:(state: StateType)=>void
    subscribe:(callback:any)=>void
    getState:()=>StateType
}
export const store:StoreType={
    _state:  {
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
            ]
        }
    },
    changeNewText(newText: string){
        this._state.profilePage.message = newText
        this.onChange(store._state)
    },
    addPost(postMessage: string){
        debugger
        let newPost: PostType = {
            id: 3,
            message: postMessage,
            likes: 72
        }
        this._state.profilePage.posts.push(newPost)
        this.changeNewText('')
        this.onChange(this._state)

    },
    onChange(){
        console.log('State changed')
    },
    subscribe(callback: (state: StateType) => void){
        this.onChange = callback
    },
    getState(){
        return this._state
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


export type ProfileStateType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    message: string
    changeNewTextCallback: (newText: string) => void
}

export type ProfilePageType = {
    posts: Array<PostType>
    message: string


}
export type DialogsStateType = {
    dialogsPage: DialogsPageType
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType


}








