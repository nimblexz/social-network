export type StoreType={
    _state:StateType
    changeNewText:(newText: string)=>void
    onChange:(state: StateType)=>void
    subscribe:(callback:()=>void)=>void
    getState:()=>StateType
    dispatch:(action:AddPostActionType | ChangeTextActionType)=>void
}
export type AddPostActionType=ReturnType<typeof addPostAC>
export type ChangeTextActionType=ReturnType<typeof changeNewTextAC>

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
    onChange(){
        console.log('State changed')
    },
    subscribe(callback: (state: StateType) => void){
        this.onChange = callback
    },
    getState(){
        return this._state
    },
    dispatch(action){
        debugger
        if(action.type==='ADD-POST'){
            let newPost: PostType = {
                id: 3,
                message: action.postMessage,
                likes: 72
            }
            this._state.profilePage.posts.push(newPost)
            this.changeNewText('')
            this.onChange(this._state)
        }else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.message = action.newText
            this.onChange(this._state)
        }
    }
}

export const addPostAC=(postMessage:string)=>{
    return{
        type:'ADD-POST',
        postMessage:postMessage
    }as const
}
export const changeNewTextAC=(newText:string)=>{
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:newText
    }as const
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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType


}








